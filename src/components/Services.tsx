import { Tractor, Factory, Truck, Users } from "lucide-react";

const services = [
  {
    icon: Tractor,
    title: "Paddy Procurement",
    description:
      "We source high-quality paddy directly from farmers and local traders across Ramanathapuram and neighbouring districts, ensuring fair prices and prompt payment.",
    highlight: "Farm-to-Trader",
    color: "from-green-500 to-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green-600",
    tag: "Core Service",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    icon: Factory,
    title: "Bulk Supply to Rice Mills",
    description:
      "We supply large quantities of paddy to rice mills across South India, managing volume, quality, and timely delivery to keep mills running without interruption.",
    highlight: "Mill-Ready Supply",
    color: "from-amber-500 to-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-600",
    tag: "High Volume",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: Truck,
    title: "Trading & Logistics",
    description:
      "We coordinate the full logistics chain — from collection at farms to transportation and delivery — ensuring paddy reaches rice mills fresh and on time.",
    highlight: "End-to-End",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-600",
    tag: "Full Chain",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Users,
    title: "Farmer & Trader Network",
    description:
      "With an extensive network of farmers and traders built over years, we can aggregate large volumes of paddy quickly, giving rice mills a single reliable partner.",
    highlight: "500+ Partners",
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "bg-purple-600",
    tag: "Wide Network",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
            What We Do
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From farm-level procurement to bulk delivery at rice mills, we
            handle every link in the paddy supply chain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative ${service.bg} border ${service.border} rounded-3xl p-8 card-hover overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

              {/* Number */}
              <span className="absolute top-6 right-8 text-6xl font-black text-gray-900/5 select-none">
                0{i + 1}
              </span>

              <div className="relative z-10">
                {/* Icon + tag */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${service.tagColor}`}>
                      {service.tag}
                    </span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
