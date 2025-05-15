import Link from "next/link"
import { type FooterProps, defaultFooterProps } from "./props/footer-props"

// The main Footer component that accepts props
function FooterWithProps({ columns, socialText, socialLinks, copyright }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{column.title}</h3>
              {index === columns.length - 1 ? (
                // Last column with social links
                <>
                  <p className="mb-6">{socialText}</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, socialIndex) => {
                      const Icon = social.icon
                      return (
                        <Link
                          key={socialIndex}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black p-2 hover:bg-gray-200 transition-colors"
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </Link>
                      )
                    })}
                  </div>
                </>
              ) : (
                // Regular columns with links
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="hover:text-gray-300 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white text-black py-4 text-center">
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

// Default export that uses default props
export default function Footer(props: Partial<FooterProps> = {}) {
  return FooterWithProps({
    columns: props.columns || defaultFooterProps.columns,
    socialText: props.socialText || defaultFooterProps.socialText,
    socialLinks: props.socialLinks || defaultFooterProps.socialLinks,
    copyright: props.copyright || defaultFooterProps.copyright,
  })
}
