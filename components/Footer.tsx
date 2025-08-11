import Image from 'next/image'
import React from 'react'
import RightArrowBtn from './RightArrowBtn'
import Link from 'next/link'

const Footer = () => {
  return (
          <footer className="lg:h-[1183px] md:h-[2212px] h-[2302px] bg-brand text-white mainSection ">
        <div className="mainContainer flex flex-col lg:gap-[100px] md:gap-[80px] gap-[140px]">
          <div className="flex flex-col items-center justify-center  gap-[40px]">
            <div className="flex flex-col gap-[24px] items-center">
              <h2 className="font-bold text-6xl">Try Whitepace</h2>
              <h2 className="font-bold text-6xl">today</h2>
              <span className="text-center">
                <p>Get started for free.</p>
                <p>Add your whole team as your needs grow</p>
              </span>
            </div>
            <RightArrowBtn btnTitle="Try Taskey free" />
            <Link href={"/sales"} className=" decoration-0 ">
              On a big team? Contact sales
            </Link>
            <div className="flex justify-center items-center gap-[40px]">
              <Image
                src={"/assets/apple-white-logo.svg"}
                alt="apple logo"
                width={60}
                height={60}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/windows-logo.svg"}
                alt="windows logo"
                width={60}
                height={60}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/android-logo.svg"}
                alt="android logo"
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 text-white gap-[100px]">
            <div className="flex flex-col gap-[15px]">
              <Image
                src={"/assets/Logo.svg"}
                alt="Logo"
                width={190}
                height={34}
              />
              <p className="max-w-[240px]">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <ul>
              <li className="font-bold text-lg mb-2">Product</li>
              <li className="text-yellow mb-2">Overview</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Customer stories</li>
            </ul>
            <ul>
              <li className="mb-2 font-bold text-lg">Resources</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Guides & tutorials</li>
              <li className="mb-2">Help center</li>
            </ul>
            <ul>
              <li className="mb-2 font-bold text-lg">Company</li>
              <li className="mb-2">About us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Media kit</li>
            </ul>
            <div className="flex flex-col gap-[23px]">
              <h2 className="text-xl font-bold">Try It Today</h2>
              <p className="max-w-[259px]">
                Get started for free. Add your whole team as your needs grow.
              </p>
              <RightArrowBtn
              btnTitle="Start today"
              />
            </div>
          </div>
          <hr />
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[60px]">
              <div className="flex gap-[6px] items-center">
                <Image
                src={"/assets/Group.svg"}
                width={19}
                height={19}
                alt="group img"
                />
                <select className="bg-brand text-white cursor-pointer" name="" id="">
                  <option value="">English</option>
                  <option value="">Español</option>
                </select>
              </div>
              <span className="cursor-pointer">Terms & privacy</span>
              <span className="cursor-pointer">Security</span>
              <span className="cursor-pointer">Status</span>
              <span className="cursor-pointer">©2021 Whitepace LLC.</span>
            </div>
            <div className="flex gap-[32px]">
            <Image
            src={"/assets/Facebook.svg"}
            width={10}
            height={10}
            alt="facebook img"
            className="cursor-pointer"
            />
            <Image
            src={"/assets/Twitter.svg"}
            width={15}
            height={15}
            alt="twitter img"
            className="cursor-pointer"
            />
            <Image
            src={"/assets/Linkedin.svg"}
            width={15}
            height={15}
            alt="linkedin img"
            className="cursor-pointer"
            />

            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer