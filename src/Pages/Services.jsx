import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceData = [
  {
    title: "Strategic Consulting",
    id: "01",
    tagline: "Market Dominance",
    description: "Blueprints for industry leaders. Competitive intelligence and strategic architecture.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Visual Identity",
    id: "02",
    tagline: "Iconic Recognition",
    description: "Typography, motion rules, and visual languages that define modern standards.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Growth Funnels",
    id: "03",
    tagline: "Revenue Engines",
    description: "High-converting digital ecosystems engineered for high-velocity scalability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
  },
  {
    title: "Content Production",
    id: "04",
    tagline: "Cinematic Narrative",
    description: "High-end content production designed to capture the attention of the elite.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function ServicesConglomerate() {
  const horizontalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".service-item");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#fdfcf9]">
      {/* 1. Introductory Header */}
      <section className="h-[70vh] flex flex-col items-center justify-center px-6 border-b border-black/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 block mb-8">System Services ©2026</span>
          <h2 className="text-[10vw] font-medium leading-[0.8] tracking-tighter uppercase italic">
            Architecting <br /> <span className="text-slate-300">New Reality</span>
          </h2>
        </motion.div>
      </section>

      {/* 2. Horizontal Luxury Slider */}
      <section ref={containerRef} className="relative h-screen overflow-hidden">
        <div ref={horizontalRef} className="flex h-full w-[400vw]">
          {serviceData.map((service, i) => (
            <div 
              key={i} 
              className="service-item relative w-screen h-full flex items-center justify-center px-10 md:px-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1600px] items-center gap-20">
                
                {/* Text Content: Large & Brutalist */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-4xl font-serif italic text-indigo-600 tracking-tighter">0{service.id}</span>
                    <div className="w-12 h-[1px] bg-black/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{service.tagline}</span>
                  </div>
                  
                  <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    {service.title.split(' ')[0]} <br />
                    <span className="font-light italic text-slate-400">{service.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  
                  <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md mb-12">
                    {service.description}
                  </p>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl"
                  >
                    Discuss Acquisition
                  </motion.button>
                </div>

                {/* Image Side: Deep Depth Parallax */}
                <div className="lg:col-span-7 relative h-[60vh] md:h-[70vh] group overflow-hidden rounded-[40px] shadow-2xl order-1 lg:order-2">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                  <motion.img 
                    src={service.image} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                    alt={service.title}
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-10 right-10 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
                    <p className="text-[10px] font-black uppercase tracking-widest">VBizGro Internal Logic</p>
                    <p className="text-[8px] opacity-60">Reserved for industry leaders</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Infinite Marquee Divider */}
      <div className="py-20 bg-black overflow-hidden whitespace-nowrap flex border-y border-white/10">
        {[1, 2, 3, 4].map((n) => (
          <motion.div 
            key={n}
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex items-center"
          >
             <span className="text-[8vw] font-black text-white uppercase italic tracking-tighter mx-10 opacity-20 hover:opacity-100 transition-opacity cursor-default">
               Build for Growth • Build for Growth • 
             </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}