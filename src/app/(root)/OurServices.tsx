import Image from "next/image";

const OurServices = () => {
  return (
    <section className="bg-indigo-500 text-white px-3 py-3 sm:py-5">
      <h1 className="sub-heading-text text-center">Our Services</h1>
      <h3 className="text-lg text-gray-300 text-center mt-5">
        We offer instant recharge of Airtime, Data bundle,Electricity Bill
        Payemnt and so much more.
      </h3>
      <div className="flex flex-col mt-14 w-full gap-10 sm:gap-20 ">
        <div className="flex gap-3 flex-col items-center self-center">
          <Image src={"/wifi.png"} alt="Data Bundles" width={80} height={80} />
          <div className=" flex flex-col gap-1 items-center">
            <h3>BUY DATA</h3>
            <p className="text-[16px] text-gray-300">
              Start enjoying this very low rates Data plan for your internet
              browsing databundle.
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-col items-center self-center">
          <Image src={"/phone.png"} alt="Airtime BunRechargedles" width={80} height={80} />
          <div className="flex flex-col gap-1 items-center">
            <h3>AIRTIME RECHARGE</h3>
            <p className="text-[16px] text-gray-300">
              Making online recharge cheap and easy to buy at all time of the
              day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
