import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"

export const metadata: Metadata = {
  title: "Hire vs Outsource Social Media Singapore | Cost & Flexibility Compared",
  description:
    "Compare hiring a full-time social media executive, using a freelancer, engaging an agency, or outsourcing to Social Media Manpower in Singapore. Costs, flexibility, and what makes sense for SMEs.",
  keywords: [
    "hire social media manager singapore",
    "outsource social media singapore",
    "social media freelancer vs agency singapore",
    "social media manpower singapore",
    "hire vs outsource social media singapore",
    "social media management options singapore",
  ],
  alternates: {
    canonical: "https://socialmediamanpower.com/hire-vs-outsource-social-media",
  },
  openGraph: {
    title: "Hire vs Outsource Social Media in Singapore | Cost Comparison",
    description:
      "Full-time hire, freelancer, agency, or dedicated manpower — compare costs, effort, and flexibility for Singapore SMEs.",
    url: "https://socialmediamanpower.com/hire-vs-outsource-social-media",
    type: "website",
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

type Verdict = "poor" | "fair" | "good" | "best"

interface ComparisonOption {
  name: string
  badge?: string
  highlight: boolean
  rows: {
    monthlyCost: string
    cpfOverhead: { label: string; verdict: Verdict }
    replacement: { label: string; verdict: Verdict }
    execution: { label: string; verdict: Verdict }
    management: { label: string; verdict: Verdict }
    commitment: { label: string; verdict: Verdict }
    bestFor: string
  }
}

const options: ComparisonOption[] = [
  {
    name: "Full-time Hire",
    highlight: false,
    rows: {
      monthlyCost: "S$3,500 – S$5,000",
      cpfOverhead: { label: "Yes — 17% CPF + benefits", verdict: "poor" },
      replacement: { label: "Weeks of rehiring", verdict: "poor" },
      execution: { label: "Depends on hire quality", verdict: "fair" },
      management: { label: "High — manage daily", verdict: "poor" },
      commitment: { label: "Permanent / contract", verdict: "poor" },
      bestFor: "Large businesses with in-house brand teams",
    },
  },
  {
    name: "Freelancer",
    highlight: false,
    rows: {
      monthlyCost: "S$800 – S$2,500",
      cpfOverhead: { label: "No CPF needed", verdict: "good" },
      replacement: { label: "Find a new one yourself", verdict: "fair" },
      execution: { label: "Variable — no oversight", verdict: "fair" },
      management: { label: "Medium — brief and chase", verdict: "fair" },
      commitment: { label: "Month-to-month usually", verdict: "good" },
      bestFor: "One-off projects or very small content needs",
    },
  },
  {
    name: "Agency Retainer",
    highlight: false,
    rows: {
      monthlyCost: "S$1,500 – S$8,000",
      cpfOverhead: { label: "No CPF needed", verdict: "good" },
      replacement: { label: "Handled internally", verdict: "good" },
      execution: { label: "Team-based, process-heavy", verdict: "good" },
      management: { label: "Low — account manager", verdict: "good" },
      commitment: { label: "3–12 month contracts", verdict: "fair" },
      bestFor: "Companies needing full campaigns and strategy",
    },
  },
  {
    name: "Social Media Manpower",
    badge: "Best for SMEs",
    highlight: true,
    rows: {
      monthlyCost: "From S$600",
      cpfOverhead: { label: "No CPF. No overhead.", verdict: "best" },
      replacement: { label: "Immediate replacement", verdict: "best" },
      execution: { label: "Dedicated person, practical", verdict: "best" },
      management: { label: "Low — send assets, we post", verdict: "best" },
      commitment: { label: "Flexible, cancel anytime", verdict: "best" },
      bestFor: "Singapore SMEs needing consistent daily content",
    },
  },
]

const verdictStyle: Record<Verdict, string> = {
  poor: "text-red-400",
  fair: "text-yellow-400",
  good: "text-teal-400",
  best: "text-[#D4AF37] font-semibold",
}

const verdictIcon: Record<Verdict, string> = {
  poor: "M6 18L18 6M6 6l12 12",
  fair: "M5 12h14",
  good: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  best: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
}

const costItems = [
  { label: "Base salary (junior exec)", amount: "S$3,000 – S$3,800", note: "Gross monthly" },
  { label: "CPF employer contribution (17%)", amount: "S$510 – S$646", note: "Mandatory" },
  { label: "Annual leave (14 days, prorated)", amount: "S$215 – S$290", note: "Paid time off" },
  { label: "Medical benefits & claims", amount: "S$80 – S$200", note: "Varies by company" },
  { label: "Training & onboarding (amortised)", amount: "S$150 – S$300", note: "First 6 months" },
  { label: "Recruitment & agency fee (amortised)", amount: "S$100 – S$250", note: "One-time, spread over tenure" },
  { label: "Management time (your hours)", amount: "Significant", note: "Briefings, reviews, feedback" },
]

const outsourcingBenefits = [
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Pay only for output",
    desc: "With outsourcing, you pay for content produced and posted — not for 40 hours a week of employment, whether work is happening or not.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "No coverage gaps",
    desc: "When a full-time hire goes on leave or resigns, your social media stops. Outsourced manpower includes built-in replacement — your content never pauses.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Start faster",
    desc: "Hiring takes weeks — job posting, interviews, offer, onboarding. Outsourced social media manpower can start within 3 days of your first enquiry.",
  },
  {
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    title: "Scale without hiring",
    desc: "As your business grows, you can increase your content output without going through another recruitment cycle or adding permanent headcount.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Lower risk",
    desc: "No probation period anxiety. No resignation risk mid-campaign. No industrial relations issues. If the arrangement isn't working, you can stop without the employment law complexity.",
  },
  {
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3",
    title: "Focus on your business",
    desc: "Managing an employee takes mental bandwidth. Outsourcing social media frees your attention for the things only you can do — serving customers and running operations.",
  },
]

const differentiators = [
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "From S$600/month",
    desc: "The most cost-effective option for consistent, professional social media management — no hidden fees, no contract minimums.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Dedicated remote manpower",
    desc: "Not a team account manager sharing attention across 20 clients. One dedicated person focused on your business, your content, your feed.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Replaceable support",
    desc: "If your assigned person is unavailable for any reason, we replace them immediately. No coverage gaps. No excuses.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Practical content execution",
    desc: "We produce posts, design graphics, write captions, and keep your calendar running — not strategy documents and quarterly reviews.",
  },
  {
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    title: "Built for Singapore SMEs",
    desc: "Designed around the real constraints of small business owners in Singapore — tight budgets, no HR team, and the need to stay competitive online.",
  },
]

