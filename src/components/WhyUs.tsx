import { CheckCircle, Star, Users, Globe, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Trusted Local Network",
    description:
      "Decades of connections with farmers, agents, and traders across Ramanathapuram give us unmatched sourcing reach.",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    icon: CheckCircle,
    title: "Fair & Transparent Pricing",
    description:
      "We believe in honest dealings. Farmers get a fair price, and rice mills get competitive procurement rates.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Clock,
    title: "Reliable Supply Chain",
    description:
      "We ensure consistent supply to rice mills without delays, keeping your operations running smoothly year-round.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description:
      "Every batch of paddy is inspected for quality and moisture content before dispatch to ensure mill satisfaction.",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Globe,
    title: "South India Coverage",
    description:
      "Our logistics network spans across multiple districts and states, enabling us to supply mills far and wide.",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-100",
  },
  {
    icon: Heart,
    title: "Long-Term Relationships",
    description:
      "We build partnerships, not just transactions — with repeat business built on trust and mutual benefit.",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
              Why Choose Us
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why Farmers &amp; Mills{" "}
              <span className="text-gradient">Trust MM Traders</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our business was built on trust, shaped by years of experience in
              South Tamil Nadu&apos;s paddy belt.
            </p>

            {/* Large stat */}
            <div className="mt-8 p-6 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl text-white shadow-2xl shadow-green-900/30">
              <p className="text-5xl font-black mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                10+
              </p>
              <p className="text-green-200 text-sm font-medium">
                Years of trusted paddy trading in Ramanathapuram
              </p>
            </div>
          </div>

          {/* Right: cards grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover shadow-sm hover:border-green-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 ${reason.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <reason.icon className={`w-5 h-5 ${reason.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-sm">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
