const Hero = () => {
  return (
    <section className="min-h-screen bg-[url('../../public/bg-image.jpg')] bg-top bg-cover flex items-center w-full justify-center px-2">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center">
          Welcome to DataLodge
        </h1>
        <h3 className="italic text-center">
          Your one stop point for you data bundles and airtime purchases.
        </h3>
        <button className="ghost-button mt-4">Buy Now</button>
      </div>
    </section>
  );
};

export default Hero