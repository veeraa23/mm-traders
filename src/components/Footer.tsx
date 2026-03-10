"use client";

import { Wheat, MapPin, Phone, MessageCircle, Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const navKeys = ["home", "about", "services", "process", "gallery", "contact"] as const;
const navHrefs = ["#home", "#about", "#services", "#process", "#gallery", "#contact"];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                <Wheat className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>MM Traders</p>
                <p className="text-xs text-green-400">{f.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">{f.description}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                Nathakottai, Ramanathapuram (Ramnad), Tamil Nadu, India
              </div>
              <a href="tel:+919942519211" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                +91 99425 19211
              </a>
              <a href="https://wa.me/919942519211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors">
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">{f.quickLinks}</h4>
            <ul className="space-y-3">
              {navKeys.map((key, i) => (
                <li key={key}>
                  <button
                    onClick={() => handleNav(navHrefs[i])}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    {t.nav[key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">{f.ourServices}</h4>
            <ul className="space-y-3">
              {f.services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {f.copyright}
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            {f.madeWith} <Heart className="w-3 h-3 text-red-500 inline mx-1" /> {f.madeFor}
          </p>
        </div>
      </div>
    </footer>
  );
}
