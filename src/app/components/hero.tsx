import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
         <Image
              src="/logo.png"
              alt="WIN WIN Silver Jewelry"
              width={50}
              height={50}
              className="object-contain"
            />
          <div>
            <div className="font-bold text-xl">WIN WIN</div>
            <div className="text-xs tracking-wider">SILVER JEWELRY</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link href="/featured" className="hover:text-gray-300 transition-colors">
            Featured
          </Link>
          <Link href="/testimonial" className="hover:text-gray-300 transition-colors">
            Testimonial
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            Log In
          </Link>
          <Link href="/get-started" className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Where Glamour Meets Grace, Our Jewelry Collection!
          </h1>
          <p className="text-gray-400 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/get-started"
              className="bg-white text-black px-8 py-3 uppercase font-medium hover:bg-gray-200 transition-colors"
            >
              Get Started
            </Link>
            <button className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-transparent border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="ml-3">Play Video</span>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/Ring.png"
              alt="Diamond Ring"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </main>

      {/* Pagination Dots */}
      <div className="container mx-auto px-4 flex justify-center md:justify-end mb-8">
        <div className="flex space-x-3">
          <button className="w-2 h-2 rounded-full bg-gray-500"></button>
          <button className="w-2 h-2 rounded-full bg-white"></button>
          <button className="w-2 h-2 rounded-full bg-gray-500"></button>
          <button className="w-2 h-2 rounded-full bg-gray-500"></button>
        </div>
      </div>
    </div>
  )
}
