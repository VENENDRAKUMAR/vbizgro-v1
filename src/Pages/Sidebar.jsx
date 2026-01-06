import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Instagram, Linkedin, Facebook, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const brandRef = useRef(null);
  const socialsRef = useRef(null);
  const ctaRef = useRef(null);
  const iconEls = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      tl.fromTo(sidebarRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 })
        .fromTo(brandRef.current, { y: 8, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6")
        .fromTo(socialsRef.current, { y: 8, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.55")
        .fromTo(ctaRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.4)" }, "-=0.45");

      // hover micro-interaction for social icons
      iconEls.current.forEach((el) => {
        if (!el) return;
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { y: -6, scale: 1.08, duration: 0.22, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { y: 0, scale: 1, duration: 0.32, ease: "power3.out" });
        });
      });
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  // 🔥 route change pe scroll reset
  useEffect(() => {
    gsap.to(window, { scrollTo: 0, duration: 0.6 });
  }, [location.pathname]);

  return (
    <aside
      ref={sidebarRef}
      aria-label="VBizGro sidebar"
      className="hidden md:flex fixed top-6 left-6 z-50
                 w-[96px] h-[calc(100vh-48px)] rounded-2xl
                 bg-gradient-to-b from-white/60 via-white/40 to-white/30
                 backdrop-blur-lg border border-white/30 shadow-lg
                 p-4 flex-col justify-between items-center select-none"
    >
      {/* gloss line */}
      <div className="absolute -left-[28px] top-6 h-1 w-28 rounded-full bg-gradient-to-r from-pink-400 via-indigo-600 to-lime-400 opacity-25 blur-sm pointer-events-none" />

      {/* Branding */}
      <div ref={brandRef} className="flex flex-col items-center gap-2 mt-2">
        <span className="text-[20px] font-semibold tracking-wide text-slate-800">Vbizgro</span>
        <span className="text-[12px] text-slate-500">Creative Studio</span>
      </div>

      {/* Socials */}
      <div ref={socialsRef} className="flex flex-col items-center gap-4">
        <span className="rotate-90 origin-center text-[10px] tracking-wider text-slate-500">FOLLOW</span>
        <div className="flex flex-col gap-3">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/vbizgro", label: "Instagram" },
            { Icon: Linkedin, href: "https://www.linkedin.com/company/vbizgro", label: "LinkedIn" },
            { Icon: Facebook, href: "https://www.facebook.com/people/Vbizgro/61581148455498", label: "Facebook" },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`VBizGro ${label}`}
              ref={(el) => (iconEls.current[i] = el)}
              className="w-10 h-10 flex items-center justify-center rounded-xl
                         bg-white/70 text-slate-800 border border-white/40
                         shadow-sm hover:scale-105 hover:bg-white transition transform"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* CTA → internal navigation */}
      <div ref={ctaRef} className="flex flex-col items-center gap-1">
        <Link
          to="/contact"
          aria-label="Start a project"
          className="w-14 h-14 rounded-xl flex items-center justify-center
                     bg-black text-white shadow-xl border border-white/30 hover:scale-105 transition-transform"
        >
          <Plus size={20} />
        </Link>
        <span className="text-[10px] text-slate-700">Start</span>
      </div>
    </aside>
  );
}
