"use client";
import React from "react";

import Header from "../../Header";

import SVG_map from "@/public/svgs/map.svg";
import SVG_time from "@/public/svgs/time.svg";
import Button from "../../Button";

const ScheduleIntroSkeleton = () => {
  return (
    <div className="box-schedule-side-layout flex-col-center">
      <Header />
      <div className="w-[300px]">
        <h2 className={`text-[40px] h-[60px] mb-2 font-bold text-center`}></h2>
        <p className={`h-[27px] text-center text-[18px]`}></p>
        <div className="ml-2 mt-[10px] text-[18px]">
          <div className={"flex items-center mb-2"}>
            <SVG_time />
            <span className={`ml-2 h-[30px]`}></span>
          </div>
          <div className="flex items-center">
            <SVG_map />

            <span className={`ml-2 h-[30px]`}></span>
          </div>
        </div>
      </div>
      <div className="calendar-scheduleIntro-layout"></div>
      <Button className="login-layout card-layout my-[10px] font-bold"></Button>
      <Button className="login-layout card-layout my-[10px] font-bold"></Button>
    </div>
  );
};

export default ScheduleIntroSkeleton;
