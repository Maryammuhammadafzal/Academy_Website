import React from 'react'
import Heading from "../../Components/Heading/Heading";
import EventCard from '../../Components/EventCard/EventCard';

const Events = () => {
  return (
        <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
        <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 justify-center items-center">
          <div className="headings leading-[6rem] w-[100%] mt-3">
            <Heading text="News & Events" />
          </div>
          <div className="academyContent max-md:justify-center w-full h-auto flex flex-wrap justify-between gap-5 mb-3">
                <EventCard/>
                <EventCard/>
                <EventCard/>
          </div>
          </div>
        
      </div>
  )
}

export default Events
