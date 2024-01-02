"use client";

import React from "react";

import Chart from "@/components/Chart";

import SVG_calendar from "@/public/svgs/calendar.svg";
import SVG_share from "@/public/svgs/share.svg";
import SVG_chart from "@/public/svgs/barchart.svg";
import Button from "@/components/Button";

const ScheduleSummary = () => {
  return (
    <div className="box-schedule-side-layout flex-col-center">
      <div className="w-[340px] mt-[5px]">
        <p className="text-left font-bold">화/13 12:00 희망자</p>
        <div className="card-layout centered-content h-[160px] p-[20px]">
          사자,강아지,호랑이,오리,코끼리
        </div>
      </div>
      <Button
        className="card-layout centered-content w-[250px] h-[60px] mt-[5px] mb-[25px] text-[20px]"
        onClick={() => {
          console.log("일정등록 버튼");
        }}
      >
        <SVG_calendar />
        <span className="ml-[4px]">일정 등록</span>
      </Button>
      <Chart />
      <div className="flex">
        <Button
          className="card-layout w-[120px] h-[50px] mr-[10px] centered-content"
          onClick={() => {
            console.log("공유버튼클릭");
          }}
        >
          <SVG_share />
          <span>링크 공유</span>
        </Button>
        <Button
          className="card-layout w-[120px] h-[50px] centered-content"
          onClick={() => {
            console.log("공유버튼클릭");
          }}
        >
          <SVG_chart />
          <span>그래프 공유</span>
        </Button>
      </div>
    </div>
  );
};

export default ScheduleSummary;
