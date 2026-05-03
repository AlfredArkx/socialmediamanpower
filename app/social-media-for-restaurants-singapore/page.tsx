import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Social Media for Restaurants Singapore | Attract More Customers from S$600/month",
  description:
    "Dedicated social media management for restaurants, cafes, and food stalls in Singapore. Consistent posting, promo graphics, food Reels, and more — from S$600/month. No hiring needed.",
  keywords: [
    "restaurant social media singapore",
    "social media for restaurants singapore",
    "restaurant marketing singapore",
    "cafe social media singapore",
    "food stall marketing singapore",
    "restaurant instagram singapore",
    "social media management restaurant",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.sg/social-media-for-restaurants-singapore",
  },
  openGraph: {
    title: "Social Media for Restaurants Singapore | From S$600/month",
    description:
      "Attract more diners with consistent social media posting, food content, and promo graphics. Built for Singapore restaurants, cafes, and food stalls.",
    url: "https://socialmediamanpower.sg/social-media-for-restaurants-singapore",
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
    title: "No time to post daily",
    desc: "You&apos;re running the kitchen and the counter. Creating captions and graphics every day is the last thing on your mind.",
  },
  {
    icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z",
    title: "Inconsistent food photos",
    desc: "Some days the post looks great, other days nothing goes up. Inconsistency kills your Instagram algorithm reach.",
  },
  {
    icon: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46",
    title: "Promotions not reaching customers",
    desc: "You run a lunch deal or a weekend special — but only regulars see it. New customers never find out.",
  },
  {
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    title: "Low engagement on posts",
    desc: "You post occasionally but get little response. Without strategy and consistency, the algorithm won&apos;t show your content to new audiences.",
  },
]

const whyMatters = [
  {
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    title: "Food is a visual business",
    desc: "A well-shot plate stops the scroll. Platforms like Instagram and TikTok are built for exactly the kind of content restaurants produce every single day.",
  },
  {
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H7.5v-.008zm0-3h.008v.008H7.5v-.008zm0-3h.008v.008H7.5v-.008z",
    title: "Customers check Instagram before visiting",
    desc: "Over 70% of diners look up a restaurant on social media before deciding to visit. Your last post is your first impression — make it count.",
  },
  {
    icon: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    title: "Promotions drive real foot traffic",
    desc: "A well-timed post about your weekend set lunch or a new dish launch can drive a measurable spike in walk-ins and reservations — if it reaches the right audience.",
  },
]

const howWeHelp = [
  {
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5",
    title: "Consistent daily posting",
    desc: "We keep your feed active with regular content — so the algorithm keeps showing your restaurant to potential customers in your area.",
  },
  {
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    title: "Promo graphics",
    desc: "Weekend specials, festive menus, happy hour deals — we design branded graphics that grab attention and drive action.",
  },
  {
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    title: "Menu highlights",
    desc: "Showcase your signature dishes, seasonal items, and bestsellers with styled photography captions and descriptions that make customers crave.",
  },
  {
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    title: "Reel-style food content",
    desc: "Short-form video is the most powerful discovery format on Instagram and TikTok. We plan and produce Reel-ready content that builds your brand reach.",
  },
]

const contentIdeas = [
  {
    label: "Daily Food Posts",
    desc: "Your dishes, plated beautifully and posted consistently to keep followers hungry and engaged.",
    gradient: "from-amber-900/40 to-orange-900/30",
    accentColor: "text-amber-400",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V9.75zm-3 3h.008v.008H9V12.75zm0 3h.008v.008H9V15.75zm3-3h.008v.008H12V12.75zm0 3h.008v.008H12V15.75zm3-3h.008v.008H15V12.75zm0 3h.008v.008H15V15.75z",
    examples: ["Signature dish spotlights", "New menu launches", "Seasonal specials"],
  },
  {
    label: "Behind-the-Scenes Kitchen",
    desc: "Authentic content showing your kitchen prep, chef craftsmanship, and the story behind your food.",
    gradient: "from-red-900/40 to-rose-900/30",
    accentColor: "text-red-400",
    icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
    examples: ["Chef in action", "Ingredient sourcing", "Cooking process"],
  },
  {
    label: "Promotions & Deals",
    desc: "Branded graphics for your latest offers, set lunches, happy hours, and festive menus.",
    gradient: "from-yellow-900/40 to-amber-900/30",
    accentColor: "text-yellow-400",
    icon: "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z",
    examples: ["Weekend set lunch", "Happy hour deals", "Festive combos"],
  },
  {
    label: "Customer Reviews & UGC",
    desc: "Reposting genuine reviews and customer photos builds trust and social proof for new diners.",
    gradient: "from-green-900/40 to-emerald-900/30",
    accentColor: "text-green-400",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    examples: ["Google review reposts", "Customer photos", "Testimonial graphics"],
  },
  {
    label: "Short Food Videos (Reels)",
    desc: "Fast-cut, crave-worthy short videos of your food that rack up views and bring in new followers.",
    gradient: "from-purple-900/40 to-violet-900/30",
    accentColor: "text-purple-400",
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875m0 0A2.625 2.625 0 014.875 14.25H6m-3.75 5.25V14.25m0 5.25A2.625 2.625 0 006 21.75m0-7.5V6.75m0 7.5h12m0 0v4.5m0-4.5a2.625 2.625 0 012.625 2.625v1.875M18 21.75h1.125c.621 0 1.125-.504 1.125-1.125v-1.875m0 0A2.625 2.625 0 0018 16.5m1.25 3.75V14.25M18 16.5V6.75",
    examples: ["Sizzle shots", "Plating in motion", "Kitchen atmosphere"],
  },
]

