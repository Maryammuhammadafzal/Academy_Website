import React from "react";
import Logo from "../../assets/images/logo.png"
const Navbar = () => {
  return (
    <div className="w-full h-[200px] flex justify-center gap-5 items-center ">
      {/* Left Tabs */}
      <div className="right w-1/3 h-[150px] max-md:hidden flex justify-center items-end">
        <ul className="list-none w-full h-auto flex justify-between items-end">
          <li className="w-auto h-auto font-semibold  text-2xl max-[1100px]:text-xl max-[900px]:px-1 max-[1000px]:text-[1rem]  px-3 text-black text-center hover:text-green-800 focus:text-green-800 cursor-pointer">
            Home
          </li>
          <li className="w-auto h-auto font-semibold text-2xl max-[1100px]:text-xl max-[900px]:px-1 max-[1000px]:text-[1rem] px-3 text-black text-center hover:text-green-800 focus:text-green-800 cursor-pointer">
            About Us
          </li>
          <li className="w-auto h-auto font-semibold text-2xl max-[1100px]:text-xl max-[900px]:px-1 max-[1000px]:text-[1rem] px-3 text-black text-center hover:text-green-800 focus:text-green-800 cursor-pointer">
            Academic
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className="logo m-4 max-[900px]:m-2 w-[270px] h-auto flex justify-center items-center ">
<img src={Logo} className="w-[250px] max-md:w-[200px]" alt="logo" />
      </div>

      {/* Right Tabs */}
      <div className="left w-1/3 h-[150px] max-md:hidden flex justify-center items-end ">
        <ul className="list-none w-full h-auto flex justify-between items-center">
          <li className="w-auto h-auto font-semibold text-2xl max-[1100px]:text-xl max-[900px]:px-1 max-[1000px]:text-[1rem] px-3 text-black text-center hover:text-green-800 focus:text-green-800 cursor-pointer">
            Admissions
          </li>
          <li className="w-auto h-auto font-semibold text-2xl max-[1100px]:text-xl max-[900px]:px-1 max-[1000px]:text-[1rem] px-3 text-black text-center hover:text-green-800 focus:text-green-800 cursor-pointer">
            Blogs
          </li>
          <li className="w-auto h-auto font-semibold text-[22px] max-[1100px]:text-[19px] max-[900px]:px-1 max-[1000px]:text-[.9rem] px-2 text-black text-center hover:text-green-800 focus:text-green-800 cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
