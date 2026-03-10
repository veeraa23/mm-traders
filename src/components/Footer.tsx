"use client";

import { Wheat, MapPin, Phone, MessageCircle, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                <Wheat className="w-5 h-5 text-white" />
              </div>
              <div>
                <p
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  MM Traders
                </p>
                <p className="text-xs text-green-400">Paddy Procurement & Supply</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Connecting farmers, traders, and rice mills across South India
              through reliable paddy procurement and supply from Nathakottai,
              Ramanathapuram.
            </p>

            {/* Contact quick info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                Nathakottai, Ramanathapuram (Ramnad), Tamil Nadu, India
              </div>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                WhatsApp us anytime
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Paddy Procurement",
                "Bulk Supply to Rice Mills",
                "Trading & Logistics",
                "Farmer Network",
                "Quality Inspection",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} MM Traders, Nathakottai. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 inline" /> for the farmers of Ramnad
          </p>
        </div>
      </div>
    </footer>
  );
}
