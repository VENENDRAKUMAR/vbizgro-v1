import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Premium data
const serviceData = [
  {
    title: "Strategic Consulting & Research",
    description:
      "Deep audience research, competitive intelligence and strategic architecture. We build market-ready blueprints that give your brand leverage.",
    image:
      "/images/post1.png"
  },
  {
    title: "Post Design & Creative Campaigns",
    description:
      "High-converting creative systems. From social design to campaign funnels — crafted to drive attention and sustainable brand growth.",
    image:"/images/post8.png"
    ,
  },
  {
    title: "Brand Identity & Visual Systems",
    description:
      "Holistic identity systems with precision. Typography, motion rules, and a visual language that makes your brand instantly recognizable.",
    image:"/images/post6.png"
   
  },
  {
    title: "Content Creation & Storytelling",
    description:
      "Narrative-driven content crafted for modern platforms — production, scripting, editing and distribution that moves audiences.",
    image:
      "images/work3.png",
  },
];

export default function ServicesPremium() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const progressRef = useRef(null);
  const parallaxRefs = useRef([]);

  useEffect(() => {
    // Smooth scrolling
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Eyebrow / title / sub animations
    gsap.from(".services-eyebrow", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
    });

    gsap.from(".services-title", {
      opacity: 0,
      y: 14,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });

    gsap.from(".services-sub", {
      opacity: 0,
      y: 14,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
    });

    // Cards entrance
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });

    // Parallax for images
    parallaxRefs.current.forEach((img, i) => {
      gsap.to(img, {
        y: i % 2 === 0 ? -35 : -55,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Top progress bar
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#fafafb] text-[#0f172a] overflow-hidden"
    >
      {/* Background: premium smooth white + noise */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/30" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
            backgroundSize: "300px",
          }}
        />
        {/* Floating radial glow for hero feel */}
        <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-40 blur-3xl" />
      </div>

      {/* Sticky top progress */}
      <div className="sticky top-0 z-50 h-1 bg-transparent">
        <div
          ref={progressRef}
          className="origin-left h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* HERO INTRO BLOCK (Premium top feel) */}
        <div className="text-center  flex items-center flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-6xl lg:text-7xl font-medium text-center tracking-tight"
          >
            Services That Build <span className="text-indigo-600">Brand Power</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className=" text-2xl md:text-xl text-slate-600 max-w-3xl mx-auto py-12"
          >
            From strategy to storytelling — we craft every layer of your brand with precision,
            pride, and cinematic clarity.
            We dive deep into your vision, shape narratives that resonate, design experiences that stand out, and build digital identities that feel bold, modern, and unforgettable.
Every detail is intentional. Every decision is strategic. Every outcome is crafted to elevate your brand into a story the world remembers

          </motion.p>

      
        </div>

        {/* Original header */}
        <div className="text-center mb-24">
          <p className="services-eyebrow text-xs md:text-sm uppercase tracking-[6px] text-indigo-600 font-semibold">
            Our Signature Capabilities
          </p>

          <h2 className="services-title text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mt-3">
            Creative Execution That Delivers Growth.
          </h2>

          <p className="services-sub text-base md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Design, content, and campaigns crafted to elevate modern brands.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Services cards */}
        <div className="flex flex-col space-y-28">
          {serviceData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* IMAGE */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                }`}
              >
                <div className="group relative h-[420px] rounded-[32px] overflow-hidden bg-white border border-white/60 shadow-[0_12px_42px_rgba(0,0,0,0.08)]">
                  <img
                    ref={(el) => (parallaxRefs.current[index] = el)}
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Soft gloss */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/10 pointer-events-none" />
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="rounded-[28px] bg-white/90 backdrop-blur-xl border border-white/70 shadow-[0_10px_32px_rgba(0,0,0,0.06)] p-10"
                >
                  <span className="block text-xs md:text-sm uppercase tracking-[5px] text-indigo-600 font-semibold mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {/* <a
                      href="/work"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/70 bg-gradient-to-r from-white to-indigo-50 text-slate-900 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] transition"
                    >
                      Deep Dive →
                    </a> */}
               <a href="https://wa.me/919752505639?text=Hi%20I%20want%20to%20start%20a%20project%20with%20VbizGro"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white shadow-[0_8px_24px_rgba(99,102,241,0.25)] hover:bg-indigo-700 transition"
>
  Start a project
</a>

                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-14 text-center"
          >
            <h4 className="text-3xl font-bold">Built for Calm Confidence</h4>

            <p className="text-slate-700 mt-4 max-w-2xl mx-auto">
              Clean visuals. Measured motion. Zero clutter.
              A brand experience that feels premium — exactly how modern companies should show up.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="/process"
                className="px-5 py-2.5 rounded-full border border-white/70 bg-gradient-to-r from-white to-indigo-50 text-slate-900 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] transition"
              >
                Explore our methodology
              </a>

              <a
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-indigo-600 text-white shadow-[0_8px_24px_rgba(99,102,241,0.25)] hover:bg-indigo-700 transition"
              >
                Talk to us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
