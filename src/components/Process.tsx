"use client";

import { Wheat, Package, Building2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const iconList = [Wheat, Package, Building2];
const stepStyles = [
  { bg: "bg-green-600" },
  { bg: "bg-amber-500" },
  { bg: "bg-blue-600" },
];
const stepNumbers = ["01", "02", "03"];

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #052e16 100%)" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold mb-5">
            {p.badge}
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {p.headline1}{" "}
            <span style={{ background: "linear-gradient(135deg, #86efac, #4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {p.headline2}
            </span>
            {p.headline3}
          </h2>
          <p className="text-green-200/70 text-lg leading-relaxed">{p.sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-green-500/30 via-amber-500/30 to-blue-500/30 z-0" />
          {p.steps.map((step, i) => {
            const Icon = iconList[i];
            const st = stepStyles[i];
            return (
              <div key={step.title} className="relative z-10">
                <div className="glass-dark rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-all duration-300 group border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${st.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-black text-white/10 select-none" style={{ fontFamily: "var(--font-playfair)" }}>
                      {stepNumbers[i]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-green-200/65 leading-relaxed mb-6 flex-1">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-green-300/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < p.steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <div className="w-px h-6 bg-gradient-to-b from-green-500/50 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
