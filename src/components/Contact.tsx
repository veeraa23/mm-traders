"use client";

import { Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const contactIcons = [Phone, MessageCircle, MapPin, Clock];
const contactStyles = [
  { color: "text-green-600", bg: "bg-green-100", href: "tel:+919942519211" },
  { color: "text-emerald-600", bg: "bg-emerald-100", href: "https://wa.me/919942519211?text=Hello%20MM%20Traders%2C%20I%20am%20interested%20in%20your%20services." },
  { color: "text-red-600", bg: "bg-red-100", href: "https://maps.google.com/?q=Nathakottai,Ramanathapuram,Tamil+Nadu" },
  { color: "text-amber-600", bg: "bg-amber-100", href: null },
];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
            {c.badge}
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {c.headline1}{" "}
            <span className="text-gradient">{c.headline2}</span>{" "}
            {c.headline3}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{c.sub}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {c.items.map((item, i) => {
              const Icon = contactIcons[i];
              const st = contactStyles[i];
              return (
                <div key={item.label} className="group">
                  {st.href ? (
                    <a
                      href={st.href}
                      target={st.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 card-hover transition-all block"
                    >
                      <div className={`w-12 h-12 ${st.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${st.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="font-bold text-gray-900">{item.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5">
                      <div className={`w-12 h-12 ${st.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${st.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="font-bold text-gray-900">{item.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href={`https://wa.me/919942519211?text=Hello%20MM%20Traders%2C%20I%20want%20to%20discuss%20paddy%20trading.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-900/25 hover:shadow-green-900/40 hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              {c.whatsappCta}
            </a>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex-1 min-h-[300px]">
              <iframe
                title="MM Traders Location"
                src="https://www.google.com/maps?q=Nathakottai,Ramanathapuram,Tamil+Nadu&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  {c.enquiryTitle}
                </h3>
              </div>
              <p className="text-green-200 text-sm mb-5 leading-relaxed">{c.enquirySub}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.options.map((opt) => (
                  <a
                    key={opt.label}
                    href={`https://wa.me/919942519211?text=Hello%20MM%20Traders%2C%20${encodeURIComponent(opt.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] text-center"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
