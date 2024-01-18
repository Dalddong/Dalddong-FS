"use client";
import React from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";

const ScheduleSelectorSkeleton = () => {
  return (
    <div className="schedule-selector-component-layout">
      <p className="schedule-selector-explain-text">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="schedule-selector-scroll-component">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="schedule-selector-day-wrapper">
            <div className="schedule-selector-day-button"></div>
            {[...Array(24)].map((_, timeIndex) => (
              <div
                key={timeIndex}
                className="schedule-selector-time-layout"
              ></div>
            ))}
          </div>
        ))}
        <div className="schedule-selector-pagination-button left-0">
          <SVG_left />
        </div>
        <div className="schedule-selector-pagination-button right-0">
          <SVG_right />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelectorSkeleton;