const faqItems = [
  {
    q: "Is it risky to outsource social media instead of hiring?",
    a: "The risks of outsourcing are generally lower than hiring. A bad full-time hire involves notice periods, potential HR issues, and weeks of recovery time. With outsourced manpower, if the arrangement is not working, you can stop quickly and without the complexity of employment law. The main risk to manage is clear briefing — the better you communicate your brand and goals, the better the output.",
  },
  {
    q: "What is the difference between Social Media Manpower and a freelancer?",
    a: "A freelancer works independently with no backup. If they are sick, overwhelmed, or take on too many clients, your content suffers. Social Media Manpower provides a managed, replaceable team member — if your assigned person is unavailable, we replace them immediately so your schedule is never interrupted. You also get a structured delivery process rather than ad hoc communication.",
  },
  {
    q: "What if I need someone who really understands my brand?",
    a: "Brand understanding comes from briefing, not from someone being physically present. We onboard each client thoroughly — understanding your products, tone, target audience, and visual style. Over the first month, the content is refined until it matches your expectations. Most clients find our person understands their brand well within two to three weeks.",
  },
  {
    q: "Can I switch back to hiring if outsourcing does not work?",
    a: "Yes, completely. There are no long-term contracts. If you decide you want to bring social media in-house at any point, you can cancel with notice and hire internally. Many clients actually use our service while they are looking for a full-time hire — getting consistent content out while the hiring process runs in parallel.",
  },
  {
    q: "What if the content quality is not what I expected?",
    a: "Content goes through a review process where you can request changes before publishing. If the quality is consistently not meeting your expectations, we work with you to adjust. We can reassign your account or refine the brief. Our goal is a long-term working relationship, not a one-month engagement — so we take quality seriously.",
  },
  {
    q: "Do I lose control of my social media if I outsource?",
    a: "No. You retain full control. Your accounts stay in your name, your passwords remain yours, and you approve content before it goes live if you choose to. Most clients move to a trust-based model where they review content in batches rather than approving every single post — but the level of oversight is entirely up to you.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HireVsOutsourcePage() {
  const rowLabels = [
    "Monthly cost",
    "CPF / HR overhead",
    "If person unavailable",
    "Content execution",
    "Management effort",
    "Commitment",
    "Best for",
  ]

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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Decision guide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Hire vs Outsource{" "}
            <span className="text-[#D4AF37]">Social Media</span>{" "}
            in Singapore
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Compare the real cost, effort, and flexibility of hiring full-time staff,
            using a freelancer, engaging an agency, or outsourcing to Social Media
            Manpower.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Now
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer"
            >
              See comparison
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section id="comparison" className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Side-by-side comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              All Four Options Compared
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              Every option has trade-offs. Here is what they look like side by side for a
              typical Singapore SME.
            </p>
          </div>

          {/* ── Desktop table ─────────────────────────────────────── */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-[#222222]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="text-left text-gray-500 font-medium px-6 py-4 bg-[#111111] w-44">
                    &nbsp;
                  </th>
                  {options.map((opt) => (
                    <th
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight
                          ? "bg-[#D4AF37]/8 border-x border-[#D4AF37]/20"
                          : "bg-[#161616]"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <span className={`font-bold text-base ${opt.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                          {opt.name}
                        </span>
                        {opt.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25 px-2.5 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e1e]">
                {/* Monthly cost */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[0]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center font-bold ${
                        opt.highlight
                          ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15 text-[#D4AF37] text-base"
                          : "bg-[#161616] text-white"
                      }`}
                    >
                      {opt.rows.monthlyCost}
                    </td>
                  ))}
                </tr>

                {/* CPF */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[1]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15" : "bg-[#161616]"
                      }`}
                    >
                      <span className={`text-xs ${verdictStyle[opt.rows.cpfOverhead.verdict]}`}>
                        {opt.rows.cpfOverhead.label}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Replacement */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[2]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15" : "bg-[#161616]"
                      }`}
                    >
                      <span className={`text-xs ${verdictStyle[opt.rows.replacement.verdict]}`}>
                        {opt.rows.replacement.label}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Execution */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[3]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15" : "bg-[#161616]"
                      }`}
                    >
                      <span className={`text-xs ${verdictStyle[opt.rows.execution.verdict]}`}>
                        {opt.rows.execution.label}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Management */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[4]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15" : "bg-[#161616]"
                      }`}
                    >
                      <span className={`text-xs ${verdictStyle[opt.rows.management.verdict]}`}>
                        {opt.rows.management.label}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Commitment */}
                <tr>
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[5]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-4 text-center ${
                        opt.highlight ? "bg-[#D4AF37]/5 border-x border-[#D4AF37]/15" : "bg-[#161616]"
                      }`}
                    >
                      <span className={`text-xs ${verdictStyle[opt.rows.commitment.verdict]}`}>
                        {opt.rows.commitment.label}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Best for */}
                <tr className="border-t border-[#333333]">
                  <td className="px-6 py-4 text-gray-500 font-medium text-xs uppercase tracking-wider bg-[#111111]">
                    {rowLabels[6]}
                  </td>
                  {options.map((opt) => (
                    <td
                      key={opt.name}
                      className={`px-6 py-5 text-center text-xs leading-relaxed ${
                        opt.highlight
                          ? "bg-[#D4AF37]/8 border-x border-[#D4AF37]/20 text-[#D4AF37] font-medium"
                          : "bg-[#161616] text-gray-400"
                      }`}
                    >
                      {opt.rows.bestFor}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Mobile cards ──────────────────────────────────────── */}
          <div className="lg:hidden space-y-4">
            {options.map((opt) => (
              <div
                key={opt.name}
                className={`rounded-2xl border overflow-hidden ${
                  opt.highlight
                    ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
                    : "border-[#222222] bg-[#161616]"
                }`}
              >
                {/* Card header */}
                <div className={`px-5 py-4 border-b ${opt.highlight ? "border-[#D4AF37]/20" : "border-[#222222]"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-bold text-base ${opt.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                      {opt.name}
                    </span>
                    <div className="flex items-center gap-2">
                      {opt.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25 px-2 py-0.5 rounded-full">
                          {opt.badge}
                        </span>
                      )}
                      <span className={`font-bold text-sm ${opt.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                        {opt.rows.monthlyCost}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card rows */}
                <div className="px-5 py-4 space-y-3">
                  {[
                    { label: rowLabels[1], data: opt.rows.cpfOverhead },
                    { label: rowLabels[2], data: opt.rows.replacement },
                    { label: rowLabels[3], data: opt.rows.execution },
                    { label: rowLabels[4], data: opt.rows.management },
                    { label: rowLabels[5], data: opt.rows.commitment },
                  ].map(({ label, data }) => (
                    <div key={label} className="flex items-start justify-between gap-4">
                      <span className="text-gray-600 text-xs uppercase tracking-wide shrink-0 w-32">
                        {label}
                      </span>
                      <span className={`text-xs text-right ${verdictStyle[data.verdict]}`}>
                        {data.label}
                      </span>
                    </div>
                  ))}
                  <div className={`pt-3 mt-3 border-t text-xs leading-relaxed ${opt.highlight ? "border-[#D4AF37]/20 text-[#D4AF37]" : "border-[#222222] text-gray-400"}`}>
                    <span className="text-gray-600 uppercase tracking-wide text-[10px] block mb-1">
                      Best for
                    </span>
                    {opt.rows.bestFor}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs">
            {(["best", "good", "fair", "poor"] as Verdict[]).map((v) => (
              <span key={v} className={`flex items-center gap-1.5 ${verdictStyle[v]}`}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={verdictIcon[v]} />
                </svg>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COST BREAKDOWN ────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              The real numbers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Hiring Costs More Than Just the Salary
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Most business owners compare the salary figure — but the true monthly cost of
              a full-time social media hire includes several line items most people
              overlook.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Cost items */}
            <div className="space-y-3">
              {costItems.map((item, i) => (
                <div
                  key={item.label}
                  className="bg-[#161616] border border-[#222222] rounded-xl px-5 py-4 flex items-center gap-4"
                >
                  <span className="text-2xl font-black text-[#D4AF37]/20 w-8 shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{item.note}</p>
                  </div>
                  <span className="text-[#D4AF37] font-bold text-sm shrink-0 text-right">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary callout */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#161616] border border-[#D4AF37]/25 rounded-2xl p-8">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
                  True monthly cost comparison
                </p>

                {[
                  { label: "Full-time hire (all-in)", cost: "S$4,000 – S$5,500", sub: "Salary + CPF + leave + overheads", highlight: false },
                  { label: "Agency retainer", cost: "S$1,500 – S$8,000", sub: "Depending on scope", highlight: false },
                  { label: "Freelancer", cost: "S$800 – S$2,500", sub: "No backup coverage", highlight: false },
                  { label: "Social Media Manpower", cost: "From S$600", sub: "Dedicated + replaceable", highlight: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between py-4 border-b last:border-0 ${row.highlight ? "border-[#D4AF37]/20" : "border-[#222222]"}`}
                  >
                    <div>
                      <p className={`text-sm font-semibold ${row.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                        {row.label}
                      </p>
                      <p className="text-gray-600 text-xs mt-0.5">{row.sub}</p>
                    </div>
                    <span className={`font-bold text-sm shrink-0 ml-4 ${row.highlight ? "text-[#D4AF37] text-base" : "text-gray-300"}`}>
                      {row.cost}
                    </span>
                  </div>
                ))}

                <a
                  href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] font-bold px-6 py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Get started from S$600
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY OUTSOURCING MAKES SENSE ───────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              The practical case
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Outsourcing Makes Sense for Singapore SMEs
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Outsourcing is not about cutting corners. It is about allocating limited
              resources where they create the most value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outsourcingBenefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#161616] border border-[#222222] rounded-2xl p-6 hover:border-[#D4AF37]/20 transition-colors duration-200 cursor-default group"
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY SOCIAL MEDIA MANPOWER IS DIFFERENT ────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Our model
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Social Media Manpower Is Different
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Not an agency. Not a freelancer. A dedicated, managed, replaceable social
              media person — at a price that actually makes sense for small businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {differentiators.map((d) => (
              <div
                key={d.title}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={d.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{d.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Learn more link */}
          <div className="text-center">
            <Link
              href="/social-media-manpower-singapore"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm hover:underline cursor-pointer"
            >
              See full service details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-3">
              Common questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Hire vs Outsource — FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] motion-safe:animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-wide uppercase">
              Skip the hiring process
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Want social media help{" "}
            <span className="text-[#D4AF37]">without hiring?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            From S$600/month. Dedicated remote manpower. No CPF. No contracts.
            Start within 3 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
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
              See full service details
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
