import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mr. Venendra",
    role: "Founder, Ecoavenstra Hr Infotech",
    text: "These guys took our brand to the next level! Their design precision and animation work made our website stand out globally.",
    size: "lg"
  },
  {
    name: "Mr. R.K. Thakur",
    role: "Engineer & Architect",
    text: "Their design clarity and execution helped us present our architectural vision with elegance.",
    size: "sm"
  },
  {
    name: "Mr. Rahul Shrivastava",
    role: "Manager",
    text: "Professional, responsive, and creative — they delivered exactly what our team needed.",
    size: "md"
  },
  {
    name: "Miss Swati",
    role: "Data Analyst",
    text: "Creative, committed, and detail-oriented. Their team helped us build a brand that truly connects with the audience.",
    size: "lg"
  },
  {
    name: "Mr. Anas Khan",
    role: "Manager",
    text: "Smooth collaboration and premium output — they understood our brand beyond expectations.",
    size: "md"
  },
  {
    name: "Mr. L Gautam",
    role: "Director",
    text: "Their strategic input and design quality helped us elevate our digital presence across all platforms.",
    size: "sm"
  }
];

export default function TestimonialsElite() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Parallax effect for the columns
    gsap.to(".testimonial-col-1", {
      y: -100,
      scrollTrigger: { scrub: true }
    });
    gsap.to(".testimonial-col-2", {
      y: 100,
      scrollTrigger: { scrub: true }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 bg-[#fdfcf9] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern Header */}
        <div className="mb-32 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            Social Proof & Trust
          </motion.span>
          <h2 className="text-6xl md:text-[9vw] font-medium tracking-tighter leading-[0.8] text-[#1a1a1a]">
            Voices of <br />
            <span className="italic font-serif text-slate-300 underline decoration-indigo-100">Dominance.</span>
          </h2>
        </div>

        {/* Bento Staggered Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Moves Up */}
          <div className="testimonial-col-1 space-y-8">
            {testimonials.filter((_, i) => i % 2 === 0).map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 lg:p-14 rounded-[50px] bg-[#f8f7f2] border border-[#e5e2d9] shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 group"
              >
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium tracking-tight text-slate-700 leading-relaxed mb-12">
                  "{t.text}"
                </p>
                <div className="flex flex-col">
                  <span className="text-black font-bold uppercase tracking-widest text-[10px]">{t.name}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-mono mt-1">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Moves Down */}
          <div className="testimonial-col-2 space-y-8 lg:mt-32">
            {testimonials.filter((_, i) => i % 2 !== 0).map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 lg:p-14 rounded-[50px] bg-white border border-[#e5e2d9] shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-1 mb-8 opacity-20 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-[1px] bg-black" />
                </div>
                <p className="text-xl md:text-2xl font-medium tracking-tight text-slate-700 leading-relaxed mb-12 italic font-serif">
                  "{t.text}"
                </p>
                <div className="flex flex-col">
                  <span className="text-black font-bold uppercase tracking-widest text-[10px]">{t.name}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-mono mt-1">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Global Stats Footer */}
        <div className="mt-40 pt-20 border-t border-[#e5e2d9] flex flex-wrap justify-between items-center gap-10">
          <div>
            <h4 className="text-4xl font-bold tracking-tighter">92% Retention</h4>
            <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mt-2">Client Loyalty Rate</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold tracking-tighter">50+ Brands</h4>
            <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mt-2">Engineered to Success</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl"
          >
            Become the next story →
          </motion.button>
        </div>
      </div>

      {/* Luxury Radial Gradient */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-50 blur-[120px] -z-10 opacity-60" />
    </section>
  );
}