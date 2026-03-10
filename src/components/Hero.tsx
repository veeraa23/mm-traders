"use client";

import { Phone, ChevronDown, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {h.badge}
        </div>

        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {h.headline1}
          <span className="block text-gradient-gold mt-1">{h.headline2}</span>
          <span className="block text-white">{h.headline3}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #86efac, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {h.headline4}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          {h.sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-2xl shadow-green-900/40 hover:scale-105 text-lg"
          >
            <Phone className="w-5 h-5" />
            {h.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="flex items-center gap-2.5 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-lg hover:scale-105"
          >
            {h.cta2}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto mb-16">
          {[h.stat1, h.stat2, h.stat3].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-green-300" style={{ fontFamily: "var(--font-playfair)" }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
