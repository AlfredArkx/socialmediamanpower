import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  type SectionType,
} from "@/lib/blogData"

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ─── Per-article metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://socialmediamanpower.sg/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://socialmediamanpower.sg/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
    },
  }
}

// ─── Content section renderer ─────────────────────────────────────────────────

const WA_URL =
  "https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."

function RenderSection({ section }: { section: SectionType }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 leading-snug">
          {section.text}
        </h2>
      )

    case "h3":
      return (
        <h3 className="text-lg font-bold text-white mt-8 mb-3">
          {section.text}
        </h3>
      )

    case "p":
      return (
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          {section.text}
        </p>
      )

    case "ul":
      return (
        <ul className="space-y-2 mb-6 ml-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
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
              {item}
            </li>
          ))}
        </ul>
      )

    case "ol":
      return (
        <ol className="space-y-3 mb-6 ml-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      )

    case "callout":
      return (
        <div className="bg-[#D4AF37]/8 border-l-4 border-[#D4AF37] rounded-r-xl px-6 py-4 my-8">
          <p className="text-[#D4AF37] text-sm font-medium leading-relaxed">
            {section.text}
          </p>
        </div>
      )

    case "table":
      return (
        <div className="overflow-x-auto my-8 rounded-xl border border-[#222222]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#161616] border-b border-[#222222]">
                {section.headers.map((h) => (
                  <th
                    key={h}
                    className="text-left text-gray-400 font-semibold px-4 py-3 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e1e1e]">
              {section.rows.map((row, ri) => (
                <tr key={ri} className="bg-[#111111] hover:bg-[#161616] transition-colors duration-150">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 leading-relaxed ${
                        ci === 0 ? "text-white font-medium" : "text-gray-400"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case "cta_whatsapp":
      return (
        <div className="bg-[#161616] border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-8 my-10 text-center">
          <p className="text-white font-bold text-lg mb-2">
            Want someone to handle this for you?
          </p>
          <p className="text-gray-400 text-sm mb-6">
            From S$600/month. Dedicated social media manpower for Singapore SMEs.
            No hiring. No CPF.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-8 py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            WhatsApp Now
          </a>
        </div>
      )

    case "cta_contact":
      return (
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8 my-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-white font-bold text-base mb-1">
                Ready to get consistent social media without hiring?
              </p>
              <p className="text-gray-400 text-sm">
                Tell us about your business and we will recommend the right content support plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-6 py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-6 py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Send enquiry
              </Link>
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

// ─── Category colour helper ───────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  "Pricing & Budgeting": "bg-amber-500/15 text-amber-400 border-amber-500/25",
  "Content Strategy":    "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Strategy":            "bg-violet-500/15 text-violet-400 border-violet-500/25",
}

function categoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/25"
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.relatedPostSlugs)

  return (
    <>
      {/* ── ARTICLE HEADER ───────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% -5%, #D4AF3750 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-150 cursor-pointer">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors duration-150 cursor-pointer">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 truncate max-w-[200px]">{post.category}</span>
          </nav>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryClass(post.category)}`}>
              {post.category}
            </span>
            <span className="text-gray-600 text-xs">{post.readingTime}</span>
            <span className="text-gray-600 text-xs">&middot;</span>
            <time className="text-gray-600 text-xs" dateTime={post.publishedDate}>
              {formatDate(post.publishedDate)}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-[#D4AF37]/40 pl-5">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent mb-12" />

          <article>
            {post.content.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </article>

          {/* Article footer */}
          <div className="mt-14 pt-8 border-t border-[#1e1e1e] flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 text-xs mb-1">Published by</p>
              <p className="text-white text-sm font-semibold">Social Media Manpower</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:underline cursor-pointer"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#111111] py-16 px-4 sm:px-6 border-t border-[#1a1a1a]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">
              Related articles
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryClass(rp.category)}`}>
                      {rp.category}
                    </span>
                    <span className="text-gray-600 text-xs">{rp.readingTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-[#D4AF37] transition-colors duration-200 flex-1">
                    {rp.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold mt-2">
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] py-20 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 100%, #D4AF3740 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Ready to get started?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
            Get social media done for your business —{" "}
            <span className="text-[#D4AF37]">from S$600/month</span>
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
            Dedicated remote social media manpower. No hiring. No CPF. Start within 3 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_URL}
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
