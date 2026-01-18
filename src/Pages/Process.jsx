import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const steps = [
  {
    step: "01",
    title: "STRATEGIC CALL",
    desc: "We perform a deep-dive audit with 50+ markers to map your brand's DNA and future goals.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/strategy%20call.jpg?updatedAt=1760603615165",
  },
  {
    step: "02",
    title: "PROFILE OPTIMIZATION",
    desc: "Refining every touchpoint of your digital presence to ensure consistent, high-ticket authority.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Instagram%20Tests%20New%20Profile%20Cards%20for%20Creators.jpg?updatedAt=1760603615236",
  },
  {
    step: "03",
    title: "CONTENT FUNNEL",
    desc: "Engineering scroll-stopping assets designed to move users from curiosity to conversion.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Funnel%20Content%20Strategy_%20TOFU,%20MOFU,%20BOFU%20Explained.jpg?updatedAt=1760603615499",
  },
  {
    step: "04",
    title: "CONTENT ROADMAP",
    desc: "A surgical 90-day execution plan that ensures your brand never loses momentum.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Content%20Roadmap.jpg?updatedAt=1760603615449",
  },
  {
    step: "05",
    title: "DESIGN APPROVAL",
    desc: "Meticulous aesthetic reviews to ensure every pixel aligns with your vision.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Screenshot%202025-10-12%20140908.png?updatedAt=1760603615509",
  },
  {
    step: "06",
    title: "ANALYTICS & ROI",
    desc: "Real-time data tracking and strategy refinement to maximize your growth velocity.",
    img: "https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/Screenshot%202025-10-12%20142657.png?updatedAt=1760603615933",
  },
];

export default function ProcessSlider() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[120px]" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-indigo-600 font-black tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            <Sparkles size={14} /> The Master Blueprint
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-black leading-[0.9]">
            OUR <span className="italic font-light text-slate-400">PROCESS</span>
          </h2>
        </div>
        <p className="text-slate-500 text-sm max-w-[300px] font-medium leading-relaxed uppercase tracking-wider">
          A systematic approach to transforming attention into measurable brand equity.
        </p>
      </div>

      {/* Modern Swiper Section */}
      <div className="relative z-10 px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={false}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3.2 },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="process-swiper !pb-20 !overflow-visible"
        >
          {steps.map((step, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -15 }}
                className="relative group bg-white border border-slate-100 rounded-[2rem] p-4 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
              >
                {/* Image Container */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-[1.5rem] mb-8 bg-slate-50">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Step Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-xs font-black tracking-widest text-black shadow-sm">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-bold tracking-tighter text-black mb-4 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-8 font-medium">
                    {step.desc}
                  </p>
                  
                  {/* Decorative Link Effect */}
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black group-hover:gap-4 transition-all">
                    Phase Details <ArrowRight size={14} className="text-indigo-600" />
                  </div>
                </div>

                {/* Vertical Line on Hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-indigo-600 group-hover:w-[80%] transition-all duration-500" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS for Swiper Customization (Bas ye add kar lena) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .process-swiper .swiper-pagination-bullet {
          background: #000 !important;
          width: 6px;
          height: 6px;
          opacity: 0.2;
        }
        .process-swiper .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 10px;
          opacity: 1;
          background: #4f46e5 !important;
        }
      `}} />
    </section>
  );
}