import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Social Media for Ecommerce Singapore | Grow Your Online Store from S$600/month",
  description:
    "Dedicated social media management for Shopify, Shopee, Lazada, TikTok Shop, and Instagram sellers in Singapore. Product posts, promo graphics, launch content, and Reels — from S$600/month. No hiring needed.",
  keywords: [
    "ecommerce social media singapore",
    "social media for ecommerce singapore",
    "ecommerce marketing singapore",
    "social media content for online stores singapore",
    "shopee seller marketing singapore",
    "lazada seller social media singapore",
    "tiktok shop marketing singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.sg/social-media-for-ecommerce-singapore",
  },
  openGraph: {
    title: "Social Media for Ecommerce Singapore | From S$600/month",
    description:
      "Turn product photos, promotions, and launches into consistent social media content. Built for Singapore online sellers on Shopify, Shopee, Lazada, and TikTok Shop.",
    url: "https://socialmediamanpower.sg/social-media-for-ecommerce-singapore",
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

const platforms = [
  "Shopify",
  "Shopee",
  "Lazada",
  "TikTok Shop",
  "Instagram Shop",
  "Carousell",
]

const painPoints = [
  {
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    title: "Product posts are inconsistent",
    desc: "You post when you remember — sometimes daily, sometimes nothing for two weeks. Irregular posting kills your reach and makes your store look inactive.",
  },
  {
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    title: "Promotions are not designed properly",
    desc: "A plain text post or rushed Canva graphic for your flash sale isn&apos;t enough. Unpolished promo content loses clicks to competitors with better-looking posts.",
  },
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "No time to create daily content",
    desc: "You&apos;re packing orders, managing stock, and handling customer service. Creating captions, designing graphics, and scheduling posts doesn&apos;t fit in your day.",
  },
  {
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Hard to make products look attractive",
    desc: "Raw product shots on a plain background don&apos;t convert. Without styled layouts, compelling copy, and the right visual framing, products look forgettable online.",
  },
]

const whyMatters = [
  {
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Customers discover products on social",
    desc: "Instagram, TikTok, and Facebook are where Singapore shoppers find new products. A strong social presence means your store gets discovered before a customer ever visits Shopee or Lazada.",
  },
  {
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Consistent posting keeps you visible",
    desc: "The algorithm rewards accounts that post regularly. Consistent content keeps your products appearing in feeds, Explore pages, and search results — driving ongoing organic traffic to your store.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Good visuals improve trust and click-throughs",
    desc: "Shoppers decide in seconds whether to click through to your store. Professional-looking product content builds the visual trust that turns a scroll into a sale.",
  },
]

const howWeHelp = [
  {
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Product highlight posts",
    desc: "Regular styled posts showcasing individual products — key features, use cases, and benefits — designed to stop the scroll and drive curiosity.",
  },
  {
    icon: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    title: "Sale and promo graphics",
    desc: "Flash sales, site-wide discounts, bundle deals, and seasonal promotions — designed to look sharp and drive urgency across Instagram, Facebook, and TikTok.",
  },
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    title: "New launch content",
    desc: "Build excitement around new arrivals with teaser posts, launch-day graphics, and product story content that generates early interest and orders.",
  },
  {
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    title: "Reels from product images",
    desc: "No video shoot needed. We produce short-form Reel content from your existing product photos — styled with motion, text overlays, and trending audio guidance.",
  },
  {
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    title: "Caption writing and hashtags",
    desc: "Persuasive product captions with clear calls to action, optimised hashtag sets, and the right tone to match your brand and convert followers into buyers.",
  },
]

