"use client";
import React from "react";

import Header from "@/components/Header";
import SVG_map from "@/public/svgs/map.svg";
import SVG_time from "@/public/svgs/time.svg";
import Login from "@/components/Login";

import type { ScheduleIntroType } from "@/types/schedule";

const ScheduleIntro: React.FC<ScheduleIntroType> = ({
  schedulePlace,
  nomineePlayTime,
  nomineeDays,
  scheduleName,
}) => {
  const days = nomineeDays ? `${nomineeDays[0]} ~ ${nomineeDays[1]}` : "";

  return (
    <div className="box-schedule-side-layout flex-col-center">
      <Header />
      <div className="w-[300px]">
        <h2 className={`text-[40px] h-[60px] mb-2 font-bold text-center`}>
          {scheduleName}
        </h2>
        <p className={`h-[27px] text-center text-[18px]`}>{days}</p>
        <div className="ml-2 mt-[10px] text-[18px]">
          <div className={"flex items-center mb-2"}>
            <SVG_time />
            <span className={`ml-2  w-full h-[30px]`}>{nomineePlayTime}</span>
          </div>
          <div className="flex items-center">
            <SVG_map />
            <span className={`ml-2 w-full h-[30px]`}>{schedulePlace}</span>
          </div>
        </div>
      </div>
      <div className="calendar-scheduleIntro-layout">달력위치</div>
      <Login />
    </div>
  );
};

export default ScheduleIntro;
