import React from "react";
import SectionWrapper from "../SectionWrapper";
import RightArrowBtn from "../RightArrowBtn";

const WorkEverywhere = () => {
  return (
    <SectionWrapper
      sectionStyle="mainSection xl:h-[574px] lg:h-[671px] md:h-[673px] h-[766px] bg-brand bg-[url('/assets/BACKGROUND.png')] bg-no-repeat"
      mainStyle="flex flex-col justify-center items-center h-full gap-8"
    >
      <h2 className="font-bold text-6xl text-white">
        Your work, everywhere you are
      </h2>
      <p className="max-w-[1000px] text-white">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <RightArrowBtn btnTitle="Try Taskey" />
    </SectionWrapper>
  );
};

export default WorkEverywhere;
