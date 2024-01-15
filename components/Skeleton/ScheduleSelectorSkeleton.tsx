"use client";
import React from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";

const ScheduleSelectorSkeleton = () => {
  return (
    <div className="box-schedule-middle-layout flex-col-center box-border">
      <p className="mt-[5px] w-[350px] font-bold text-[14px] lg:w-[600px] lg:text-left lg:ml-[10px] lg:text-[16px]">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="relative w-[350px] h-[800px] py-[8px] overflow-scroll scrollbar-hide lg:w-[600px] px-[10px] lg:py-[10px] flex justify-around">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex-col-center">
            <div className="schedule-selector-day-layout"></div>
            {[...Array(20)].map((_, timeIndex) => (
              <div
                key={timeIndex}
                className="schedule-selector-time-layout"
              ></div>
            ))}
          </div>
        ))}
        <div className="absolute top-[16px] lg:top-[20px] left-0">
          <SVG_left />
        </div>
        <div className="absolute top-[16px] lg:top-[20px] right-0">
          <SVG_right />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelectorSkeleton;
