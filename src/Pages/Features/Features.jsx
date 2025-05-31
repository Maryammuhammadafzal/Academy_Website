import React from "react";
import Heading from "../../Components/Heading/Heading";
import FeatureImage1 from "../../assets/images/feature_image1.jpg";
import FeatureImage2 from "../../assets/images/feature_image2.jpg";
import Stars from "../../assets/images/shine.png";
const Features = () => {
  return (
    <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
      <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings leading-[6rem] w-[100%] mt-3">
          <Heading text="Students Life" />
        </div>
        <div className="academyContent w-full h-auto flex max-md:gap-5 flex-wrap max-lg:flex-col justify-between mb-3 lg:relative">
          <div className="w-auto h-auto flex max-md:flex-col gap-5 items-start">
            <div className="image flex flex-col gap-2 w-auto h-auto">
              <img
                src={FeatureImage1}
                alt="feature-image"
                className="w-[300px] max-sm:w-[full] max-sm:h-[390px]  h-[460px] rounded-lg"
              />
              <div className=" max-sm:hidden text-yellow-500 text-3xl w-full ">
                <span className="w-full flex justify-end">
                  <img
                    src={Stars} // Use your image path
                    alt="Shining Stars"
                    className=" max-xs:w-[90px] w-[140px]  h-auto rounded-2xl"
                  />
                </span>
              </div>
            </div>
            <div className="carddiv w-auto h-auto max-sm:ml-0 ml-20 max-lg:ml-4">
              <div className="card flex flex-col rounded-lg w-[615px] max-lg:w-[450px]  max-sm:w-[300px] max-lg:h-auto max-lg:gap-4  h-[180px] p-3 bg-white border-l-[16px] border-green-800">
                <h4 className="text-xl font-[Staatliches]">
                  Extracurricular Activities
                </h4>
                <p className="text-[1.2rem] max-sm:text-[1rem] font-[Nunito Sans] font-[400]">
                  At <span className="font-[500]">BrightPath Academy</span>, we
                  believe in learning beyond books. We offer:.
                </p>
                <ul className="flex flex-col  list-disc px-3">
                  <li>Music & Dance Classes</li>
                  <li>Art & Craft Workshops Public</li>
                  <li>Speaking & Debates</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex gap-8 items-start max-md:flex-col lg:absolute lg:top-50 lg:left-85">
            <div className="image flex max-md:flex-col w-auto h-auto">
              <img
                src={FeatureImage2}
                alt="feature-image"
                className="w-[270px] max-sm:w-full h-[390px] rounded-lg"
              />
            </div>
            <div className="carddiv w-auto h-auto flex flex-col gap-5">
              <div className="card flex flex-col rounded-lg w-[615px] max-xl:w-[450px] max-sm:w-[300px] max-lg:h-auto max-lg:gap-4 h-[180px] p-3 bg-white border-l-[16px] border-green-800">
                <h4 className="text-xl font-[Staatliches]">
                  Extracurricular Activities
                </h4>
                <p className="text-[1.2rem] max-sm:text-[1rem] font-[Nunito Sans] font-[400]">
                  At <span className="font-[500]">BrightPath Academy</span>, we
                  believe in learning beyond books. We offer:.
                </p>
                <ul className="flex flex-col  list-disc px-3">
                  <li>Music & Dance Classes</li>
                  <li>Art & Craft Workshops Public</li>
                  <li>Speaking & Debates</li>
                </ul>
              </div>
              <div className="card flex flex-col rounded-lg w-[615px] max-xl:w-[450px] max-sm:w-[300px] max-lg:h-auto max-lg:gap-4 h-[180px] p-3 bg-white border-l-[16px] border-green-800">
                <h4 className="text-xl font-[Staatliches]">
                  Extracurricular Activities
                </h4>
                <p className="text-[1.2rem] max-sm:text-[1rem] font-[Nunito Sans] font-[400]">
                  At <span className="font-[500]">BrightPath Academy</span>, we
                  believe in learning beyond books. We offer:.
                </p>
                <ul className="flex flex-col  list-disc px-3">
                  <li>Music & Dance Classes</li>
                  <li>Art & Craft Workshops Public</li>
                  <li>Speaking & Debates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
