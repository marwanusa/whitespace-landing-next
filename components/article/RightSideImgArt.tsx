"use client";
import { ArticleProps } from "@/types/articleType";
import Image from "next/image";
import React from "react";
import RightArrowBtn from "../RightArrowBtn";

const RightSideImgArt = ({
  title,
  paragraph,
  image,
  btnTitle,
  color
}: ArticleProps) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-8 lg:justify-between items-center">
      <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-start">
        <h2 className={`text-6xl font-bold text-${color} z-10`}>
          {title.includes("||")
            ? title.split("||").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < title.split("||").length - 1 && <br />}
                </React.Fragment>
              ))
            : title}

        </h2>
        <p className={`text-${color} max-w-[672px]`}>{paragraph}</p>
        <RightArrowBtn btnTitle={btnTitle}/>

      </div>
      <div className="xl:w-[583px] xl:h-[543px] lg:w-[528px] lg:h-[492px] md:w-[454px] md:h-[423px] w-[279px] h-[260px] flex items-center">
        <Image
          src={image ? image : "https://placehold.co/748x547/png"}
          alt="image"
          width={583}
          height={543}
        />
      </div>
    </div>
  );
};

export default RightSideImgArt;
