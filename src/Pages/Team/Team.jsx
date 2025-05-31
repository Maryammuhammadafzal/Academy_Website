import React from "react";
import Heading from "../../Components/Heading/Heading";
import TeamCard from "../../Components/TeamCard/TeamCard";
import Team_Image1 from "../../assets/images/team_image1.png"
import Team_Image2 from "../../assets/images/team_image2.png"
import Team_Image3 from "../../assets/images/team_image3.png"
const Team = () => {
  return (
    <div className="w-full h-auto gap-5 flex justify-center items-center p-3 mb-5">
      <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings leading-[6rem] w-[100%] mt-3">
          <Heading text="News & Events" />
         <div className="para w-[75%] max-sm:w-[90%]">
         <p className="text-3xl max-md:text-[1.2rem] max-[430px]:text-[10px] max-[1050px]:text-[1.5rem] my-3 font-[Nunito Sans] text-black font-[400]">
            At BrightPath Academy, our teachers are the backbone of our academic
            excellence. They are experienced, dedicated, and passionate about
            nurturing young minds. Here are some of our top educators:
          </p>
         </div>
        </div>
        <div className="academyContent w-[98%] max-sm:w-[100%] max-md:justify-center h-auto flex flex-wrap justify-between gap-6 mb-3 px-3">
          <TeamCard name="Ms. Emily Johnson" title="Mathematics Specialist" image={Team_Image1} />
          <TeamCard name="Mr. John Smith" title="Head of Science Department" image={Team_Image2} />
          <TeamCard name="Mrs. Sophia Brown" title="English Language Expert" image={Team_Image3} />
        </div>
      </div>
    </div>
  );
};

export default Team;
