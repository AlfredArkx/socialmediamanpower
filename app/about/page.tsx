import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Social Media Manpower Singapore",
  description:
    "Meet the Singapore social media experts behind hundreds of brand transformations. Our story, mission, and the team that makes it happen.",
}

const team = [
  {
    name: "Marcus Lim",
    role: "Founder & CEO",
    bio: "Ex-Google digital marketer. Built Singapore's first social media manpower platform. 10+ years in digital marketing.",
    initials: "ML",
  },
  {
    name: "Priya Nair",
    role: "Head of Strategy",
    bio: "Former Meta regional manager. Specialises in data-driven social media strategy and performance campaigns.",
    initials: "PN",
  },
  {
    name: "Daniel Chua",
    role: "Creative Director",
    bio: "Award-winning designer and video producer. Led creative campaigns for 100+ Singapore brands.",
    initials: "DC",
  },
  {
    name: "Wei Ling Tan",
    role: "Head of Influencer Marketing",
    bio: "Manages relationships with 5,000+ KOLs across Singapore. Expert in authentic brand-creator partnerships.",
    initials: "WT",
  },
]

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Results First",
    desc: "We measure every decision by the impact it has on your business — not impressions or likes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Radical Transparency",
    desc: "You always know what we're doing and why. Monthly reports, open access, honest conversations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Singapore-Rooted",
    desc: "We understand local culture, language, and trends. Our team lives the market we serve.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Always Evolving",
    desc: "Algorithms change. Trends change. We stay ahead so your brand always stays relevant.",
  },
]

const milestones = [
  { year: "2019", event: "Founded in Singapore with a team of 3" },
  { year: "2020", event: "Grew to 50 clients during the digital shift" },
  { year: "2021", event: "Launched influencer network with 1,000+ KOLs" },
  { year: "2022", event: "Expanded team to 30 specialists" },
  { year: "2023", event: "Crossed 300 active client accounts" },
  { year: "2024", event: "Launched TikTok production studio in Singapore" },
  { year: "2025", event: "500+ brands. 50+ team. Still growing." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(212,175,55,0.10),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Are Singapore&apos;s
            <br />
            <span className="text-[#D4AF37]">Social Media Specialists</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Founded in 2019, Social Media Manpower was built with a simple mission: help Singapore
            businesses grow through authentic, effective social media.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Built by Marketers, For Businesses
              </h2>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Social Media Manpower started when our founder Marcus Lim noticed a gap in Singapore:
                  businesses knew they needed social media, but couldn&apos;t afford an in-house team and
                  didn&apos;t trust generic agencies.
                </p>
                <p>
                  We built a different model. Instead of one-size-fits-all packages, we assign dedicated
                  specialists who treat your social media like their own. People who understand your
                  industry, your audience, and the Singapore market.
                </p>
                <p>
                  Today, we manage social media for 500+ Singapore brands — from hawker businesses
                  going viral on TikTok to enterprise SaaS companies generating leads on LinkedIn.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-4 bg-[#161616] border border-[#222222] rounded-xl px-5 py-4">
                  <span className="text-[#D4AF37] font-bold text-sm shrink-0 w-10">{m.year}</span>
                  <span className="text-gray-300 text-sm">{m.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#D4AF37] rounded-3xl p-10">
              <p className="text-[#0A0A0A]/60 text-xs font-bold uppercase tracking-widest mb-4">Mission</p>
              <h2 className="text-[#0A0A0A] font-bold text-2xl sm:text-3xl leading-snug">
                Empower every Singapore business to build a social media presence that drives real growth.
              </h2>
            </div>
            <div className="bg-[#161616] border border-[#222222] rounded-3xl p-10">
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Vision</p>
              <h2 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
                To be the most trusted social media manpower partner in Southeast Asia.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="w-11 h-11 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-5">
                  {value.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the People Behind Your Growth</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Experienced social media specialists with deep roots in the Singapore market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-[#D4AF37] font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-1">{member.name}</h3>
                <p className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Let&apos;s build something great for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 rounded-full font-semibold hover:bg-[#b8961e] transition-colors duration-200 cursor-pointer w-full sm:w-auto text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
