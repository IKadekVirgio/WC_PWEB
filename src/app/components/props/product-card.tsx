import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  name: string
  currentPrice: number
  originalPrice: number
  slug: string
}

export default function ProductCard({ image, name, currentPrice, originalPrice, slug }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/products/${slug}`}>
        <div className="relative overflow-hidden mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">${currentPrice.toFixed(2)}</span>
          <span className="text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
        </div>
      </Link>
    </div>
  )
}
