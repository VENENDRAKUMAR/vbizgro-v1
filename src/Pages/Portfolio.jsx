import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    img: "/images/work1.png",
    category: "Strategy",
    title: "Campaign Architecture",
    desc: "Multi-channel systems engineered for exponential ROI.",
  },
  {
    img: "/images/work2.png",
    category: "Social",
    title: "The Velocity Growth",
    desc: "Organic scaling through narrative-driven reels.",
  },
  {
    img: "/images/work3.png",
    category: "Creative",
    title: "High-Octane Ads",
    desc: "Precision pixels designed to stop the scroll.",
  },
  {
    img: "/images/work4.png",
    category: "Branding",
    title: "Identity Systems",
    desc: "Visual languages that command global authority.",
  },
  {
    img: "/images/work5.png",
    category: "Performance",
    title: "Conversion Funnels",
    desc: "Seamless journeys from attention to action.",
  },
  {
    img: "/images/work6.png",
    category: "Analytics",
    title: "Precision Intelligence",
    desc: "Data-driven dashboards for real-time leverage.",
  },
];

export default function PortfolioElite() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Image Parallax Effect
    gsap.utils.toArray(".portfolio-image").forEach((img) => {
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          scrub: true,
        },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 bg-[#fdfcf9] overflow-hidden">
      {/* Background Texture & Ambient Glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-indigo-50/30 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section (Minimal & Heavy) */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
            >
              Selected Works
            </motion.span>
            <h2 className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.8] text-[#1a1a1a]">
              Crafting <br />
              <span className="italic font-serif text-slate-300">The Future.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm font-light leading-relaxed">
            Every project is a fusion of cinematic design and surgical strategy. We don't just create; we dominate.
          </p>
        </div>

        {/* Portfolio Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-none relative ${i % 2 !== 0 ? "md:mt-40" : ""}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[60px] bg-[#f0eee6]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="portfolio-image absolute inset-0 w-full h-full object-cover scale-125 transition-transform duration-700 group-hover:scale-[1.3]"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                      <span className="text-black font-black text-xs uppercase tracking-tighter">View</span>
                   </div>
                </div>
              </div>

              {/* Title Area */}
              <div className="mt-10 px-4">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base font-light max-w-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Massive Call to Action */}
        <div className="mt-60 text-center relative">
          <h4 className="text-[12vw] font-black tracking-tighter text-black/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none uppercase">
            Your Project
          </h4>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">
              Ready to start your <br /> <span className="italic font-serif text-indigo-600">Growth Engine?</span>
            </h3>
            <a 
              href="https://wa.me/919752505639"
              className="inline-flex items-center gap-6 px-12 py-6 bg-black text-white rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all duration-500 shadow-2xl"
            >
              Start Deployment
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}