"use client";

import { ArrowRight, Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Animated green glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Nathakottai, Ramanathapuram · Tamil Nadu
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Trusted Paddy
          <span className="block text-gradient-gold mt-1">Procurement &</span>
          <span className="block text-white">Supply Across</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #86efac, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            South India
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          MM Traders connects farmers, traders, and rice mills by sourcing
          high-quality paddy and delivering it efficiently across South India
          with fair pricing and reliable supply.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-2xl shadow-green-900/40 hover:shadow-green-900/60 hover:scale-105 text-lg"
          >
            <Phone className="w-5 h-5" />
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="flex items-center gap-2.5 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-lg hover:scale-105"
          >
            Our Services
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto mb-16">
          {[
            { value: "500+", label: "Farmers Network" },
            { value: "50+", label: "Rice Mills Served" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-green-300" style={{ fontFamily: "var(--font-playfair)" }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
