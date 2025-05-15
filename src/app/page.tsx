import Hero from "./components/hero"
import Showcase from "./components/showcase"
import NewArrival from "./components/newArrival"
import FeaturedProduct from "./components/featuredProduct"
import Promotion from "./components/promotion"
import Newsletter from "./components/newsletter"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Showcase />
      <NewArrival />
      <FeaturedProduct />
      <Promotion />
      <Newsletter />
      <Footer />
    </div>
  )
}