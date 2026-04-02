"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#1C1410] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column: info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]/60" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.35em] uppercase">
                Get In Touch
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Let&apos;s Start a Conversation
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Whether you own 10 acres or 10,000, we want to hear from you.
              Reach out today and let&apos;s talk about what your land means to
              you—and what it could mean for your future.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#C9A96E]/30 rounded-sm flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 8 L12 14 L22 8" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@saddlebacklandco.com"
                    className="text-white font-medium hover:text-[#C9A96E] transition-colors duration-200"
                  >
                    info@saddlebacklandco.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#C9A96E]/30 rounded-sm flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Service Area
                  </p>
                  <p className="text-white font-medium">
                    American South &amp; Midwest
                  </p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p
                className="text-[#C9A96E] text-xl font-black italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                &ldquo;Pursuing Land with Purpose.&rdquo;
              </p>
            </div>
          </div>

          {/* Right column: form */}
          <div className="bg-[#2C1F14]/50 border border-white/5 rounded-sm p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-[#C9A96E]/50 rounded-full mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12 L10 17 L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-black text-white mb-3"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Thank You
                </h3>
                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  We&apos;ve received your message and will be in touch shortly.
                  We appreciate you reaching out.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-8 text-[#C9A96E] text-sm underline underline-offset-4 hover:text-[#E8D5B0] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/70 text-xs tracking-widest uppercase mb-2"
                  >
                    Full Name <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full bg-[#1C1410] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/70 text-xs tracking-widest uppercase mb-2"
                  >
                    Email Address <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#1C1410] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/70 text-xs tracking-widest uppercase mb-2"
                  >
                    Phone{" "}
                    <span className="text-white/30 normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#1C1410] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/70 text-xs tracking-widest uppercase mb-2"
                  >
                    Message <span className="text-[#C9A96E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your land—location, acreage, and anything else you'd like us to know."
                    className="w-full bg-[#1C1410] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A96E] text-[#1C1410] font-bold text-base tracking-wide rounded-sm hover:bg-[#E8D5B0] transition-all duration-200 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
                >
                  Send Message
                </button>

                <p className="text-center text-white/30 text-xs">
                  We&apos;ll respond within 1–2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
