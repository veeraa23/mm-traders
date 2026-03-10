import { Wheat, Package, Building2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Wheat,
    title: "Farmers Supply Paddy",
    description:
      "Farmers and local traders from Ramanathapuram and surrounding regions bring their freshly harvested paddy to MM Traders. We inspect quality, weigh accurately, and offer fair market prices.",
    details: ["Quality inspection on arrival", "Accurate weighing & grading", "Prompt payment to farmers"],
    color: "text-green-600",
    bg: "bg-green-600",
    lightBg: "bg-green-50",
    border: "border-green-200",
  },
  {
    step: "02",
    icon: Package,
    title: "MM Traders Aggregates",
    description:
      "We consolidate large volumes from multiple farmers, handle storage, sort by variety and quality, and arrange professional transportation to the destination rice mills.",
    details: ["Bulk aggregation & storage", "Sorting by variety & moisture", "Transportation coordination"],
    color: "text-amber-600",
    bg: "bg-amber-500",
    lightBg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    step: "03",
    icon: Building2,
    title: "Rice Mills Receive Supply",
    description:
      "Rice mills across South India receive their bulk paddy order on time and in the agreed quality, enabling uninterrupted milling operations and satisfied end customers.",
    details: ["On-time delivery", "Consistent batch quality", "Long-term supply agreements"],
    color: "text-blue-600",
    bg: "bg-blue-600",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #052e16 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grain-like pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold mb-5">
            How It Works
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            From{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #86efac, #4ade80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Field to Mill
            </span>
            , Seamlessly
          </h2>
          <p className="text-green-200/70 text-lg leading-relaxed">
            Our streamlined process ensures paddy moves efficiently from farmers
            to rice mills with maximum value retained at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-green-500/30 via-amber-500/30 to-blue-500/30 z-0" />

          {steps.map((step, i) => (
            <div key={step.step} className="relative z-10">
              <div className="glass-dark rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-all duration-300 group border border-white/10">
                {/* Step number bubble */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className="text-5xl font-black text-white/10 select-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-green-200/65 leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>

                {/* Details checklist */}
                <ul className="space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-green-300/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow between cards (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-4 mb-0">
                  <div className="w-px h-6 bg-gradient-to-b from-green-500/50 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
