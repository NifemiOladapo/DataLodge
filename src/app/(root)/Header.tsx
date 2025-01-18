const Header = () => {
  return (
    <header className="flex  fixed top-0 left-0 right-0 justify-between bg-gray-300 p-2 md:p-4 items-center">
      <h1 className="sm:text-3xl text-xl text-indigo-500 cursor-pointer">DataLodge</h1>
      <nav className="flex items-center gap-5">
        <p className="cursor-pointer text-md font-light">About Us</p>
        <p className="cursor-pointer text-md font-light">Pricing</p>
        <p className="cursor-pointer text-md font-light">Our Services</p>
        <button className="hover:bg-indigo-500 transition-all hover:text-white cursor-pointer text-md font-light border-indigo-500 border-2 py-2 px-3 sm:px-5">Login/Signup</button>
      </nav>
    </header>
  );
};

export default Header;
