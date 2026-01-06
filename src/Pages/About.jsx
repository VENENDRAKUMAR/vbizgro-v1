import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * VBizGroAboutFinal.jsx
 * - Combined: Original premium About content + RandomUser API team
 * - Decorative background uses uploaded file at:
 *   /mnt/data/7d5f252c-3065-4a4b-9217-a5f99ca21e10.png
 *
 * Tailwind CSS classes assumed.
 */

export default function VBizGroAboutFinal() {
  const [guests, setGuests] = useState([]);
  const staticTeam = [
    { name: "Mr. Venendra", role: "Founder & Creative Lead", img: "/images/work1.png" },
    { name: "Dk singh ", role: "Product Designer", img: "/images/work2.png" },
    { name: "Rob West", role: "Strategy Lead", img: "/images/work3.png" },
    { name: "Dora Ty", role: "Creative Director", img: "/images/work4.png" },
  ];

  useEffect(() => {
    // Fetch 4 random guest/collaborator profiles
    fetch("https://randomuser.me/api/?results=4&inc=name,picture")
      .then((r) => r.json())
      .then((data) => {
        const formatted = data.results.map((u) => ({
          name: `${u.name.first} ${u.name.last}`,
          role: "Guest Collaborator",
          img: u.picture.large,
        }));
        setGuests(formatted);
      })
      .catch(() => {
        // fallback: keep guests empty silently
        setGuests([]);
      });
  }, []);

  return (
    <section className="min-h-screen bg-[#fbfbfd] text-[#0f172a] py-4 mt-24 px-6">
      <div className="mx-auto w-full max-w-7xl py-12">

        {/* Decorative combined radial using uploaded file */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center"
          style={{ transform: "translateZ(0)" }}
        >
          <div
            className="w-[520px] h-[520px] rounded-full opacity-40 blur-2xl"
            style={{
              backgroundImage:
                "url('/mnt/data/7d5f252c-3065-4a4b-9217-a5f99ca21e10.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-indigo-100 via-pink-50 to-blue-100 text-black p-12 shadow-[0_24px_64px_rgba(79,70,229,0.12)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Creative Execution That Delivers Growth.
                </h1>
                <p className="mt-4 text-slate-700 text-lg max-w-xl leading-relaxed">
                  Design, content, and campaigns crafted to elevate modern brands.
                </p>
              </div>

              <div className="hidden md:block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-sm font-medium">
                  ❤️ Trusted by 50+ Brands
                </span>
              </div>
            </div>

            {/* Quick chips */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-sm font-semibold">Services</div>
                <div className="text-xs opacity-90">Social • Ads • Branding</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-sm font-semibold">Focus</div>
                <div className="text-xs opacity-90">ROI • Growth • Impact</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-sm font-semibold">Approach</div>
                <div className="text-xs opacity-90">Clarity • Craft • Consistency</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow hover:bg-indigo-50 transition"
              >
                Work with us
              </a>
              <a
                href="/work"
                className="px-6 py-3 bg-white border border-white/30  rounded-full font-semibold hover:bg-white/15 transition"
              >
                View our work
              </a>
            </div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-white shadow-[0_18px_52px_rgba(15,23,42,0.08)] border border-white/70"
          >
            <div className="relative h-[420px] w-full">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="VBizGro studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md px-3 py-2 rounded-full text-xs font-medium shadow">
                Studio • Strategy • Story
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="flex">
              <div className="w-20 bg-indigo-50 flex items-center justify-center">
                <span className="rotate-[-90deg] text-sm md:text-base font-semibold tracking-wide text-indigo-700">
                  About us
                </span>
              </div>
              <div className="flex-1 p-10 text-slate-700 leading-relaxed">
                <p className="mb-4">
                  <strong>VBizGro</strong> is a next-gen digital and social media marketing studio. We pair strategic thinking with design craft to build brands that feel premium and perform.
                </p>
                <p className="mb-4">
                  From high-performing campaigns to luminous UI and storytelling that converts — we design systems your audience can trust and your team can scale.
                </p>
                <p className="mb-4">
                  Services: <span className="font-semibold">Social Media</span>, <span className="font-semibold">Paid Ads</span>, <span className="font-semibold">Branding</span>, <span className="font-semibold">Web</span>, <span className="font-semibold">SEO & Performance</span>, <span className="font-semibold">Automation</span>.
                </p>
                <p>
                  Transparent communication, modern design, and a growth-first approach. <br />
                  <strong>Let’s grow smarter. Let’s grow VBizGro.</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Projects Delivered", value: "120+" },
            { label: "Campaign ROI", value: "3.8x" },
            { label: "Client Retention", value: "92%" },
            { label: "Avg. SLA", value: "48h" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] border border-white/70 text-center"
            >
              <div className="text-3xl font-extrabold text-indigo-700">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Clarity over noise",
                desc: "We remove clutter so the message lands clean, honest, and memorable.",
              },
              {
                title: "Craft over hacks",
                desc: "We prefer durable systems and design craft to short-term tricks.",
              },
              {
                title: "Consistency wins",
                desc: "Steady execution beats sporadic bursts. We build repeatable momentum.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] border border-white/70"
              >
                <div className="text-lg font-semibold">{v.title}</div>
                <p className="mt-2 text-slate-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What we deliver */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">What we deliver</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Creative systems",
                desc: "Reusable components for social, ads, and landing pages — built to scale.",
              },
              {
                title: "Premium visuals",
                desc: "Luminous, milk-white themes with ambient shadows and cinematic motion.",
              },
              {
                title: "Growth funnels",
                desc: "Conversion-focused journeys with analytics and insights baked in.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] border border-white/70"
              >
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Combined Team: Core Team + Guests */}
     

        {/* Closing CTA */}
        <div className="rounded-3xl bg-white shadow-[0_18px_52px_rgba(15,23,42,0.08)] border border-white/70 p-10 text-center">
          <h4 className="text-2xl md:text-3xl font-bold">Built for calm confidence</h4>
          <p className="text-slate-700 mt-3 max-w-2xl mx-auto">
            Clean visuals. Measured motion. Zero clutter. If you want premium brand presence with systems that scale, we’re your team.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/services"
              className="px-6 py-3 rounded-full border border-slate-200 bg-white text-[#0f172a] shadow hover:bg-slate-50 transition"
            >
              Explore services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
            >
              Start a project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
