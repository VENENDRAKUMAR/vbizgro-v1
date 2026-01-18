// VBizGroFAQ.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How is Vbizgro different from a regular content agency?",
    a: "We don’t just post — we build presence. Every reel, carousel, and caption is designed to spark engagement, build trust, and drive real business outcomes. Strategy meets storytelling here.",
  },
  {
    q: "Can you help me grow on Instagram without running ads?",
    a: "Absolutely. Our organic growth system uses reels, carousels, and niche targeting to help you gain followers, boost reach, and convert attention into action — no paid ads required.",
  },
  {
    q: "I’m not a creator or influencer. Is personal branding still relevant for me?",
    a: "Yes — especially if you’re a coach, founder, or professional. We turn your expertise into scroll-stopping content that builds authority and opens doors on LinkedIn, Instagram, and beyond.",
  },
  {
    q: "What does “full social media handling” actually include?",
    a: "From strategy to execution: we plan your content, design your posts, write captions, optimize your profiles, and manage your calendar. You focus on your business — we handle the brand.",
  },
  {
    q: "Do you offer one-time design help or only monthly packages?",
    a: "We offer both. Whether you need a one-off carousel, a LinkedIn makeover, or full monthly management, we tailor solutions to fit your goals and budget.",
  },
  {
    q: "How fast can I expect results?",
    a: "Most clients see engagement spikes within 2–4 weeks. But we focus on sustainable growth — building a brand that lasts, not just a moment that trends.",
  },
];

export default function VBizGroFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Modern Headline */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4 text-center md:text-left"
          >
            Got Questions?
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-black leading-none text-center md:text-left">
            ANSWERS <br />
            <span className="italic font-light text-slate-300">FOR THE CURIOUS.</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="group py-8 transition-all duration-500"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between text-left gap-8"
                >
                  {/* Number & Question */}
                  <div className="flex gap-6 md:gap-10">
                    <span className="text-[10px] font-black text-slate-300 mt-2">
                      0{i + 1}
                    </span>
                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-indigo-600" : "text-black group-hover:text-slate-500"}`}>
                      {faq.q}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mt-1 p-2 rounded-full transition-all duration-500 ${isOpen ? "bg-black text-white rotate-45" : "bg-slate-50 text-slate-400"}`}>
                    <Plus size={18} />
                  </div>
                </button>

                {/* Answer with Framer Motion */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-14 md:pl-20 pr-10 text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-10 bg-slate-50 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm font-bold text-black uppercase tracking-widest text-center md:text-left">
            Still have questions? <br />
            <span className="text-slate-400 font-medium normal-case">We’re here to help you 24/7.</span>
          </p>
          <a href="/contact" className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-indigo-600 transition-all active:scale-95">
            Get in touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}