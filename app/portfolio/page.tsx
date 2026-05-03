import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Portfolio | Social Media Case Studies",
  description:
    "See the results we've achieved for Singapore brands across Instagram, TikTok, LinkedIn, and Facebook. Real numbers, real growth.",
}

const caseStudies = [
  {
    client: "Bloom Skincare SG",
    industry: "Beauty & Skincare",
    platform: "Instagram",
    platformColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    result: "+2,143% follower growth",
    detail: "Grew from 2,000 to 45,000 followers in 8 months through strategic Reels and influencer seeding.",
    metrics: [
      { label: "Followers", value: "45K" },
      { label: "Avg. Reach", value: "80K" },
      { label: "Engagement", value: "6.8%" },
    ],
    category: "Instagram",
  },
  {
    client: "Kopi Culture SG",
    industry: "F&B",
    platform: "TikTok",
    platformColor: "bg-white/10 text-white border-white/20",
    result: "3.2M video views",
    detail: "Viral TikTok campaign showcasing Singapore coffee culture reached 3.2M views in 2 weeks.",
    metrics: [
      { label: "Video Views", value: "3.2M" },
      { label: "New Followers", value: "+28K" },
      { label: "Store Visits", value: "+340%" },
    ],
    category: "TikTok",
  },
  {
    client: "TechStart SG",
    industry: "Technology",
    platform: "LinkedIn",
    platformColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    result: "5x more leads",
    detail: "B2B LinkedIn strategy generating 150+ qualified leads per month for a SaaS startup.",
    metrics: [
      { label: "Monthly Leads", value: "150+" },
      { label: "Post Impressions", value: "500K" },
      { label: "Lead Cost", value: "-60%" },
    ],
    category: "LinkedIn",
  },
  {
    client: "FreshMart Delivery",
    industry: "E-commerce",
    platform: "Facebook",
    platformColor: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    result: "4x ROAS on ads",
    detail: "Facebook ad campaigns and organic content strategy delivering 4x return on ad spend.",
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "Orders", value: "+280%" },
      { label: "CPC", value: "S$0.45" },
    ],
    category: "Facebook",
  },
  {
    client: "FitLife SG",
    industry: "Fitness",
    platform: "Instagram",
    platformColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    result: "+900% engagement",
    detail: "Transformed a stagnant fitness brand into Singapore&apos;s most engaging gym on Instagram.",
    metrics: [
      { label: "Engagement", value: "9.2%" },
      { label: "Followers", value: "22K" },
      { label: "Memberships", value: "+180%" },
    ],
    category: "Instagram",
  },
  {
    client: "Little Sprouts Academy",
    industry: "Education",
    platform: "TikTok",
    platformColor: "bg-white/10 text-white border-white/20",
    result: "1.8M impressions",
    detail: "Edutainment TikTok series for a preschool brand reaching parents across Singapore.",
    metrics: [
      { label: "Impressions", value: "1.8M" },
      { label: "Enrollments", value: "+95%" },
      { label: "Followers", value: "18K" },
    ],
    category: "TikTok",
  },
]

const results = [
  { label: "Average follower growth", value: "312%" },
  { label: "Average engagement increase", value: "8.4x" },
  { label: "Client retention rate", value: "94%" },
  { label: "Average ROAS for ad clients", value: "3.8x" },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(212,175,55,0.10),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Results That Speak
            <br />
            <span className="text-[#D4AF37]">For Themselves</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Real case studies from Singapore brands across every industry. We measure success in
            followers, leads, and revenue — not vanity metrics.
          </p>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-1">{r.value}</p>
                <p className="text-gray-400 text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.client}
                className="bg-[#161616] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{study.client}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{study.industry}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${study.platformColor}`}>
                      {study.platform}
                    </span>
                  </div>

                  <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl px-4 py-3 mb-4">
                    <p className="text-[#D4AF37] font-bold text-xl">{study.result}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{study.detail}</p>
                </div>

                {/* Metrics */}
                <div className="mt-auto border-t border-[#222222] grid grid-cols-3 divide-x divide-[#222222]">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="px-4 py-4 text-center">
                      <p className="text-white font-bold text-base">{metric.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Every brand on this page started exactly where you are. Let&apos;s build your success story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 rounded-full font-semibold hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full sm:w-auto text-center"
            >
              Start Your Project
            </Link>
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
