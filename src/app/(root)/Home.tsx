import AboutUs from "./AboutUs"
import Hero from "./Hero"
import OurServices from "./OurServices"
import WhyChooseUs from "./WhyChooseUs"

const Home = () => {
  return (
    <div className="w-full">
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <OurServices />
    </div>
  )
}

export default Home