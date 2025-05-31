import React from "react";
import Heading from "../../Components/Heading/Heading";
import EventCard from "../../Components/EventCard/EventCard";
import Event_Image1 from "../../assets/images/event_image1.png";
import Event_Image3 from "../../assets/images/event_image2.png";
import Event_Image2 from "../../assets/images/event_image3.png";
const Events = () => {
  return (
    <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
      <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="headings leading-[6rem] w-[100%] mt-3">
          <Heading text="News & Events" />
        </div>
        <div className="academyContent max-md:justify-center w-full h-auto flex flex-wrap justify-between gap-5 mb-3">
          <EventCard
            title="Science Fair 2025"
            date="March 15, 2025"
            description="Our annual Science Fair is back! Students from all grades will showcase
        their innovative projects and experiments. Parents and guests are
        welcome to attend and support our young scientists."
            image={Event_Image1}
          />
          <EventCard
            title="Annual Sports Day"
            date="April 10, 2025"
            description="A day full of energy and excitement! Join us for a series of athletic competitions, team games, and fun activities. Don’t forget to cheer for your house team!"
            image={Event_Image2}
          />
          <EventCard
            title="Parent-Teacher Conference"
            date="May 5, 2025"
            description="A valuable opportunity for parents to meet teachers and discuss their child's academic progress. Book your slots in advance to ensure a productive discussion."
            image={Event_Image3}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
