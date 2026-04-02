export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C1410] via-[#2C1F14] to-[#1A2310]">
      {/* Subtle topographic overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(45,80,22,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(44,31,20,0.5) 0%, transparent 60%)
          `,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Decorative line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#C9A96E]/60" />
          <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.4em] uppercase">
            American South &amp; Midwest
          </span>
          <div className="h-px w-12 bg-[#C9A96E]/60" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Your Land.
          <br />
          <span className="text-[#C9A96E]">Your Legacy.</span>
          <br />
          Your Terms.
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
          Saddleback Land Company connects landowners with serious buyers across
          the American South and Midwest. We pursue land with purpose.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#C9A96E] text-[#1C1410] text-base font-bold tracking-wide rounded-sm hover:bg-[#E8D5B0] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A96E]/20 hover:-translate-y-0.5"
          >
            I Want to Sell My Land
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 border border-white/40 text-white text-base font-medium tracking-wide rounded-sm hover:bg-white/10 hover:border-white/70 transition-all duration-200 hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F0E8]/5 to-transparent" />
    </section>
  );
}
