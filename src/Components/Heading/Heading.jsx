import React from 'react'

const Heading = ({text , color = "yellow-600"}) => {
  return (
    <h2 className={`font-[Staatliches] max-xs:text-[2rem] max-sm:text-[3rem] max-md:text-[4rem] text-[5rem] max-[1100px]:text-[4rem] max-[800px]:text-[3rem] max-[890px]:text-[3.5rem] tracking-normal font-semibold uppercase text-${color} `}>{text}</h2>
  )
}

export default Heading
