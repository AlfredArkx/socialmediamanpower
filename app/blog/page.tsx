import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts, formatDate } from "@/lib/blogData"

export const metadata: Metadata = {
  title: "Social Media Blog Singapore | Tips, Guides & Strategy for SMEs",
  description:
    "Practical social media tips, cost guides, and content strategies for Singapore SMEs. Written for F&B, beauty, retail, and ecommerce business owners.",
  keywords: [
    "social media blog singapore",
    "social media tips singapore sme",
    "instagram strategy singapore",
    "social media content singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.com/blog",
  },
  openGraph: {
    title: "Social Media Blog Singapore | Social Media Manpower",
    description:
      "Practical social media tips and guides for Singapore SMEs — F&B, beauty, retail, and ecommerce.",
    url: "https://socialmediamanpower.com/blog",
    type: "website",
  },
}

const categoryColors: Record<string, string> = {
  "Pricing & Budgeting": "bg-amber-500/15 text-amber-400 border-amber-500/25",
  "Content Strategy":    "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Strategy":            "bg-violet-500/15 text-violet-400 border-violet-500/25",
}

function categoryClass(cat: string) {
  return (
    categoryColors[cat] ??
    "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/25"
  )
}

export default function BlogListingPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
  const [featured, ...rest] = sorted

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
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
              Insights &amp; Guides
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Media{" "}
            <span className="text-[#D4AF37]">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Practical social media tips, pricing guides, and content strategies
            for Singapore SMEs — written for real business owners, not marketers.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
            Latest article
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="block bg-[#161616] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-200 group"
          >
            <div className="grid lg:grid-cols-5">
              {/* Decorative visual pane */}
              <div className="lg:col-span-2 relative bg-gradient-to-br from-[#D4AF37]/10 via-[#161616] to-[#0A0A0A] min-h-48 lg:min-h-full flex items-center justify-center p-10">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <svg
                  className="relative w-20 h-20 text-[#D4AF37]/30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryClass(featured.category)}`}>
                    {featured.category}
                  </span>
                  <span className="text-gray-600 text-xs">{featured.readingTime}</span>
                  <span className="text-gray-600 text-xs">{formatDate(featured.publishedDate)}</span>
                </div>
                <h2 className="text-white font-bold text-xl sm:text-2xl mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
                  Read article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── POST GRID ────────────────────────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="bg-[#0A0A0A] py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">
              More articles
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
                >
                  {/* Decorative top band */}
                  <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent mb-6" />

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryClass(post.category)}`}>
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#222222]">
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>{formatDate(post.publishedDate)}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <svg className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] py-20 px-4 sm:px-6 overflow-hidden border-t border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 100%, #D4AF3740 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want social media done for your business?
          </h2>
          <p className="text-gray-400 text-base mb-8">
            From S$600/month. Dedicated manpower. No hiring. No CPF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
            >
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
