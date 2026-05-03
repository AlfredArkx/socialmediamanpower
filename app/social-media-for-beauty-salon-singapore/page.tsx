import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Social Media for Beauty Salons Singapore | Grow Your Bookings from S$600/month",
  description:
    "Dedicated social media management for beauty salons, nail salons, lash studios, and facial spas in Singapore. Consistent posting, before/after designs, promo graphics — from S$600/month. No hiring needed.",
  keywords: [
    "beauty salon social media singapore",
    "social media for beauty salon singapore",
    "salon marketing singapore",
    "nail salon social media singapore",
    "lash salon marketing singapore",
    "facial spa social media singapore",
    "beauty business instagram singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.com/social-media-for-beauty-salon-singapore",
  },
  openGraph: {
    title: "Social Media for Beauty Salons Singapore | From S$600/month",
    description:
      "Attract more bookings with consistent social media — treatment highlights, before/after posts, promo graphics, and Reels. Built for Singapore beauty businesses.",
    url: "https://socialmediamanpower.com/social-media-for-beauty-salon-singapore",
    type: "website",
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

function CheckWhite() {
  return (
    <svg
      className="w-4 h-4 text-white shrink-0 mt-0.5"
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

const painPoints = [
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "No time to create posts",
    desc: "You&apos;re doing treatments back-to-back all day. Writing captions, editing graphics, and scheduling posts simply doesn&apos;t happen.",
  },
  {
    icon: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46",
    title: "Promotions are not seen",
    desc: "You run monthly deals and package specials, but without consistent posting and the right hashtags, only existing clients ever see them.",
  },
  {
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Before/after results not showcased",
    desc: "Your work speaks for itself — but if the photos aren&apos;t presented cleanly and consistently, the results don&apos;t convert browsers into bookers.",
  },
  {
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    title: "Social media looks inconsistent",
    desc: "A mix of random phone photos, different styles, and long posting gaps makes your salon look unprofessional to first-time visitors checking your profile.",
  },
]

const whyMatters = [
  {
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H7.5v-.008zm0-3h.008v.008H7.5v-.008zm0-3h.008v.008H7.5v-.008z",
    title: "Clients check social media before booking",
    desc: "Before a new customer books a lash lift, facial, or nail set, they visit your Instagram to judge your work. Your grid is your portfolio — it either wins or loses the booking.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Visual trust drives bookings",
    desc: "Beauty is an entirely visual category. Consistent, well-presented content builds the credibility that turns a profile visitor into a paying client — especially for higher-value treatments.",
  },
  {
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    title: "Transformations and reviews build confidence",
    desc: "Seeing a real before/after from someone with similar concerns, paired with a genuine review, removes hesitation. That social proof is the final push that turns a &ldquo;maybe&rdquo; into a confirmed booking.",
  },
]

const howWeHelp = [
  {
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    title: "Treatment highlight posts",
    desc: "Showcase each service — lash sets, gel nails, facials, brow sculpting — with styled captions that communicate the quality and outcome of your work.",
  },
  {
    icon: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    title: "Promo graphics",
    desc: "Festive packages, flash sales, referral deals, and loyalty offers — designed on-brand so your promotions look polished and get noticed.",
  },
  {
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    title: "Before/after layout designs",
    desc: "We format your transformation photos into clean, professional split-frame layouts that let your results speak loudly and look credible.",
  },
  {
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    title: "Reels from static assets",
    desc: "No video shoot needed. We create short-form Reel content from your existing photos and treatment images — styled with text, transitions, and trending audio guidance.",
  },
  {
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    title: "Caption writing",
    desc: "Engaging, on-brand captions with the right hashtags, calls to action, and tone — written to attract your ideal client and prompt them to book.",
  },
]

const contentIdeas = [
  {
    label: "Monthly Promotions",
    desc: "Package deals, festive specials, and seasonal offers — designed to drive bookings from both new and returning clients.",
    gradient: "from-rose-900/40 to-pink-900/30",
    accentColor: "text-rose-400",
    icon: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    examples: ["CNY lash promo", "Birthday month deals", "Buy-3-get-1 packages"],
  },
  {
    label: "Treatment Education",
    desc: "Educate potential clients on what each treatment involves, how long results last, and who it&apos;s suitable for — reducing hesitation.",
    gradient: "from-violet-900/40 to-purple-900/30",
    accentColor: "text-violet-400",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    examples: ["What is a lash lift?", "Gel vs gel-X nails", "Facial skin benefits"],
  },
  {
    label: "Customer Testimonials",
    desc: "Real words from real clients, formatted into trust-building graphics that speak to new customers considering their first booking.",
    gradient: "from-amber-900/40 to-yellow-900/30",
    accentColor: "text-amber-400",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    examples: ["5-star review graphics", "Client quote cards", "Google review reposts"],
  },
  {
    label: "Before/After Visuals",
    desc: "Side-by-side transformation posts that make your skill undeniable — the single most powerful content type for beauty businesses.",
    gradient: "from-teal-900/40 to-emerald-900/30",
    accentColor: "text-teal-400",
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    examples: ["Lash extensions results", "Nail art transformations", "Facial skin glow-ups"],
  },
  {
    label: "Beauty Tips & Reels",
    desc: "Short, value-packed tips and Reel-style content that grow your reach, build authority, and introduce your salon to new audiences.",
    gradient: "from-sky-900/40 to-blue-900/30",
    accentColor: "text-sky-400",
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    examples: ["Aftercare tips", "Nail shape guide", "Skincare routine videos"],
  },
]

const whyUs = [
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "From S$600/month",
    desc: "A part-time social media hire still costs S$1,500&ndash;S$2,500/month. We deliver full social media management for a fraction of the cost — with no recruitment overhead.",
  },
  {
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    title: "No hiring needed",
    desc: "No interviews, trials, or onboarding. Your dedicated social media person is ready to start — you just send us your photos and treatment menu.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Replaceable manpower",
    desc: "If your assigned person is unavailable, we replace them immediately. Your salon&apos;s social media never misses a post or a promo deadline.",
  },
  {
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    title: "Built for Singapore beauty SMEs",
    desc: "We understand how Singapore beauty clients research, browse, and book. Our content strategy is built around what actually works for local salons.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BeautySalonLandingPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -10%, #D4AF3760 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Soft rose accent — bottom-left */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />
        {/* Soft violet accent — top-right */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          {/* Breadcrumb badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Beauty Salon &rsaquo; Nail Salon &rsaquo; Lash &amp; Brow Studio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Media for{" "}
            <span className="text-[#D4AF37]">Beauty Salons</span>{" "}
            in Singapore
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Showcase your treatments, promotions, reviews, and transformations consistently
            online — without hiring full-time staff.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
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
              href="/social-media-manpower-singapore#pricing"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              See Pricing
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {[
              "From S$600/month",
              "No CPF. No hiring",
              "Built for Singapore beauty SMEs",
              "Start in 3 days",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM SECTION ──────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Sound familiar?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Social Media Struggle Every Salon Faces
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/20 transition-colors duration-200 cursor-default"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY SOCIAL MEDIA MATTERS ──────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              The opportunity
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Social Media Matters for{" "}
              <span className="text-[#D4AF37]">Beauty Businesses</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Every day your profile sits dormant, potential clients are booking the salon
              down the road instead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMatters.map((w) => (
              <div
                key={w.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default group"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/15 transition-colors duration-200">
                  <svg
                    className="w-7 h-7 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={w.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{w.title}</h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: w.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW OUR SERVICE HELPS ─────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              What we do for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How Our Service Helps Your Salon
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              We manage your social media end-to-end, so you can focus on delivering great
              treatments without worrying about your feed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {howWeHelp.map((h, i) => (
              <div
                key={h.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default group"
              >
                <div className="mb-4">
                  <span className="text-3xl font-black text-[#D4AF37]/20 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/15 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={h.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{h.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CONTENT IDEAS ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Content strategy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Content Ideas for Your{" "}
              <span className="text-[#D4AF37]">Beauty Business</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              A strategic mix of content types keeps your audience engaged and steadily
              growing week over week.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentIdeas.map((c) => (
              <div
                key={c.label}
                className={`bg-gradient-to-br ${c.gradient} border border-[#333333] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#D4AF37]/15 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className={`w-5 h-5 ${c.accentColor}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${c.accentColor}`}>
                    {c.label}
                  </span>
                </div>

                {/* Mock post preview lines */}
                <div className="space-y-2 mb-4">
                  <div className="h-2 bg-white/10 rounded-full w-4/5" />
                  <div className="h-2 bg-white/6 rounded-full w-3/5" />
                  <div className="h-2 bg-white/6 rounded-full w-2/3" />
                </div>

                <p
                  className="text-gray-300 text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: c.desc }}
                />

                <ul className="space-y-1.5">
                  {c.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckGold />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Why us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Beauty Salon Owners Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyUs.map((w) => (
              <div
                key={w.title}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={w.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: w.desc }}
                />
              </div>
            ))}
          </div>

          {/* Social proof strip */}
          <div className="bg-[#161616] border border-[#D4AF37]/15 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-gray-400 text-sm mb-2">Trusted by Singapore SMEs across</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[
                "Nail Salons",
                "Lash Studios",
                "Brow Bars",
                "Facial Spas",
                "Wellness Centres",
                "Hair Salons",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────────────── */}
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
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-rose-900/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Ready to grow your salon?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Let us help your salon look{" "}
            <span className="text-[#D4AF37]">active and professional</span>{" "}
            online
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. No hiring. No CPF. Consistent content that attracts clients
            and keeps your booking calendar full.
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
              WhatsApp us now
            </a>
            <Link
              href="/social-media-manpower-singapore"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              Learn more about our service
            </Link>
          </div>

          {/* Micro-trust */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["No long-term contracts", "Cancel anytime", "Start within 3 days"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckWhite />
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
