"use client";

import Image from "next/image";
import { ElementRef, ElementType, useRef } from "react";
import MenuBar from "./MenuBar";

const Header = () => {
  let isOpen = false;
  let navbarState = false;
  const navbarRef = useRef(null);
  const toggleNavbarVisibility = () => {
    if (navbarState === false) {
      navbarRef.current ? (navbarRef.current.style.right = "0") : null;

      navbarState = true;
    } else {
      navbarRef.current ? (navbarRef.current.style.right = "100%") : null;
      navbarState = false;
    }
  };
  return (
    <header className="flex  fixed shadow-md top-0 left-0 right-0 justify-between bg-gray-300 p-3 md:p-4 items-center">
      <h1 className="sm:text-3xl text-xl text-indigo-500 cursor-pointer">
        DataLodge
      </h1>
      <nav
        ref={navbarRef}
        className="flex z-10 ease-in-out transition-all md:justify-normal justify-between  gap-5 md:flex-row flex-col md:static p-10 md:p-0 fixed md:h-[fit-content] h-[50vh] top-0 right-[100%] md:w-[fit-content] w-[100vw] items-center bg-gray-300"
      >
        <p className="cursor-pointer text-md font-light">About Us</p>
        <p className="cursor-pointer text-md font-light">Pricing</p>
        <p className="cursor-pointer text-md font-light">Our Services</p>
        <button className="ghost-button">Login/Signup</button>
      </nav>
      <MenuBar onClick={toggleNavbarVisibility} />
    </header>
  );
};

export default Header;
