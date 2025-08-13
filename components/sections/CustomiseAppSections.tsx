import React from 'react'
import SectionWrapper from '../SectionWrapper'
import LeftSideImgArt from '../article/LeftSideImgArt'

const CustomiseAppSections = () => {
  return (
              <SectionWrapper
        sectionStyle="xl:h-[742px] lg:h-[692px] md:h-[948px] h-[785px] mainSection"
        mainStyle="mainContainer"
      >
        <LeftSideImgArt
          image=""
          btnTitle="Let’s Go"
          color="black"
          paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
          title="Customise it to || your needs"
        />
      </SectionWrapper>
  )
}

export default CustomiseAppSections