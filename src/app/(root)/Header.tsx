import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-gray-100 shadow-md">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-purple-700">
        DataLodge
      </h1>
      <nav className="flex gap-5 items-center">
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Our Services</p>
        <p className="cursor-pointer">Pricing</p>
        <p className="cursor-pointer">Faq</p>
        <Link
          href={"/login"}
          className="px-10 py-2 border-solid hover:bg-purple-700 border-purple-700 transition hover:text-white  text-purple-700 border-2"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
