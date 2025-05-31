import React from "react";


const EventCard = ({title , image, description , date}) => {
  return (
    <div className="w-[32%] max-md:w-[48%] max-sm:w-[90%] max-[1100px]:w-[31%] h-[350px] rounded-2xl bg-white hover:text-white hover:bg-[#2D6A4F]  p-3 text-black flex flex-col gap-2 ">
      <img
        src={image} 
        alt="Process Image"
        className="w-[100%] h-[200px] rounded-2xl"
      />
      <h4 className="text-2xl font-[Staatliches]">
        {title}{" "}
        <span className="text-yellow-600 text-[14px]">– {date}</span>
      </h4>
      <p className="text-[.8rem] max-sm:text-[1rem] font-[Nunito Sans] font-[400]">
       {description}
      </p>
    </div>
  );
};

export default EventCard;
