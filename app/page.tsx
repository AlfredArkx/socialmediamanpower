import type { Metadata } from "next"
import FAQAccordion from "@/components/FAQAccordion"

export const metadata: Metadata = {
  title:
    "Affordable Social Media Manpower in Singapore – From $600/month | No Hiring, No CPF",
  description:
    "Dedicated social media manpower for Singapore SMEs — F&B, beauty salons, retail & ecommerce. Content creation, posting, captions, graphic design and more. From S$600/month, no hiring, no CPF.",
  keywords: [
    "social media manpower singapore",
    "affordable social media singapore",
    "social media manager singapore SME",
    "social media for small business singapore",
    "outsource social media singapore",
    "social media $600 singapore",
  ],
}

// ─── SVG icon helper ─────────────────────────────────────────────────────────
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
      className="w-4 h-4 text-[#D4AF37] shrink-0"
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

function CheckWhite() {
  return (
    <svg
      className="w-4 h-4 text-white shrink-0"
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

function CrossRed() {
  return (
    <svg
      className="w-4 h-4 text-red-500/70 shrink-0"
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    iconPath: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "No Time to Post",
    desc: "You're running a full business. Consistent social media falls through the cracks every single week.",
  },
  {
    iconPath:
      "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Hiring Is Too Expensive",
    desc: "A full-time social media exec costs S$2,500+ in salary alone — before CPF, leave, and training.",
  },
  {
    iconPath:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "No In-House Designer",
    desc: "Good visuals matter. But without a designer, your posts look amateur and hurt your brand's image.",
  },
  {
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Inconsistent Posting",
    desc: "You post for a week, disappear for a month. Inconsistency kills engagement and makes your brand look inactive.",
  },
]

const solutions = [
  {
    iconPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Dedicated Remote Manpower",
    desc: "One person assigned specifically to your account. They learn your brand, your tone, your products.",
  },
  {
    iconPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Done-For-You Content",
    desc: "You share your direction and raw assets. We handle design, captions, scheduling — everything.",
  },
  {
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Simple Monthly Workflow",
    desc: "Weekly content plan, you approve via WhatsApp, we execute. No meetings, no complexity.",
  },
  {
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Built for Singapore SMEs",
    desc: "No bloated agency packages. Priced and designed specifically for F&B, retail, beauty & ecommerce.",
  },
]

const services = [
  {
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Posting & Scheduling",
    desc: "Up to 20 posts/month across Instagram, Facebook, and TikTok — all scheduled at peak engagement times.",
  },
  {
    iconPath:
      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    title: "Caption Writing",
    desc: "Engaging English (and basic Chinese) captions with relevant hashtags tailored to Singapore audiences.",
  },
  {
    iconPath:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "Graphic Design",
    desc: "On-brand social media graphics — promotional cards, quote posts, product highlights, and event announcements.",
  },
  {
    iconPath:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Photo Editing",
    desc: "Basic product and food photo editing — brightness, colour correction, cropping, and background removal.",
  },
  {
    iconPath:
      "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    title: "TikTok & IG Reels Creation",
    desc: "Short-form video editing from your raw footage — trending formats, captions, music, and effects for viral reach.",
  },
  {
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Marketing Ideas & Ad Tips",
    desc: "Monthly campaign suggestions, promotion ideas, and ad recommendations based on what's working in your industry.",
  },
]

const comparison = [
  {
    label: "Monthly Cost",
    inHouse: "S$2,500 – S$4,500 salary",
    smm: "S$600/month, flat rate",
  },
  {
    label: "CPF Contribution",
    inHouse: "+17% employer CPF (mandatory)",
    smm: "Not applicable — zero",
  },
  {
    label: "Annual Leave",
    inHouse: "14+ paid days per year",
    smm: "No coverage gaps",
  },
  {
    label: "Training & Onboarding",
    inHouse: "S$500 – S$2,000 + weeks of time",
    smm: "Trained & ready from day 1",
  },
  {
    label: "Replacement Process",
    inHouse: "1–3 months, full HR process",
    smm: "Anytime, no questions asked",
  },
  {
    label: "Contract Type",
    inHouse: "Permanent employment contract",
    smm: "Month-to-month, cancel anytime",
  },
  {
    label: "Management Overhead",
    inHouse: "Full daily supervision needed",
    smm: "Self-managed with light oversight",
  },
]

const portfolioItems = [
  {
    platform: "Instagram",
    label: "Product Post",
    niche: "F&B",
    bg: "from-amber-950 to-[#0A0A0A]",
    accent: "from-[#D4AF37]/20 to-transparent",
    isReel: false,
  },
  {
    platform: "TikTok",
    label: "Reel — Tutorial",
    niche: "Beauty",
    bg: "from-violet-950 to-[#0A0A0A]",
    accent: "from-violet-500/15 to-transparent",
    isReel: true,
  },
  {
    platform: "Facebook",
    label: "Promo Banner",
    niche: "Retail",
    bg: "from-blue-950 to-[#0A0A0A]",
    accent: "from-blue-500/15 to-transparent",
    isReel: false,
  },
  {
    platform: "Instagram",
    label: "Product Reel",
    niche: "Ecommerce",
    bg: "from-emerald-950 to-[#0A0A0A]",
    accent: "from-emerald-500/15 to-transparent",
    isReel: true,
  },
  {
    platform: "TikTok",
    label: "Behind the Scenes",
    niche: "F&B",
    bg: "from-rose-950 to-[#0A0A0A]",
    accent: "from-rose-500/15 to-transparent",
    isReel: true,
  },
  {
    platform: "Instagram",
    label: "Before & After",
    niche: "Beauty",
    bg: "from-yellow-950 to-[#0A0A0A]",
    accent: "from-yellow-500/15 to-transparent",
    isReel: false,
  },
]

const industries = [
  {
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    title: "F&B",
    desc: "Cafes, restaurants, bakeries, hawkers & cloud kitchens. Build a hungry following online.",
    tag: "Food & Beverage",
  },
  {
    iconPath:
      "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    title: "Beauty & Wellness",
    desc: "Salons, nail studios, spas, skincare brands & clinics. Showcase your work and book more clients.",
    tag: "Beauty & Wellness",
  },
  {
    iconPath:
      "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Retail",
    desc: "Boutiques, fashion stores, home goods & lifestyle shops. Drive foot traffic and online discovery.",
    tag: "Retail & Fashion",
  },
  {
    iconPath:
      "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    title: "Ecommerce",
    desc: "Online shops, Shopee/Lazada sellers & DTC brands. Convert followers into customers with consistent content.",
    tag: "Online & Ecommerce",
  },
]

const whyItems = [
  {
    iconPath:
      "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Fixed Low-Cost Pricing",
    desc: "S$600/month. No surprise invoices, no add-ons, no per-post fees. One flat rate covers everything.",
    stat: "S$600/mo",
  },
  {
    iconPath:
      "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Your Own Dedicated Person",
    desc: "Not a shared team of strangers. One person who learns your business inside out and commits to your growth.",
    stat: "1:1 Dedicated",
  },
  {
    iconPath:
      "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Replace Anytime — No Hassle",
    desc: "Not happy with your assigned person? Tell us and we'll replace them at no cost. Zero HR drama.",
    stat: "Anytime",
  },
  {
    iconPath:
      "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    title: "Built for Singapore SMEs",
    desc: "Designed from the ground up for small business owners who need professional social media without agency-level costs.",
    stat: "SME-First",
  },
]

const faqItems = [
  {
    q: "What exactly is included in the S$600/month plan?",
    a: "Your plan includes a dedicated social media person who handles: content planning (up to 20 posts/month), graphic design, caption writing in English (basic Chinese available), post scheduling across Instagram, Facebook & TikTok, basic photo editing, and a monthly performance summary. Everything is done-for-you.",
  },
  {
    q: "Is this fully remote? Does your team come to my shop?",
    a: "Yes, fully remote. Your assigned person works remotely and communicates with you via WhatsApp or email. You send us raw photos, videos, and your key messages — we handle the rest. No need for site visits.",
  },
  {
    q: "Do you handle photoshoots for my products or food?",
    a: "Photoshoots are not included in the base plan. You provide raw photos and videos of your products, food, or services. We then edit, design, and create polished social media posts from your materials. Many clients use their smartphone — we make it look professional.",
  },
  {
    q: "Will you reply to customer comments and DMs?",
    a: "Basic comment management is included — we handle general comments and engage with your audience on posts. For DMs that require specific product knowledge or business decisions (e.g. pricing, availability), we flag these to you to reply personally. This keeps responses accurate and personal.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No lock-in. We operate on a simple month-to-month arrangement. Just give us 30 days notice if you wish to pause or stop. We believe our results keep clients — not contracts.",
  },
  {
    q: "Can I replace my assigned social media person?",
    a: "Absolutely. If your assigned person isn't the right fit — personality, style, or results — we'll replace them at no extra cost. This is one of our key advantages over traditional hiring, and it's completely hassle-free.",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.18),transparent)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-[#D4AF37] text-sm font-medium">
              Trusted by 200+ Singapore SMEs
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-tight mb-5">
            Affordable Social Media Manpower
            <br />
            in Singapore &ndash;{" "}
            <span className="text-[#D4AF37]">From S$600/month</span>
          </h1>

          {/* Sub-tagline */}
          <p className="text-white text-xl sm:text-2xl font-semibold mb-4">
            No hiring. No CPF. No stress. Just results.
          </p>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Your own dedicated social media person — handling content creation, posting,
            graphic design, and captions for your Singapore business.
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
              href="#pricing"
              className="flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-bold text-base hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              View Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "200+ SMEs Served",
              "No Lock-in Contract",
              "Starts in 48 Hours",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                <CheckGold />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Platforms strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-600 text-xs uppercase tracking-widest mr-1">We manage:</span>
            {["Instagram", "TikTok", "Facebook", "YouTube", "X", "LinkedIn"].map((p) => (
              <span
                key={p}
                className="bg-[#161616] border border-[#262626] text-gray-500 text-xs px-3 py-1.5 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────────── */}
      <section id="problem" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Does This Sound Familiar?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Most Singapore SME owners are stuck in the same social media cycle. Here&apos;s why.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-[#0A0A0A] border border-red-900/20 hover:border-red-800/40 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-950/50 rounded-xl flex items-center justify-center text-red-400/80 mb-5">
                  <Icon path={p.iconPath} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION ─────────────────────────────────────────────────────── */}
      <section id="solution" className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-4">
                The Solution
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Meet Your Dedicated{" "}
                <span className="text-[#D4AF37]">Social Media Person</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Social Media Manpower assigns you a dedicated remote professional who handles
                everything — content, posting, design, captions — at a fraction of the cost of
                hiring in-house.
              </p>
              <div className="space-y-5">
                {solutions.map((s) => (
                  <div key={s.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                      <Icon path={s.iconPath} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">{s.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — price card */}
            <div className="bg-[#161616] border border-[#D4AF37]/25 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">
                  Starting from
                </p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-[#D4AF37] font-bold text-6xl">S$600</span>
                  <span className="text-gray-400 text-base mb-3">/month</span>
                </div>
                <p className="text-gray-500 text-sm mb-8">
                  Flat rate &mdash; no hidden fees, no per-post charges
                </p>

                <ul className="space-y-3 mb-9">
                  {[
                    "Dedicated social media person",
                    "Content planning & strategy",
                    "Graphic design & photo editing",
                    "Caption writing (EN / basic CN)",
                    "Post scheduling & publishing",
                    "Monthly performance summary",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckGold />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6591234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp to Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              What&apos;s Included
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Everything Handled. One Simple Price.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              All 6 core services are included in your S$600/month plan. No add-ons, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon path={s.iconPath} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRICING COMPARISON ───────────────────────────────────────────── */}
      <section id="pricing" className="bg-[#0A0A0A] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Stop Overpaying. Start Growing.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Hiring in-house costs 5&times; more — with double the headaches. See why 200+ SMEs
              chose us instead.
            </p>
          </div>

          {/* Desktop comparison */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {/* In-house card */}
            <div className="bg-[#111111] border border-[#333333] rounded-3xl p-8 opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <h3 className="text-gray-400 font-bold text-xl">In-House Staff</h3>
              </div>
              <div className="mb-1">
                <span className="text-gray-400 font-bold text-4xl">S$3,000+</span>
              </div>
              <p className="text-gray-600 text-sm mb-8">per month, minimum effective cost</p>
              <ul className="space-y-0 divide-y divide-[#1e1e1e]">
                {comparison.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 py-3.5">
                    <CrossRed />
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{row.label}</p>
                      <p className="text-gray-400 text-sm">{row.inHouse}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* SMM card */}
            <div className="bg-[#D4AF37]/8 border-2 border-[#D4AF37] rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full whitespace-nowrap">
                Recommended
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
                <h3 className="text-white font-bold text-xl">Social Media Manpower</h3>
              </div>
              <div className="mb-1">
                <span className="text-[#D4AF37] font-bold text-4xl">S$600</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">per month, flat rate — all-inclusive</p>
              <ul className="space-y-0 divide-y divide-[#D4AF37]/10">
                {comparison.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 py-3.5">
                    <CheckGold />
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{row.label}</p>
                      <p className="text-white text-sm font-medium">{row.smm}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6591234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full mt-8"
              >
                Get Started for S$600/month
              </a>
            </div>
          </div>

          {/* Mobile comparison — stacked rows */}
          <div className="md:hidden space-y-3">
            <div className="grid grid-cols-3 gap-2 pb-2 border-b border-[#222222]">
              <div className="col-span-1" />
              <div className="text-center">
                <p className="text-gray-400 text-xs font-semibold">In-House</p>
                <p className="text-gray-400 font-bold text-lg">S$3k+</p>
              </div>
              <div className="text-center">
                <p className="text-[#D4AF37] text-xs font-semibold">Our Plan</p>
                <p className="text-[#D4AF37] font-bold text-lg">S$600</p>
              </div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 gap-2 py-3 border-b border-[#1a1a1a] items-start"
              >
                <p className="text-gray-500 text-xs leading-tight">{row.label}</p>
                <div className="flex items-start justify-center gap-1">
                  <CrossRed />
                  <p className="text-gray-500 text-xs leading-tight text-center">{row.inHouse}</p>
                </div>
                <div className="flex items-start justify-center gap-1">
                  <CheckGold />
                  <p className="text-[#D4AF37] text-xs leading-tight font-medium text-center">{row.smm}</p>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <a
                href="https://wa.me/6591234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-6 py-4 rounded-xl font-bold text-sm hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full"
              >
                Start for S$600/month
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PORTFOLIO PREVIEW ────────────────────────────────────────────── */}
      <section id="portfolio" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Content That Stops the Scroll
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Sample posts created for Singapore SMEs across F&amp;B, beauty, retail, and ecommerce.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} group cursor-default`}
              >
                {/* Inner glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
                />
                {/* Decorative lines to simulate content */}
                <div className="absolute inset-8 flex flex-col justify-center items-center gap-2 opacity-20">
                  <div className="w-full h-1 bg-white rounded-full" />
                  <div className="w-4/5 h-1 bg-white rounded-full" />
                  <div className="w-3/5 h-1 bg-white rounded-full" />
                </div>
                {/* Platform badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {item.isReel && (
                    <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">
                      REEL
                    </span>
                  )}
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded border border-white/10">
                    {item.platform}
                  </span>
                </div>
                {/* Niche tag top-left */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#D4AF37]/30">
                    {item.niche}
                  </span>
                </div>
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <div className="mt-1.5 space-y-1">
                    <div className="h-1.5 bg-white/25 rounded-full w-4/5" />
                    <div className="h-1.5 bg-white/15 rounded-full w-3/5" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-6">
              Portfolio updating regularly. WhatsApp us to see industry-specific samples.
            </p>
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer"
            >
              Request Portfolio Samples
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. INDUSTRIES ───────────────────────────────────────────────────── */}
      <section id="industries" className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              Who We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Built for Singapore SMEs
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We specialise in helping local businesses grow their social media presence across four key industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-7 hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon path={ind.iconPath} className="w-7 h-7" />
                </div>
                <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 border border-[#D4AF37]/20">
                  {ind.tag}
                </span>
                <h3 className="text-white font-bold text-xl mb-2">{ind.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section id="why-us" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The Smarter Way to Grow Your Social Media
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Not just an agency. Your dedicated growth partner — priced for small business reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 flex gap-6 items-start"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Icon path={item.iconPath} className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold px-2.5 py-1 rounded-full border border-[#D4AF37]/20 shrink-0">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-10 bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/4 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-xl font-medium leading-relaxed mb-5">
                  &ldquo;We went from posting once a month to daily. Our Instagram grew from 800 to
                  18,000 followers in 6 months. Worth every cent of the S$600.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Michelle Lim</p>
                    <p className="text-gray-400 text-xs">Owner, Blossom Nails Studio, Tampines</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "18K", label: "Instagram followers (from 800)" },
                  { val: "6mo", label: "To hit results" },
                  { val: "340%", label: "More booking enquiries" },
                  { val: "S$600", label: "Monthly investment" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#161616] border border-[#222222] rounded-xl p-4 text-center"
                  >
                    <p className="text-[#D4AF37] font-bold text-2xl mb-1">{m.val}</p>
                    <p className="text-gray-500 text-xs leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[#0A0A0A] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know before getting started.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
          <p className="text-center text-gray-500 text-sm mt-8">
            Have a question not listed here?{" "}
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              WhatsApp us directly
            </a>{" "}
            &mdash; we reply fast.
          </p>
        </div>
      </section>

      {/* ── 10. FINAL CTA ───────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#111111] py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0A0A0A] border border-[#D4AF37]/25 rounded-3xl px-8 sm:px-14 py-16 text-center overflow-hidden">
            {/* Background glow */}
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
                  Limited spots available this month
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Stop Struggling
                <br />
                With Social Media?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4">
                Join 200+ Singapore SMEs who are already growing with dedicated social media
                manpower.
              </p>
              <p className="text-[#D4AF37] font-semibold text-base mb-10">
                S$600/month &bull; No CPF &bull; Cancel anytime &bull; Start in 48 hours
              </p>

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
                  WhatsApp Us Now &mdash; It&apos;s Free
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckWhite />
                  <span className="text-gray-400">No sales pressure &bull; Reply within 1 hour</span>
                </div>
              </div>

              {/* Quick contact info */}
              <div className="mt-10 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
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
                <span>Singapore &bull; Mon&ndash;Fri, 9am&ndash;6pm SGT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
