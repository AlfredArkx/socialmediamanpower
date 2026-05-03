"use client"

import { useState } from "react"

interface FormState {
  name: string
  businessName: string
  businessType: string
  email: string
  phone: string
  budget: string
  message: string
}

const empty: FormState = {
  name: "",
  businessName: "",
  businessType: "",
  email: "",
  phone: "",
  budget: "",
  message: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  function validate(): boolean {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = "Please enter your name."
    if (!form.businessName.trim()) e.businessName = "Please enter your business name."
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address."
    if (!form.phone.trim()) e.phone = "Please enter your phone or WhatsApp number."
    if (!form.message.trim()) e.message = "Please tell us a bit about your needs."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#161616] border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-10 text-center">
        <div className="w-16 h-16 bg-[#D4AF37]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#D4AF37]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-3">Enquiry Received</h3>
        <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto">
          Thank you. We have received your enquiry and will contact you shortly.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          For a faster response, you can also{" "}
          <a
            href="https://wa.me/6591234567?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Manpower%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            WhatsApp us directly
          </a>
          .
        </p>
      </div>
    )
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none transition-colors duration-200 ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500"
        : "border-[#333333] focus:border-[#D4AF37]/50"
    }`

  const selectClass = (field: keyof FormState) =>
    `w-full bg-[#0A0A0A] border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-200 cursor-pointer appearance-none ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500 text-white"
        : "border-[#333333] focus:border-[#D4AF37]/50 text-white"
    }`

  return (
    <div className="bg-[#161616] border border-[#222222] rounded-3xl p-8 sm:p-10">
      <h2 className="text-white font-bold text-xl mb-1">Send Us an Enquiry</h2>
      <p className="text-gray-400 text-sm mb-8">
        Fill in the form below and we will get back to you within 1 business day.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row 1: Name + Business name */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
              Your Name <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Tan"
              className={inputClass("name")}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="businessName" className="block text-gray-300 text-sm font-medium mb-2">
              Business Name <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Your Business Pte Ltd"
              className={inputClass("businessName")}
            />
            {errors.businessName && <p className="text-red-400 text-xs mt-1.5">{errors.businessName}</p>}
          </div>
        </div>

        {/* Row 2: Business type */}
        <div>
          <label htmlFor="businessType" className="block text-gray-300 text-sm font-medium mb-2">
            Business Type
          </label>
          <div className="relative">
            <select
              id="businessType"
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              className={selectClass("businessType")}
            >
              <option value="">Select your industry</option>
              <option value="fnb">F&amp;B (Restaurant, Cafe, Hawker)</option>
              <option value="beauty">Beauty &amp; Wellness (Salon, Spa, Studio)</option>
              <option value="retail">Retail (Boutique, Shop, Store)</option>
              <option value="ecommerce">Ecommerce (Shopee, Lazada, TikTok Shop)</option>
              <option value="service">Local Service Business</option>
              <option value="other">Other</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Row 3: Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
              Email Address <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@yourbusiness.sg"
              className={inputClass("email")}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
              Phone / WhatsApp <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+65 9123 4567"
              className={inputClass("phone")}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
          </div>
        </div>

        {/* Row 4: Monthly budget */}
        <div>
          <label htmlFor="budget" className="block text-gray-300 text-sm font-medium mb-2">
            Monthly Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={selectClass("budget")}
            >
              <option value="">Select your budget range</option>
              <option value="600">S$600/month (Standard)</option>
              <option value="600-1000">S$600 – S$1,000/month</option>
              <option value="1000-2000">S$1,000 – S$2,000/month</option>
              <option value="2000+">S$2,000+/month</option>
              <option value="unsure">Not sure yet</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Row 5: Message */}
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
            Tell us about your needs <span className="text-[#D4AF37]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="E.g. I run a cafe in Tanjong Pagar and need help posting consistently on Instagram and TikTok..."
            className={`${inputClass("message")} resize-none`}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#D4AF37] hover:bg-[#e8c84a] text-[#0A0A0A] py-4 rounded-xl font-bold text-base transition-colors duration-200 cursor-pointer"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  )
}
