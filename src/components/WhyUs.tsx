"use client";

import { CheckCircle, Star, Users, Globe, Clock, Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const iconList = [Users, CheckCircle, Clock, Star, Globe, Heart];
const iconStyles = [
  { color: "text-green-600", bg: "bg-green-100" },
  { color: "text-amber-600", bg: "bg-amber-100" },
  { color: "text-blue-600", bg: "bg-blue-100" },
  { color: "text-purple-600", bg: "bg-purple-100" },
  { color: "text-teal-600", bg: "bg-teal-100" },
  { color: "text-rose-600", bg: "bg-rose-100" },
];

export default function WhyUs() {
  const { t } = useLang();
  const w = t.whyus;

  return (
    <section className="section-padding bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
              {w.badge}
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {w.headline1}{" "}
              <span className="text-gradient">{w.headline2}</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">{w.sub}</p>
            <div className="mt-8 p-6 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl text-white shadow-2xl shadow-green-900/30">
              <p className="text-5xl font-black mb-1" style={{ fontFamily: "var(--font-playfair)" }}>10+</p>
              <p className="text-green-200 text-sm font-medium">{w.statLabel}</p>
            </div>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {w.items.map((item, i) => {
              const Icon = iconList[i];
              const st = iconStyles[i];
              return (
                <div
                  key={item.title}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover shadow-sm hover:border-green-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 ${st.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${st.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
