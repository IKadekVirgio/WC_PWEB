"use client"

import type React from "react"

import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Email submitted:", email)
    // Reset form
    setEmail("")
    // You could add a success message or toast notification here
  }

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/newsletter.png')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Join WIN WIN Family Now!</h2>

        {/* Email Subscription Form */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 px-4 bg-white text-black"
          />
          <button type="submit" className="h-12 px-6 text-white bg-black hover:bg-gray-800">
            Join Family
          </button>
        </form>
      </div>
    </section>
  )
}
