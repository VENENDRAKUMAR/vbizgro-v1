import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnalyticsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".bar", {
        width: 0,
        duration: 1.4,
        delay: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      });

      const counters = document.querySelectorAll(".count-number");
      counters.forEach((counter) => {
        const finalValue = +counter.getAttribute("data-value");

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: finalValue,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            onUpdate: function () {
              counter.innerText = Math.floor(this.targets()[0].innerText);
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center py-20 px-6 bg-gradient-to-br from-[#fffefc] via-[#fdf6ee] to-[#f5eadd]"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Our Performance Analytics
      </h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
        {[
          { label: "Successful Campaigns", value: 150 },
          { label: "Avg. Engagement Boost", value: 70 },
          { label: "Client Sales Growth", value: 40 },
          { label: "Repeat Clients", value: 90 },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-card p-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-white/30 text-center"
          >
            <h2
              className="text-4xl font-extrabold text-indigo-700 count-number"
              data-value={stat.value}
            >
              {stat.value}
            </h2>
            <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bar Graph */}
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30">
        <h3 className="text-xl font-semibold text-indigo-900 mb-6 text-center">
          Growth Overview
        </h3>

        <div className="flex flex-col gap-6">
          {[
            { label: "Engagement", value: "70%", color: "bg-indigo-500" },
            { label: "Sales Growth", value: "40%", color: "bg-purple-400" },
            { label: "Client Success", value: "90%", color: "bg-green-400" },
          ].map((bar, i) => (
            <div key={i}>
              <p className="text-gray-700 mb-1 text-sm">{bar.label}</p>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`bar h-full ${bar.color} rounded-full shadow-inner`}
                  style={{ width: bar.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
