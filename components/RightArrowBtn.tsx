import Image from 'next/image'
import React from 'react'

const RightArrowBtn = ({btnTitle}:{btnTitle:string}) => {
  return (
            <div
              className={`px-[30px] py-4 text-white cursor-pointer w-fit bg-brand-100 rounded-lg flex justify-center items-center`}
            >
              {btnTitle}
              <Image
                src={`/assets/Rightarrowicon.svg`}
                alt="right Arrow"
                width={26}
                height={26}
              />
            </div>
  )
}

export default RightArrowBtn