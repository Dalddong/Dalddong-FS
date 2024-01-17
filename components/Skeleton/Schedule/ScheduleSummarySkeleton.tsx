"use client";
import React from "react";
import Chart from "@/components/Chart";
import SVG_calendar from "@/public/svgs/calendar.svg";

import Button from "@/components/Button";

const ScheduleSummarySkeleton = () => {
  return (
    <div className="box-schedule-side-layout flex-col-center">
      <div className="w-[340px] mt-[5px]">
        <p className="text-left font-bold">
          <span className="mr-[8px]"></span>
          <span className="mr-[8px]"></span>
          <span className="mr-[8px]"></span>
        </p>
        <div className="card-layout centered-content h-[160px] p-[20px]">
          아직 희망자가 없어요!
        </div>
      </div>
      <Button className="card-layout centered-content w-[250px] h-[60px] mt-[5px] mb-[25px] text-[20px]">
        <SVG_calendar />
        <span className="ml-[4px]">일정 등록</span>
      </Button>
      <Chart array={[]} />
    </div>
  );
};

export default ScheduleSummarySkeleton;
