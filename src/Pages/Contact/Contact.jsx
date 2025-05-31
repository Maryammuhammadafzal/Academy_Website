import React from "react";
import Heading from "../../Components/Heading/Heading";
import SubHeading from "../../Components/SubHeading/SubHeading";
import Button from "../../Components/Button/Button";

const Contact = () => {
  return (
    <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
      <div className="contactSection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings leading-[6rem] w-[100%] mt-3">
          <Heading text="Contact Us" />
        </div>
        <div className=" min-sm:relative contactContent w-full h-auto flex flex-wrap justify-end gap-5 mb-3">
        <div className="contactDetailCard max-sm:w-[98%] max-sm:h-[450px]  gap-3 bg-[#2D6A4F] w-[40%] h-[550px] rounded-2xl flex flex-col min-sm:absolute min-sm:left-20 max-md:left-2 max-sm:top-20 justify-center items-start p-3">
            <h3 className="font-[Staatliches] ml-4 mb-4 text-4xl max-[900px]:text-3xl tracking-wider font-[500] uppercase text-[#54cc96]">
              Contact Information:
            </h3>
            <ul className="list-disc ml-4 text-lg space-y-4 font-[Nunito Sans] text-white text-2xl">
              <li className="flex gap-3 font-semibold text-2xl max-[1050px]:text-[1.2rem] max-[900px]:text-[.9rem] max-sm:text-[1.2rem] address">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </li>
              <li className="flex gap-3 font-semibold text-2xl max-[1050px]:text-[1.2rem] max-[900px]:text-[.9rem] max-sm:text-[1.2rem] number">(907) 555-0101</li>
              <li className="flex gap-3 font-semibold text-2xl max-[1050px]:text-[1.2rem] max-[900px]:text-[.9rem] max-sm:text-[1.2rem] email">
                <a href="mailto:debbie.baker@example.com">
                  debbie.baker@example.com
                </a>
              </li>
              <li className="flex gap-3 font-semibold text-2xl max-[1050px]:text-[1.2rem] max-[900px]:text-[.9rem] max-sm:text-[1.2rem] website">
                <a href="http://www.brightpathacademy.com/">
                  {" "}
                  http://www.brightpathacademy.com/
                </a>
              </li>
            </ul>
            <h3 className="font-[Staatliches] ml-4 mt-3 mb-2 text-4xl tracking-wider max-[900px]:text-3xl font-[500] uppercase text-[#54cc96]">
            Work Time:
            </h3>
            <li className="flex gap-3 font-semibold text-2xl max-[1050px]:text-[1.2rem] max-[900px]:text-[.9rem] max-sm:text-[1.2rem] text-white ml-4 address">
            Mon - Fri 8 AM - 5 PM
              </li>
          </div>
          
          <div className="contactInputCard bg-white shadow-[5px_5px_17px_rgba(0,0,0,0.3)] shadow-gray-400 w-[80%] max-md:w-[90%] max-sm:w-[98%] max-sm:items-start h-[700px] rounded-2xl flex flex-col justify-center items-end">
            <div className="Head w-[70%] max-sm:w-full h-auto p-3 flex flex-col justify-center items-center">
              <SubHeading text="Get In Touch " />
              <p className="text-center "> Reach out to us for any queries.</p>
            </div>
            <form className="body w-[60%] max-sm:w-[100%] h-auto p-3 gap-5 flex flex-col justify-start items-start">
              <div className="w-[90%] ">
                <label htmlFor="name" className="text-2xl">
                  Name:
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full mt-2 p-5 bg-orange-50"
                  />
                </label>
              </div>
              <div className="w-[90%] ">
                <label htmlFor="email" className="text-2xl">
                  Email:
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full mt-2 p-5 bg-orange-50"
                  />
                </label>
              </div>
              <div className="w-[90%] ">
                <label htmlFor="message" className="text-2xl">
                  Message:
                  <textarea
                    name="message"
                    id="message"
                    className="w-full mt-2 p-5 bg-orange-50 resize-none"
                  ></textarea>
                </label>
              </div>
              <div className="button w-full justify-center flex">
                <Button text="Apply Now!" bg="[#2D6A4F]" textColor="white" />
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
