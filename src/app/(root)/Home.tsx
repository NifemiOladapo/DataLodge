import AboutUs from "./AboutUs";
import Copyright from "./Copyright";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <Copyright />
    </div>
  );
};

export default Home;
