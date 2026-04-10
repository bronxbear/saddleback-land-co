const services = [
  {
    title: "Land Acquisition",
    description:
      "We identify and acquire rural properties suited for development, agriculture, and long-term hold. Eight states and growing.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 36 L12 20 L20 28 L28 14 L36 22 L44 8"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 42 L44 42"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="28" cy="14" r="3" fill="#C9A96E" opacity="0.4" />
        <circle cx="12" cy="20" r="2" fill="#C9A96E" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Direct Offers",
    description:
      "A funded offer from the people who intend to own the land. We handle the process from first call to closing.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="26"
          rx="2"
          stroke="#C9A96E"
          strokeWidth="2"
        />
        <path
          d="M6 14 L24 26 L42 14"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30 L16 22"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M42 30 L32 22"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    title: "Property Evaluation",
    description:
      "Access, utilities, topography, flood risk, timber value, soil quality. We do our homework before we make a call, not after.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="2"
          stroke="#C9A96E"
          strokeWidth="2"
        />
        <path
          d="M8 20 L40 20"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <path
          d="M8 30 L40 30"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <path
          d="M20 8 L20 40"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <path
          d="M30 8 L30 40"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <circle
          cx="24"
          cy="24"
          r="5"
          stroke="#C9A96E"
          strokeWidth="2"
          fill="rgba(201,169,110,0.1)"
        />
        <circle cx="24" cy="24" r="1.5" fill="#C9A96E" />
      </svg>
    ),
  },
  {
    title: "Clean Closings",
    description:
      "Title work, survey, closing costs handled. We close on your timeline with certainty.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 24 C14 24 16 28 24 28 C32 28 34 24 34 24"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 20 L14 24 L10 28"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 20 L34 24 L38 28"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="6"
          y="10"
          width="14"
          height="10"
          rx="2"
          stroke="#C9A96E"
          strokeWidth="1.5"
          fill="rgba(201,169,110,0.08)"
        />
        <rect
          x="28"
          y="28"
          width="14"
          height="10"
          rx="2"
          stroke="#C9A96E"
          strokeWidth="1.5"
          fill="rgba(201,169,110,0.08)"
        />
        <path
          d="M10 15 L16 15 M10 18 L14 18"
          stroke="#C9A96E"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M32 33 L38 33 M32 36 L36 36"
          stroke="#C9A96E"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#1C1410] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.35em] uppercase">
              What We Offer
            </span>
            <div className="h-px w-10 bg-[#C9A96E]/50" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            What We Do
          </h2>
          <p className="mt-4 text-white/55 text-lg max-w-xl mx-auto">
            A private land company that buys, holds, and develops. From
            first contact to closing, we handle everything.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-[#2C1F14]/60 border border-white/5 rounded-sm p-8 transition-all duration-300 hover:bg-[#2C1F14] hover:border-[#C9A96E]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Green accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2D5016] rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-6">{service.icon}</div>
              <h3
                className="text-white font-bold text-lg mb-3 tracking-wide"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
