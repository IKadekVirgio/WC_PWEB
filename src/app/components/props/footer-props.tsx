import { Facebook, Twitter, Linkedin } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Define types for footer data
export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export interface FooterProps {
  columns: FooterColumn[]
  socialText: string
  socialLinks: SocialLink[]
  copyright: string
}

// Footer data
export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Email Row", href: "/email-row" },
      { label: "Free Tools", href: "/free-tools" },
      { label: "Agents", href: "/agents" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Agents", href: "/our-agents" },
      { label: "Member Stories", href: "/member-stories" },
      { label: "Video", href: "/video" },
      { label: "Free trial", href: "/free-trial" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Partnerships", href: "/partnerships" },
      { label: "Terms of use", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Get in touch",
    links: [], // No links in this column, just text and social icons
  },
]

export const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export const socialText = "You'll find your next Marketing value you prefer."
export const copyright = "Copyright 2025 j-shop.com, All rights reserved."

// Default footer props
export const defaultFooterProps: FooterProps = {
  columns: footerColumns,
  socialText,
  socialLinks,
  copyright,
}
