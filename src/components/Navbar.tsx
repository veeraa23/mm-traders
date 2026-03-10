"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wheat, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/context/LanguageContext";

const navKeys = ["home", "about", "services", "process", "gallery", "contact"] as const;
const navHrefs = ["#home", "#about", "#services", "#process", "#gallery", "#contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "en" ? "ta" : "en");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-green-900/10 border-b border-green-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p
                className={cn(
                  "font-bold text-lg leading-tight transition-colors",
                  scrolled ? "text-green-900" : "text-white"
                )}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MM Traders
              </p>
              <p
                className={cn(
                  "text-xs leading-tight transition-colors",
                  scrolled ? "text-green-600" : "text-green-300"
                )}
              >
                {lang === "en" ? "Nathakottai, Ramnad" : "நாதக்கோட்டை, ராம்நாட்"}
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((key, i) => (
              <button
                key={key}
                onClick={() => handleNav(navHrefs[i])}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-600/20",
                  scrolled
                    ? "text-gray-700 hover:text-green-700"
                    : "text-white/90 hover:text-white"
                )}
              >
                {t.nav[key]}
              </button>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={cn(
                "ml-2 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200",
                scrolled
                  ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                  : "border-white/25 bg-white/10 text-white hover:bg-white/20"
              )}
              title={lang === "en" ? "Switch to Tamil" : "Switch to English"}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "en" ? "தமிழ்" : "English"}
            </button>

            <button
              onClick={() => handleNav("#contact")}
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg shadow-green-900/25 hover:scale-105"
            >
              {t.nav.cta}
            </button>
          </nav>

          {/* Mobile right side */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile language toggle */}
            <button
              onClick={toggleLang}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all",
                scrolled
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-white/25 bg-white/10 text-white"
              )}
            >
              <Globe className="w-3 h-3" />
              {lang === "en" ? "தமிழ்" : "EN"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/97 backdrop-blur-xl border-t border-green-100 px-4 pb-4 pt-2 shadow-xl">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => handleNav(navHrefs[i])}
              className="flex w-full text-left px-4 py-3 text-gray-700 font-medium hover:text-green-700 hover:bg-green-50 rounded-xl transition-colors"
            >
              {t.nav[key]}
            </button>
          ))}
          <button
            onClick={() => { handleNav("#contact"); setOpen(false); }}
            className="mt-3 w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
          >
            {t.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}
