import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGrid, FiLayers } from "react-icons/fi";

export default function TiltedArcShowcase() {
  const [isGrid, setIsGrid] = useState(false);

  const images = [
    "/images/work1.png",
    "/images/work2.png",
    "/images/ecoavenstalcd.png",
    "/images/work3.png",
    "/images/work5.png",
    "/images/work6.png",
    "/images/work7.png",
  ];

  const rotations = [-24, -8, -4, 0, 4, 18, 24];
  const offsets = [-180, -110, -55, 0, 55, 110, 180];
  const scales = [0.85, 0.9, 0.95, 1.15, 0.95, 0.9, 0.85];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden">
      {/* Centered icon toggle */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow">
        <button
          onClick={() => setIsGrid(false)}
          aria-pressed={!isGrid}
          aria-label="Arc view"
          className={`p-2 rounded-full transition ${
            !isGrid ? "bg-black text-white shadow-md" : "text-black/60 hover:text-black"
          }`}
        >
          <FiLayers size={18} />
        </button>

        <button
          onClick={() => setIsGrid(true)}
          aria-pressed={isGrid}
          aria-label="Grid view"
          className={`p-2 rounded-full transition ${
            isGrid ? "bg-black text-white shadow-md" : "text-black/60 hover:text-black"
          }`}
        >
          <FiGrid size={18} />
        </button>
      </div>

      {/* Showcase container centered */}
      <div className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center px-6">
        {!isGrid ? (
          /* ARC VIEW centered vertically and horizontally */
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: rotations[i],
                    x: offsets[i],
                  }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="absolute flex items-end justify-center"
                  style={{ zIndex: i === 3 ? 30 : 10 }}
                >
                  <div
                    className="relative rounded-2xl cursor-grab"
                    style={{
                      width: `${320 * scales[i]}px`,
                      height: `${420 * scales[i]}px`,
                      perspective: "1200px",
                    }}
                  >
                    <motion.div
                      drag
                      whileTap={{ cursor: "grabbing" }}
                      whileHover={{ scale: 1.02 }}
                      className="w-full h-full relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* FRONT */}
                      <div
                        className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <img
                          src={img}
                          alt={`work-${i}`}
                          className="w-full h-full object-cover select-none"
                          loading="lazy"
                        />
                      </div>

                      {/* BACK */}
                      <div
                        className="absolute inset-0 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-semibold"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        Details
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* GRID VIEW centered */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-3 gap-8 w-full max-w-5xl mx-auto"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                drag
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                whileHover={{ scale: 1.03, rotate: 1.5 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-grab"
              >
                <img src={img} alt={`grid-${i}`} className="w-full h-[220px] object-cover" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
