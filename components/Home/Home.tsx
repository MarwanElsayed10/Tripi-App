import Destination from "./Destination"
import Hero from "./Hero"
import Hotel from "./Hotel"
import Review from "./Review"
import WhyUs from "./WhyUs"

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Destination/>
      <Hotel/>
      <WhyUs/>
      <Review />
    </div>
  )
}

export default Home
