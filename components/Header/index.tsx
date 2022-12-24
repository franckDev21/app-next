import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 bg-gray-50 max-w-7xl mx-auto py-3 items-center flex space-x-6">
      <a
        href="#"
        className="text-4xl inline-block font-extrabold text-gray-200"
      >
        AlphaLion
      </a>
      <nav className=" text-2xl font-bold text-gray-400 space-x-3 flex items-center">
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
