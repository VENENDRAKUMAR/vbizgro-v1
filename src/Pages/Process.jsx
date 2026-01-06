import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const steps = [
  {
    title: "Strategic Call",
    desc: "We ask 50–60 deep-dive questions to map your goals.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/strategy%20call.jpg?updatedAt=1760603615165",
  },
  {
    title: "Profile Optimization",
    desc: "We refine your presence to make communication consistent.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Instagram%20Tests%20New%20Profile%20Cards%20for%20Creators.jpg?updatedAt=1760603615236",
  },
  {
    title: "Content Funnel",
    desc: "We craft scroll-stopping content that converts attention.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Funnel%20Content%20Strategy_%20TOFU,%20MOFU,%20BOFU%20Explained.jpg?updatedAt=1760603615499",
  },
  {
    title: "Content Roadmap",
    desc: "We plan a timeline to ensure continuous brand growth.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Content%20Roadmap.jpg?updatedAt=1760603615449",
  },
  {
    title: "Design Approval",
    desc: "You approve designs reflecting your brand voice.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Screenshot%202025-10-12%20140908.png?updatedAt=1760603615509",
  },
  {
    title: "Analytics & Reporting",
    desc: "We track performance and refine strategy.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Screenshot%202025-10-12%20142657.png?updatedAt=1760603615933",
  },
];

export default function ProcessSlider() {
  return (
    <section className="relative w-full py-28 bg-[#fcfcfd] text-[#0f172a] font-[EXO] overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Our <span className="text-indigo-600">Process</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Every step is designed to build clarity, consistency, and conversion.
        </p>
        <div className="mt-6 h-[3px] w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Swiper Slider */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {steps.map((step, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md border border-white/60 bg-white transition-transform duration-300 hover:scale-[1.02] min-h-[480px] flex flex-col"
              >
                {/* Image */}
                <div className="h-64 w-full overflow-hidden relative">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
