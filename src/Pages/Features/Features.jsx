import React from "react";
import Heading from "../../Components/Heading/Heading";
import FeatureImage1 from "../../assets/images/feature_image1.jpg";
import Stars from "../../assets/images/shine.png"
const Features = () => {
  return (
    <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
      <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings leading-[6rem] w-[100%] mt-3">
          <Heading text="Students Life" />
        </div>
        <div className="academyContent w-full h-auto flex flex-wrap justify-between mb-3">
          <div className="w-auto h-auto flex gap-3 items-start">
            <div className="image flex flex-col gap-2 w-auto h-auto" >
              <img src={FeatureImage1} alt="feature-image" className="w-[300px] h-[460px] rounded-lg" />
              <div className=" text-yellow-500 text-3xl w-full ">
                <span className="w-full flex justify-end">
                  <img
                    src={Stars} // Use your image path
                    alt="Shining Stars"
                    className=" max-xs:w-[90px] w-[140px] h-auto rounded-2xl"
                  />
                </span>
              </div>
            </div>
            <div className="carddiv w-auto h-auto">
<div className="card flex rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
