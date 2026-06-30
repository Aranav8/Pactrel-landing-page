import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-full" />
          <h1 className="text-8xl md:text-[120px] font-bold tracking-tighter bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent relative z-10">
            404
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
          Page not found
        </h2>
        
        <p className="text-white/60 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors duration-200"
        >
          Return Home
        </a>
      </motion.div>
    </div>
  );
}
