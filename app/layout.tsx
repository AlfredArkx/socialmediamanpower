import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import StickyWhatsApp from "@/components/StickyWhatsApp"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Social Media Manpower Singapore | Expert Social Media Management",
    template: "%s | Social Media Manpower Singapore",
  },
  description:
    "Singapore's leading social media management agency. Expert social media managers, content creators, and digital marketing professionals for your business.",
  keywords: [
    "social media manpower",
    "social media management Singapore",
    "social media agency Singapore",
    "content creator Singapore",
    "digital marketing Singapore",
    "social media manager hire",
  ],
  authors: [{ name: "Social Media Manpower" }],
  creator: "Social Media Manpower",
  metadataBase: new URL("https://socialmediamanpower.sg"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://socialmediamanpower.sg",
    title: "Social Media Manpower Singapore",
    description:
      "Singapore's leading social media management agency. Expert professionals for your brand.",
    siteName: "Social Media Manpower",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Manpower Singapore",
    description:
      "Singapore's leading social media management agency. Expert professionals for your brand.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  )
}
