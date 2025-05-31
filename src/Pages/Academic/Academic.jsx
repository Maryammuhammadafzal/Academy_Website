import React from "react";
import Heading from "../../Components/Heading/Heading";
import Check from "../../assets/images/Check.png";
import Academy_Image1 from "../../assets/images/academy_image1.png";
import Academy_Image2 from "../../assets/images/academy_image2.png";
import SubHeading from "../../Components/SubHeading/SubHeading"

const Academic = () => {
  return (
    <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
      <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings leading-[6rem] w-[100%] mt-3">
          <Heading text="Academics" />
        </div>
        <div className="academyContent w-full h-auto flex flex-col flex-wrap justify-between mb-3">
          <div className="left w-[60%] max-xl:w-full h-auto gap-5 space-y-5 p-3 flex max-lg:flex-col items-center justify-between">
            <div className="px-3 py-3 w-[100%] max-xs:px-1 h-auto ">
            <SubHeading text="Curriculum"/>
              <p className="text-2xl  max-xs:text-[.8rem] max-[1050px]:text-[1.2rem] my-6 font-[Nunito Sans] text-black font-[400]">
                We offer a well-rounded curriculum that includes:.
              </p>
              <ul className="list-disc ml-4  max-xs:ml-1 text-lg space-y-8 font-[Nunito Sans] text-3xl max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px] "
                  />
                  Science, Mathematics, and Technology
                </li>
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px] "
                  />
                  Languages and Literaturey
                </li>
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px] "
                  />
                  Arts and Humanities
                </li>
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px] "
                  />
                  Physical Education and Health
                </li>
              </ul>
            </div>
            <img
          src={Academy_Image1} // Use your image path
          alt="Shining Stars"
          className="w-full h-[50%] rounded-2xl"
        />
          </div>
          <div className="right w-[60%] max-xl:w-full h-auto gap-5 space-y-5 p-3 flex max-lg:flex-col items-center justify-between">
         

<div className="px-3 py-3 w-[100%] h-auto ">
            <SubHeading text="Class Structure"/>
              <p className="text-2xl max-[1050px]:text-[1.2rem] max-xs:text-[.8rem] my-6 font-[Nunito Sans] text-black font-[400]">
              We cater to students from Kindergarten to Grade [X], ensuring 
              personalized attention and growth at every stage.
              </p>
              <ul className="list-disc ml-4  max-xs:ml-1 text-lg space-y-8 font-[Nunito Sans] text-3xl max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px]  "
                  />
                   Interactive Smart Classes
                </li>
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px] "
                  />
                  Online Learning Platforms
                </li>
                <li className="flex gap-3 text-3xl  max-xs:text-[.9rem] max-[1050px]:text-[1.5rem] max-md:text-[1rem] max-sm:text-[1.3rem]">
                  <img
                    src={Check} // Use your image path
                    alt="Shining Stars"
                    className="w-[40px] h-[30px]  max-xs:w-[17px]  max-xs:h-[17px] max-[1050px]:w-[30px] max-[1050px]:h-[25px] max-md:h-[20px] max-md:w-[20px] "
                  />
                   Practical and Project-Based Learning
                </li>
              </ul>
            </div>
          <img
          src={Academy_Image2} // Use your image path
          alt="Shining Stars"
          className="w-full h-[50%] rounded-2xl"
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
