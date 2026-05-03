import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Social Media Manpower Singapore",
  description:
    "Get in touch with our Singapore social media experts. Book a free consultation or WhatsApp us directly for a fast response.",
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Office",
    value: "1 Raffles Place, #20-01, Singapore 048616",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@socialmediamanpower.sg",
    href: "mailto:hello@socialmediamanpower.sg",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+65 9123 4567",
    href: "https://wa.me/6591234567",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Fri: 9am – 6pm SGT",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(212,175,55,0.10),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Let&apos;s Build Something
            <br />
            <span className="text-[#D4AF37]">Together</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto">
            Book a free 30-minute consultation or drop us a message. We typically respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0A0A0A] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#161616] border border-[#222222] rounded-3xl p-8 sm:p-10">
                <h2 className="text-white font-bold text-xl mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-8">
                  Fill in the form and we&apos;ll get back to you within 2 business hours.
                </p>
                <form className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                        placeholder="Jane Tan"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                        placeholder="jane@company.sg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                        placeholder="+65 9123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="w-full bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                        placeholder="Your Company Pte Ltd"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-300 text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200 cursor-pointer appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="management">Social Media Management</option>
                      <option value="content">Content Creation</option>
                      <option value="influencer">Influencer Marketing</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="fullservice">Full Service Package</option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                      Message <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your brand and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#0A0A0A] py-4 rounded-xl font-semibold text-base hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer"
                  >
                    Send Message
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact Cards */}
              {contactInfo.map((info) => (
                <div key={info.label} className="bg-[#161616] border border-[#222222] rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white text-sm hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-base mb-2">Prefer to chat?</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Message us on WhatsApp for the fastest response. Our team replies within minutes
                  during business hours.
                </p>
                <a
                  href="https://wa.me/6591234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Open WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
