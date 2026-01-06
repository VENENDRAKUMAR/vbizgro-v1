import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // optional, remove if not using react-router

export default function PageNotFound() {
  const navigate = typeof window !== "undefined" ? (() => {
    try {
      return useNavigate();
    } catch (e) {
      return null;
    }
  })() : null;

  const goHome = () => {
    if (navigate) navigate("/");
    else window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#07102a] to-[#031026] text-white flex items-center justify-center p-6">
      {/* twinkling background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -z-10 inset-0" />
        {/* stars */}
        <div className="w-full h-full">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {/*  subtle glows placed across the canvas */}
            <circle cx="10%" cy="20%" r="1" fill="white" opacity="0.06" />
            <circle cx="80%" cy="10%" r="1.4" fill="white" opacity="0.04" />
            <circle cx="50%" cy="8%" r="1.1" fill="white" opacity="0.05" />
            <circle cx="30%" cy="70%" r="1.2" fill="white" opacity="0.04" />
          </svg>
        </div>
      </div>

      <main className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white/5 backdrop-blur-md border border-white/8 rounded-3xl p-8 md:p-12 shadow-lg">
          {/* LEFT: Animated 404 badge */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2">
            <motion.div
              initial={{ y: -10, rotate: -6, scale: 0.95 }}
              animate={{ y: [ -10, 8, -6 ], rotate: [ -6, 6, -4 ], scale: [0.98, 1, 0.99] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="relative flex items-center justify-center w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
            >
              {/* floating rings */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl border border-white/10"
                animate={{ rotate: [0, 45, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ mixBlendMode: "overlay" }}
              />
              {/* 404 text */}
              <div className="text-center">
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight drop-shadow-lg"
                >
                  404
                </motion.h1>
                <motion.p
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="text-sm md:text-base opacity-90 mt-2"
                >
                  Page not found
                </motion.p>
              </div>

              {/* subtle floating sparkle */}
              <motion.div
                initial={{ opacity: 0.8, y: -30, x: 40 }}
                animate={{ opacity: [0.8, 0.2, 0.8], y: [-30, -10, -30], x: [40, 30, 40] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute w-3 h-3 bg-white rounded-full blur-sm"
              />
            </motion.div>
          </div>

          {/* RIGHT: Message + CTA */}
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Oops — we can’t find that page.
            </motion.h2>

            <motion.p
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-4 text-slate-200 leading-relaxed"
            >
              The link you followed may be broken, the page may have moved, or it might never have existed.
              If you landed here by mistake — no worries — we’ll get you back on track.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="mt-6 space-y-3 text-sm text-slate-300"
            >
              <li>• Check the URL for typos</li>
              <li>• Try going back to the homepage</li>
              <li>• Or contact us if you think something’s wrong</li>
            </motion.ul>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={goHome}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium shadow-lg"
              >
                Go to homepage
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <a
                href="/contact"
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-200 hover:bg-white/3 transition"
              >
                Contact support
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-xs text-slate-400"
            >
              <span>Pro tip: Press </span>
              <span className="px-2 py-1 ml-2 rounded-md bg-white/6 font-mono text-[11px]">Esc</span>
              <span className="mx-2">to close modals or</span>
              <span className="px-2 py-1 rounded-md bg-white/6 font-mono text-[11px]">⌘/Ctrl + K</span>
              <span className="ml-2">to search.</span>
            </motion.div>
          </div>
        </div>

        {/* small footer */}
        <div className="mt-6 text-center text-xs text-slate-500">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            © {new Date().getFullYear()} Codito — Crafted with care.
          </motion.span>
        </div>
      </main>
    </div>
  );
}
