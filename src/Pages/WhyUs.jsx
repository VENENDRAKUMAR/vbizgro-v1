import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <main className="relative w-full overflow-hidden bg-[#f8fafc]">
      {/* Subtle grain overlay to avoid sterile white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative brand motif (low opacity) */}
      <img
       src="https://www.vbizgro.com/assets/logo-removebg-preview.png"
        alt="decorative"
        className="pointer-events-none absolute left-8 top-8 w-64 opacity-10 mix-blend-multiply select-none"
        aria-hidden="true"
      />

      {/* Section 1: Hero */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Heading + Overlaps */}
          <div className="md:col-span-7 relative">
            <motion.h2
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center font-light text-slate-900 leading-tight"
            >
              We Make a Difference
            </motion.h2>

            {/* Overlapping cards with milk gloss */}
            <div className="relative h-64 md:h-80 mt-6">
              {/* Card A */}
              <motion.div
                initial={{ scale: 0.96, rotate: -2, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="absolute left-0 top-6 w-48 md:w-56 h-48 md:h-56 rounded-2xl shadow-[0_8px_24px_rgba(99,102,241,0.08)] bg-white/80 border border-white/60 backdrop-blur-sm overflow-hidden"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.9) contrast(0.95) ",
                  }}
                />
                {/* Top glossy highlight */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/60 to-transparent" />
              </motion.div>

              {/* Card B */}
              <motion.div
                initial={{ y: 18, scale: 0.95, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="absolute left-20 md:left-28 top-20 md:top-24 w-56 md:w-64 h-56 md:h-64 rounded-2xl shadow-[0_12px_28px_rgba(168,85,247,0.1)] bg-white/80 border border-white/60 backdrop-blur-sm overflow-hidden"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('/images/post8.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.95) contrast(0.95)",
                  }}
                />
                {/* Sheen strip on hover */}
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileHover={{ x: 200, opacity: 0.25 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-white/0 via-white/60 to-white/0"
                />
              </motion.div>

              {/* Ambient glow */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 0.35 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute left-28 md:left-36 top-28 md:top-36 w-64 h-64 rounded-3xl blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-corner, rgba(139,92,246,0.18), transparent)",
                }}
              />
            </div>

            {/* Mission copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-8 text-sm md:text-base text-slate-700 max-w-xl"
            >
              We’re on a mission to empower businesses with design that speaks,
              marketing that performs, and stories that resonate. Every brand we
              work with is treated as a partner — because when you grow, we grow
              together.
            </motion.p>

            {/* CTA (pearl gradient) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-white to-indigo-50 text-slate-900 border border-white/70 shadow-[0_8px_24px_rgba(99,102,241,0.08)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] transition hover:-translate-y-0.5"
              >
                Work with Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Features (creamy surfaces) */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="rounded-xl p-6 bg-white/85 backdrop-blur-sm border border-white/60 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <ul className="space-y-4 text-sm md:text-base text-slate-800">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 border border-white/70 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h3v6H3a1 1 0 01-1-1v-4zM9 5v10H8a1 1 0 01-1-1V5h2zm8 0v10h-2V5h2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block">Strategic Growth</strong>
                    <p className="text-xs text-slate-600">
                      Data-led campaigns that scale & sustain growth.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 border border-white/70 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h3v6H3a1 1 0 01-1-1v-4zM9 5v10H8a1 1 0 01-1-1V5h2zm8 0v10h-2V5h2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block">Design that Converts</strong>
                    <p className="text-xs text-slate-600">
                      Beautiful UI/UX crafted for better conversion rates.
                    </p>
                  </div>
                </li>
                   <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 border border-white/70 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h3v6H3a1 1 0 01-1-1v-4zM9 5v10H8a1 1 0 01-1-1V5h2zm8 0v10h-2V5h2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block">Consitant Growth  </strong>
                    <p className="text-xs text-slate-600">
                     Crafting the consitant enatomy  for social growth and brand building.
                    </p>
                  </div>
                </li>

   <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 border border-white/70 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h3v6H3a1 1 0 01-1-1v-4zM9 5v10H8a1 1 0 01-1-1V5h2zm8 0v10h-2V5h2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block">Design & Develop scable system</strong>
                    <p className="text-xs text-slate-600">
                  A scalable system is built to grow smoothly with demand.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-50 border border-white/70 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h3v6H3a1 1 0 01-1-1v-4zM9 5v10H8a1 1 0 01-1-1V5h2zm8 0v10h-2V5h2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block">Transparent Reporting</strong>
                    <p className="text-xs text-slate-600">
                      Weekly insights and KPI-driven dashboards.
                    </p>
                  </div>
                </li>
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} className="mt-6">
                <a
                  href="/pricing"
                  className="text-indigo-700 font-medium underline underline-offset-4"
                >
                  See our plans →
                </a>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs text-slate-500"
            >
              Trusted by startups and enterprises — built to scale and delight.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 2: Calm CTA (luminous white) */}
      <section className="relative w-full py-24 bg-white">
        {/* Soft top highlight */}
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

        {/* Ambient blurs */}
        <motion.span
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 0.7, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18), transparent 60%)",
          }}
        />
        <motion.span
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 0.6, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.18), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Built for Calm Confidence
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto"
          >
            Clean visuals, measured motion, zero noise. A space where brand
            clarity meets steady momentum — designed to feel chill and premium.
          </motion.p>

          <motion.a
            href="/process"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-white to-indigo-50 text-slate-900 border border-white/70 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition"
          >
            Explore our methodology
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-80"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-1.414 1.414L14 8.414V17a1 1 0 11-2 0V8.414L9.414 11l-1.414-1.414 4.293-4.293z" />
            </svg>
          </motion.a>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 0.7 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 h-px bg-slate-300/50 rounded mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-xs text-slate-500"
          >
            Crafted with care by VBizGro — clarity, conversion, and calm.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
