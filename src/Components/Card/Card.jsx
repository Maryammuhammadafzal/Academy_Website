import React from 'react'
import HeroImage from "../../assets/images/hero_image.png"
import Stars from "../../assets/images/shine.png"
const Card = () => {
  return (
    <div className="relative w-full flex items-center max-md:h-[700px]  max-xs:h-[500px]  justify-end p-5 h-[780px]">
      {/* Green Background Shape */}
      <div className="absolute top-19 right-1  max-xs:top-26  max-xs:right-2 max-md:top-37 max-md:right-1 max-[1000px]:top-29 max-[1000px]:right-2 w-[50%] h-[250px] max-[1000px]:h-[200px] bg-yellow-500 rounded-tr-2xl"></div>
      {/* Green Background Shape */}
      <div className="absolute top-38   max-xs:top-45  max-xs:left-2 max-[1000px]:top-50 max-md:top-54 max-[1000px]:left-5 left-10 w-[85%]  max-xs:w-[75%] h-[580px] max-[1000px]:h-[500px]  max-xs:h-[320px] max-md:h-[450px] bg-[#74C69D] rounded-2xl"></div>

      {/* Image Wrapper */}
      <div className="relative z-10 w-[90%] h-[600px] max-[1000px]:h-[520px] max-md:h-[450px]  max-xs:h-[270px]  max-xs:w-[95%] border-t-18 border-r-18 border-[#F1FAEE] bg-green-100 rounded-2xl shadow-lg">
        <img
          src={HeroImage} // Use your image path
          alt="Students in classroom"
          className="w-full h-[600px]  max-xs:h-[350px] max-md:h-[450px] max-[1000px]:h-[520px] rounded-2xl"
        />
      </div>
  
      <div className="absolute max-[1000px]:-bottom-4   max-xs:-bottom-14  max-xs:-left-9 max-[1000px]:-left-15 max-md:-bottom-0 -bottom-12 -left-10 text-yellow-500 text-3xl">
        <span ><img
          src={Stars} // Use your image path
          alt="Shining Stars"
          className="w-full  max-xs:w-[90px] h-auto rounded-2xl"
        /></span>
      </div>
    </div>
  );
};

export default Card;
