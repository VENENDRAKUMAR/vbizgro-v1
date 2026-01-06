import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ContactUsSection() {
  const dragAreaRef = useRef(null); // to lock cards inside section

  return (
    <section
      ref={dragAreaRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f7f2ee] to-[#f1e4da] flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 overflow-hidden"
    >

      {/* LEFT SIDE — DRAGGABLE PREMIUM CARDS */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[420px] h-[480px] flex items-center justify-center">

          {[
            {
              title: "Strategy",
              gradient: "from-blue-300/40 to-purple-300/40",
              delay: 0,
              rotate: -14,
              y: 0
            },
            {
              title: "Creativity",
              gradient: "from-pink-300/40 to-red-300/40",
              delay: 0.2,
              rotate: 0,
              y: -20
            },
            {
              title: "Execution",
              gradient: "from-green-300/40 to-yellow-300/40",
              delay: 0.4,
              rotate: 14,
              y: 0
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={dragAreaRef}   // <-- IMPORTANT (locked inside section)
              dragElastic={0.12}
              dragMomentum={false}
              whileHover={{
                rotateX: 12,
                rotateY: -12,
                scale: 1.5,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: card.y,
                rotate: card.rotate,
                transition: { delay: card.delay, duration: 0.7 }
              }}
              className={`absolute w-[260px] h-[340px] rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/40 bg-gradient-to-br ${card.gradient} cursor-pointer`}
              style={{
                zIndex: i === 1 ? 50 : 20,
              }}
            >
              {/* DOT PATTERN */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff45_1px,transparent_1px)] bg-[length:22px_22px] opacity-30"></div>

              {/* CARD TITLE */}
              <div className="absolute bottom-6 left-6 text-xl font-semibold text-gray-800 drop-shadow-sm">
                {card.title}
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* RIGHT SIDE — GLASS FORM */}
      <div className="w-full md:w-1/2 max-w-md bg-white/60 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/40 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>

        <p className="text-sm text-gray-700 mb-6">
          We'd love to hear from you. Fill out the form and our team will reach out shortly.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-500 transition shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </div>    
    </section>
  );
}
