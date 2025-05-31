import React from 'react';
import Heading from "../../Components/Heading/Heading";
import ProcessCard from '../../Components/ProcessCard/ProcessCard';

const Process = () => {
  return (
        <div className="w-full h-auto gap-5 flex justify-center items-center p-3">
        <div className="academySection w-[90%] max-[1350px]:w-[100%] h-auto flex flex-col gap-4 space-y-7 justify-center items-center">
          <div className="headings leading-[6rem] w-[100%] mt-3">
            <Heading text="Admission" />
          </div>
          <div className="academyContent w-full max-xl:justify-center max-sm:gap-4 gap-3 h-auto flex flex-wrap justify-between mb-3">
                <ProcessCard/>
                <ProcessCard/>
                <ProcessCard/>
                <ProcessCard/>
          </div>
          </div>
    </div>
  )
}

export default Process
