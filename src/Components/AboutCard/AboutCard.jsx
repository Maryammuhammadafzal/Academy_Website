import React from "react";
import SubHeading from "../../Components/SubHeading/SubHeading"
const AboutCard = () => {
  return (
    <div className="relative w-[50%] max-md:h-[300px] max-sm:w-[98%]  max-xs:w-[100%]  mt-5 mb-5 flex items-center  justify-end p-3  h-[350px]">
      {/* Green Background Shape */}
      <div className="absolute top-1 right-0  w-[40%] h-[200px] max-md:h-[150px] max-md:top-0 bg-yellow-500 rounded-tr-2xl"></div>
      {/* Green Background Shape */}
      <div className="absolute top-13 left-5 w-[83%] max-md:h-[270px]  max-xs:h-[250px]  max-xs:top-14  h-[310px] bg-[#74C69D] rounded-2xl"></div>

      {/* Image Wrapper */}
      <div className="px-8 py-3  max-xs:px-3 z-10 w-[90%]  max-md:h-[280px] h-[320px] flex flex-col gap-5 justify-center border-t-14 border-r-14 border-[#F1FAEE] bg-white rounded-2xl shadow-lg">
        <SubHeading text="Our Story" />
        <p className="text-2xl  max-xs:text-[.7rem]    max-sm:text-[1rem] max-md:text-[.9rem] max-[1050px]:text-[1.2rem] font-[Nunito Sans] text-black font-[400]">
          Established in <span className="font-[500]">2021, BrightPath Academy</span> has been dedicated to academic
          excellence and character building. Our experienced faculty and
          innovative curriculum ensure a holistic learning experience.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
