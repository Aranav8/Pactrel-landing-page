import { Check, Paperclip } from "lucide-react";
import { cn } from "../lib/utils";

// Small, realistic UI scenes for the Problem cards. Decorative only: the card
// text carries the meaning, so each scene is hidden from screen readers.

function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full rounded-xl border border-white/[0.08] bg-[#121218]/95 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] text-left select-none",
        className
      )}
    >
      {children}
    </div>
  );
}

const threads = [
  { subject: "Proposal: Brand refresh", preview: "Attached is the proposal we discussed", time: "Oct 2", count: 1, attach: true },
  { subject: "Re: Re: Contract (final v3)", preview: "Can you resend? The signing link expired", time: "Oct 4", count: 4 },
  { subject: "Invoice #1042", preview: "Deposit is due before we kick off", time: "Oct 6", count: 2, attach: true },
  { subject: "Deposit reminder", preview: "Just a gentle nudge on the deposit", time: "Oct 11", count: 1 },
  { subject: "Following up", preview: "Hi Sam, circling back on this one", time: "Oct 17", count: 1, stale: true },
];

export function InboxVisual() {
  return (
    <Panel className="max-w-[520px]">
      <div className="flex items-center justify-between px-4 h-8 border-b border-white/[0.06]">
        <span className="text-[11px] font-medium text-white/70">Sam Rivera · Northwind Studio</span>
        <span className="text-[10px] text-white/35">5 threads · 9 emails</span>
      </div>
      <ul>
        {threads.map((t) => (
          <li
            key={t.subject}
            className={cn(
              "flex items-center gap-3 px-4 h-[30px] border-b border-white/[0.04] last:border-0 text-[11.5px]",
              t.stale && "bg-amber-400/[0.04]"
            )}
          >
            <span className="w-10 shrink-0 text-white/45">
              You{t.count > 1 && <span className="text-white/30"> {t.count}</span>}
            </span>
            <span className="min-w-0 flex-1 truncate">
              <span className="text-white/85 font-medium">{t.subject}</span>
              <span className="text-white/35"> · {t.preview}</span>
            </span>
            {t.attach && <Paperclip className="w-3 h-3 text-white/30 shrink-0" />}
            {t.stale ? (
              <span className="shrink-0 rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                No reply · 6 days
              </span>
            ) : (
              <span className="shrink-0 w-10 text-right text-[10.5px] text-white/35 tabular-nums">{t.time}</span>
            )}
          </li>
        ))}
      </ul>
    </Panel>
  );
}

const pings = [
  { text: "Any update on the homepage?", time: "Mon 9:12" },
  { text: "Just checking in 🙂", time: "Wed 16:40" },
  { text: "Hey, where are we on this?", time: "Fri 8:03", latest: true },
];

export function StatusThreadVisual() {
  return (
    <div aria-hidden className="w-full max-w-[360px] flex flex-col gap-1.5 select-none">
      {pings.map((p) => (
        <div key={p.time} className="flex items-center gap-2">
          <span className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-violet-400/80 to-blue-500/80 text-[9px] font-semibold text-white flex items-center justify-center">
            MR
          </span>
          <div
            className={cn(
              "rounded-2xl rounded-bl-md border px-3 py-1.5 text-[12px]",
              p.latest ? "bg-[#1d1d26] border-white/[0.12] text-white/90" : "bg-[#141419] border-white/[0.06] text-white/60"
            )}
          >
            {p.text}
          </div>
          <span className="text-[9.5px] text-white/30 tabular-nums whitespace-nowrap">{p.time}</span>
        </div>
      ))}
      <div className="self-end flex items-center gap-2">
        <span className="text-[10px] text-white/30">Your 3rd status update</span>
        <span className="flex gap-1 rounded-full bg-[#2563eb] px-3 py-2">
          {[0, 150, 300].map((d) => (
            <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce" style={{ animationDelay: `${d}ms` }} />
          ))}
        </span>
      </div>
    </div>
  );
}

const steps = [
  { label: "Sent", date: "Oct 2", done: true },
  { label: "Reminder", date: "Oct 9", done: true },
  { label: "Reminder", date: "Oct 14", done: true },
  { label: "Paid", date: "", done: false },
];

export function DepositVisual() {
  return (
    <Panel className="max-w-[380px] px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-white/45">Invoice #1042 · Deposit</span>
        <span className="rounded-full border border-red-400/20 bg-red-500/10 px-2 py-0.5 text-[10px] font-medium text-red-300">
          Overdue · 14 days
        </span>
      </div>
      <div className="mt-1 flex items-baseline justify-between gap-3">
        <span className="text-[24px] font-medium tracking-tight text-white tabular-nums">$1,500.00</span>
        <span className="text-[10.5px] text-white/35">Work started Oct 7</span>
      </div>

      <ol className="mt-3 grid grid-cols-4">
        {steps.map((s, i) => (
          <li key={i} className="relative flex flex-col items-center text-center">
            {i > 0 && (
              <span
                className={cn(
                  "absolute top-[9px] right-1/2 w-full border-t",
                  s.done ? "border-white/20" : "border-dashed border-white/15"
                )}
              />
            )}
            <span
              className={cn(
                "relative z-10 w-[18px] h-[18px] rounded-full flex items-center justify-center",
                s.done ? "bg-white/15 text-white/80" : "border border-dashed border-white/25 bg-[#121218]"
              )}
            >
              {s.done && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
            </span>
            <span className={cn("mt-1.5 text-[10.5px]", s.done ? "text-white/60" : "text-white/30")}>{s.label}</span>
            <span className="text-[9.5px] text-white/30 tabular-nums">{s.date || "—"}</span>
          </li>
        ))}
      </ol>
    </Panel>
  );
}

const charges = [
  { name: "Proposal software", amount: 32 },
  { name: "E-signature", amount: 25 },
  { name: "Invoicing", amount: 24 },
  { name: "Client portal", amount: 27, note: "+$10 for custom domain" },
];

export function SubscriptionsVisual() {
  const total = charges.reduce((sum, c) => sum + c.amount, 0);
  return (
    <Panel className="max-w-[460px]">
      <div className="flex items-center justify-between px-4 h-8 border-b border-white/[0.06]">
        <span className="text-[11px] font-medium text-white/70">Card ending 4242 · October</span>
        <span className="text-[10px] text-white/35">Recurring</span>
      </div>
      <ul className="px-4 py-1">
        {charges.map((c) => (
          <li key={c.name} className="flex items-center gap-3 h-6 text-[11.5px]">
            <span className="w-5 h-5 shrink-0 rounded-md border border-white/[0.08] bg-white/[0.04]" />
            <span className="flex-1 truncate text-white/75">
              {c.name}
              {c.note && <span className="text-white/30"> · {c.note}</span>}
            </span>
            <span className="text-white/60 tabular-nums">${c.amount}.00</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between px-4 h-8 border-t border-white/[0.06]">
        <span className="text-[11px] text-white/45">4 tools, none talk to each other</span>
        <span className="text-[13px] font-semibold text-white tabular-nums">${total}.00/mo</span>
      </div>
    </Panel>
  );
}
