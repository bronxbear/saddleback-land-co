"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "For Landowners", href: "#landowners" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E8] shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group">
            <span
              className={`text-xl font-black tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-[#1C1410]" : "text-white"
              }`}
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              SADDLEBACK
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase font-semibold transition-colors duration-300 ${
                scrolled ? "text-[#C9A96E]" : "text-[#C9A96E]"
              }`}
            >
              LAND COMPANY
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#C9A96E] ${
                  scrolled ? "text-[#1C1410]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 bg-[#C9A96E] text-[#1C1410] text-sm font-bold tracking-wide rounded-sm hover:bg-[#E8D5B0] transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              } ${scrolled ? "bg-[#1C1410]" : "bg-white"}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              } ${scrolled ? "bg-[#1C1410]" : "bg-white"}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              } ${scrolled ? "bg-[#1C1410]" : "bg-white"}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          } ${scrolled ? "bg-[#F5F0E8]" : "bg-[#1C1410]/95"}`}
        >
          <div className="flex flex-col gap-4 pt-4 px-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm font-medium tracking-wide py-2 border-b transition-colors hover:text-[#C9A96E] ${
                  scrolled
                    ? "text-[#1C1410] border-[#1C1410]/10"
                    : "text-white border-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 text-center px-5 py-3 bg-[#C9A96E] text-[#1C1410] text-sm font-bold tracking-wide rounded-sm hover:bg-[#E8D5B0] transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
