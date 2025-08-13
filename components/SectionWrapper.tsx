import { SectionWrapperProps } from '@/types/sectionWrapper'
import React from 'react'


const SectionWrapper = ({children,sectionStyle,mainStyle}:SectionWrapperProps) => {
  return (
          <section className={sectionStyle}>
        <main className={mainStyle}>
            {children}
        </main>
      </section>
  )
}

export default SectionWrapper