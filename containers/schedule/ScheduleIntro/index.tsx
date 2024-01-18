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
    <div className="schedule-intro-component-layout">
      <Header />
      <div className="w-[300px]">
        <h2 className="scheudle-intro-header">{scheduleName}</h2>
        <p className="scheudle-intro-day-span">{days.replaceAll(".", "/")}</p>
        <div className={"ml-2 flex items-center"}>
          <SVG_time />
          <span className="schedule-intro-place-time-span">
            {nomineePlayTime}시간
          </span>
        </div>
        <div className="ml-2 flex items-center ">
          <SVG_map />
          <span className="schedule-intro-place-time-span">
            {schedulePlace}
          </span>
        </div>
      </div>
      <div className="schedule-intro-calendar-layout card-layout"></div>

      <Login />
    </div>
  );
};

export default ScheduleIntro;
