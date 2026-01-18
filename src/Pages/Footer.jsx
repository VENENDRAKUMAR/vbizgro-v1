import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const rootRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big Text Parallax or reveal
      gsap.from(".footer-big-text", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 90%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={rootRef}
      className="relative bg-white pt-32 pb-10 overflow-hidden"
    >
      {/* 1. LARGE MAGNETIC CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="footer-big-text">
            <p className="text-indigo-600 font-black tracking-[0.4em] text-[10px] uppercase mb-6">
              Ready to dominate?
            </p>
            <h2 className="text-7xl md:text-[10vw] font-medium tracking-tighter text-black leading-[0.85]">
              LET'S <span className="italic font-light text-slate-300">TALK.</span>
            </h2>
          </div>
          <a 
            href="/contact" 
            className="group relative w-32 h-32 md:w-44 md:h-44 bg-black rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 duration-500"
          >
            <div className="absolute inset-0 bg-indigo-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            <ArrowUpRight className="relative z-10 text-white w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-20 border-t border-slate-100 pt-20">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-[10px] font-black">VB</span>
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-black">Vbizgro</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
              Engineering digital authority for founders and brands that refuse to be average.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { icon: <Instagram size={18} />, link: "https://instagram.com/vbizgro" },
                { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/vbizgro" },
                { icon: <Facebook size={18} />, link: "https://facebook.com/vbizgro" }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white hover:border-black transition-all duration-500">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Our Work', 'Expertise', 'The Agency', 'Pricing', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-indigo-600 group-hover:w-4 transition-all" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Condensed) */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Offerings</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li className="hover:text-black transition-colors">Content Strategy</li>
              <li className="hover:text-black transition-colors">Personal Branding</li>
              <li className="hover:text-black transition-colors">Ghostwriting</li>
              <li className="hover:text-black transition-colors">Visual Design</li>
              <li className="hover:text-black transition-colors">Ads Management</li>
            </ul>
          </div>

          {/* Location / Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Headquarters</h4>
            <div className="space-y-6">
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                Kesri Nagar, Seoni<br />
                Madhya Pradesh, India
              </p>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Inquiries</p>
                <a href="mailto:sales@vbizgro.com" className="text-lg font-bold text-black border-b border-black/10 hover:border-black transition-all">sales@vbizgro.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-50 gap-4">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} VBIZGRO STRATEGY HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </footer>
  );
}