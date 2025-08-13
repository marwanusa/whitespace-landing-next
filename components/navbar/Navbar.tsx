'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import RightArrowBtn from "../RightArrowBtn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-brand text-white relative">
      {/* Main Navbar */}
      <div className="flex items-center justify-between h-full py-3 px-4 lg:px-6">
        {/* Logo */}
        <div>
          <Image src={"/assets/Logo.svg"} alt="Logo" width={191} height={34} />
        </div>
        <div className="flex items-center gap-3">
        {/* Desktop Navigation  */}
        <div className="hidden xl:block">
          <ul className="flex space-x-4 items-center">
            {links.map((link, index) => (
              <li key={index} className="flex items-center">
                <Link href={link.href} className="px-2 hover:opacity-80 transition-opacity">
                  {link.name}
                </Link>
                <Image
                  src={`/assets/Down Arrow.svg`}
                  alt="Down Arrow"
                  width={26}
                  height={26}
                />
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="px-7 py-4 rounded-lg text-brand font-medium bg-yellow hover:bg-yellow/90 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <RightArrowBtn btnTitle="Try Whitepace free" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation for Large screens (shows only buttons) */}
        <div className="hidden lg:flex xl:hidden space-x-4">
          <Link
            href="/login"
            className="px-6 py-3 rounded-lg text-brand font-medium bg-yellow hover:bg-yellow/90 transition-colors"
          >
            Login
          </Link>
          <Link href="/signup">
            <RightArrowBtn btnTitle="Try Whitepace free" />
          </Link>
        </div>

        {/* Mobile Menu Button (for screens smaller than XL) */}
        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        </div>

      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-brand border-t border-gray-600 z-50">
          <div className="px-4 py-6">
            {/* Navigation Links */}
            <ul className="space-y-4 mb-6">
              {links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="flex items-center justify-between py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <Image
                      src={`/assets/Down Arrow.svg`}
                      alt="Down Arrow"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4 border-t border-gray-600">
              <Link
                href="/login"
                className="block w-full text-center px-6 py-3 rounded-lg text-brand font-medium bg-yellow hover:bg-yellow/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="block w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <RightArrowBtn btnTitle="Try Whitepace free" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;