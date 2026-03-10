import { MapPin, Shield, Handshake, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Reliability",
    desc: "Consistent, timely supply of quality paddy to rice mills.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Handshake,
    title: "Fair Pricing",
    desc: "Transparent dealings that benefit both farmers and mills.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: TrendingUp,
    title: "Strong Network",
    desc: "Deep-rooted relationships with farmers across Ramnad.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop"
                alt="Paddy fields of Tamil Nadu"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-2xl p-4 shadow-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Nathakottai</p>
                  <p className="text-xs text-gray-500">Ramanathapuram, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl p-4 shadow-xl border border-amber-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">🌾</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Premium Paddy</p>
                  <p className="text-xs text-gray-500">Sourced directly from fields</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-1/2 -right-4 w-12 h-48 bg-green-600/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              About MM Traders
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Rooted in the{" "}
              <span className="text-gradient">Heart of Ramnad&apos;s</span>{" "}
              Paddy Belt
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              MM Traders is a trusted paddy trading and procurement business
              based in{" "}
              <span className="font-semibold text-green-700">
                Nathakottai, Ramanathapuram (Ramnad), Tamil Nadu
              </span>
              . We bridge the gap between paddy farmers and rice mills across
              South India.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We work directly with farmers and local traders to collect paddy
              and supply it to rice mills, ensuring a reliable chain from field
              to mill. Our focus is on honest dealings, fair pricing, and
              long-term relationships built on trust.
            </p>

            {/* Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className={`${p.bg} rounded-2xl p-4 border border-white card-hover`}
                >
                  <div className={`w-10 h-10 rounded-xl ${p.bg} border border-gray-200 flex items-center justify-center mb-3`}>
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