const whyUs = [
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "From S$600/month",
    desc: "A full-time social media hire costs S$3,000–S$4,000/month with CPF, benefits, and onboarding. We deliver the same output at a fraction of the cost.",
  },
  {
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    title: "No hiring needed",
    desc: "No interviews, no onboarding, no HR headaches. You get a dedicated social media person ready to start without any of the hiring overhead.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Replaceable manpower",
    desc: "If your assigned person is unavailable, we seamlessly replace them. You never lose momentum — your restaurant&apos;s social media keeps running.",
  },
  {
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    title: "Built for Singapore F&B SMEs",
    desc: "We understand the local dining scene — hawkers, cafes, restaurants, and cloud kitchens. Our content is tailored to your specific market and audience.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RestaurantLandingPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Background effects */}
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
        {/* Warm food-toned glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          {/* Breadcrumb badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Restaurant &rsaquo; Cafe &rsaquo; Food Stall
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Media for{" "}
            <span className="text-[#D4AF37]">Restaurants</span>{" "}
            in Singapore
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Attract more customers, showcase your food, and stay active online
            — without hiring a full-time staff.
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
              "Built for Singapore F&B",
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
              The Social Media Struggle Every Restaurant Faces
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
              <span className="text-[#D4AF37]">Restaurants</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Every day you&apos;re not posting, a competitor down the street is capturing the
              customers who were searching for a place to eat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMatters.map((w) => (
              <div
                key={w.title}
                className="relative bg-[#161616] border border-[#222222] rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default group"
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
              How Our Service Helps Your Restaurant
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              We handle your entire social media presence — so you can focus on cooking and
              running your restaurant.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHelp.map((h, i) => (
              <div
                key={h.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default group"
              >
                <div className="flex items-start gap-4 mb-4">
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
                <h3 className="text-white font-bold text-base mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
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
              <span className="text-[#D4AF37]">Restaurant</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              We plan and produce a mix of content types to keep your audience engaged and
              consistently growing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentIdeas.map((c) => (
              <div
                key={c.label}
                className={`relative bg-gradient-to-br ${c.gradient} border border-[#333333] rounded-2xl p-6 overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-200 cursor-default group`}
              >
                {/* Simulated content preview */}
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-[#D4AF37]/15 rounded-xl flex items-center justify-center">
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
                  {/* Mock post lines */}
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-white/10 rounded-full w-4/5" />
                    <div className="h-2 bg-white/6 rounded-full w-3/5" />
                    <div className="h-2 bg-white/6 rounded-full w-2/3" />
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">{c.desc}</p>

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
              Why Restaurant Owners Choose Us
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

          {/* Comparison strip */}
          <div className="bg-[#161616] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg mb-6 text-center">
              The smarter way to handle restaurant social media
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="text-left text-gray-400 font-medium pb-3 pr-4 min-w-[160px]">Option</th>
                    <th className="text-center text-gray-400 font-medium pb-3 px-3 min-w-[100px]">Cost/mo</th>
                    <th className="text-center text-gray-400 font-medium pb-3 px-3 min-w-[100px]">Consistent</th>
                    <th className="text-center text-gray-400 font-medium pb-3 px-3 min-w-[120px]">No CPF/HR</th>
                    <th className="text-center text-gray-400 font-medium pb-3 px-3 min-w-[130px]">F&B Expertise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222222]">
                  {[
                    { label: "Do it yourself", cost: "S$0", consistent: false, noCpf: true, expertise: false },
                    { label: "Hire full-time staff", cost: "~S$3,500", consistent: true, noCpf: false, expertise: false },
                    { label: "Agency retainer", cost: "~S$2,500+", consistent: true, noCpf: true, expertise: false },
                    { label: "Social Media Manpower", cost: "S$600", consistent: true, noCpf: true, expertise: true, highlight: true },
                  ].map((row) => (
                    <tr key={row.label} className={row.highlight ? "bg-[#D4AF37]/5" : ""}>
                      <td className={`py-3 pr-4 font-medium ${row.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                        {row.label}
                        {row.highlight && (
                          <span className="ml-2 text-[10px] bg-[#D4AF37]/15 text-[#D4AF37] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                            Best value
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center text-gray-300">{row.cost}</td>
                      <td className="py-3 px-3 text-center">
                        {row.consistent ? (
                          <span className="text-[#D4AF37]">&#10003;</span>
                        ) : (
                          <span className="text-gray-600">&#10007;</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.noCpf ? (
                          <span className="text-[#D4AF37]">&#10003;</span>
                        ) : (
                          <span className="text-gray-600">&#10007;</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.expertise ? (
                          <span className="text-[#D4AF37]">&#10003;</span>
                        ) : (
                          <span className="text-gray-600">&#10007;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Ready to grow your restaurant?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Let us handle your{" "}
            <span className="text-[#D4AF37]">restaurant social media</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. No hiring. No CPF. Just consistent content that brings more
            customers to your door.
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
            {["No contracts", "Cancel anytime", "Start within 3 days"].map((t) => (
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
