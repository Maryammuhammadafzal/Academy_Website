import React from 'react'

const Button = ({text , bg , textColor}) => {
  return (
    <button className={`text-[2rem] w-[300px]  max-xs:w-[160px]  max-xs:text-[1rem] max-sm:w-[170px] max-sm:text-[1.2rem] max-[1000px]:w-[220px] max-[800px]:text-[1.2rem] max-[800px]:w-[190px] max-[1000px]:text-[1.5rem] font-semibold text-${textColor} bg-${bg} py-4 px-5 border-3 rounded-[14px] border-green-800 `}>
{text}
    </button>
  )
}

export default Button
