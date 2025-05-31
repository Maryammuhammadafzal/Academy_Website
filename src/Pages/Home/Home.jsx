import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";

const Home = () => {
  return (
    <div className="w-full h-auto gap-5 flex flex-col justify-center items-center p-3 ">
      <div className="navbar xl:w-[90%] h-auto w-full flex justify-center items-center ">
        <Navbar />
      </div>
      <div className="hero w-[90%] max-[1350px]:w-full h-auto flex justify-center items-center">
        <div className="main w-full h-auto flex max-md:flex-col max-md:my-3 justify-center items-center">
          <div className="left w-[55%] max-md:w-[90%] max-sm:w-[98%] h-auto gap-5  max-xs:gap-0 max-sm:gap-2 space-y-5 flex flex-col items-center justify-between">
           <div className="headings leading-[4.2rem] max-xs:leading-[2rem] max-sm:leading-[3.2rem] max-[800px]:leading-[3.5rem] w-full ">
           <Heading text="Welcome To" />
           <Heading text="BrightPath Academy" color="[#2D6A4F]"/>
           </div>
            <p className="text-3xl max-md:text-2xl max-xs:text-[.8rem] max-sm:text-[1.3rem] my-3 max-[1100px]:text-[1.4rem] max-[800px]:text-[1.1rem] font-[Nunito Sans] text-black font-[400]">
              Empowering students with knowledge, skills, and values for a
              brighter future. Explore our world-class education programs and
              discover why <span className="font-[500]">BrightPath Academy</span> is the perfect place for your
              child's learning journey.
            </p>
            <div className="buttons mt-5 max-xs:flex-col w-full gap-5 flex ">
              <Button text="Apply Now!" bg="[#2D6A4F]" textColor="white"/>
              <Button text="Contact Us!" border="border" textColor="green-800" bg="transparent"/>
            </div>
          </div>
          <div className="right w-[40%] max-md:w-[70%] max-sm:w-[80%] max-xs:w-[98%] h-auto  flex items-center justify-end">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
