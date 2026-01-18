import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { img: "/images/work1.png", title: "Campaign Strategy" },
  { img: "/images/work2.png", title: "Instagram Growth" },
  { img: "/images/work3.png", title: "Creative Ads" },
  { img: "/images/work4.png", title: "Brand Storytelling" },
  { img: "/images/work5.png", title: "Design Showcase" },
];

export default function FullContactSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Main Entrance
      gsap.from(".reveal-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Parallax on Floating Shapes
      gsap.to(".bg-shape", {
        y: -100,
        rotate: 15,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const sendEmail = () => {
    const first = document.querySelector("input[name='first']").value;
    const last = document.querySelector("input[name='last']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const message = document.querySelector("textarea[name='message']").value;

    const subject = `Inquiry: ${first} ${last} - Project Deployment`;
    const body = `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    window.location.href = `mailto:sales@vbizgro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 bg-[#fafafa] font-sans overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="bg-shape absolute -left-20 top-20 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="bg-shape absolute -right-20 bottom-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header - Center Aligned Minimalist */}
        <div className="text-center mb-24 reveal-up">
          <span className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-tight text-slate-900">
            Let's build your <br />
            <span className="italic font-serif text-slate-400">Digital Legacy.</span>
          </h2>
        </div>

        {/* Cinematic Carousel */}
        <div className="mb-32 reveal-up">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            slidesPerView={"auto"}
            loop
            autoplay={{ delay: 3000 }}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            className="w-full py-10"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} className="max-w-[400px] group">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h3 className="text-white font-bold text-xl">{card.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form - Left (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] reveal-up">
            <h3 className="text-3xl font-bold mb-10 tracking-tight">Tell us about your brand.</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">First Name</label>
                  <input name="first" type="text" placeholder="e.g. Rahul" className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email</label>
                  <input name="email" type="email" placeholder="name@company.com" className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea name="message" rows="4" placeholder="How can we help you grow?" className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none" />
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={sendEmail}
                  className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-indigo-600 transition-all shadow-xl"
                >
                  <Send size={14} /> Send Inquiry
                </button>
                <a
                  href="https://wa.me/919752505639"
                  className="flex items-center gap-3 border border-black px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Info - Right (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 reveal-up">
            {/* Direct Contact Card */}
            <div className="bg-indigo-600 text-white rounded-[40px] p-10 flex flex-col justify-between min-h-[300px] shadow-xl">
               <h4 className="text-2xl font-bold tracking-tight">Need a quick <br /> consultation?</h4>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all"><Phone size={18} /></div>
                    <p className="font-bold">+91 9752505639</p>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all"><Mail size={18} /></div>
                    <p className="font-bold">sales@vbizgro.com</p>
                  </div>
               </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[250px]">
               <div>
                 <MapPin className="text-indigo-600 mb-4" size={24} />
                 <h4 className="text-lg font-bold">Studio HQ</h4>
                 <p className="text-slate-500 text-sm mt-2 leading-relaxed italic">Kesri Nagar, Seoni <br /> Madhya Pradesh, India 480661</p>
               </div>
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Active Globally
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}