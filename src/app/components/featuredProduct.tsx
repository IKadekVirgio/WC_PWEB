import Image from "next/image"

export default function FeaturedProduct() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24 bg-black">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/featuredProduct.png"
              alt="Silver Round Designer Bracelet"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Silver Round Designer Necklace For Women</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </p>

            <div className="mb-8">
              <h3 className="text-xl mb-4">Size</h3>
              <div className="flex space-x-4">
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                  S
                </button>
                <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center border border-gray-600 hover:bg-gray-700 transition-colors">
                  M
                </button>
                <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center border border-gray-600 hover:bg-gray-700 transition-colors">
                  L
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-4xl md:text-5xl font-bold">$ 549.29</div>
              <button className="bg-white text-black px-8 py-3 uppercase font-medium hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}