import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mr.Venendra",
    role: "Founder, Ecoavenstra Hr Infotech Pvt Ltd.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "These guys took our brand to the next level! Their design precision and animation work made our website stand out globally.",
  },
  {
    name: "Mr. R.K. Thakur",
    role: "Engineer & Architect",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    text: "Their design clarity and execution helped us present our architectural vision with elegance and precision.",
  },
  {
    name: "Mr. Rahul Shrivastava",
    role: "Manager",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
    text: "Professional, responsive, and creative — they delivered exactly what our team needed, on time.",
  },
  {
    name: "Mr. Ramdas",
    role: "Founder",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "From branding to execution, they handled everything with finesse. A true partner in growth.",
  },
  {
    name: "Mr. L Gautam",
    role: "Director",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    text: "Their strategic input and design quality helped us elevate our digital presence across platforms.",
  },
  {
    name: "Mr. Anas Khan",
    role: "Manager",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Smooth collaboration and premium output — they understood our brand and delivered beyond expectations.",
  },
  {
    name: "Miss Swati",
    role: "Data Analyst, Ecoavenstra Hr Infotech Pvt Ltd",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "Creative, committed, and detail-oriented. Their team helped us build a brand that truly connects.",
  },
];

export default function TestimonialsTopNotch() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full py-28 bg-[#fcfcfd] text-[#0f172a] font-[EXO] overflow-hidden">
      {/* Ambient background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 pointer-events-none" />

      {/* Section Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Voices of <span className="text-indigo-600">Trust</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Real words from real leaders. Every testimonial reflects the pride, clarity, and growth we deliver.
        </p>
        <div className="mt-6 h-[3px] w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            ref={(el) => (cardRefs.current[i] = el)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md border border-white/60 bg-white"
          >
            {/* Gradient Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-100 via-white to-purple-100">
              <div className="flex items-center gap-4">
                {/* <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-indigo-200"
                /> */}
                <div>
                  <h4 className="text-md font-bold text-[#0f172a]">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6">
              <p className="text-sm text-slate-700 leading-relaxed italic">
                “{t.text.replace(/“|”/g, "")}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
