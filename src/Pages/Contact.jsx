import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

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
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // left panel reveal
      gsap.from(leftRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
        },
      });

      // right info reveal with stagger
      gsap.from(rightRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
        },
      });

      // subtle parallax on carousel
      gsap.to(carouselRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-white font-sans overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Soft background shape */}
      <div className="absolute -left-40 -top-20 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-indigo-50 to-white opacity-60 pointer-events-none blur-3xl" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-5xl font-medium my-12 py-4 tracking-tight text-slate-900"
        >
          Creative Execution That{" "}
          <span className="text-indigo-600">Delivers Growth.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto"
        >
          Design, content, and campaigns crafted to elevate modern brands.
        </motion.p>
      </div>

      {/* Tilted Swiper Carousel */}
      <div ref={carouselRef} className="relative z-10 max-w-6xl mx-auto px-6 mt-12 mb-20">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          loop
          coverflowEffect={{
            rotate: 12,
            stretch: -20,
            depth: 140,
            modifier: 2.2,
            slideShadows: false,
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide
              key={i}
              className="w-[160px] md:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Contact Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Form */}
        <div
          ref={leftRef}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Send us a message</h3>
          <p className="text-slate-600 mt-2">
            Have a question or something to share? Send us a message. We’ll get back to you shortly!
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-slate-700">First Name</label>
              <input
                name="first"
                type="text"
                placeholder="John"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Last Name</label>
              <input
                name="last"
                type="text"
                placeholder="Doe"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                placeholder="hello@company.com"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="+91 9xxxxxxxxx"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-4 mt-2">
              <button
  type="button"
  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition"
  onClick={() => {
    const first = document.querySelector("input[name='first']").value;
    const last = document.querySelector("input[name='last']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const message = document.querySelector("textarea[name='message']").value;

    const subject = `New Project Inquiry from ${first} ${last}`;
    const body = `
Name: ${first} ${last}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    window.location.href = `mailto:sales@vbizgro.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }}
>
  <Send size={16} />
  Send Message
</button>


              <a
                href={`https://wa.me/919752505639?text=${encodeURIComponent("Hi VbizGro, I want to start a project")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
                aria-label="Start a project on WhatsApp"
              >
                Start on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </form>
        </div>

        {/* Right Info Panel */}
        <aside
          ref={rightRef}
          className="bg-indigo-50 text-slate-900 rounded-3xl p-8 md:p-10 shadow-lg"
        >
          <h3 className="text-2xl font-bold">Hi there!</h3>
          <p className="text-slate-700 mt-2">We’re always here and happy to help you anytime.</p>

          <div className="space-y-5 mt-8">
            <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex-none p-3 bg-indigo-600 rounded-lg text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="text-sm font-medium">sales@vbizgro.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex-none p-3 bg-indigo-600 rounded-lg text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-sm font-medium">+91 9752505639</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex-none p-3 bg-indigo-600 rounded-lg text-white">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Address</p>
                <p className="text-sm font-medium">Kesri Nagar, Seoni M.P. India</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`https://wa.me/919752505639?text=${encodeURIComponent("Hello! I would like to discuss a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow hover:opacity-95 transition"
                aria-label="Chat on WhatsApp"
              >
                <Phone size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
