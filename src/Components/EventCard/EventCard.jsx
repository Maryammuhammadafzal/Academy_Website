import React from "react";
import Event_Image1 from "../../assets/images/event_image1.png";
import Event_Image2 from "../../assets/images/event_image2.png";
import Event_Image3 from "../../assets/images/event_image3.png";

const EventCard = () => {
  return (
    <div className="w-[32%] max-md:w-[48%] max-sm:w-[90%] max-[1100px]:w-[31%] h-[350px] rounded-2xl bg-white hover:text-white hover:bg-[#2D6A4F]  p-3 text-black flex flex-col gap-2 ">
      <img
        src={Event_Image1} // Use your image path
        alt="Process Image"
        className="w-[100%] h-[200px] rounded-2xl"
      />
      <h4 className="text-2xl font-[Staatliches]">
        Science Fair 2025{" "}
        <span className="text-yellow-600 text-[14px]">– March 15, 2025</span>
      </h4>
      <p className="text-[.8rem] max-sm:text-[1rem] font-[Nunito Sans] font-[400]">
        Our annual Science Fair is back! Students from all grades will showcase
        their innovative projects and experiments. Parents and guests are
        welcome to attend and support our young scientists.
      </p>
    </div>
  );
};

export default EventCard;
