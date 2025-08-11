import { CardProps } from "@/types/CardProps";
import Image from "next/image";
import React from "react";

const Card = ({ goalsArray, price, type, title, idea }: CardProps) => {
  return (
    <div
      className={`${
        type === "dark"
          ? "md:py-[80px] md:px-[44px]  bg-brand text-white xl:h-[761px] 2xl:w-[473px] xl:w-[437px] lg:h-[853px] lg:w-[342px] md:h-[711px] md:w-[472px] "
          : "md:py-[40px] md:px-[44px] border-2 border-yellow bg-white  text-black 2xl:h-[634px] 2xl:w-[473px] xl:h-[654px] xl:w-[437px] lg:h-[697px] lg:w-[342px] md:h-[631px] md:w-[472px]"
      } w-[290px] h-[670px] p-[20px] flex flex-col  justify-center gap-6  rounded-md shadow-md `}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className={`text-2xl font-bold ${type === "dark" && "text-yellow"}`}>${price}</p>
      <p className="text-md">{idea}</p>
      {goalsArray.map((goal, idx) => {
        return (
          <span key={idx} className="flex gap-2 ">
            <Image
              src={`${type === "dark" ? "/assets/CkeckYellow.svg":"/assets/Ckeck.svg"}`}
              alt="image"
              width={20}
              height={20}
            />
            {goal}
          </span>
        );
      })}
      <span
        className={`w-[166px] h-[51px] py-[10px] ${
          type === "dark"
            ? "bg-[#4F9CF9] text-white"
            : "bg-white text-black border-1 border-yellow"
        } rounded-lg flex items-center justify-center cursor-pointer`}
      >
        {" "}
        Get Started
      </span>
    </div>
  );
};

export default Card;
