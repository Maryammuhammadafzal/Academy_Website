import React from 'react'
import Process_Image1 from "../../assets/images/process_image1.png"
import RightArrow from "../../assets/images/right_arrow.png"

const ProcessCard = ({text}) => {
  return (
    <div className='w-[400px] max-sm:w-[300px]  max-xs:h-[250px] md:w-[350px] lg:w-[300px] hover:scale-110  max-xs:w-[250px] max-sm:h-[300px] p-3 h-[300px] max-md:h-auto max-md:p-6 rounded-2xl bg-[#2D6A4F] justify-center items-center text-white flex flex-col gap-4 '>
      <img
                src={Process_Image1} // Use your image path
                alt="Process Image"
                className="w-[80px] max-sm:w-[70px] max-xs:w-[50px] h-auto rounded-2xl max-md:w-[60px]"
              />
              <h4 className='text-4xl xl:px-10 max-sm:text-[2rem]  max-xs:text-[1.7rem] max-[1050px]:text-[2rem] max-md:text-[1.2rem] max-[900px]:text-[1.5rem] text-center'>
                {text}
              </h4>
              <img
                src={RightArrow} // Use your image path
                alt="Process Image"
                className="w-[80px] max-sm:w-[80px]  max-xs:w-[50px] h-auto rounded-2xl max-md:w-[60px]"
              />
    </div>
  )
}

export default ProcessCard
