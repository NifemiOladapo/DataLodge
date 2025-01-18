import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="px-3 py-3 sm:py-5 text-center">
      <h1 className="sub-heading-text text-gray-500">Why Choose Us</h1>

      <h3 className="text-indigo-500 text-lg mt-5">
        Trusted Data Platform for Buyers. Subscribe for cheap data
        <br /> plans at affordable price for all networks.
      </h3>
      <div className="flex flex-wrap mt-14 w-full md:w-[700px] justify-center gap-10 sm:gap-20 mx-auto items-center">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={"/reliable.png"}
            alt="Reliablity"
            height={80}
            width={80}
          />
          <h3 className="text-lg text-gray-500">Reliabilty</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image src={"/security.png"} alt="Security" height={80} width={80} />
          <h3 className="text-lg text-gray-500">Concrete Security</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={"/customer.png"}
            alt="Customer support"
            height={80}
            width={80}
          />
          <h3 className="text-lg text-gray-500">Customer Support</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image src={"/auto.png"} alt="automation" height={80} width={80} />
          <h3 className="text-lg text-gray-500">Automation</h3>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
