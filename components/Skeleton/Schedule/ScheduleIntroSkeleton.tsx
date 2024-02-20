"use client";

import Header from "../../Header";

import Button from "../../Button";

const ScheduleIntroSkeleton = () => {
  return (
    <div className="schedule-intro-component-layout">
      <Header />
      <div className="w-[300px]">
        <h2 className="scheudle-intro-header"></h2>
        <p className="scheudle-intro-day-span"></p>
        <div className={"ml-2 flex items-center"}>
          <span className="schedule-intro-place-time-span"></span>
        </div>
        <div className="ml-2 flex items-center ">
          <span className="schedule-intro-place-time-span"></span>
        </div>
      </div>
      <div className="schedule-intro-calendar-layout card-layout"></div>
      <Button className="schedule-intro-login-layout card-layout my-[10px] font-bold"></Button>
      <Button className="schedule-intro-login-layout card-layout my-[10px] font-bold"></Button>
    </div>
  );
};

export default ScheduleIntroSkeleton;
