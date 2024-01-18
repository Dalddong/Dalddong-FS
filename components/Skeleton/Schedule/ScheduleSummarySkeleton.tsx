"use client";
import React from "react";
import Chart from "@/components/Chart";
import SVG_calendar from "@/public/svgs/calendar.svg";

import Button from "@/components/Button";

const ScheduleSummarySkeleton = () => {
  return (
    <div className="schedule-summary-component-layout">
      <div className="schedule-summary-peoples-layout">
        <p className="schedule-summary-peoples-text"></p>
        <div className="schedule-summary-peoples-list card-layout"></div>
      </div>
      <Button className="schedule-summary-post-button card-layout centered-content">
        <SVG_calendar />
        <span className="ml-[4px]">일정 등록</span>
      </Button>
      <Chart array={[]} />
    </div>
  );
};

export default ScheduleSummarySkeleton;
