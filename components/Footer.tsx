import Image from 'next/image'
import React from 'react'
import RightArrowBtn from './RightArrowBtn'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="min-h-screen bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section - Try Whitepace today */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <div className="flex flex-col gap-6 items-center mb-10">
            <div>
              <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Try Whitepace
              </h2>
              <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                today
              </h2>
            </div>
            <div className="text-center max-w-md">
              <p className="text-base sm:text-lg">Get started for free.</p>
              <p className="text-base sm:text-lg">Add your whole team as your needs grow</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <RightArrowBtn btnTitle="Try Taskey free" />
            <Link href={"/sales"} className="decoration-0 text-base sm:text-lg hover:underline">
              On a big team? Contact sales
            </Link>
          </div>
          
          {/* Platform Icons */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-8">
            <Image
              src={"/assets/apple-white-logo.svg"}
              alt="apple logo"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform sm:w-[60px] sm:h-[60px]"
            />
            <Image
              src={"/assets/windows-logo.svg"}
              alt="windows logo"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform sm:w-[60px] sm:h-[60px]"
            />
            <Image
              src={"/assets/android-logo.svg"}
              alt="android logo"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform sm:w-[60px] sm:h-[60px]"
            />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center lg:text-start mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center lg:items-start gap-4 sm:col-span-2 lg:col-span-1">
            <Image
              src={"/assets/Logo.svg"}
              alt="Logo"
              width={190}
              height={34}
              className="w-[160px] sm:w-[190px]"
            />
            <p className="max-w-[280px] text-sm sm:text-base leading-relaxed">
              whitepace was created for the new ways we live and work. We make
              a better workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Product</h3>
            <ul className="space-y-2">
              <li className="text-yellow cursor-pointer hover:opacity-80 transition-opacity">Overview</li>
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Pricing</li>
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Customer stories</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Resources</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Blog</li>
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Guides & tutorials</li>
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Help center</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:opacity-80 transition-opacity">About us</li>
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Careers</li>
              <li className="cursor-pointer hover:opacity-80 transition-opacity">Media kit</li>
            </ul>
          </div>

          {/* Try It Today Section */}
          <div className="flex flex-col items-center lg:items-start gap-6 sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold">Try It Today</h2>
            <p className="max-w-[280px] text-sm sm:text-base leading-relaxed">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <RightArrowBtn btnTitle="Start today" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          
          {/* Left Side - Language, Terms, etc. */}
          <div className="flex md:flex-row flex-col  items-center gap-4 sm:gap-6 lg:gap-8">
            
            {/* Language Selector */}
            <div className="flex gap-2 items-center">
              <Image
                src={"/assets/Group.svg"}
                width={19}
                height={19}
                alt="group img"
              />
              <select title='language selector' className="bg-brand text-white cursor-pointer border-none outline-none">
                <option value="">English</option>
                <option value="">Español</option>
              </select>
            </div>

            {/* Footer Links */}
            <div className="flex md:flex-row flex-col items-center gap-4 sm:gap-6 text-sm">
              <span className="cursor-pointer hover:opacity-80 transition-opacity">Terms & privacy</span>
              <span className="cursor-pointer hover:opacity-80 transition-opacity">Security</span>
              <span className="cursor-pointer hover:opacity-80 transition-opacity">Status</span>
              <span className="cursor-pointer hover:opacity-80 transition-opacity">©2021 Whitepace LLC.</span>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-6 lg:gap-8 items-center">
            <Image
              src={"/assets/Facebook.svg"}
              width={20}
              height={20}
              alt="facebook img"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Image
              src={"/assets/Twitter.svg"}
              width={20}
              height={20}
              alt="twitter img"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Image
              src={"/assets/Linkedin.svg"}
              width={20}
              height={20}
              alt="linkedin img"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer