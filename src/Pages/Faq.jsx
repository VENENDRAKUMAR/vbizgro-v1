// VBizGroFAQ.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Headline */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-3">
            FAQs
          </h2>
          <p className="text-gray-600 text-lg">
            Answers that help you move forward with clarity and confidence.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="rounded-xl border border-blue-300/50 bg-white hover:border-pink-100 transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,192,203,0.18), rgba(255,255,255,1))",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5"
                >
                  {/* Pixel Hover Text */}
                  <span className="text-lg font-medium text-gray-800 relative group">
                    {faq.q}

                    {/* Pixel highlight effect */}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-300/40 group-hover:animate-pulse"></span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-gray-700"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32 }}
                    >
                      <div className="px-6 pb-5 text-gray-700 text-[15px] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
