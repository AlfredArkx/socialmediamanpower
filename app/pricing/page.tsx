import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"

export const metadata: Metadata = {
  title: "Social Media Management Pricing Singapore | From S$600/month",
  description:
    "Transparent social media management pricing for Singapore SMEs. Dedicated manpower from S$600/month. No CPF. No hiring. Compare costs vs full-time hire, freelancer, and agency.",
  keywords: [
    "social media management pricing Singapore",
    "affordable social media marketing Singapore",
    "social media manpower price Singapore",
    "social media marketing cost Singapore",
    "outsource social media Singapore price",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.sg/pricing",
  },
  openGraph: {
    title: "Social Media Management Pricing Singapore | From S$600/month",
    description:
      "Dedicated social media manpower for Singapore SMEs from S$600/month. No CPF, no contracts, no hiring stress.",
    url: "https://socialmediamanpower.sg/pricing",
    type: "website",
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const included = [
  {
    icon: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
    title: "Posting & Scheduling",
    desc: "Consistent posting across Instagram, Facebook, TikTok, and more — timed for your audience.",
  },
  {
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    title: "Caption Writing",
    desc: "Engaging, brand-aligned captions written in your tone — with relevant hashtags and CTAs.",
  },
  {
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    title: "Graphic Design",
    desc: "Branded static graphics, promotional banners, story templates, and product visuals.",
  },
  {
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Photo Editing",
    desc: "Touch-ups, colour grading, and composition edits on photos you provide.",
  },
  {
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c.621 0 1.125.504 1.125 1.125v7.5m0-10.875h-1.5",
    title: "TikTok & IG Reels (from static assets)",
    desc: "Short-form Reels and TikToks produced from your product photos and video clips.",
  },
  {
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    title: "Marketing Ideas & Ad Recommendations",
    desc: "Suggestions on promotion angles, content hooks, and simple ad concepts when relevant.",
  },
]

const notIncluded = [
  {
    title: "Physical photoshoots",
    desc: "We work with assets you provide. Professional photography is separate.",
  },
  {
    title: "Customer DM replies",
    desc: "Community management and inbox handling are not part of this service.",
  },
  {
    title: "Paid ads execution",
    desc: "We can recommend ad concepts, but running and funding paid campaigns is separate.",
  },
  {
    title: "Business admin tasks",
    desc: "Order fulfilment, supplier comms, and back-office tasks fall outside scope.",
  },
]

type Verdict = "poor" | "fair" | "good" | "best"

interface Option {
  name: string
  badge?: string
  highlight: boolean
  cost: string
  cpf: { label: string; v: Verdict }
  replacement: { label: string; v: Verdict }
  quality: { label: string; v: Verdict }
  flexibility: { label: string; v: Verdict }
}

const options: Option[] = [
  {
    name: "Full-time Hire",
    highlight: false,
    cost: "S$3,500 – S$5,500/mo",
    cpf: { label: "17% CPF + benefits", v: "poor" },
    replacement: { label: "Weeks of rehiring", v: "poor" },
    quality: { label: "Depends on hire", v: "fair" },
    flexibility: { label: "Permanent commitment", v: "poor" },
  },
  {
    name: "Freelancer",
    highlight: false,
    cost: "S$800 – S$2,500/mo",
    cpf: { label: "No CPF needed", v: "good" },
    replacement: { label: "Find one yourself", v: "fair" },
    quality: { label: "Variable, no oversight", v: "fair" },
    flexibility: { label: "Month-to-month", v: "good" },
  },
  {
    name: "Agency Retainer",
    highlight: false,
    cost: "S$1,500 – S$8,000/mo",
    cpf: { label: "No CPF needed", v: "good" },
    replacement: { label: "Handled internally", v: "good" },
    quality: { label: "Team-based, process-heavy", v: "good" },
    flexibility: { label: "3 – 12 month contracts", v: "fair" },
  },
  {
    name: "Social Media Manpower",
    badge: "Best value for SMEs",
    highlight: true,
    cost: "From S$600/mo",
    cpf: { label: "No CPF. No overhead.", v: "best" },
    replacement: { label: "Immediate replacement", v: "best" },
    quality: { label: "Dedicated, practical", v: "best" },
    flexibility: { label: "Yearly, cancel notice", v: "best" },
  },
]

const rowLabels = ["Monthly cost", "CPF / overhead", "If unavailable", "Content quality", "Commitment"]

const verdictStyle: Record<Verdict, string> = {
  poor: "text-red-400",
  fair: "text-yellow-400",
  good: "text-teal-400",
  best: "text-[#D4AF37] font-semibold",
}

const verdictIcon: Record<Verdict, string> = {
  poor: "M6 18L18 6M6 6l12 12",
  fair: "M5 12h14",
  good: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  best: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
}

const contractTerms = [
  {
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    title: "Yearly contract",
    desc: "Services are provided on a yearly basis, giving you consistent, uninterrupted coverage throughout the year.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Auto-renewal",
    desc: "Your contract renews automatically at the end of each term, so your social media never goes dark between cycles.",
  },
  {
    icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
    title: "1-month termination notice",
    desc: "Give us one month&rsquo;s notice if you need to end the service. No locked-in long periods, no penalties.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Manpower replacement allowed",
    desc: "If your assigned person is not the right fit, request a replacement. We handle the switch without disruption.",
  },
]

const faqItems = [
  {
    q: "Is S$600/month the final price?",
    a: "S$600/month is our entry-level price for dedicated social media manpower. The exact price depends on your volume of content, platforms managed, and any additional requirements. We will give you a transparent quote before you commit to anything.",
  },
  {
    q: "Are there any setup or onboarding fees?",
    a: "No setup fees. There are no hidden charges beyond the monthly manpower fee. Onboarding, briefing, and account familiarisation are part of the service.",
  },
  {
    q: "What happens if I am not satisfied with the content quality?",
    a: "All content is submitted for your review before publishing. If quality is not meeting your expectations, we work with you to adjust — or replace your assigned person at no extra cost. We take long-term relationships seriously.",
  },
  {
    q: "Do I need to pay CPF or provide employee benefits?",
    a: "No. Your assigned person is our manpower, not your employee. You have no CPF obligations, no HR paperwork, no annual leave entitlements, and no employment law exposure. You simply pay the monthly service fee.",
  },
  {
    q: "Can I upgrade or add more content volume later?",
    a: "Yes. If your business grows and you need more posting frequency, additional platforms, or expanded scope, we can adjust the arrangement. Speak to us about what you need and we will tailor accordingly.",
  },
  {
    q: "What platforms are covered at S$600/month?",
    a: "Typically Instagram and Facebook are covered at the base price. TikTok, LinkedIn, Xiaohongshu, and other platforms can be discussed — coverage depends on your posting frequency requirements and content volume.",
  },
  {
    q: "Do I own my social media accounts?",
    a: "Yes, completely. Your accounts stay in your name and under your control. We manage them on your behalf, but you retain full ownership and access at all times. We never hold accounts hostage.",
  },
  {
    q: "How does the 1-month termination notice work?",
    a: "If you decide to end the service, inform us at least one month before your intended end date. We will continue delivering content during the notice period. There are no penalties or clawbacks for terminating with proper notice.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div
          className="absolute inset-0 opacity-25"
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Transparent pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Media Manpower{" "}
            <span className="text-[#D4AF37]">Pricing</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dedicated remote social media manpower for Singapore SMEs from S$600/month.
            No CPF. No hiring. No agency markups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <a
              href="#pricing-card"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              See what&rsquo;s included
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN PRICING CARD ─────────────────────────────────────────────── */}
      <section id="pricing-card" className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              What you get
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              One Simple Plan
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              No tiers. No confusing add-ons. One dedicated social media person
              working on your business every month.
            </p>
          </div>

          {/* Premium pricing card */}
          <div className="relative mx-auto max-w-3xl">
            {/* Outer glow */}
            <div
              className="absolute -inset-px rounded-3xl opacity-60 blur-sm"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, transparent 50%, #D4AF37 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative bg-[#161616] border border-[#D4AF37]/40 rounded-3xl overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-br from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent px-8 sm:px-12 pt-10 pb-8 border-b border-[#D4AF37]/20">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      Most popular
                    </span>
                    <h3 className="text-white font-bold text-2xl sm:text-3xl">
                      Dedicated Social Media Manpower
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      One dedicated person. Your brand. Every month.
                    </p>
                  </div>
                  <div className="shrink-0 text-right sm:text-left">
                    <div className="flex items-baseline gap-1 sm:justify-end">
                      <span className="text-[#D4AF37] text-base font-semibold">From</span>
                      <span className="text-[#D4AF37] text-5xl font-black leading-none">S$600</span>
                    </div>
                    <span className="text-gray-400 text-sm">/month per manpower</span>
                  </div>
                </div>
              </div>

              {/* Included items */}
              <div className="px-8 sm:px-12 py-10">
                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-6">
                  What&rsquo;s included
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {included.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-4.5 h-4.5 text-[#D4AF37]"
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
                        <p className="text-white text-sm font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA inside card */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Get started — WhatsApp now
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
                  >
                    Send an enquiry
                  </Link>
                </div>

                <p className="text-center text-gray-600 text-xs mt-4">
                  No setup fees &middot; No CPF &middot; Yearly contract with 1-month notice to cancel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT IS NOT INCLUDED ──────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Be clear from the start
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Is Not Included
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              We believe in transparency. Here is what falls outside the scope of
              this service so there are no surprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {notIncluded.map((item) => (
              <div
                key={item.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8 max-w-lg mx-auto">
            Need something outside this scope?{" "}
            <a
              href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              Chat with us on WhatsApp
            </a>{" "}
            and we will see what we can do.
          </p>
        </div>
      </section>

      {/* ── 4. COST COMPARISON ───────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Side-by-side
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How the Costs Stack Up
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Compared to every other option, dedicated social media manpower delivers
              the most value at the lowest all-in cost for Singapore SMEs.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-[#222222]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="text-left text-gray-500 font-medium px-6 py-4 bg-[#111111] w-40">&nbsp;</th>
                  {options.map((opt) => (
                    <th
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight
                          ? "bg-[#D4AF37]/8 border-x border-[#D4AF37]/20"
                          : "bg-[#161616]"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <span className={`font-bold text-base ${opt.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                          {opt.name}
                        </span>
                        {opt.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25 px-2.5 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e1e]">
                {/* Monthly cost */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[0]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center font-bold ${
                        opt.highlight
                          ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15 text-[#D4AF37] text-base"
                          : "bg-[#161616] text-white"
                      }`}
                    >
                      {opt.cost}
                    </td>
                  ))}
                </tr>

                {[
                  { key: "cpf" as const, label: rowLabels[1] },
                  { key: "replacement" as const, label: rowLabels[2] },
                  { key: "quality" as const, label: rowLabels[3] },
                  { key: "flexibility" as const, label: rowLabels[4] },
                ].map(({ key, label }) => (
                  <tr key={key}>
                    <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                      {label}
                    </td>
                    {options.map((opt) => (
                      <td
                        key={opt.name}
                        className={`px-6 py-4 text-center ${
                          opt.highlight ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15" : "bg-[#161616]"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-1.5">
                          <svg
                            className={`w-3.5 h-3.5 shrink-0 ${verdictStyle[opt[key].v]}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={verdictIcon[opt[key].v]} />
                          </svg>
                          <span className={`text-xs ${verdictStyle[opt[key].v]}`}>
                            {opt[key].label}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {options.map((opt) => (
              <div
                key={opt.name}
                className={`rounded-2xl border overflow-hidden ${
                  opt.highlight
                    ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
                    : "border-[#222222] bg-[#161616]"
                }`}
              >
                <div className={`px-5 py-4 border-b ${opt.highlight ? "border-[#D4AF37]/20" : "border-[#222222]"}`}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-base ${opt.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                        {opt.name}
                      </span>
                      {opt.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25 px-2 py-0.5 rounded-full">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <span className={`font-bold text-sm ${opt.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                      {opt.cost}
                    </span>
                  </div>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {[
                    { label: rowLabels[1], data: opt.cpf },
                    { label: rowLabels[2], data: opt.replacement },
                    { label: rowLabels[3], data: opt.quality },
                    { label: rowLabels[4], data: opt.flexibility },
                  ].map(({ label, data }) => (
                    <div key={label} className="flex items-start justify-between gap-4">
                      <span className="text-gray-600 text-xs uppercase tracking-wide shrink-0 w-28">
                        {label}
                      </span>
                      <div className="flex items-center gap-1 text-right">
                        <svg
                          className={`w-3 h-3 shrink-0 ${verdictStyle[data.v]}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={verdictIcon[data.v]} />
                        </svg>
                        <span className={`text-xs ${verdictStyle[data.v]}`}>{data.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-5 mt-8 text-xs">
            {(["best", "good", "fair", "poor"] as Verdict[]).map((v) => (
              <span key={v} className={`flex items-center gap-1.5 ${verdictStyle[v]}`}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={verdictIcon[v]} />
                </svg>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CONTRACT TERMS ────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              No surprises
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Contract Terms
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Straightforward terms written for SMEs — not corporate legal teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contractTerms.map((term) => (
              <div
                key={term.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-7 flex items-start gap-5 hover:border-[#D4AF37]/20 transition-colors duration-200 group"
              >
                <div className="w-11 h-11 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/15 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={term.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5">{term.title}</h3>
                  <p
                    className="text-gray-400 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: term.desc }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Terms callout */}
          <div className="mt-10 bg-[#D4AF37]/8 border border-[#D4AF37]/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-[#D4AF37] font-semibold text-sm mb-1">
              Questions about the contract?
            </p>
            <p className="text-gray-400 text-sm">
              WhatsApp us directly — we explain everything plainly before you commit to
              anything.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Pricing questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] py-24 px-4 sm:px-6 overflow-hidden border-t border-[#1a1a1a]">
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
              From S$600/month
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to manage social media{" "}
            <span className="text-[#D4AF37]">without hiring?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Dedicated remote manpower. No CPF. No recruitment stress.
            Get consistent social media content from S$600/month.
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              Send an enquiry
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              "No setup fees",
              "No CPF obligations",
              "Start within 3 days",
              "Cancel with 1 month notice",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#D4AF37] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
