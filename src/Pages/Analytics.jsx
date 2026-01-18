import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AnalyticsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Heading & Cards
      gsap.from(".reveal-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
      });

      // 2. COUNTER EFFECT (Main Request)
      const counters = document.querySelectorAll(".count-number");
      counters.forEach((counter) => {
        const targetValue = +counter.getAttribute("data-value");

        gsap.to(counter, {
          scrollTrigger: {
            trigger: counter,
            start: "top 90%", // Jab number screen par aaye
            toggleActions: "play none none none",
          },
          innerText: targetValue,
          duration: 3,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            // Number formatting
            const val = Math.floor(this.targets()[0].innerText);
            counter.innerText = val + (targetValue > 100 ? "+" : "%");
          },
        });
      });

      // 3. BAR GROWTH on Scroll
      gsap.from(".scroll-bar", {
        scrollTrigger: {
          trigger: ".bar-container",
          start: "top 85%",
        },
        width: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    { label: "Successful Projects", value: 150, color: "text-indigo-600" },
    { label: "Client Satisfaction", value: 98, color: "text-blue-500" },
    { label: "Market Growth", value: 45, color: "text-purple-600" },
    { label: "Global Presence", value: 12, color: "text-black" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-6 bg-[#fff] overflow-hidden"
    >
      {/* Background Aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,1)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header */}
        <div className="mb-24 space-y-4">
          <p className="reveal-up text-[10px] font-black tracking-[0.4em] text-indigo-600 uppercase">
            Data-Driven Strategy
          </p>
          <h2 className="reveal-up text-6xl md:text-8xl font-medium tracking-tighter text-black leading-[0.85]">
            OUR IMPACT <br />
            <span className="italic font-light text-slate-300">IN NUMBERS.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          {data.map((item, i) => (
            <div key={i} className="reveal-up group">
              <div className="flex flex-col border-l border-slate-100 pl-8 transition-all duration-500 hover:border-indigo-600">
                <span 
                  className={`text-6xl md:text-7xl font-bold tracking-tighter mb-4 count-number ${item.color}`}
                  data-value={item.value}
                >
                  0
                </span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Dashboard Visualizer */}
        <div className="reveal-up bar-container w-full bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-8 uppercase italic text-black">
                Performance Velocity
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm">
                We don't just guess; we use precise data points to ensure your brand scales across all digital verticals.
              </p>
              
              <div className="space-y-8">
                {["Efficiency", "Retention", "Growth"].map((bar, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                      <span>{bar}</span>
                      <span>{idx === 0 ? "92%" : idx === 1 ? "85%" : "70%"}</span>
                    </div>
                    <div className="w-full h-1 bg-slate-200 rounded-full">
                      <div 
                        className="scroll-bar h-full bg-black rounded-full" 
                        style={{ width: idx === 0 ? "92%" : idx === 1 ? "85%" : "70%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Geometric Element */}
            <div className="relative aspect-square bg-white rounded-full border border-slate-100 flex items-center justify-center shadow-inner group overflow-hidden">
               <div className="absolute inset-0 bg-indigo-50/50 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
               <div className="relative text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Net Value</p>
                  <p className="text-8xl font-bold tracking-tighter text-black">10X</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Growth Index</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}