const contentIdeas = [
  {
    label: "Product Features",
    desc: "Highlight what makes each product unique — materials, benefits, sizing, and use cases — in a clean, swipe-worthy format.",
    gradient: "from-blue-900/40 to-indigo-900/30",
    accentColor: "text-blue-400",
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    examples: ["Size/variant showcases", "Key benefits breakdown", "Product close-ups"],
  },
  {
    label: "Flash Sale Posts",
    desc: "Time-limited offer graphics with bold typography and countdown urgency that drive immediate clicks to your store.",
    gradient: "from-orange-900/40 to-red-900/30",
    accentColor: "text-orange-400",
    icon: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    examples: ["24-hour deals", "Shopee payday sales", "Site-wide discounts"],
  },
  {
    label: "New Arrival Posts",
    desc: "Build anticipation and drive first-day sales with teaser content, launch reveal posts, and &ldquo;just dropped&rdquo; announcements.",
    gradient: "from-emerald-900/40 to-teal-900/30",
    accentColor: "text-emerald-400",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    examples: ["Teaser pre-launch posts", "Launch day announcements", "Restock alerts"],
  },
  {
    label: "Customer Review Posts",
    desc: "Turn your 5-star reviews into shareable social proof graphics that reassure hesitant buyers and build long-term brand credibility.",
    gradient: "from-yellow-900/40 to-amber-900/30",
    accentColor: "text-yellow-400",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    examples: ["Shopee/Lazada reviews", "Customer photo reposts", "Star rating graphics"],
  },
  {
    label: "Bundle Promotion Posts",
    desc: "Showcase value bundles, upsell combinations, and gift sets with compelling layouts that increase average order value.",
    gradient: "from-purple-900/40 to-violet-900/30",
    accentColor: "text-purple-400",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    examples: ["Buy-2-get-1 offers", "Gift set showcases", "Complementary pairings"],
  },
]

const whyUs = [
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "From S$600/month",
    desc: "A social media executive hire costs S$3,000&ndash;S$4,000/month with CPF. We deliver dedicated daily social media management for a fraction of the cost — no overhead.",
  },
  {
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    title: "No hiring needed",
    desc: "No job ads, no trials, no HR admin. Your dedicated social media person starts immediately — just share your product catalogue and promotions.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Replaceable manpower",
    desc: "If your assigned person is unavailable, we replace them immediately. Your posting schedule never stops — especially important around major sale campaigns.",
  },
  {
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    title: "Built for product sellers",
    desc: "We understand Singapore&apos;s ecommerce calendar — 9.9, 10.10, 11.11, 12.12, CNY, Hari Raya. Our content is planned around the sales events that matter to your business.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EcommerceLandingPage() {
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
        {/* Blue accent glow — bottom-right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
        {/* Indigo accent glow — top-left */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-900/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          {/* Breadcrumb badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Shopify &rsaquo; Shopee &rsaquo; Lazada &rsaquo; TikTok Shop
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Media for{" "}
            <span className="text-[#D4AF37]">Ecommerce Businesses</span>{" "}
            in Singapore
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Turn product photos, promotions, and launches into consistent social media
            content — without hiring full-time staff.
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

          {/* Platform pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {platforms.map((p) => (
              <span
                key={p}
                className="text-xs font-medium bg-[#161616] border border-[#333333] text-gray-400 px-3 py-1.5 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {[
              "From S$600/month",
              "No CPF. No hiring",
              "Built for Singapore online sellers",
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
              The Social Media Struggle Every Online Seller Faces
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
              <span className="text-[#D4AF37]">Ecommerce</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Social media is no longer optional for online stores. It&apos;s where product
              discovery, brand trust, and repeat purchases all begin.
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
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
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
              How Our Service Helps Your Online Store
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              We handle your entire social media output — so your store stays visible and
              active while you focus on fulfilment and growth.
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
              <span className="text-[#D4AF37]">Online Store</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              A planned content mix keeps your feed fresh, your products visible, and your
              audience primed to buy.
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
              Why Singapore Online Sellers Choose Us
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

          {/* Sale calendar strip */}
          <div className="bg-[#161616] border border-[#D4AF37]/15 rounded-2xl p-6 sm:p-8">
            <p className="text-white font-semibold text-base mb-2 text-center">
              We plan content around Singapore&apos;s ecommerce calendar
            </p>
            <p className="text-gray-400 text-sm text-center mb-6">
              Never miss a major sale event with planned content ready in advance
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "9.9 Sale",
                "10.10 Sale",
                "11.11 Double 11",
                "12.12 Year-End",
                "Chinese New Year",
                "Hari Raya",
                "Christmas",
                "Payday Sales",
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
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-900/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Ready to grow your online store?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Let us help your online store stay{" "}
            <span className="text-[#D4AF37]">active and visible</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. No hiring. No CPF. Consistent product content that keeps your
            store discoverable and your sales steady.
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
