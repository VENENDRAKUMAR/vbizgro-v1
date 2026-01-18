import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "MISS. SWATI",
    role: "UX Manager & Analyst",
    image: "https://media.istockphoto.com/id/2177184303/photo/white-man-programmer-or-it-specialist-software-developer-with-glasses-working-late-into-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLBlBQCGyuWBaJTbzG7bntaoYBB-GdTiI6z4Co5mjAg=",
  },
  {
    id: 2,
    name: "MR. VENENDRA",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "MR. RAHUL BARVE",
    role: "Lead Full-Stack Architect",
    image: "https://images.unsplash.com/photo-1602064172250-43f8909056c7?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "MR. ROHIT",
    role: "Business Success Manager",
    image: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?w=800&auto=format&fit=crop&q=80",
  },
];

export default function TeamSwiper() {
  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* Header Section - Modern Left Aligned */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-indigo-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6"
            >
              The Collective
            </motion.p>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-black leading-[0.85]">
              MINDS BEHIND <br />
              <span className="italic font-light text-slate-300 underline decoration-1 underline-offset-8">THE MAGIC.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-[320px] font-medium leading-relaxed uppercase tracking-widest pb-2">
            A specialized group of strategists and builders crafting digital dominance.
          </p>
        </div>

        {/* Full Screen Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Mousewheel]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            mousewheel={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1500: { slidesPerView: 4.2 },
            }}
            className="team-swiper !overflow-visible"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <motion.div 
                  whileHover={{ y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-slate-100"
                >
                  {/* Image with High-End Treatment */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Text Content - Positioned at Bottom */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {member.role}
                    </p>
                    <h3 className="text-white text-3xl font-bold tracking-tighter leading-none mb-4">
                      {member.name}
                    </h3>
                    
                    {/* Social Hover Effect */}
                    <div className="h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-700 delay-100" />
                    <div className="mt-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                       <span className="text-[9px] text-white/50 font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">LinkedIn</span>
                       <span className="text-[9px] text-white/50 font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Portfolio</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Glows */}
          <div className="absolute top-1/2 -left-20 w-64 h-64 bg-indigo-50/30 blur-[100px] rounded-full -z-10" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .team-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 60px !important;
          bottom: 0 !important;
        }
        .team-swiper .swiper-pagination-bullet {
          width: 40px;
          height: 2px;
          border-radius: 0;
          background: #e2e8f0;
          opacity: 1;
          transition: all 0.4s ease;
        }
        .team-swiper .swiper-pagination-bullet-active {
          background: #4f46e5;
          width: 80px;
        }
      `}} />
    </section>
  );
}