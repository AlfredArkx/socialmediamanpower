// Central blog data store. Add new posts to this array — listing and detail
// pages are generated automatically from this file.

export type SectionType =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "cta_whatsapp" }
  | { type: "cta_contact" }
  | { type: "table"; headers: string[]; rows: string[][] }

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  excerpt: string
  readingTime: string
  publishedDate: string
  keywords: string[]
  content: SectionType[]
  relatedPostSlugs: string[]
}

export const blogPosts: BlogPost[] = [
  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-social-media-marketing-cost-singapore",
    title: "How Much Does Social Media Marketing Cost in Singapore? (2025 Guide)",
    metaTitle:
      "How Much Does Social Media Marketing Cost in Singapore? 2025 Guide",
    metaDescription:
      "A practical breakdown of social media marketing costs in Singapore — agencies, freelancers, in-house hires, and the affordable S$600/month alternative for SMEs.",
    category: "Pricing & Budgeting",
    excerpt:
      "Agencies, freelancers, in-house hires — social media costs in Singapore vary widely. Here is a clear breakdown of what you can expect to pay in 2025, and which option makes sense for your business size and budget.",
    readingTime: "7 min read",
    publishedDate: "2025-04-10",
    keywords: [
      "social media marketing cost singapore",
      "how much social media management singapore",
      "social media agency pricing singapore",
      "affordable social media singapore",
      "social media budget singapore sme",
    ],
    relatedPostSlugs: [
      "social-media-strategy-for-small-business-singapore",
      "how-often-should-businesses-post-on-instagram",
    ],
    content: [
      {
        type: "p",
        text: "One of the first questions Singapore business owners ask when considering social media help is: how much will this actually cost? The answer depends heavily on which route you take — and the range is enormous, from a few hundred dollars a month to tens of thousands.",
      },
      {
        type: "p",
        text: "This guide breaks down the realistic costs for each option available to Singapore SMEs in 2025, including the one most business owners never consider until they discover it.",
      },
      {
        type: "h2",
        text: "Option 1: Hiring a Social Media Agency",
      },
      {
        type: "p",
        text: "Full-service social media agencies in Singapore typically charge between S$1,500 and S$8,000 per month on retainer, depending on the scope of work and the agency's positioning. For that fee, you usually get a dedicated account manager, content planning, graphic design, posting, and monthly reporting.",
      },
      {
        type: "p",
        text: "The challenge for most SMEs is that agency retainers are priced for companies with marketing budgets — not for a cafe owner or a small online store trying to stay active on Instagram without breaking the bank.",
      },
      {
        type: "ul",
        items: [
          "Entry-level agency retainer: S$1,500–S$2,500/month",
          "Mid-tier agency: S$2,500–S$5,000/month",
          "Premium agency: S$5,000–S$10,000+/month",
          "One-off campaign packages: S$3,000–S$15,000",
        ],
      },
      {
        type: "callout",
        text: "Most Singapore SMEs do not need a full agency. They need consistent, professional posts — not strategy decks, campaign reports, and account managers billing at S$200/hour.",
      },
      {
        type: "h2",
        text: "Option 2: Hiring a Freelancer",
      },
      {
        type: "p",
        text: "Freelance social media managers in Singapore typically charge between S$800 and S$2,500 per month, depending on experience, the number of platforms managed, and how much content they produce. Rates can also be charged per post (S$30–S$150 per post) or per project.",
      },
      {
        type: "p",
        text: "Freelancers are more affordable than agencies but come with trade-offs: availability can be inconsistent, coverage gaps happen during holidays or when they take on too many clients, and there is no replacement if they become unavailable.",
      },
      {
        type: "ul",
        items: [
          "Part-time freelancer: S$800–S$1,500/month",
          "Experienced freelancer: S$1,500–S$2,500/month",
          "Per-post rate: S$30–S$150 depending on complexity",
          "No CPF required, but no replacement if unavailable",
        ],
      },
      {
        type: "h2",
        text: "Option 3: Hiring a Full-Time In-House Executive",
      },
      {
        type: "p",
        text: "A junior social media executive in Singapore earns between S$2,800 and S$3,800 per month in gross salary. Add CPF (17% employer contribution), annual leave, medical benefits, and the time cost of recruiting and managing — and the true monthly cost often exceeds S$4,500.",
      },
      {
        type: "p",
        text: "For larger businesses that need someone in-house managing multiple channels, running campaigns, and attending meetings, this can make sense. But for most SMEs who need consistent posting and basic content production, this is significant overhead.",
      },
      {
        type: "table",
        headers: ["Cost Component", "Monthly Estimate"],
        rows: [
          ["Gross salary (junior exec)", "S$2,800 – S$3,800"],
          ["CPF (employer at ~17%)", "S$476 – S$646"],
          ["Annual leave (prorated)", "S$215 – S$292"],
          ["Medical and misc benefits", "S$100 – S$200"],
          ["Total true monthly cost", "S$3,591 – S$4,938"],
        ],
      },
      {
        type: "h2",
        text: "Option 4: Dedicated Remote Social Media Manpower (From S$600/month)",
      },
      {
        type: "p",
        text: "This is the model we offer at Social Media Manpower. Instead of hiring an agency, a freelancer, or a full-time staff member, you get a dedicated remote social media person assigned to your business — responsible for your posting, content creation, captions, and graphics.",
      },
      {
        type: "p",
        text: "Because the manpower operates remotely and is part of a managed team, the cost is dramatically lower than any of the above options. You pay from S$600/month — no CPF, no recruitment cost, no onboarding overhead.",
      },
      {
        type: "ul",
        items: [
          "Dedicated remote social media person: from S$600/month",
          "No CPF, no benefits, no employer overhead",
          "Replaceable if unavailable — no coverage gaps",
          "Scales up or down based on your needs",
          "Onboarding within 3 days",
        ],
      },
      {
        type: "cta_whatsapp",
      },
      {
        type: "h2",
        text: "Cost Comparison Summary",
      },
      {
        type: "table",
        headers: ["Option", "Monthly Cost", "CPF Required", "Coverage Gaps", "Flexibility"],
        rows: [
          ["Full-service agency", "S$1,500 – S$8,000", "No", "Rare", "Low"],
          ["Freelancer", "S$800 – S$2,500", "No", "Common", "Medium"],
          ["In-house executive", "S$3,500 – S$5,000", "Yes", "During leave", "Low"],
          ["Remote manpower (us)", "From S$600", "No", "None*", "High"],
        ],
      },
      {
        type: "p",
        text: "*Replaceable manpower means your assigned person is covered if unavailable.",
      },
      {
        type: "h2",
        text: "What Should a Singapore SME Actually Pay?",
      },
      {
        type: "p",
        text: "For most small businesses in Singapore — cafes, salons, retail shops, online stores — the realistic social media need is consistent, professional posting across one to two platforms. You do not need a full agency. You need execution.",
      },
      {
        type: "p",
        text: "A monthly budget of S$600–S$1,200 is sufficient to get consistent posting, branded graphics, captions, and basic Reels if your goal is to stay active and professional online. Beyond that, additional budget should go toward paid advertising rather than organic content management.",
      },
      {
        type: "h2",
        text: "Hidden Costs to Watch Out For",
      },
      {
        type: "ul",
        items: [
          "Agency onboarding fees (sometimes S$500–S$2,000 upfront)",
          "Ad spend passed through with a markup (typically 10–20%)",
          "Revision and additional request charges in agency contracts",
          "Freelancer replacement time if they go MIA",
          "Your own time managing briefings and approvals",
        ],
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "p",
        text: "Social media marketing in Singapore does not have to cost thousands of dollars a month. If you are a small business that needs consistent content without the overhead of hiring, dedicated remote manpower at S$600/month is the most cost-effective option available in 2025.",
      },
      {
        type: "p",
        text: "If you are comparing options for your business, start with what you actually need: consistent posts, branded graphics, and someone who knows what they are doing. Everything else is a bonus.",
      },
      {
        type: "cta_contact",
      },
    ],
  },

  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    slug: "how-often-should-businesses-post-on-instagram",
    title: "How Often Should Singapore Businesses Post on Instagram? (2025)",
    metaTitle:
      "How Often Should Singapore Businesses Post on Instagram in 2025?",
    metaDescription:
      "The ideal Instagram posting frequency for Singapore businesses in 2025 — feed posts, Reels, Stories, and how consistency beats volume every time.",
    category: "Content Strategy",
    excerpt:
      "Should you post every day or just a few times a week? The answer depends on your resources and goals. Here is what actually works for Singapore businesses on Instagram in 2025.",
    readingTime: "6 min read",
    publishedDate: "2025-04-18",
    keywords: [
      "how often to post on instagram singapore",
      "instagram posting frequency business",
      "instagram strategy singapore sme",
      "instagram algorithm 2025",
      "social media posting schedule singapore",
    ],
    relatedPostSlugs: [
      "social-media-strategy-for-small-business-singapore",
      "how-much-does-social-media-marketing-cost-singapore",
    ],
    content: [
      {
        type: "p",
        text: "Ask ten social media experts how often a business should post on Instagram and you will likely get ten different answers. The truth is that frequency matters less than most people think — and consistency matters more than almost everyone realises.",
      },
      {
        type: "p",
        text: "This guide gives you a realistic, practical answer based on what actually works for Singapore SMEs in 2025: restaurants, salons, retail shops, and online sellers trying to grow without a dedicated social media team.",
      },
      {
        type: "h2",
        text: "What the Instagram Algorithm Actually Rewards",
      },
      {
        type: "p",
        text: "Instagram's algorithm in 2025 prioritises relevance and engagement over raw posting volume. A business that posts three times a week with strong creative will consistently outperform one that posts daily with low-effort content.",
      },
      {
        type: "p",
        text: "That said, the algorithm does reward accounts that post regularly. Accounts that go quiet for two or three weeks see a measurable drop in reach — even when they return with strong content. Consistency signals to the algorithm that your account is active and worth distributing.",
      },
      {
        type: "ul",
        items: [
          "Regular posting keeps your account in active distribution",
          "High engagement on fewer posts outperforms low engagement on many",
          "Gaps longer than 10–14 days hurt organic reach",
          "Reels consistently receive 2–3x the organic reach of static feed posts",
        ],
      },
      {
        type: "h2",
        text: "Recommended Posting Frequency by Content Type",
      },
      {
        type: "p",
        text: "Instagram is not just one feed. Stories, Reels, and the grid all function differently in terms of reach and engagement. Here is what works for most Singapore SMEs:",
      },
      {
        type: "table",
        headers: ["Content Type", "Recommended Frequency", "Purpose"],
        rows: [
          ["Feed posts (static/carousel)", "3–5 per week", "Brand presence, products, promos"],
          ["Reels", "1–3 per week", "Discovery, reach, new audiences"],
          ["Stories", "3–7 per day", "Engagement, behind-the-scenes, polls"],
          ["Lives", "1–2 per month", "Community, Q&A, events"],
        ],
      },
      {
        type: "p",
        text: "For most small businesses managing social media with limited time or a single person, the realistic target is three to five feed posts per week plus regular Stories. One Reel per week is enough to maintain discovery reach without overwhelming your production capacity.",
      },
      {
        type: "h2",
        text: "The Minimum Viable Posting Schedule for SMEs",
      },
      {
        type: "p",
        text: "If resources are tight — which they are for most SMEs — here is the minimum that still works:",
      },
      {
        type: "ul",
        items: [
          "At minimum: 3 feed posts per week + daily Stories",
          "Better: 4–5 feed posts per week + 1 Reel per week",
          "Ideal: 5 feed posts + 2 Reels + daily Stories",
          "Avoid: posting once a week or less — reach drops significantly",
        ],
      },
      {
        type: "callout",
        text: "Three consistent, high-quality posts per week will outperform seven rushed, low-effort posts every time. Never sacrifice quality for volume.",
      },
      {
        type: "h2",
        text: "Best Times to Post on Instagram in Singapore",
      },
      {
        type: "p",
        text: "Timing matters less than it used to, but posting during peak activity windows still gives your content a better initial engagement boost — which in turn signals the algorithm to distribute it more widely.",
      },
      {
        type: "p",
        text: "For Singapore audiences, the highest engagement windows are generally:",
      },
      {
        type: "ul",
        items: [
          "Morning commute: 7:30am – 9:00am",
          "Lunch break: 12:00pm – 1:30pm",
          "Evening wind-down: 7:00pm – 9:30pm",
          "Best days: Tuesday, Wednesday, Thursday",
          "Avoid: early Saturday and Sunday mornings (low engagement)",
        ],
      },
      {
        type: "h2",
        text: "What to Post: A Simple Content Mix for Singapore Businesses",
      },
      {
        type: "p",
        text: "Knowing how often to post only helps if you have something to post. Most Singapore SMEs benefit from a simple four-pillar content mix:",
      },
      {
        type: "ol",
        items: [
          "Product or service highlights (show what you do, what you sell, what makes it good)",
          "Promotions and offers (drive immediate action — the most direct path to sales)",
          "Behind-the-scenes and people content (builds authenticity and emotional connection)",
          "Educational or value-add posts (positions you as an expert, earns shares and saves)",
        ],
      },
      {
        type: "p",
        text: "A rough weekly split might be: two product posts, one promo, one behind-the-scenes, one educational. This keeps the feed varied, gives followers a reason to come back, and avoids the trap of looking like a constant advertisement.",
      },
      {
        type: "h2",
        text: "Signs You Are Posting Too Much or Too Little",
      },
      {
        type: "h3",
        text: "Signs you are posting too much:",
      },
      {
        type: "ul",
        items: [
          "Engagement rate is dropping despite higher volume",
          "Content quality is visibly declining",
          "You are running out of things to say and padding posts",
          "Follower growth has stalled or reversed",
        ],
      },
      {
        type: "h3",
        text: "Signs you are posting too little:",
      },
      {
        type: "ul",
        items: [
          "Reach is declining on each post compared to the previous period",
          "Followers are not engaging because they forgot you exist",
          "Your last post is more than 10 days ago",
          "Competitors are appearing in searches where you used to rank",
        ],
      },
      {
        type: "h2",
        text: "How to Stay Consistent Without Spending All Day on Instagram",
      },
      {
        type: "p",
        text: "The biggest obstacle for Singapore SMEs is not knowing what to post — it is finding the time to do it consistently while running a business. A few practical strategies:",
      },
      {
        type: "ul",
        items: [
          "Batch-create content once a week rather than daily (spend 2 hours on Monday to plan the week)",
          "Schedule posts in advance using Meta Business Suite (free) or a tool like Buffer or Later",
          "Keep a running folder of photos taken throughout the week for content assets",
          "Use Reels templates and trending audio to reduce production time",
          "Repurpose one piece of content across feed, Stories, and Reels",
        ],
      },
      {
        type: "p",
        text: "If even this feels unmanageable alongside running your business, outsourcing the execution to a dedicated social media person is often the most practical solution.",
      },
      {
        type: "cta_whatsapp",
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "p",
        text: "For most Singapore businesses in 2025, posting three to five times per week on the feed, supplemented by regular Stories and at least one Reel per week, is the sweet spot. Consistency over time builds more reach than occasional bursts of high-volume posting.",
      },
      {
        type: "p",
        text: "The key is finding a rhythm you or your team can sustain — because the worst posting schedule is the one you give up on after three weeks.",
      },
    ],
  },

  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    slug: "social-media-strategy-for-small-business-singapore",
    title: "Social Media Strategy for Small Businesses in Singapore (2025 Guide)",
    metaTitle:
      "Social Media Strategy for Small Businesses in Singapore | 2025 Guide",
    metaDescription:
      "A practical social media strategy guide for Singapore SMEs in 2025. Which platforms to use, what content to post, how to build a schedule, and when to outsource.",
    category: "Strategy",
    excerpt:
      "Most social media advice is written for big brands with big teams. This guide is for Singapore SME owners who need a strategy that actually works with limited time, limited budget, and no marketing department.",
    readingTime: "8 min read",
    publishedDate: "2025-04-25",
    keywords: [
      "social media strategy singapore small business",
      "sme social media singapore",
      "social media plan singapore",
      "how to do social media for small business singapore",
      "social media marketing tips singapore",
    ],
    relatedPostSlugs: [
      "how-much-does-social-media-marketing-cost-singapore",
      "how-often-should-businesses-post-on-instagram",
    ],
    content: [
      {
        type: "p",
        text: "Most social media strategy guides are written for companies with marketing teams, content budgets, and dedicated campaign managers. This one is not. This guide is for Singapore small business owners — cafe operators, salon owners, Shopee sellers, and local service providers — who need a realistic, executable plan they can actually follow.",
      },
      {
        type: "h2",
        text: "Why Every Singapore SME Needs a Social Media Strategy (Even a Simple One)",
      },
      {
        type: "p",
        text: "Social media without a strategy is just noise. Posting randomly, whenever inspiration strikes, with no consistent style or purpose produces very little business value — even if the individual posts are good.",
      },
      {
        type: "p",
        text: "A strategy does not have to be complicated. It is simply the answer to four questions: which platforms, what content, how often, and what outcome are you working towards?",
      },
      {
        type: "ul",
        items: [
          "Over 90% of Singapore residents use social media daily",
          "74% of consumers use social media to inform purchasing decisions",
          "Businesses that post consistently generate 3x more leads than those that post sporadically",
          "Instagram and TikTok are the top discovery channels for F&B, beauty, and retail in Singapore",
        ],
      },
      {
        type: "h2",
        text: "Step 1: Choose the Right Platforms for Your Business",
      },
      {
        type: "p",
        text: "You do not need to be on every platform. For most Singapore SMEs, one or two platforms executed well will generate far better results than five platforms executed poorly.",
      },
      {
        type: "table",
        headers: ["Platform", "Best For", "Strength"],
        rows: [
          ["Instagram", "F&B, beauty, retail, fashion, lifestyle", "Visual discovery, local hashtags, bookings"],
          ["TikTok", "F&B, ecommerce, any visually engaging business", "Organic reach, viral potential, younger audiences"],
          ["Facebook", "Local services, community-focused businesses, older demographics", "Local groups, events, community trust"],
          ["LinkedIn", "B2B, professional services, corporate clients", "Lead generation, thought leadership"],
          ["Shopee/Lazada feeds", "Ecommerce product sellers", "In-platform product discovery and reviews"],
        ],
      },
      {
        type: "p",
        text: "For most Singapore SMEs in F&B, beauty, and retail, start with Instagram. Add TikTok if you can produce short video content. Facebook is worth maintaining for older local audiences and community engagement. LinkedIn is only relevant if your clients are businesses.",
      },
      {
        type: "h2",
        text: "Step 2: Define Your Content Pillars",
      },
      {
        type: "p",
        text: "Content pillars are the recurring themes your social media revolves around. Having defined pillars means you never stare at a blank screen wondering what to post — you always have a category to draw from.",
      },
      {
        type: "p",
        text: "For most Singapore SMEs, four pillars cover everything you need:",
      },
      {
        type: "ol",
        items: [
          "Showcase — What you do, what you sell, what makes it good. Products, services, before/afters, new arrivals.",
          "Promote — Offers, deals, packages, flash sales, seasonal specials. Direct action-driving content.",
          "Behind the scenes — The people, the process, the story. Builds emotional connection and brand personality.",
          "Social proof — Reviews, customer photos, testimonials, ratings. Reduces hesitation and builds trust.",
        ],
      },
      {
        type: "callout",
        text: "A common mistake is making 80% of your posts promotional. Mix it up. Promotional posts convert; value and story posts build the trust that makes conversion possible.",
      },
      {
        type: "h2",
        text: "Step 3: Set Realistic Goals",
      },
      {
        type: "p",
        text: "Vague goals produce vague results. Before investing time or money in social media, be specific about what success looks like for your business.",
      },
      {
        type: "ul",
        items: [
          "Awareness goal: reach 5,000 new accounts per month within 6 months",
          "Engagement goal: maintain a 3–5% engagement rate on feed posts",
          "Lead goal: generate 20 WhatsApp enquiries per month from social media",
          "Sales goal: attribute 15% of online orders to social media referrals",
        ],
      },
      {
        type: "p",
        text: "Pick one primary goal per quarter. Trying to achieve awareness, engagement, and direct sales simultaneously often results in content that serves none of those goals well.",
      },
      {
        type: "h2",
        text: "Step 4: Build a Simple Monthly Content Calendar",
      },
      {
        type: "p",
        text: "You do not need a complex content management tool. A basic monthly calendar with post dates, content types, and topics is enough to keep your social media running consistently.",
      },
      {
        type: "p",
        text: "A simple weekly template for most Singapore SMEs might look like this:",
      },
      {
        type: "ul",
        items: [
          "Monday: Showcase post (product or service highlight)",
          "Wednesday: Promotional post (current offer or upcoming deal)",
          "Friday: Social proof post (customer review or result) or behind-the-scenes",
          "Daily: Stories (repurpose feed content, polls, quick updates)",
          "Saturday: Reel (food, product, transformation — highest weekend reach)",
        ],
      },
      {
        type: "h2",
        text: "Step 5: Create Content With What You Have",
      },
      {
        type: "p",
        text: "You do not need a professional photographer or a video crew to produce good social media content. Most Singapore SMEs produce their best-performing content with nothing more than a smartphone and decent natural lighting.",
      },
      {
        type: "ul",
        items: [
          "Shoot photos and short clips throughout your working day — stock them in a shared folder",
          "Use natural light whenever possible; avoid yellow indoor lighting for food or product shots",
          "Keep a consistent colour palette and filter for feed cohesion",
          "Write captions that match your brand voice — conversational and local works well for SG audiences",
          "Use Singapore-specific hashtags (#sgfood, #sgbeauty, #shopeesg) alongside niche tags",
        ],
      },
      {
        type: "h2",
        text: "Step 6: Track What Works and Drop What Doesn't",
      },
      {
        type: "p",
        text: "Instagram and Facebook provide free analytics (Insights) that show you which posts got the most reach, engagement, and profile visits. Review these monthly — not daily. Look for patterns, not individual data points.",
      },
      {
        type: "ul",
        items: [
          "Which content type performs best (Reels vs static vs carousel)?",
          "Which topics drive the most saves and shares?",
          "Which posts result in profile visits or WhatsApp clicks?",
          "What time of day gets the highest engagement for your specific audience?",
        ],
      },
      {
        type: "p",
        text: "Do more of what works and less of what doesn't. Social media strategy is iterative — you adjust based on evidence, not assumptions.",
      },
      {
        type: "h2",
        text: "When to Outsource Your Social Media",
      },
      {
        type: "p",
        text: "The strategy above is achievable in-house — but only if you have the time. For most SME owners running operations, serving customers, and managing staff, finding two to four hours a week for social media creation is genuinely difficult.",
      },
      {
        type: "p",
        text: "Consider outsourcing when:",
      },
      {
        type: "ul",
        items: [
          "You have gone more than two weeks without posting",
          "Your content looks inconsistent or unprofessional",
          "You know what to post but never find the time to do it",
          "A competitor's social media presence is visibly outpacing yours",
          "You are spending more time thinking about social media than actually running your business",
        ],
      },
      {
        type: "p",
        text: "Dedicated remote social media manpower at S$600/month is designed exactly for this situation — you provide the direction and photos, and a dedicated person handles the daily execution.",
      },
      {
        type: "cta_whatsapp",
      },
      {
        type: "h2",
        text: "A Note on Paid Social Media Advertising",
      },
      {
        type: "p",
        text: "This guide has focused on organic social media — content you post without paying to promote it. Paid advertising on Instagram, Facebook, and TikTok is a separate strategy that can amplify your organic efforts but requires its own budget and expertise.",
      },
      {
        type: "p",
        text: "For most Singapore SMEs just starting out, get your organic strategy right first. Build a consistent, professional presence. Then layer in paid advertising once you have content that converts.",
      },
      {
        type: "h2",
        text: "Summary: Your Social Media Strategy Checklist",
      },
      {
        type: "ul",
        items: [
          "Choose 1–2 platforms based on where your customers actually are",
          "Define 3–4 content pillars to draw from every week",
          "Set one primary goal per quarter with a measurable metric",
          "Build a simple monthly content calendar",
          "Post a minimum of 3x per week with daily Stories",
          "Review Instagram Insights monthly and adjust accordingly",
          "Outsource execution if consistency breaks down",
        ],
      },
      {
        type: "p",
        text: "A social media strategy does not need to be complex to be effective. Consistent, relevant, professional content — posted regularly over months — will build meaningful visibility and trust for any Singapore SME.",
      },
      {
        type: "cta_contact",
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => p !== undefined)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
