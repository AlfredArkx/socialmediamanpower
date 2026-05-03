import type { Metadata } from "next"
import FAQAccordion from "@/components/FAQAccordion"

export const metadata: Metadata = {
  title:
    "Social Media Manpower Singapore | Dedicated Remote Service from S$600/month",
  description:
    "Outsource your social media to dedicated remote manpower in Singapore. Posting, captions, graphic design, Reels and more for SMEs — from S$600/month. No hiring, no CPF.",
  keywords: [
    "social media manpower Singapore",
    "social media management Singapore",
    "outsource social media Singapore",
    "social media executive Singapore",
    "remote social media manager Singapore",
    "affordable social media Singapore",
    "social media SME Singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.sg/social-media-manpower-singapore",
  },
  openGraph: {
    title: "Social Media Manpower Singapore | From S$600/month",
    description:
      "Dedicated remote social media manpower for Singapore SMEs. Posting, design, captions, and Reels — no hiring, no CPF.",
    url: "https://socialmediamanpower.sg/social-media-manpower-singapore",
    type: "website",
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Icon({
  path,
  className = "w-6 h-6",
}: {
  path: string
  className?: string
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  )
}

function CheckGold() {
  return (
    <svg
      className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CrossGrey() {
  return (
    <svg
      className="w-4 h-4 text-gray-600 shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CheckWhite() {
  return (
    <svg
      className="w-4 h-4 text-[#0A0A0A] shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const whoIsFor = [
  {
    iconPath:
      "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    label: "F&B Businesses",
    desc: "Cafes, restaurants, bakeries, and hawker stalls that need consistent posting to stay top-of-mind with hungry followers.",
  },
  {
    iconPath:
      "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
    label: "Beauty Salons",
    desc: "Nail studios, hair salons, spas and skincare clinics looking to showcase their work and attract more bookings through social media.",
  },
  {
    iconPath:
      "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z",
    label: "Retail Shops",
    desc: "Boutiques, fashion stores, home goods, and lifestyle shops driving foot traffic and discovery through Instagram and Facebook.",
  },
  {
    iconPath:
      "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72z",
    label: "Ecommerce Sellers",
    desc: "Shopee, Lazada, and direct-to-consumer brands turning social media engagement into product sales and repeat buyers.",
  },
  {
    iconPath:
      "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Busy SME Owners",
    desc: "Small business owners who know they need social media but simply have no time, no team, and no budget for a full-time hire.",
  },
]

const included = [
  {
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Social Media Posting & Scheduling",
    desc: "Up to 20 posts per month across Instagram, Facebook, and TikTok — all published at optimal times for Singapore audiences.",
  },
  {
    iconPath:
      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    title: "Caption Writing & Hashtag Support",
    desc: "Engaging English captions with basic Chinese support, plus researched hashtag sets tailored to your industry and Singapore audience.",
  },
  {
    iconPath:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "Graphic Design",
    desc: "On-brand social media graphics — promotional cards, product highlights, announcement posts, and quote visuals.",
  },
  {
    iconPath:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Photo Editing",
    desc: "Basic editing of your product and food photos — brightness, colour correction, cropping, and background cleanup.",
  },
  {
    iconPath:
      "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "TikTok & IG Reels Creation",
    desc: "Short-form video editing from your raw photos or clips — trending formats, on-screen text, music, and transitions for maximum reach.",
  },
  {
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Monthly Content Ideas",
    desc: "A fresh batch of content themes and post ideas every month based on your promotions, seasons, and what is working in your industry.",
  },
  {
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    title: "Ad Recommendations",
    desc: "Monthly suggestions on which posts to boost, what audience to target, and what budget to allocate — so your ad spend goes further.",
  },
]

const notIncluded = [
  {
    title: "Physical Photoshoots",
    desc: "We do not visit your location. You provide raw photos or videos via WhatsApp — we edit and create posts from those assets.",
  },
  {
    title: "Customer DM & Reply Handling",
    desc: "We do not respond to DMs that require product knowledge or business decisions. Those are flagged to you to handle personally.",
  },
  {
    title: "Paid Ads Execution",
    desc: "We give ad recommendations, but we do not run Meta Ads or TikTok Ads on your behalf. Ad execution is a separate service.",
  },
  {
    title: "Business Admin Tasks",
    desc: "No order processing, inventory management, customer service, or any tasks outside social media content and publishing.",
  },
]

const steps = [
  {
    num: "01",
    title: "You Send Your Assets",
    desc: "Share photos, videos, promotions, product info, and any key messages via WhatsApp or a shared folder. No fancy brief needed.",
  },
  {
    num: "02",
    title: "We Prepare Your Content",
    desc: "Your dedicated person creates graphics, writes captions, edits photos or videos, and builds the content calendar for the month.",
  },
  {
    num: "03",
    title: "You Review (Optional)",
    desc: "Preview posts before they go live. Approve as-is or request tweaks via WhatsApp — most clients approve with minimal changes.",
  },
  {
    num: "04",
    title: "Content Goes Live",
    desc: "All posts are scheduled and published at optimal times across your platforms. No manual work needed from your side.",
  },
  {
    num: "05",
    title: "Monthly Cycle Repeats",
    desc: "Every month, the cycle repeats — with improvements based on what performed well, upcoming events, and your new promotions.",
  },
]

const comparisons = [
  {
    name: "Traditional Agency",
    cost: "S$3,000 – S$10,000",
    period: "/month",
    badge: "For large brands",
    highlight: false,
    items: [
      { text: "Shared team — not yours", good: false },
      { text: "12-month retainer lock-in", good: false },
      { text: "Strategy-heavy, light on execution", good: false },
      { text: "Expensive for SME budgets", good: false },
      { text: "Polished deliverables", good: true },
    ],
  },
  {
    name: "Freelancer",
    cost: "S$800 – S$2,000",
    period: "/month",
    badge: "For one-off projects",
    highlight: false,
    items: [
      { text: "Hard to find reliable ones", good: false },
      { text: "Inconsistent availability", good: false },
      { text: "No replacement if they disappear", good: false },
      { text: "Lower cost than agencies", good: true },
      { text: "Flexible scope", good: true },
    ],
  },
  {
    name: "In-House Staff",
    cost: "S$2,500 – S$4,500",
    period: "/month + CPF",
    badge: "For larger businesses",
    highlight: false,
    items: [
      { text: "+17% CPF (mandatory)", good: false },
      { text: "14+ days paid annual leave", good: false },
      { text: "1–3 months to replace", good: false },
      { text: "Full HR and admin overhead", good: false },
      { text: "Dedicated full-time attention", good: true },
    ],
  },
  {
    name: "Social Media Manpower",
    cost: "S$600",
    period: "/month, flat",
    badge: "Best for SMEs",
    highlight: true,
    items: [
      { text: "Dedicated remote person", good: true },
      { text: "No CPF, no leave issues", good: true },
      { text: "Replace anytime, no process", good: true },
      { text: "Month-to-month, cancel anytime", good: true },
      { text: "SME-priced from day one", good: true },
    ],
  },
]

const faqItems = [
  {
    q: "What platforms do you manage?",
    a: "We manage Instagram, Facebook, and TikTok as standard. If you need LinkedIn or YouTube, let us know — we can discuss inclusion depending on content type. Most Singapore SMEs see the best results focusing on Instagram and TikTok.",
  },
  {
    q: "How many posts do I get per month?",
    a: "Up to 20 posts per month across your platforms. This includes static graphics, captions, edited photos, and short-form video Reels. The exact split depends on your industry and content volume — we will plan this with you at the start.",
  },
  {
    q: "How do I brief you each month?",
    a: "It is simple — just WhatsApp us your photos, videos, upcoming promotions, and any special messages. We do the rest. No complex forms, no lengthy email briefings. Most clients spend less than 30 minutes per month on this.",
  },
  {
    q: "Can I review and approve content before it goes live?",
    a: "Yes. We share a content preview 3–5 days before posting. You can approve as-is or suggest changes via WhatsApp. Most clients find they need minimal changes after the first month once we understand your brand voice.",
  },
  {
    q: "What languages do you write captions in?",
    a: "We write primarily in English. Basic Chinese (simplified and traditional) captions are available on request — useful for F&B, retail, and beauty clients targeting Chinese-speaking audiences in Singapore.",
  },
  {
    q: "What if I am not happy with the content quality?",
    a: "We revise until you are satisfied. If the quality issue persists or you feel the assigned person is not the right fit, we will replace your manpower at no extra cost. This is a core part of how our service is structured.",
  },
  {
    q: "How quickly can we start?",
    a: "Most clients are onboarded and ready to go within 48 hours of signing up. We will send you a simple onboarding checklist, request your assets, and assign your dedicated person. The first content batch is usually ready within the first week.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "No lock-in contract. We operate month-to-month with 30 days notice to cancel. We are confident the results will keep you with us — but we never use contracts to do that.",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function ServicePage() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.16),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          {/* Breadcrumb badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden="true" />
            <span className="text-[#D4AF37] text-sm font-medium">
              Social Media Management &rsaquo; Singapore
            </span>
          </div>

          {/* H1 — SEO primary keyword */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Social Media Manpower{" "}
            <span className="text-[#D4AF37]">Singapore</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Get dedicated remote manpower to handle your posting, captions, graphics, and
            short-form content from{" "}
            <span className="text-[#D4AF37] font-semibold">S$600/month</span>.
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
            No hiring. No CPF. No agency retainer. Just a dedicated person who shows up for
            your business every single month.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-base hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full sm:w-auto shadow-lg shadow-[#D4AF37]/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Now
            </a>
            <a
              href="#included"
              className="flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-bold text-base hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              See What&apos;s Included
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Quick trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "S$600/month flat",
              "No lock-in contract",
              "Replace anytime",
              "Starts in 48 hrs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                <CheckGold />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. WHAT THIS SERVICE IS ───────────────────────────────────────── */}
      <section id="about" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — explanation */}
            <div>
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-4">
                What This Service Is
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                This is{" "}
                <span className="text-[#D4AF37]">Not</span> a Traditional
                <br />
                Agency Package
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Social Media Manpower is a <strong className="text-white">dedicated remote manpower service</strong>
                {" "}— not a shared agency team, not a freelancer, and not a full-time hire.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                You get one person assigned to your account. They learn your brand, your audience,
                and your tone. Every month, they handle the execution — posting, design, captions,
                and Reels — so you can focus on running your business.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Execution-first",
                    desc: "We skip the lengthy strategy decks. We focus on getting consistent, quality content live every week.",
                  },
                  {
                    title: "One person, your brand",
                    desc: "Not a rotating pool of contractors. Your dedicated person stays with your account month after month.",
                  },
                  {
                    title: "SME-priced, not agency-priced",
                    desc: "At S$600/month, this was designed from the ground up for small business reality — not big brand budgets.",
                  },
                ].map((pt) => (
                  <div key={pt.title} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckGold />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm">{pt.title} — </span>
                      <span className="text-gray-400 text-sm">{pt.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — "not this" card */}
            <div className="space-y-4">
              {[
                {
                  notThis: "Not a traditional agency",
                  because: "No shared teams, no boardroom strategy sessions, no S$5,000 retainers.",
                  isNot: true,
                },
                {
                  notThis: "Not a freelancer arrangement",
                  because: "No chasing after someone who disappears. We replace your manpower if needed — at no cost.",
                  isNot: true,
                },
                {
                  notThis: "Not a full-time hire",
                  because: "No salary, no CPF, no annual leave, no HR headaches. Pure execution output.",
                  isNot: true,
                },
                {
                  notThis: "Your dedicated social media person",
                  because: "One person. Your brand. Consistent content. Every single month.",
                  isNot: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-5 border ${
                    item.isNot
                      ? "bg-[#0A0A0A] border-[#222222]"
                      : "bg-[#D4AF37]/10 border-[#D4AF37]/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {item.isNot ? (
                      <svg className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <div>
                      <p className={`font-semibold text-sm mb-0.5 ${item.isNot ? "text-gray-400 line-through decoration-gray-600" : "text-[#D4AF37]"}`}>
                        {item.notThis}
                      </p>
                      <p className={`text-sm leading-relaxed ${item.isNot ? "text-gray-600" : "text-gray-300"}`}>
                        {item.because}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHO THIS IS FOR ────────────────────────────────────────────── */}
      <section id="who" className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              Who This Is For
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Made for Singapore SME Owners
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              If you run a small business in Singapore and need consistent social media without
              the cost of hiring, this service is for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoIsFor.map((item) => (
              <div
                key={item.label}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300 flex gap-5 items-start"
              >
                <div className="w-11 h-11 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Icon path={item.iconPath} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{item.label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Not for you card */}
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 flex gap-5 items-start sm:col-span-2 lg:col-span-3">
              <div className="w-11 h-11 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-500 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500 font-semibold text-base mb-1">This is NOT for large corporations or established brands</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you have 50+ employees, a marketing budget above S$10,000/month, or require
                  brand-level strategy and multiple campaigns running simultaneously — a full-service
                  agency is a better fit. Our service is purpose-built for lean SMEs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT IS INCLUDED ───────────────────────────────────────────── */}
      <section id="included" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              What&apos;s Included
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Everything Handled. One Flat Price.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              All 7 deliverables are included in your S$600/month plan — no add-ons, no per-post fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {included.map((item) => (
              <div
                key={item.title}
                className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon path={item.iconPath} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHAT IS NOT INCLUDED ───────────────────────────────────────── */}
      <section id="not-included" className="bg-[#0A0A0A] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Transparency First
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Is Not Included</h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              We believe in being upfront. Here is exactly what falls outside the scope of this
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {notIncluded.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start bg-[#111111] border border-[#1e1e1e] rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center shrink-0">
                  <CrossGrey />
                </div>
                <div>
                  <h3 className="text-gray-300 font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-10">
            Need photoshoots or paid ads management?{" "}
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              WhatsApp us
            </a>{" "}
            to discuss add-on options.
          </p>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ───────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#111111] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Simple. Clear. Repeatable.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A five-step monthly workflow designed around how Singapore SME owners actually operate.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center">
                  {/* Step circle */}
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-[#D4AF37]/15">
                    <span className="text-[#0A0A0A] font-bold text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-base hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
            >
              Start the Process — WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. PRICING ────────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-[#0A0A0A] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              One Plan. Everything Included.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              No tiered packages. No confusing add-ons. One flat monthly rate built for SMEs.
            </p>
          </div>

          <div className="bg-[#161616] border-2 border-[#D4AF37] rounded-3xl overflow-hidden relative">
            {/* Gold glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-0">
              {/* Price side */}
              <div className="p-8 sm:p-10 md:border-r border-[#D4AF37]/15">
                <div className="absolute md:static top-5 right-5">
                  <span className="bg-[#D4AF37] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3 mt-6 md:mt-0">
                  Social Media Manpower Plan
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-[#D4AF37] font-bold text-7xl leading-none">S$600</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">per month, per manpower</p>
                <p className="text-gray-600 text-xs mb-8">
                  Flat rate &mdash; no hidden fees, no per-post charges, no lock-in
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "Dedicated remote manpower", sub: "One person assigned to your brand" },
                    { label: "Month-to-month service", sub: "Cancel with 30 days notice" },
                    { label: "Replaceable if not suitable", sub: "We swap at no extra cost" },
                    { label: "Designed for Singapore SMEs", sub: "F&B, beauty, retail, ecommerce" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <CheckGold />
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{f.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{f.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/6591234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Get Started — WhatsApp Now
                </a>
              </div>

              {/* What you get side */}
              <div className="p-8 sm:p-10 border-t md:border-t-0 border-[#D4AF37]/15">
                <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-6">
                  Everything included in S$600/month
                </p>
                <ul className="space-y-3">
                  {[
                    "Up to 20 posts per month",
                    "Instagram, Facebook & TikTok",
                    "Graphic design & photo editing",
                    "Caption writing (EN / basic CN)",
                    "TikTok & IG Reels creation",
                    "Monthly content ideas",
                    "Ad recommendations",
                    "WhatsApp communication",
                    "Content preview before publishing",
                    "Monthly performance summary",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckGold />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 bg-[#0A0A0A] rounded-xl p-4 border border-[#222222]">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    <strong className="text-gray-400">Note:</strong> Photoshoots, paid ads
                    execution, and customer DM management are not included. See{" "}
                    <a href="#not-included" className="text-[#D4AF37] hover:underline">
                      what&apos;s not included
                    </a>{" "}
                    for full transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. COMPARISON ─────────────────────────────────────────────────── */}
      <section id="comparison" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              How We Compare
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Four Options. One Clear Winner for SMEs.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              See how Social Media Manpower stacks up against traditional agencies,
              freelancers, and in-house hires.
            </p>
          </div>

          {/* Scroll hint (mobile only) */}
          <p className="md:hidden text-gray-600 text-xs text-center mb-4 flex items-center justify-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Swipe to compare all options
          </p>

          {/* Cards — horizontally scrollable on mobile */}
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-5 md:grid md:grid-cols-4 w-max md:w-auto">
              {comparisons.map((col) => (
                <div
                  key={col.name}
                  className={`w-64 md:w-auto rounded-2xl p-6 flex flex-col shrink-0 ${
                    col.highlight
                      ? "bg-[#D4AF37]/10 border-2 border-[#D4AF37] relative"
                      : "bg-[#0A0A0A] border border-[#222222] opacity-75"
                  }`}
                >
                  {col.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                      Best for SMEs
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className={`font-bold text-base mb-1 ${col.highlight ? "text-white" : "text-gray-400"}`}>
                      {col.name}
                    </h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                      col.highlight
                        ? "bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30"
                        : "bg-[#1a1a1a] text-gray-500 border-[#2a2a2a]"
                    }`}>
                      {col.badge}
                    </span>
                  </div>

                  <div className="mb-5">
                    <span className={`font-bold text-2xl ${col.highlight ? "text-[#D4AF37]" : "text-gray-400"}`}>
                      {col.cost}
                    </span>
                    <span className="text-gray-500 text-xs ml-1">{col.period}</span>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {col.items.map((item) => (
                      <li key={item.text} className="flex items-start gap-2">
                        {item.good ? (
                          col.highlight ? <CheckGold /> : (
                            <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )
                        ) : (
                          <CrossGrey />
                        )}
                        <span className={`text-xs leading-relaxed ${
                          col.highlight
                            ? item.good ? "text-gray-200" : "text-gray-500"
                            : item.good ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {col.highlight && (
                    <a
                      href="https://wa.me/6591234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-[#D4AF37] text-[#0A0A0A] px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer mt-auto"
                    >
                      Get Started
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[#0A0A0A] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Common Questions About the Service
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto">
              Answers to the most common questions Singapore SME owners ask before getting started.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
          <p className="text-center text-gray-500 text-sm mt-10">
            Still unsure?{" "}
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              WhatsApp us directly
            </a>
            {" "}&mdash; we are happy to answer any question, no sales pressure.
          </p>
        </div>
      </section>

      {/* ── 10. FINAL CTA ─────────────────────────────────────────────────── */}
      <section id="get-started" className="bg-[#111111] py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0A0A0A] border border-[#D4AF37]/25 rounded-3xl px-8 sm:px-14 py-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.10),transparent)]" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-[#D4AF37] text-sm font-medium">
                  Accepting new clients this month
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                Ready to Get Social Media Help
                <br />
                <span className="text-[#D4AF37]">Without Hiring?</span>
              </h2>

              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
                Join hundreds of Singapore SMEs who have outsourced their social media to a
                dedicated professional — for less than the cost of one sales trip.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#D4AF37] font-semibold mb-10">
                {["S$600/month", "No CPF", "Cancel anytime", "Start in 48 hours"].map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="text-[#D4AF37]/30 text-xs">&bull;</span>}
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/6591234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#0A0A0A] px-10 py-4 rounded-full font-bold text-base hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full sm:w-auto shadow-lg shadow-[#D4AF37]/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp Us Today
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckWhite />
                  <span>No sales pressure &bull; Reply within 1 hour</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-gray-500">
                <a
                  href="https://wa.me/6591234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer"
                >
                  +65 9123 4567
                </a>
                <span className="hidden sm:block text-gray-700">&bull;</span>
                <a
                  href="mailto:hello@socialmediamanpower.sg"
                  className="hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer"
                >
                  hello@socialmediamanpower.sg
                </a>
                <span className="hidden sm:block text-gray-700">&bull;</span>
                <span>Singapore &bull; Mon&ndash;Fri 9am&ndash;6pm SGT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
