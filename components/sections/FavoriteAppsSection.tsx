import React from 'react'
import LeftSideImgArt from '../article/LeftSideImgArt'
import SectionWrapper from '../SectionWrapper'

const FavoriteAppsSection = () => {
  return (
          <SectionWrapper
        mainStyle="mainContainer"
        sectionStyle="mainSection xl:h-[750px] lg:h-[692px] md:h-[1008px] h-[874px] bg-brand bg-[url('/assets/Element.png')] "
      >
        <LeftSideImgArt
          title="Work with Your || Favorite Apps Using || whitepace"
          paragraph="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
          image="/assets/Apps.svg"
          btnTitle="Read more"
          color="white"
        />
      </SectionWrapper>
  )
}

export default FavoriteAppsSection