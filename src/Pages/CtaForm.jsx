import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

export default function ContactUsSection() {
  const dragAreaRef = useRef(null);

  const cards = [
    { title: "STRATEGY", desc: "The Roadmap", rotate: -12, x: -40, z: 10 },
    { title: "CREATIVITY", desc: "The Soul", rotate: 0, x: 0, z: 30 },
    { title: "EXECUTION", desc: "The Result", rotate: 12, x: 40, z: 20 },
  ];

  return (
    <section
      ref={dragAreaRef}
      className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center px-6 py-24 gap-20 overflow-hidden"
    >
      {/* BACKGROUND DECO */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-indigo-50 blur-[100px] rounded-full opacity-50" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-slate-50 blur-[120px] rounded-full opacity-50" />
      </div>

      {/* LEFT SIDE — KINETIC DRAGGABLE CARDS */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[500px]">
        <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={dragAreaRef}
              dragElastic={0.1}
              whileDrag={{ scale: 1.05, zIndex: 100 }}
              whileHover={{ y: -20, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, rotate: card.rotate, x: card.x }}
              whileInView={{ opacity: 1, transition: { delay: i * 0.2 } }}
              className="absolute w-[280px] h-[380px] rounded-[2.5rem] p-8 cursor-grab active:cursor-grabbing shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 bg-white/40 backdrop-blur-3xl overflow-hidden group"
              style={{ zIndex: card.z }}
            >
              {/* Card Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,#6366f10a_1px,transparent_1px)] bg-[length:20px_20px]" />
              
              <div className="relative h-full flex flex-col justify-between uppercase">
                <div>
                  <div className="w-10 h-1 rounded-full bg-slate-200 mb-6 group-hover:bg-indigo-600 transition-colors" />
                  <p className="text-[10px] font-black tracking-[0.3em] text-slate-400">{card.desc}</p>
                </div>
                <h3 className="text-3xl font-bold tracking-tighter text-black">
                  {card.title}
                </h3>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — ELITE FORM */}
      <div className="w-full lg:w-1/2 max-w-xl relative z-10">
        <div className="mb-12">
          <p className="text-indigo-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4">
            Contact Vbizgro
          </p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-black leading-none mb-6">
            HAVE AN <span className="italic font-light text-slate-300">IDEA?</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-tight">
            Tell us about your brand. Our experts will get back to you within 24 hours.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-indigo-600 focus:outline-none transition-all duration-300 text-sm font-bold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-indigo-600 focus:outline-none transition-all duration-300 text-sm font-bold"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Vision</label>
            <textarea
              rows="4"
              placeholder="Describe your goals..."
              className="px-6 py-4 rounded-3xl bg-slate-50 border border-transparent focus:bg-white focus:border-indigo-600 focus:outline-none transition-all duration-300 text-sm font-bold resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-fit px-12 py-5 bg-black text-white rounded-full flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-600 transition-all group"
            >
              Secure My Growth <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}