import React from "react";
import Logo from "../../assets/images/logo.png";
import SubHeading from "../../Components/SubHeading/SubHeading";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import LinkedIn from "../../assets/images/linkedin.png";
import Whatsapp from "../../assets/images/whatsapp.png";
const Footer = () => {
  return (
    <div className="w-full mt-4 h-auto gap-5 flex justify-center items-center p-3">
      <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="footerContent max-sm:justify-center w-full h-auto flex flex-wrap justify-between mb-3 border-b ">
          <div className="left w-[40%] max-sm:w-[100%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
            {/* Logo */}
            <div className="logo w-[270px] max-sm:w-full   h-auto flex  ">
              <img src={Logo} className="w-[250px] max-sm:mx-auto max-md:w-[200px]" alt="logo" />
            </div>
            <p className="text-xl my-3 max-sm:w-[70%] max-sm:text-center font-[Nunito Sans] max-md:text-[.9rem] max-sm:text-[1rem] text-black font-[400]">
              We are committed to providing a safe, inclusive, and enriching
              learning environment for all students.
            </p>
          </div>

          <div className="middle max-sm:w-[50%] w-[25%] p-3 h-auto">
            <SubHeading text="Quick Links" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans] text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] font-semibold text-2xl p-3 max-[900px]:text-[1rem]"
                >
                  Home
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans] text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] font-semibold text-2xl p-3 max-[900px]:text-[1rem]"
                >
                  About Us
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans] text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] font-semibold text-2xl p-3 max-[900px]:text-[1rem]"
                >
                  Academic
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans] text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] font-semibold text-2xl p-3 max-[900px]:text-[1rem]"
                >
                  Admission
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans] text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] font-semibold text-2xl p-3 max-[900px]:text-[1rem]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="left max-sm:w-[50%]  w-[25%] p-3 h-auto">
            <SubHeading text="Social Media" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]  text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                  <img src={Facebook} alt="facebook" className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]" />
                  Facebook
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                  <img src={Instagram} alt="facebook" className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]" />
                  Instagram
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                 <img src={Twitter} alt="facebook" className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]" />
                 Twitter
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                  <img src={LinkedIn} alt="facebook" className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]" />
                  LinkedIn
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  text-black font-[400]">
                <a
                  href="#"
                  className="text-black hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                   <img src={Whatsapp} alt="facebook" className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]" />
                   Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright text-2xl max-sm:text-[1rem] flex justify-center items-center w-full h-[50px]">
          <p>© 2021 BrightPath Academy. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
