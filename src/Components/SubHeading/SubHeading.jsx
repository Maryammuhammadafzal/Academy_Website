import React from 'react'

const SubHeading = ({text}) => {
  return (
    <h3
          className="font-[Staatliches] mt-3  max-xs:text-[1.5rem] max-sm:text-[2rem] text-4xl max-[1100px]:text-[2rem] max-[890px]:text-[1.5rem] max-[800px]:text-[1.2rem] md:text-2xl tracking-wider font-[500] uppercase text-[#2D6A4F]"
        >
         {text}
        </h3>
  )
}

export default SubHeading
