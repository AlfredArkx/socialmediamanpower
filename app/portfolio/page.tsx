import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Social Media Portfolio Singapore | Social Media Manpower",
  description:
    "View sample social media content styles for Singapore SMEs including F&B, beauty, retail and ecommerce businesses. See what consistent, professional social media looks like.",
  keywords: [
    "social media portfolio singapore",
    "social media content samples singapore",
    "social media management examples",
    "singapore sme social media content",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.com/portfolio",
  },
  openGraph: {
    title: "Social Media Portfolio Singapore | Social Media Manpower",
    description:
      "Sample content styles for F&B, beauty, retail, and ecommerce businesses in Singapore — see the quality and consistency we deliver.",
    url: "https://socialmediamanpower.com/portfolio",
    type: "website",
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

type ContentType = "Promo" | "Reel" | "Product Post" | "Educational Post" | "Before/After"
type Category = "F&B" | "Beauty & Wellness" | "Retail" | "Ecommerce"

interface PortfolioCard {
  category: Category
  contentType: ContentType
  title: string
  desc: string
  bgGradient: string
  iconPath: string
  accentColor: string
  badgeColor: string
  platform: "Instagram" | "TikTok" | "Facebook"
  simLines: number[]
}

const portfolioCards: PortfolioCard[] = [
  // ── F&B ──────────────────────────────────────────────────────────────────
  {
    category: "F&B",
    contentType: "Promo",
    title: "Weekend Set Lunch Promotion",
    desc: "Bold promo graphic for a local cafe's weekend set — designed to drive walk-ins and shares.",
    bgGradient: "from-orange-900/70 via-amber-900/50 to-yellow-900/40",
    iconPath: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    accentColor: "text-amber-400",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    platform: "Instagram",
    simLines: [4, 3, 4],
  },
  {
    category: "F&B",
    contentType: "Reel",
    title: "Kitchen Behind-the-Scenes",
    desc: "Short-form Reel showing the chef plating a signature dish — authentic content that humanises the brand.",
    bgGradient: "from-red-900/70 via-orange-900/50 to-amber-900/40",
    iconPath: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    accentColor: "text-red-400",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    platform: "TikTok",
    simLines: [3, 4, 2],
  },
  {
    category: "F&B",
    contentType: "Product Post",
    title: "Signature Dish Spotlight",
    desc: "Styled single-dish feature post with caption highlighting ingredients and vibe — designed to stop the scroll.",
    bgGradient: "from-yellow-900/70 via-amber-900/50 to-orange-900/40",
    iconPath: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V9.75zm-3 3h.008v.008H9V12.75zm0 3h.008v.008H9V15.75zm3-3h.008v.008H12V12.75zm0 3h.008v.008H12V15.75zm3-3h.008v.008H15V12.75zm0 3h.008v.008H15V15.75z",
    accentColor: "text-yellow-400",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    platform: "Instagram",
    simLines: [4, 3, 4],
  },

  // ── Beauty & Wellness ────────────────────────────────────────────────────
  {
    category: "Beauty & Wellness",
    contentType: "Before/After",
    title: "Lash Extension Transformation",
    desc: "Split-frame before/after layout for a lash studio — clean, credible, and compelling for new clients.",
    bgGradient: "from-rose-900/70 via-pink-900/50 to-fuchsia-900/40",
    iconPath: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    accentColor: "text-rose-400",
    badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    platform: "Instagram",
    simLines: [4, 3, 3],
  },
  {
    category: "Beauty & Wellness",
    contentType: "Promo",
    title: "Monthly Facial Package",
    desc: "On-brand promo graphic for a spa's signature facial package — designed to generate WhatsApp enquiries.",
    bgGradient: "from-violet-900/70 via-purple-900/50 to-fuchsia-900/40",
    iconPath: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    accentColor: "text-violet-400",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    platform: "Facebook",
    simLines: [3, 4, 3],
  },
  {
    category: "Beauty & Wellness",
    contentType: "Educational Post",
    title: "Nail Care Tips Carousel",
    desc: "5-slide educational carousel for a nail salon — builds authority and keeps followers coming back.",
    bgGradient: "from-pink-900/70 via-rose-900/50 to-violet-900/40",
    iconPath: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    accentColor: "text-pink-400",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    platform: "Instagram",
    simLines: [3, 4, 4],
  },

  // ── Retail ────────────────────────────────────────────────────────────────
  {
    category: "Retail",
    contentType: "Product Post",
    title: "New Arrival Announcement",
    desc: "New collection reveal post for a fashion boutique — styled flat-lay format with on-brand typography.",
    bgGradient: "from-teal-900/70 via-cyan-900/50 to-sky-900/40",
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    accentColor: "text-teal-400",
    badgeColor: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    platform: "Instagram",
    simLines: [4, 3, 3],
  },
  {
    category: "Retail",
    contentType: "Promo",
    title: "End-of-Season Sale Graphic",
    desc: "High-contrast sale poster for a local accessories brand — designed to drive footfall and online clicks.",
    bgGradient: "from-sky-900/70 via-blue-900/50 to-indigo-900/40",
    iconPath: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    accentColor: "text-sky-400",
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    platform: "Facebook",
    simLines: [3, 4, 3],
  },
  {
    category: "Retail",
    contentType: "Reel",
    title: "Product Unboxing Reel",
    desc: "Reel built from product photos for a home goods store — cut to music with text overlays highlighting key features.",
    bgGradient: "from-emerald-900/70 via-teal-900/50 to-cyan-900/40",
    iconPath: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    accentColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    platform: "TikTok",
    simLines: [3, 3, 4],
  },

  // ── Ecommerce ─────────────────────────────────────────────────────────────
  {
    category: "Ecommerce",
    contentType: "Product Post",
    title: "Shopee Bestseller Feature",
    desc: "Product highlight post for a Shopee top-seller — showcasing ratings, key features, and a clear shop link CTA.",
    bgGradient: "from-blue-900/70 via-indigo-900/50 to-violet-900/40",
    iconPath: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    accentColor: "text-blue-400",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    platform: "Instagram",
    simLines: [4, 3, 4],
  },
  {
    category: "Ecommerce",
    contentType: "Promo",
    title: "11.11 Flash Sale Graphic",
    desc: "Campaign sale graphic for a Lazada seller — bold countdown urgency design that drives click-throughs during major sale events.",
    bgGradient: "from-orange-900/70 via-red-900/50 to-rose-900/40",
    iconPath: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    accentColor: "text-orange-400",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    platform: "Facebook",
    simLines: [3, 4, 3],
  },
  {
    category: "Ecommerce",
    contentType: "Reel",
    title: "TikTok Shop New Launch",
    desc: "Product launch Reel assembled from static images for a TikTok Shop brand — styled with transitions and trending-format captions.",
    bgGradient: "from-purple-900/70 via-violet-900/50 to-indigo-900/40",
    iconPath: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    accentColor: "text-purple-400",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    platform: "TikTok",
    simLines: [3, 4, 3],
  },
]

const categoryMeta: Record<Category, { color: string; tagBg: string }> = {
  "F&B":               { color: "text-amber-400",   tagBg: "bg-amber-500/15 text-amber-400 border-amber-500/25" },
  "Beauty & Wellness": { color: "text-rose-400",    tagBg: "bg-rose-500/15 text-rose-400 border-rose-500/25" },
  "Retail":            { color: "text-teal-400",    tagBg: "bg-teal-500/15 text-teal-400 border-teal-500/25" },
  "Ecommerce":         { color: "text-blue-400",    tagBg: "bg-blue-500/15 text-blue-400 border-blue-500/25" },
}

const contentTypeMeta: Record<ContentType, string> = {
  "Promo":            "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/25",
  "Reel":             "bg-white/8 text-white border-white/20",
  "Product Post":     "bg-gray-500/15 text-gray-300 border-gray-500/25",
  "Educational Post": "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  "Before/After":     "bg-pink-500/15 text-pink-300 border-pink-500/25",
}

const platformIcon: Record<string, string> = {
  Instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  TikTok:   "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z",
  Facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
}

const resultStrip = [
  {
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5",
    value: "Consistent posting",
    desc: "Your feed stays active every week, building algorithm momentum and keeping your brand top of mind.",
  },
  {
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    value: "Better visuals",
    desc: "Professionally designed posts that match your brand and make a strong first impression on new visitors.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    value: "Faster turnaround",
    desc: "Content produced and ready to post in days, not weeks — so you never miss a sale or seasonal moment.",
  },
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    value: "Lower cost than hiring",
    desc: "From S$600/month — no CPF, no benefits, no recruitment. Full social media output without the full-time headcount.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Client sends photos & info",
    desc: "You share your product photos, service details, upcoming promotions, and any brand guidelines via WhatsApp or Google Drive.",
  },
  {
    num: "02",
    title: "We plan the content angle",
    desc: "Our team reviews your assets and maps them to a weekly content calendar — choosing the right format and message for each post.",
  },
  {
    num: "03",
    title: "We design the post or Reel",
    desc: "Graphics are designed, captions are written, and Reels are assembled — all matched to your brand style and platform best practices.",
  },
  {
    num: "04",
    title: "Client reviews (if needed)",
    desc: "You get a chance to review before anything goes live. Most clients approve with minor tweaks or none at all after the first month.",
  },
  {
    num: "05",
    title: "Content goes live",
    desc: "Posts are published on schedule. Your social media stays active, consistent, and professional — without you lifting a finger.",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function MockPostVisual({ card }: { card: PortfolioCard }) {
  const isReel = card.contentType === "Reel"

  return (
    <div
      className={`relative bg-gradient-to-br ${card.bgGradient} overflow-hidden`}
      style={{ aspectRatio: isReel ? "9/14" : "4/3" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Simulated post layout */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top bar: avatar + username */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20" />
          <div className="h-2 bg-white/20 rounded-full w-20" />
          <div className="ml-auto">
            <svg
              className="w-4 h-4 text-white/40"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d={platformIcon[card.platform]} />
            </svg>
          </div>
        </div>

        {/* Centre icon */}
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          {isReel && (
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
            <svg
              className={`w-6 h-6 ${card.accentColor} opacity-80`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
            </svg>
          </div>
          {/* Simulated text lines */}
          <div className="w-full space-y-1.5 px-2">
            {card.simLines.map((w, i) => (
              <div
                key={i}
                className="h-1.5 bg-white/15 rounded-full mx-auto"
                style={{ width: `${w * 18}%` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom bar: like/comment icons */}
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
          <svg className="w-4 h-4 text-white/30 ml-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
      </div>

      {/* Reel aspect badge */}
      {isReel && (
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-0.5">
          <span className="text-white/70 text-[10px] font-semibold tracking-wide">REEL</span>
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const categories: Category[] = ["F&B", "Beauty & Wellness", "Retail", "Ecommerce"]

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
              Sample Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Media{" "}
            <span className="text-[#D4AF37]">Portfolio</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Sample content styles for F&amp;B, beauty, retail, and ecommerce businesses in
            Singapore.
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
              href="/social-media-manpower-singapore#pricing"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. PORTFOLIO GRID ────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat) => {
            const cards = portfolioCards.filter((c) => c.category === cat)
            const meta = categoryMeta[cat]
            return (
              <div key={cat} className="mb-16 last:mb-0">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-xs font-bold uppercase tracking-widest ${meta.color}`}>
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-[#222222]" />
                  <span className="text-gray-600 text-xs">{cards.length} samples</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cards.map((card) => (
                    <article
                      key={card.title}
                      className="bg-[#161616] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
                    >
                      {/* Mock visual */}
                      <MockPostVisual card={card} />

                      {/* Card body */}
                      <div className="p-5">
                        {/* Tags row */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${meta.tagBg}`}
                          >
                            {card.category}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${contentTypeMeta[card.contentType]}`}
                          >
                            {card.contentType}
                          </span>
                          <span className="ml-auto flex items-center gap-1 text-[10px] text-gray-600">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d={platformIcon[card.platform]} />
                            </svg>
                            {card.platform}
                          </span>
                        </div>

                        <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-200">
                          {card.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 3. RESULTS STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-[#111111] border-y border-[#222222] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              What you get
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The difference consistent social media makes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultStrip.map((r) => (
              <div
                key={r.value}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 text-center hover:border-[#D4AF37]/20 transition-colors duration-200 cursor-default"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <p className="text-white font-bold text-base mb-2">{r.value}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW WE CREATE CONTENT ─────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              The process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How We Create Your Content
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              A simple, low-friction workflow that keeps your social media running without
              disrupting your day.
            </p>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative mb-8">
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#161616] border-2 border-[#D4AF37]/40 flex items-center justify-center mb-4 z-10">
                    <span className="text-[#D4AF37] font-black text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-white font-semibold text-xs mb-2 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="md:hidden space-y-0">
            {processSteps.map((step, i) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#161616] border-2 border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <span className="text-[#D4AF37] font-black text-sm">{step.num}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-[#D4AF37]/15 my-2" />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ───────────────────────────────────────────────────────────── */}
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
              Let&apos;s get started
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Want content like this{" "}
            <span className="text-[#D4AF37]">for your business?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. We plan, design, and post — you stay focused on running your
            business.
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
