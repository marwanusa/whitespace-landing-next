import React from "react";
import SectionWrapper from "../SectionWrapper";
import RightSideImgArt from "../article/RightSideImgArt";
const ExtensionSection = () => {
  return (
    <SectionWrapper
      sectionStyle="h-[668px] md:h-[888px] lg:h-[692px] mainSection bg-brand"
      mainStyle="mainContainer"
    >
      <RightSideImgArt
        title="Use as Extension"
        btnTitle="Let’s Go"
        image=""
        paragraph="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        color="white"
      />
    </SectionWrapper>
  );
};

export default ExtensionSection;
