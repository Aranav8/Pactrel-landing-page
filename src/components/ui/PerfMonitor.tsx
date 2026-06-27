import { useEffect, useRef, useState } from "react";

/**
 * Performance Monitor - Add this component temporarily to diagnose scroll lag.
 * It shows:
 * 1. Real-time FPS counter (green=good, yellow=okay, red=bad)
 * 2. Current section being scrolled through
 * 3. Console logs for long tasks (>50ms) that cause jank
 * 4. GPU memory usage if available
 * 
 * Remove this component once debugging is complete.
 */
export function PerfMonitor() {
  const [fps, setFps] = useState(60);
  const [section, setSection] = useState("");
  const [longTasks, setLongTasks] = useState(0);
  const [memoryMB, setMemoryMB] = useState(0);
  const frameTimesRef = useRef<number[]>([]);
  const lastFrameRef = useRef(performance.now());
  const longTaskCountRef = useRef(0);

  useEffect(() => {
    // === FPS Counter ===
    let rafId: number;
    const measureFps = () => {
      const now = performance.now();
      const delta = now - lastFrameRef.current;
      lastFrameRef.current = now;
      
      frameTimesRef.current.push(delta);
      if (frameTimesRef.current.length > 60) {
        frameTimesRef.current.shift();
      }
      
      // Update FPS display every 500ms to avoid re-render overhead
      if (frameTimesRef.current.length % 30 === 0) {
        const avg = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
        const currentFps = Math.round(1000 / avg);
        setFps(currentFps);
        
        // Memory check
        if ((performance as any).memory) {
          setMemoryMB(Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024));
        }
      }
      
      rafId = requestAnimationFrame(measureFps);
    };
    rafId = requestAnimationFrame(measureFps);

    // === Long Task Observer ===
    let longTaskObserver: PerformanceObserver | null = null;
    try {
      longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          longTaskCountRef.current++;
          setLongTasks(longTaskCountRef.current);
          
          // Log details to console
          console.warn(
            `🐌 LONG TASK detected: ${Math.round(entry.duration)}ms`,
            `| Total long tasks: ${longTaskCountRef.current}`,
            `| Scroll Y: ${Math.round(window.scrollY)}px`,
            entry
          );
        }
      });
      longTaskObserver.observe({ type: "longtask", buffered: true });
    } catch (e) {
      console.log("Long Task API not supported in this browser");
    }

    // === Section Detection ===
    const sectionNames = [
      "Hero", "Intro", "Problem", "FounderNote", "Features",
      "HowItWorks", "Benefits", "ComparisonTable", "FAQ", "Waitlist", "CTA"
    ];

    const handleScroll = () => {
      const sections = document.querySelectorAll("main > *");
      const scrollY = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollY >= top && scrollY <= bottom) {
          setSection(sectionNames[i] || `Section ${i}`);
        }
      });
    };

    // Throttle scroll detection to avoid adding to the problem
    let scrollThrottled = false;
    const throttledScroll = () => {
      if (scrollThrottled) return;
      scrollThrottled = true;
      requestAnimationFrame(() => {
        handleScroll();
        scrollThrottled = false;
      });
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial check

    // === Frame Drop Logger ===
    let prevTime = performance.now();
    let dropRafId: number;
    const detectDrops = () => {
      const now = performance.now();
      const frameDuration = now - prevTime;
      if (frameDuration > 50) { // More than 3 frames at 60fps
        console.error(
          `🔴 FRAME DROP: ${Math.round(frameDuration)}ms gap`,
          `| Section: ${section}`,
          `| Scroll Y: ${Math.round(window.scrollY)}px`
        );
      }
      prevTime = now;
      dropRafId = requestAnimationFrame(detectDrops);
    };
    dropRafId = requestAnimationFrame(detectDrops);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(dropRafId);
      longTaskObserver?.disconnect();
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const fpsColor = fps >= 50 ? "#22c55e" : fps >= 30 ? "#eab308" : "#ef4444";
  const fpsLabel = fps >= 50 ? "SMOOTH" : fps >= 30 ? "SLUGGISH" : "LAGGY";

  return (
    <div
      style={{
        position: "fixed",
        top: 12,
        right: 12,
        zIndex: 99999,
        background: "rgba(0,0,0,0.9)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 12,
        padding: "12px 16px",
        fontFamily: "monospace",
        fontSize: 12,
        color: "white",
        pointerEvents: "none",
        minWidth: 180,
        backdropFilter: "none", // Don't add to the problem!
      }}
    >
      <div style={{ marginBottom: 6, fontWeight: "bold", color: fpsColor, fontSize: 16 }}>
        {fps} FPS — {fpsLabel}
      </div>
      <div style={{ color: "#94a3b8", marginBottom: 3 }}>
        📍 Section: <span style={{ color: "#e2e8f0" }}>{section || "—"}</span>
      </div>
      <div style={{ color: "#94a3b8", marginBottom: 3 }}>
        🐌 Long tasks: <span style={{ color: longTasks > 0 ? "#ef4444" : "#22c55e" }}>{longTasks}</span>
      </div>
      {memoryMB > 0 && (
        <div style={{ color: "#94a3b8" }}>
          💾 JS Heap: <span style={{ color: "#e2e8f0" }}>{memoryMB} MB</span>
        </div>
      )}
      <div style={{ color: "#64748b", marginTop: 6, fontSize: 10 }}>
        Check DevTools Console for details
      </div>
    </div>
  );
}
