import React from "react";
import SectionWrapper from "../SectionWrapper";
import RightSideImgArt from "../article/RightSideImgArt";
import LeftSideImgArt from "../article/LeftSideImgArt";

const ProjectManagment = () => {
  return (
    <SectionWrapper
      sectionStyle="xl:h-[1285px] lg:h-[1183px] md:h-[1661px] h-[1388px] bg-white mainSection"
      mainStyle="mainContainer"
    >
      <RightSideImgArt
        title="Project || Management"
        paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        btnTitle="Get Started"
        image=""
        color="black"
      />
      <LeftSideImgArt
        title="Work together"
        btnTitle="Try it now"
        image="/assets/Work Together Image.svg"
        paragraph="With whitepace, share your notes with your colleagues and collaborate on them.
    You can also publish a note to the internet and share the URL with others."
        color="black"
      />
    </SectionWrapper>
  );
};

export default ProjectManagment;
