import React from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";
import Heading from "../../Components/Heading/Heading";

const About = () => {
  return (
    <div className="w-full h-auto gap-5 flex flex-col justify-center items-center p-3">
      <div className="aboutSection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings  leading-[6rem] w-[100%] mt-3">
          <Heading text="About Us" />
        </div>
        <div className="aboutContent w-[100%] max-sm:justify-center  h-auto flex flex-wrap justify-between mb-3">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default About;
