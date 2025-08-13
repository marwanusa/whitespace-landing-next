import React from 'react'
import SectionWrapper from '../SectionWrapper'
import RightSideImgArt from '../article/RightSideImgArt'

const YourDataSection = () => {
  return (
      <SectionWrapper
        sectionStyle="mainSection xl:h-[742px] lg:h-[624px] md:h-[912px] h-[743px]"
        mainStyle="mainContainer"
      >
        <RightSideImgArt
          title="100% your data"
          btnTitle="Read more"
          color="black"
          image="/assets/100Data.svg"
          paragraph="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
        />
      </SectionWrapper>
  )
}

export default YourDataSection