const stats = [
  { label: "10+ States", desc: "Active Coverage" },
  { label: "Direct Buyer", desc: "No Middlemen" },
  { label: "Cash Offers", desc: "Quick Close" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.35em] uppercase">
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-black text-[#1C1410] leading-tight mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Who We Are
            </h2>

            <div className="space-y-4 text-[#1A1A1A]/75 leading-relaxed text-lg">
              <p>
                Saddleback Land Company is a private acquisition firm
                purchasing rural and semi-rural property across the American
                South and Midwest. We buy with our own capital and hold for
                long-term development.
              </p>
              <p>
                We are not brokers and we are not wholesalers. When we call,
                it is because we want to buy your land ourselves. Our offers
                are funded, our closings are clean, and we do what we say
                we will do.
              </p>
              <p>
                Whether it is a working cattle ranch, family timberland, row
                crop ground, or undeveloped acreage, we evaluate every
                property with the same care. We know what the land is worth
                because we have walked land like it.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C9A96E] pl-4">
                  <p
                    className="text-xl font-black text-[#1C1410]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50 tracking-wide uppercase mt-1">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative column */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-square">
              {/* Main gradient box with topographic lines */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#1C1410] via-[#2C1F14] to-[#1A2310]"
              />

              {/* Topographic lines pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    repeating-radial-gradient(
                      ellipse at 40% 60%,
                      transparent 0px,
                      transparent 18px,
                      rgba(201, 169, 110, 0.6) 19px,
                      transparent 20px,
                      transparent 38px,
                      rgba(201, 169, 110, 0.5) 39px,
                      transparent 40px,
                      transparent 58px,
                      rgba(201, 169, 110, 0.4) 59px,
                      transparent 60px,
                      transparent 78px,
                      rgba(201, 169, 110, 0.3) 79px,
                      transparent 80px,
                      transparent 98px,
                      rgba(201, 169, 110, 0.2) 99px,
                      transparent 100px
                    )
                  `,
                }}
              />

              {/* Secondary radial for depth */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    repeating-radial-gradient(
                      ellipse at 65% 35%,
                      transparent 0px,
                      transparent 28px,
                      rgba(201, 169, 110, 0.5) 29px,
                      transparent 30px,
                      transparent 58px,
                      rgba(201, 169, 110, 0.4) 59px,
                      transparent 60px
                    )
                  `,
                }}
              />

              {/* Center glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 60%, rgba(201,169,110,0.15) 0%, transparent 65%)",
                }}
              />

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4">
                  <svg
                    viewBox="0 0 80 60"
                    className="w-20 h-14 mx-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 48 L14 24 L24 34 L36 16 L48 28 L60 8 L80 48 Z"
                      fill="none"
                      stroke="#C9A96E"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0 54 L14 30 L24 40 L36 22 L48 34 L60 14 L80 54 Z"
                      fill="rgba(201,169,110,0.15)"
                      stroke="none"
                    />
                  </svg>
                </div>
                <p
                  className="text-[#C9A96E] text-2xl font-black tracking-widest uppercase"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Saddleback
                </p>
                <p className="text-white/50 text-xs tracking-[0.4em] uppercase mt-2">
                  Land Company
                </p>
                <div className="mt-8 h-px w-16 bg-[#C9A96E]/40 mx-auto" />
                <p className="mt-4 text-white/40 text-xs tracking-wide italic">
                  Pursuing Land with Purpose
                </p>
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
