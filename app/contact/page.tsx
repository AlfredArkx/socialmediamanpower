import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"
import FAQAccordion from "@/components/FAQAccordion"

export const metadata: Metadata = {
  title: "Contact Social Media Manpower Singapore",
  description:
    "Contact Social Media Manpower for affordable social media content support for Singapore SMEs from S$600/month. WhatsApp or fill in the form to get started.",
  keywords: [
    "contact social media manpower singapore",
    "social media enquiry singapore",
    "social media management quote singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.com/contact",
  },
  openGraph: {
    title: "Contact Social Media Manpower Singapore",
    description:
      "Tell us about your business and we'll recommend the best way to support your social media needs. From S$600/month.",
    url: "https://socialmediamanpower.com/contact",
    type: "website",
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const nextSteps = [
  {
    num: "01",
    title: "You send an enquiry",
    desc: "Fill in the form or WhatsApp us directly. Tell us your business type and what social media support you need.",
  },
  {
    num: "02",
    title: "We understand your business",
    desc: "We review your current social media, your industry, and your goals to understand what kind of content will work best for you.",
  },
  {
    num: "03",
    title: "We recommend a content plan",
    desc: "We suggest a content support plan that fits your budget and business — no pressure, no overselling.",
  },
  {
    num: "04",
    title: "We start onboarding",
    desc: "Once you&apos;re ready, we onboard you within days. You share your assets, we start planning and producing content.",
  },
]

const faqItems = [
  {
    q: "How fast do you reply?",
    a: "We reply within 1 business day by email or form. If you WhatsApp us directly, we typically respond within a few hours during business hours (Mon–Fri, 9am–6pm SGT).",
  },
  {
    q: "Can I WhatsApp instead of filling the form?",
    a: "Yes — WhatsApp is actually the fastest way to reach us. Just tap the WhatsApp button on this page and send us a message. We'll respond promptly and guide you from there.",
  },
  {
    q: "Do I need to prepare anything before contacting?",
    a: "No preparation needed. Just tell us your business type and roughly what you need — consistent posting, promo graphics, Reels, or all of the above. We'll take it from there.",
  },
  {
    q: "Can I ask for samples first?",
    a: "Yes. We can share sample content styles relevant to your industry on WhatsApp before you commit to anything. Just ask and we'll send them over.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -10%, #D4AF3760 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Get in touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Contact{" "}
            <span className="text-[#D4AF37]">Social Media Manpower</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us about your business and we&apos;ll recommend the best way to support your
            social media needs.
          </p>

          <a
            href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            WhatsApp Now
          </a>
        </div>
      </section>

      {/* ── 2 + 3. FORM + WHATSAPP PANEL ─────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* ─ Form (col-span-3) ─────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* ─ Side panel (col-span-2) ───────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-5">

              {/* WhatsApp CTA panel */}
              <div className="bg-[#161616] border border-[#D4AF37]/25 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#25D366]/15 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">WhatsApp us directly</p>
                    <p className="text-[#25D366] text-xs font-medium">Fastest way to reach us</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Skip the form and message us directly on WhatsApp. We reply within a few hours
                  during business hours.
                </p>

                {/* Pre-filled message preview */}
                <div className="bg-[#0A0A0A] border border-[#333333] rounded-xl px-4 py-3 mb-5">
                  <p className="text-gray-600 text-[10px] uppercase tracking-wider font-medium mb-1">
                    Pre-filled message
                  </p>
                  <p className="text-gray-300 text-xs italic">
                    &ldquo;Hi, I am interested in Social Media Manpower for my business.&rdquo;
                  </p>
                </div>

                <a
                  href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe58] text-white font-bold py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Quick info cards */}
              {[
                {
                  icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                  label: "Response time",
                  value: "Within 1 business day",
                },
                {
                  icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  label: "Starting price",
                  value: "From S$600/month",
                },
                {
                  icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5",
                  label: "Onboarding",
                  value: "Start within 3 days",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-[#161616] border border-[#222222] rounded-xl px-5 py-4">
                  <div className="w-9 h-9 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT HAPPENS NEXT ─────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              The process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Happens Next
            </h2>
            <p className="text-gray-400 mt-4 max-w-md mx-auto text-base">
              A simple four-step journey from first contact to your social media running
              on autopilot.
            </p>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative mb-4">
            <div className="absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="grid grid-cols-4 gap-6">
              {nextSteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#161616] border-2 border-[#D4AF37]/40 flex items-center justify-center mb-4 z-10">
                    <span className="text-[#D4AF37] font-black text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{step.title}</h3>
                  <p
                    className="text-gray-500 text-xs leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="md:hidden space-y-0">
            {nextSteps.map((step, i) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#161616] border-2 border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <span className="text-[#D4AF37] font-black text-sm">{step.num}</span>
                  </div>
                  {i < nextSteps.length - 1 && (
                    <div className="w-px flex-1 bg-[#D4AF37]/15 my-2" />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p
                    className="text-gray-500 text-xs leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Common Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] py-24 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #D4AF3750 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              No commitment required
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to get social media help{" "}
            <span className="text-[#D4AF37]">without hiring?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. No contracts. No CPF. Start within 3 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-10 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp us now
            </a>
            <Link
              href="/social-media-manpower-singapore"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              Learn about our service
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["No contracts", "Cancel anytime", "Start within 3 days"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
