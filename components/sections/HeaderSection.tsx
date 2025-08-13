import Image from "next/image";
import React from "react";
import RightArrowBtn from "../RightArrowBtn";
import Navbar from "../navbar/Navbar";

const HeaderSection = () => {
  return (
    <section className=" h-[870px] md:h-[1117px] lg:h-[733px] xl-[h-750px] 2xl:h-[921px] flex bg-[url('/assets/Element.png')] bg-no-repeat  bg-center flex-col  mainSection bg-brand">
      <header className="h-[92px]">
        <Navbar />
      </header>
      <main className="flex flex-col lg:flex-row items-center h-full justify-between mainContainer gap-5 lg:gap-0 ">
        <div className="flex flex-col gap-10 items-center lg:items-start">
          <h2 className="text-6xl font-bold text-white">
            Get More Done with
            <br />
            whitepace
          </h2>
          <p className="text-white">
            Project management software that enables your teams to collaborate,
            plan, analyze <br /> and manage everyday tasks
          </p>
          <RightArrowBtn btnTitle="Try Whitepace free" />
        </div>
        <div className="2xl:w-[825px] 2xl:h-[550px] xl:w-[685px] xl:h-[457px] lg:w-[526px] lg:h-[350px] md:w-[551px] md:h-[367px] w-[286px] h-[191px]">
          <Image
            src={"https://placehold.co/825x550/png"}
            alt="image"
            width={825}
            height={550}
          />
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
