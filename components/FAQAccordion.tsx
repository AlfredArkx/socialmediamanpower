"use client"

import { useState } from "react"

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3" role="list">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
              isOpen
                ? "border-[#D4AF37]/40 bg-[#161616]"
                : "border-[#222222] bg-[#161616] hover:border-[#D4AF37]/20"
            }`}
            role="listitem"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span
                className={`font-semibold text-base pr-6 transition-colors duration-200 ${
                  isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-[#D4AF37]"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-[#D4AF37] rotate-180" : "bg-[#222222]"
                }`}
              >
                <svg
                  className={`w-4 h-4 ${isOpen ? "text-[#0A0A0A]" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
