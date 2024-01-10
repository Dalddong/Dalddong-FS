"use client";
import React from "react";

import Header from "@/components/Header";
import SVG_map from "@/public/svgs/map.svg";
import SVG_time from "@/public/svgs/time.svg";
import Login from "@/components/Login";

const ScheduleIntro = () => {
  return (
    <div className="box-schedule-side-layout flex-col-center">
      <Header />
      <div className="w-[300px]">
        <h2 className="text-[40px] font-bold text-center">OOO 정기회의</h2>
        <p className="text-center text-[18px]">2023/06/13 ~ 2023/06/20</p>
        <div className="ml-2 mt-[10px] text-[18px]">
          <div className="flex items-center">
            <SVG_time />
            <span>1시간</span>
          </div>
          <div className="flex items-center">
            <SVG_map />
            <span>온라인</span>
          </div>
        </div>
      </div>
      <div className="calendar-scheduleIntro-layout">달력위치</div>
      <Login />
    </div>
  );
};

export default ScheduleIntro;
