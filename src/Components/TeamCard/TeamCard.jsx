import React from 'react'
import Team_Image1 from "../../assets/images/team_image1.png"
import Team_Image2 from "../../assets/images/team_image2.png"
import Team_Image3 from "../../assets/images/team_image3.png"
import Stars from "../../assets/images/shine.png"
import SubHeading from "../../Components/SubHeading/SubHeading"

const TeamCard = ({name , image, title}) => {
  return (
       <div className="relative w-[31%] max-sm:w-[90%] max-md:w-[46%] flex items-center  justify-end p-5 h-[580px]">
          {/* Green Background Shape */}
          <div className="absolute top-21 right-2 w-[40%] h-[150px] bg-yellow-500 rounded-tr-2xl"></div>
          {/* Green Background Shape */}
          <div className="absolute top-33 left-2 w-[80%] h-[390px] bg-[#74C69D] rounded-2xl"></div>
    
          {/* Image Wrapper */}
          <div className="relative z-10 w-[95%] h-[390px]  border-t-14 border-r-14 border-[#F1FAEE] bg-[#F1FAEE] rounded-2xl shadow-lg">
            <img
              src={image} // Use your image path
              alt="Students in classroom"
              className="w-full h-[380px] rounded-2xl"
            />
          </div>
      
          <div className="absolute -bottom-7 max-[1100px]:-left-10 max-[890px]:-left-8 max-[1100px]:-bottom-1  -left-16 text-yellow-500 text-3xl">
            <span ><img
              src={Stars} // Use your image path
              alt="Shining Stars"
              className="w-[120px] max-[1100px]:w-[100px] max-[890px]:w-[80px]  h-auto rounded-2xl"
            /></span>
            
          </div>
          <div className="absolute -bottom-5 left-12 md:-bottom-8 lg:left-15">
          <SubHeading text={name}/>
          <p className='text-center '>{title}</p>
          </div>
        </div>
  )
}

export default TeamCard
