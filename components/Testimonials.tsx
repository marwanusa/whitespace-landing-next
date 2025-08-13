'use client'
import { TestimonialsProps } from "@/types/TestimonialsProps";
import Image from "next/image";
import React from "react";

const Testimonials = ({
  type,
  avater,
  paragraph,
  name,
  title,
}: TestimonialsProps) => {
  return (
    <div
      className={`${
        type === "dark"
          ? "bg-brand-100 text-white border-1 border-white"
          : "bg-white border-1 border-brand text-black"
      } xl:h-[498px] lg:h-[560px] md:h-[430px] h-[550px] flex flex-col gap-[60px] py-[60px] px-[40px] rounded-lg`}
    >
      <div className="flex flex-col gap-[32px]">
        <Image
          src={type === "dark" ? "/assets/QuoteWhite.svg" : "/assets/Quote.svg"}
          alt="qoute image"
          width={86}
          height={61}
        />
        <p className="text-lg">{paragraph}</p>
        <hr />
      </div>
      <div className="flex gap-[42px]">
        <Image
          src={avater}
          alt="avater image"
          width={95}
          height={95}
          className="rounded-4xl"
        />
        <div className="flex flex-col gap-[15px] text-black">
          <h3 className="font-bold text-xl">{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
