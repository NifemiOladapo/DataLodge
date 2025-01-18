import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="px-3 bg-indigo-500 py-3 sm:py-5 text-center">
      <h1 className="sub-heading-text text-white">About Us</h1>

      <div className="flex gap-5 w-full flex-col sm:flex-row max-w-[900px] mt-10 mx-auto">
        <Image
          src={"/aboutus-image.jpg"}
          height={100}
          className="w-[2000px]"
          width={100}
          alt="about-us image"
        />
        <div className="flex flex-col text-gray-300 items-center">
          <p>
            DataLodge is the new reliable and affordable way to get your data
            bundles on any Nigerian network.
          </p>
          <p>
            We offer the best prices rates for Airtel, MTN, 9mobile and Glo.
          </p>
          <p>
            Whether you are a casual surfer using just 500MB a month or a heavy
            data addict consuming 20GB+ monthly, we have an affordable data plan
            for you.
          </p>
          <p>
            With multiple payment options and 24/7 availability, take advantage
            of our cheap data offering for all networks and do more in every
            area of your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
