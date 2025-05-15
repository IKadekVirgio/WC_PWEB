import Link from "next/link"
import Image from "next/image"

export default function Promotion() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Have Jewel Best Collection For You All</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-black px-8 py-3 uppercase font-medium hover:bg-gray-200 transition-colors"
            >
              Shop Now
            </Link>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <Image
              src="/jewelry-model.png"
              alt="Diamond Jewelry Collection"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    )
}