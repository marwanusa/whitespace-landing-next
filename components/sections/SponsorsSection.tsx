import React from "react";
import SectionWrapper from "../SectionWrapper";
import { sponsers } from "@/data/data";
import Image from "next/image";

const SponsorsSection = () => {
  return (
    <SectionWrapper
      sectionStyle="mainSection xl:h-[538px] lg:h-[528px] md:h-[821px] h-[893px]"
      mainStyle="mainContainer sm:mt-0 md:mt-0 flex flex-col gap-[100px] h-full items-center"
    >
      <h2 className="text-6xl font-bold text-black">Our sponsors</h2>
      <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-8 items-center w-full justify-between">
        {sponsers.map((sponser, idx) => {
          return (
            <Image
              src={sponser.img}
              alt={sponser.alt}
              key={idx}
              width={sponser.width}
              height={70}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default SponsorsSection;
