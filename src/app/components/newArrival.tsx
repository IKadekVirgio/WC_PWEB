import {ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./props/product-card"


const newArrivals = [
  {
    id: 1,
    name: "Serenity Sparkle",
    slug: "serenity-sparkle",
    image: "/newArrival1.png",
    currentPrice: 287.0,
    originalPrice: 397.0,
  },
  {
    id: 2,
    name: "Nature's Delight",
    slug: "natures-delight",
    image: "/newArrival2.png",
    currentPrice: 409.0,
    originalPrice: 509.0,
  },
  {
    id: 3,
    name: "Regal Splendor",
    slug: "regal-splendor",
    image: "/newArrival3.png",
    currentPrice: 658.0,
    originalPrice: 889.0,
  },
]

export default function NewArrival() {
    return (
    <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">New Arrivals</h2>
          <div className="flex space-x-4">
            <button className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              slug={product.slug}
            />
          ))}
        </div>
      </section>
    )
}
     