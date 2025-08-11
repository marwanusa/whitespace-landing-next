import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="bg-brand text-white flex items-center justify-between h-full py-3">
      <div>
        <Image src={"/assets/Logo.svg"} alt="Logo" width={191} height={34} />
      </div>
      <div>
        <ul className="flex space-x-4 items-center">
          {links.map((link, index) => (
            <li key={index} className=" items-center hidden xl:flex">
              <Link href={link.href} className="px-2 ">
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
              className="px-7 py-4 rounded-lg text-brand font-medium bg-yellow h-[34px]"
            >
              Login
            </Link>
          </li>
          <li >
            <Link
              href="/signup"
            >
                <div className="px-[20px] py-3.5  bg-brand-100 rounded-lg flex justify-center items-center">
              Try Whitepace free
              <Image
                src={`/assets/Right arrow icon.svg`}
                alt="right Arrow"
                width={26}
                height={26}
              />
                </div>

            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
