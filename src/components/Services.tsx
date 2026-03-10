"use client";

import { Tractor, Factory, Truck, Users } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const iconList = [Tractor, Factory, Truck, Users];
const styles = [
  { color: "from-green-500 to-green-700", bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-600", tagColor: "bg-green-100 text-green-700" },
  { color: "from-amber-500 to-amber-700", bg: "bg-amber-50", border: "border-amber-200", iconBg: "bg-amber-600", tagColor: "bg-amber-100 text-amber-700" },
  { color: "from-blue-500 to-blue-700", bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-600", tagColor: "bg-blue-100 text-blue-700" },
  { color: "from-purple-500 to-purple-700", bg: "bg-purple-50", border: "border-purple-200", iconBg: "bg-purple-600", tagColor: "bg-purple-100 text-purple-700" },
];

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
            {s.badge}
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {s.headline1} <span className="text-gradient">{s.headline2}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{s.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {s.items.map((item, i) => {
            const Icon = iconList[i];
            const st = styles[i];
            return (
              <div
                key={item.title}
                className={`group relative ${st.bg} border ${st.border} rounded-3xl p-8 card-hover overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${st.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                <span className="absolute top-6 right-8 text-6xl font-black text-gray-900/5 select-none">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${st.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${st.tagColor}`}>{item.tag}</span>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{item.highlight}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
