import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Social Media Manpower Singapore",
  description:
    "Learn how Social Media Manpower helps Singapore SMEs manage content, posting, graphics and Reels from S$600/month. No hiring. No CPF. Just results.",
  keywords: [
    "about social media manpower singapore",
    "social media management singapore sme",
    "affordable social media singapore",
    "social media outsource singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.com/about",
  },
  openGraph: {
    title: "About Social Media Manpower Singapore",
    description:
      "We help Singapore SMEs stay active online without the cost and stress of hiring full-time social media staff. From S$600/month.",
    url: "https://socialmediamanpower.com/about",
    type: "website",
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const differentiators = [
  {
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    title: "Built for SMEs",
    desc: "Every part of our service is designed around the reality of running a small business in Singapore — tight budgets, limited time, and the need to stay competitive online.",
  },
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Clear fixed pricing",
    desc: "From S$600/month. No hidden fees, no scope creep surprises, no agency-style retainers that balloon over time. You know exactly what you&apos;re paying for before you start.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Dedicated manpower",
    desc: "You get a dedicated person handling your social media — not a rotating pool of interns or an account manager who sub-contracts to someone else.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Replaceable support",
    desc: "If your assigned person is unavailable for any reason, we replace them immediately. Your posting schedule never stops — no coverage gaps, no excuses.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "No CPF or hiring overhead",
    desc: "No job ads, no interviews, no CPF contributions, no medical benefits, no notice periods. All the output of a social media hire, none of the employment overhead.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Practical content execution",
    desc: "We don&apos;t pitch strategy decks and disappear. We produce posts, design graphics, write captions, and keep your feed active — week in, week out.",
  },
]

const industries = [
  {
    label: "F&B",
    examples: "Restaurants, cafes, hawker stalls, cloud kitchens",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
    link: "/social-media-for-restaurants-singapore",
  },
  {
    label: "Beauty & Wellness",
    examples: "Nail salons, lash studios, facial spas, brow bars",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20 hover:border-rose-500/40",
    link: "/social-media-for-beauty-salon-singapore",
  },
  {
    label: "Retail",
    examples: "Fashion boutiques, accessories, home goods, gift shops",
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    accent: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20 hover:border-teal-500/40",
    link: "/social-media-manpower-singapore",
  },
  {
    label: "Ecommerce",
    examples: "Shopify, Shopee, Lazada, TikTok Shop sellers",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    link: "/social-media-for-ecommerce-singapore",
  },
  {
    label: "Local Service Businesses",
    examples: "Clinics, tuition centres, logistics, cleaning services",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    link: "/social-media-manpower-singapore",
  },
]

const workingStyle = [
  {
    word: "Simple",
    icon: "M3.75 9h16.5m-16.5 6.75h16.5",
    desc: "We communicate clearly and act quickly. No lengthy onboarding, no complicated processes. Send us your photos and we get to work.",
  },
  {
    word: "Practical",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    desc: "We focus on execution over theory. You get posts scheduled, graphics designed, and captions written — not strategy presentations.",
  },
  {
    word: "Fast",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    desc: "Content is produced and ready within days. When you have a last-minute promotion or a timely post to go out, we move fast.",
  },
  {
    word: "No jargon",
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
    desc: "We don&apos;t talk about funnels, synergies, or brand ecosystems. We tell you what we&apos;re doing, why, and what to expect — in plain language.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
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
              Our Story
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            About{" "}
            <span className="text-[#D4AF37]">Social Media Manpower</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We help Singapore SMEs stay active online without the cost and stress of hiring
            full-time social media staff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Now
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. WHY WE EXIST ──────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-4">
                Why we exist
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-snug">
                Social media is important.
                <br />
                <span className="text-[#D4AF37]">Hiring full-time staff is not always practical.</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Most Singapore small business owners understand that social media matters.
                  Customers check Instagram before visiting. Promotions need to be posted.
                  Competitors are active online every day.
                </p>
                <p>
                  But hiring a full-time social media executive costs S$3,000&ndash;S$4,000 per
                  month — before CPF, benefits, and the time spent on recruitment. For many SMEs,
                  that&apos;s simply not viable.
                </p>
                <p>
                  We created Social Media Manpower to bridge this gap. Dedicated remote social
                  media support — from S$600/month — so Singapore SMEs can stay consistent and
                  professional online, without the overhead of a full-time hire.
                </p>
              </div>
            </div>

            {/* Right: contrast comparison */}
            <div className="space-y-4">
              {/* Problem side */}
              <div className="bg-[#161616] border border-[#333333] rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">
                  The traditional options
                </p>
                <ul className="space-y-3">
                  {[
                    "Hire full-time: S$3,000–S$4,000/month + CPF",
                    "Agency retainer: S$2,000–S$5,000/month",
                    "Do it yourself: hours you don't have",
                    "Leave it inactive: lose customers to competitors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-gray-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution side */}
              <div className="bg-[#161616] border border-[#D4AF37]/30 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
                  Our solution
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated remote social media manpower from S$600/month",
                    "No CPF. No benefits. No recruitment cost.",
                    "Consistent posts, graphics, captions, and Reels",
                    "Replace anytime. Scale up or down as needed.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR MISSION ───────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#D4AF37] rounded-3xl p-10 sm:p-14 text-center">
            <p className="text-[#0A0A0A]/50 text-xs font-bold uppercase tracking-widest mb-5">
              Our Mission
            </p>
            <h2 className="text-[#0A0A0A] font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-2xl mx-auto">
              Help small businesses create consistent, professional social media content
              at an affordable monthly cost.
            </h2>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT MAKES US DIFFERENT ───────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Why us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default group"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/15 transition-colors duration-200">
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={d.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{d.title}</h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: d.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHO WE HELP ───────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Industries
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Who We Help
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              We work with Singapore SMEs across five key industries — each with their own
              content needs, audience behaviours, and social media goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.label}
                href={ind.link}
                className={`bg-[#161616] border ${ind.border} rounded-2xl p-6 transition-colors duration-200 cursor-pointer group block`}
              >
                <div className={`w-12 h-12 ${ind.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <svg
                    className={`w-6 h-6 ${ind.accent}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={ind.icon} />
                  </svg>
                </div>
                <h3 className={`font-bold text-base mb-1.5 ${ind.accent}`}>{ind.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.examples}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-gray-600 group-hover:text-[#D4AF37] transition-colors duration-200">
                  <span>See how we help</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OUR WORKING STYLE ─────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              How we work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our Working Style
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              We keep things straightforward. No agency jargon, no unnecessary complexity.
              Just work that gets done.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingStyle.map((s) => (
              <div
                key={s.word}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/20 transition-colors duration-200 cursor-default"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-[#D4AF37] font-black text-2xl mb-2">{s.word}</h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>
            ))}
          </div>

          {/* Honest note */}
          <div className="mt-10 bg-[#161616] border border-[#D4AF37]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">A note on what we are — and what we&apos;re not</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are a manpower service, not a full-service agency. We do not run paid ads,
                manage influencer campaigns, or provide brand strategy. We focus exclusively on
                what most SMEs actually need: consistent, professional social media content,
                posted regularly, at a price that makes sense for a small business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────────────── */}
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
              Get started today
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Need help managing your{" "}
            <span className="text-[#D4AF37]">social media?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. No hiring. No CPF. Just consistent social media that keeps
            your business visible and professional online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-10 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp us today
            </a>
            <Link
              href="/social-media-manpower-singapore"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              See our full service
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
