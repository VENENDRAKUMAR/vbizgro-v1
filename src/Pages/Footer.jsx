import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const rootRef = useRef(null);
  const brandRef = useRef(null);
  const colRefs = useRef([]);
  const moreRef = useRef(null);
  const btnRef = useRef(null);
  const socialRefs = useRef([]);
  const revealRef = useRef(null);

  useEffect(() => {
    // Entrance reveal for footer block
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.06 }
      );

      gsap.from(colRefs.current, {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.12,
      });

      gsap.from(brandRef.current, {
        scale: 0.98,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        delay: 0.08,
      });

      gsap.set(socialRefs.current, { scale: 1 });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    const more = moreRef.current;
    if (!btn || !more) return;

    // Start hidden
    gsap.set(more, { height: 0, opacity: 0, display: "none", overflow: "hidden" });

    function toggle() {
      const isHidden = getComputedStyle(more).display === "none";

      if (isHidden) {
        gsap.set(more, { display: "block" });
        gsap.fromTo(
          more,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
            onComplete() {
              btn.textContent = "View Less";
              btn.setAttribute("aria-expanded", "true");
            },
          }
        );
      } else {
        gsap.to(more, {
          height: 0,
          opacity: 0,
          duration: 0.38,
          ease: "power3.in",
          onComplete() {
            gsap.set(more, { display: "none" });
            btn.textContent = "View More Services";
            btn.setAttribute("aria-expanded", "false");
          },
        });
      }
    }

    btn.addEventListener("click", toggle);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    return () => {
      btn.removeEventListener("click", toggle);
    };
  }, []);

  // social hover interactions
  function handleSocialEnter(i) {
    gsap.to(socialRefs.current[i], { scale: 1.08, y: -4, duration: 0.22, ease: "power2.out" });
  }
  function handleSocialLeave(i) {
    gsap.to(socialRefs.current[i], { scale: 1, y: 0, duration: 0.32, ease: "power3.out" });
  }

  return (
    <footer
      ref={rootRef}
      className="relative bg-white border-t border-gray-200 py-20 overflow-hidden font-sans"
      aria-labelledby="footer-heading"
    >
      {/* subtle patterned backdrop */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid.png')]"></div>
      </div>

      <div ref={revealRef} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-600 text-sm">
          {/* Brand */}
          <div ref={brandRef}>
          <img src="/logo.png" alt="" className="h-20 w-full item-center object-cover m" />
            <p className="mt-3 ml-12  text-gray-500 max-w-xs">
              Creative execution that delivers clarity, scale, and growth.
            </p>

            <div className="flex gap-3 mt-6 ml-12 ">
              <a
                href="https://instagram.com/vbizgro"
                target="_blank"
                rel="noreferrer"
                ref={(el) => (socialRefs.current[0] = el)}
                onMouseEnter={() => handleSocialEnter(0)}
                onMouseLeave={() => handleSocialLeave(0)}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition inline-flex items-center justify-center"
                aria-label="Instagram - VBizGro"
              >
                <Instagram size={18} className="text-gray-700" />
              </a>

              <a
                href="https://www.linkedin.com/company/vbizgro"
                target="_blank"
                rel="noreferrer"
                ref={(el) => (socialRefs.current[1] = el)}
                onMouseEnter={() => handleSocialEnter(1)}
                onMouseLeave={() => handleSocialLeave(1)}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition inline-flex items-center justify-center"
                aria-label="LinkedIn - VBizGro"
              >
                <Linkedin size={18} className="text-gray-700" />
              </a>

              <a
                href="https://www.facebook.com/people/Vbizgro/61581148455498/"
                target="_blank"
                rel="noreferrer"
                ref={(el) => (socialRefs.current[2] = el)}
                onMouseEnter={() => handleSocialEnter(2)}
                onMouseLeave={() => handleSocialLeave(2)}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition inline-flex items-center justify-center"
                aria-label="Facebook - VBizGro"
              >
                <Facebook size={18} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div ref={(el) => (colRefs.current[0] = el)}>
            <h3 className="uppercase tracking-widest text-black mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/pricing" className="hover:text-black transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-black transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div ref={(el) => (colRefs.current[1] = el)}>
            <h3 className="uppercase tracking-widest text-black mb-4 text-sm">Help Center</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-black transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div ref={(el) => (colRefs.current[2] = el)}>
            <h3 className="uppercase tracking-widest text-black mb-4 text-sm">Services</h3>

            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-black transition">
                  Instagram Management
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-black transition">
                  LinkedIn Content Writing
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-black transition">
                  Personal Branding
                </a>
              </li>

              {/* Hidden extra services (animated) */}
              <div ref={moreRef} className="mt-2">
                <li>
                  <a href="/services" className="hover:text-black transition">
                    Reels & Video Editing
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-black transition">
                    Carousel Design
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-black transition">
                    Social Media Strategy
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-black transition">
                    Profile Optimization
                  </a>
                </li>
              </div>
            </ul>

            <button
              ref={btnRef}
              id="viewMoreBtnf"
              className="mt-4 text-indigo-600 hover:text-black text-sm transition focus:outline-none"
              aria-expanded="false"
            >
              View More Services
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 border-t border-gray-200 mt-16 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} VBizGro — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
