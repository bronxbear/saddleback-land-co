const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "For Landowners", href: "#landowners" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#110D09] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-white/5">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <a href="#" className="flex flex-col leading-none">
              <span
                className="text-2xl font-black tracking-widest uppercase text-white"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                SADDLEBACK
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#C9A96E] mt-0.5">
                LAND COMPANY
              </span>
            </a>
            <p className="mt-5 text-white/40 text-sm leading-relaxed">
              Pursuing Land with Purpose across the American South and Midwest.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 text-sm hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5">
              Contact
            </p>
            <a
              href="mailto:info@saddlebacklandco.com"
              className="text-white/60 text-sm hover:text-[#C9A96E] transition-colors duration-200 block mb-2"
            >
              info@saddlebacklandco.com
            </a>
            <p className="text-white/40 text-sm">
              American South &amp; Midwest
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Saddleback Land Company. All rights reserved.
          </p>
          <p
            className="text-[#C9A96E]/50 text-xs italic"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Pursuing Land with Purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
