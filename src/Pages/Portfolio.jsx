import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    img: "/images/work1.png",
    title: "Campaign Strategy",
    desc: "Crafted multi-channel campaigns with measurable ROI. We blended creativity with analytics to deliver campaigns that inspire and convert.",
  },
  {
    img: "/images/work2.png",
    title: "Instagram Growth",
    desc: "Scaled organic reach with reels and influencer collabs. Built community-driven engagement with modern storytelling.",
  },
  {
    img: "/images/work3.png",
    title: "Creative Ads",
    desc: "Designed high-converting ad creatives with A/B testing. Every pixel crafted to elevate brand presence.",
  },
  {
    img: "/images/work4.png",
    title: "Brand Storytelling",
    desc: "Narratives that build emotional connection with audiences. Turning ideas into stories that resonate deeply.",
  },
  {
    img: "/images/work5.png",
    title: "Content Funnel",
    desc: "Optimized funnel with blogs, newsletters, and lead magnets. Driving conversions through strategic content.",
  },
  {
    img: "/images/work6.png",
    title: "Analytics Dashboard",
    desc: "Custom dashboards tracking KPIs and campaign health. Empowering brands with actionable insights.",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative w-full bg-white text-[#0f172a] overflow-hidden py-32">
      {/* Decorative radial background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-12 transform -translate-x-1/2 w-[620px] h-[620px] rounded-full opacity-40 blur-3xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605726135442-468dd2b7eff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhcmRpbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-[#dbeafe] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl px-10 py-12 shadow-xl border border-white/60"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Creative Execution That Delivers Growth.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Design, content, and campaigns crafted to elevate modern brands with cinematic polish.
          </p>
          <div
            className="mt-6 h-1.5 w-40 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg,#2563eb,#7c3aed)",
            }}
          />
        </motion.div>

        {/* Portfolio grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-white/60 hover:scale-[1.02] transition-transform duration-500"
            >
              {/* image */}
              <div className="h-[420px] w-full overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* hover overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-base text-white leading-relaxed">{item.desc}</p>
                </div>
              </div>
              {/* title area */}
              <div className="p-8 bg-white/80">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-16 flex items-center justify-between text-sm text-slate-500"
        >
      
        </motion.div>
      </div>
    </section>
  );
}
