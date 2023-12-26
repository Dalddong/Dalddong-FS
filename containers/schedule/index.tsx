import React from "react";

const ScheduleContainer = () => {
  return (
    <div className="grid grid-cols-[1fr] gap-0  lg:grid-cols-[350px_600px_350px] max-w-[1300px] h-[900px] mx-auto">
      <div className="w-full h-[800px] lg:w-[350px] bg-dd-green grid place-items-center">
        <div className="bg-dd-deep-yellow w-10 h-10 place-self-center">box</div>
      </div>
      <div className="w-full h-[800px] lg:w-[600px] bg-dd-deep-yellow">나</div>
      <div className="w-full h-[800px] lg:w-[350px] bg-dd-light-yellow">다</div>
    </div>
  );
};

export default ScheduleContainer;
