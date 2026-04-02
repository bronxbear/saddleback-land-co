const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Tell us about your property. Location, acreage, and anything else you think matters. No pressure, no commitment.",
  },
  {
    number: "02",
    title: "We Evaluate",
    description:
      "Our team reviews the property and prepares a fair cash offer. We do the research, you wait for a number.",
  },
  {
    number: "03",
    title: "You Decide",
    description:
      "Accept, decline, or take your time. We buy on your schedule, not ours. No expiring offers, no tricks.",
  },
];

export default function ForLandowners() {
  return (
    <section id="landowners" className="bg-[#E8D5B0] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#1C1410]/30" />
            <span className="text-[#2D5016] text-xs font-semibold tracking-[0.35em] uppercase">
              For Landowners
            </span>
            <div className="h-px w-10 bg-[#1C1410]/30" />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black text-[#1C1410] leading-tight mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Thinking About Selling Your Land?
          </h2>

          <p className="text-[#1C1410]/70 text-lg leading-relaxed">
            We know that land is not just an asset. It is generations of work,
            history, and family. If you are considering selling, we would like
            the chance to make you a fair offer and earn your trust. No
            listing agents, no open houses, no strangers walking your property.
            Just a direct conversation with the buyer.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-[#1C1410]/15 z-0" />
              )}

              <div className="relative z-10 text-center bg-[#F5F0E8]/60 rounded-sm p-8 border border-[#1C1410]/10 hover:border-[#C9A96E]/40 transition-colors duration-300">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1C1410] mb-6 mx-auto">
                  <span
                    className="text-[#C9A96E] font-black text-lg"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-[#1C1410] mb-3"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#1C1410]/65 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance block */}
        <div className="bg-[#1C1410] rounded-sm p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3
              className="text-2xl font-black text-white mb-3"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              No Pressure. No Obligation.
            </h3>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              We have been on the other side of the table. We know what it
              feels like when someone does not respect your time or your land.
              That is not how we operate.
            </p>
            {/* Checklist */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 lg:gap-6">
              {["Free Evaluation", "No Hidden Fees", "No Pressure Tactics"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="9" stroke="#2D5016" strokeWidth="1.5" />
                      <path
                        d="M6 10 L9 13 L14 7"
                        stroke="#C9A96E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-10 py-4 bg-[#C9A96E] text-[#1C1410] font-bold text-base tracking-wide rounded-sm hover:bg-[#E8D5B0] transition-all duration-200 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
