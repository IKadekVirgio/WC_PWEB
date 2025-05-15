import Image from "next/image"

export default function Showcase() {
    return (
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/multiple-ring.png"
              alt="Diamond Rings Collection"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">An Exquisite Diamond Jewellery</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut
              voluptatum labore et possimus voluptas. Vel vitae temporibus sit nulla consequatur in illo galisum eo
            </p>
            <div className="flex items-center justify-between mb-8">
              <button className="bg-white text-black px-8 py-3 uppercase font-medium hover:bg-gray-200 transition-colors">
                View More
              </button>
              <div className="text-4xl md:text-5xl font-bold">$ 647.59</div>
            </div>
          </div>
        </div>
      </section>
    )
}