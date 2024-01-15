"use client";
import React from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";

import type { ScheduleSelectorType } from "@/types/schedule";
import ScheduleSelectorSkeleton from "@/components/Skeleton/ScheduleSelectorSkeleton";

const ScheduleSelector: React.FC<ScheduleSelectorType> = ({
  selectDays,
  isLoading,
}) => {
  const timeTable = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
  ];

  if (isLoading) return <ScheduleSelectorSkeleton />;

  return (
    <div className="box-schedule-middle-layout flex-col-center box-border">
      <p className=" mt-[5px] w-[350px] font-bold text-[14px] lg:w-[600px] lg:text-left lg:ml-[10px] lg:text-[16px]">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="relative w-[350px] h-[800px] py-[8px]  overflow-scroll scrollbar-hide   lg:w-[600px] px-[10px] lg:py-[10px] flex justify-around">
        {selectDays.map((item: any) => (
          <div className="flex-col-center" key={item._id}>
            <div className="schedule-selector-day-layout">
              <span>{item.day}</span>
            </div>
            {item.times.map((time: any, index: number) => (
              <div
                key={index}
                onClick={() => console.log(index, item.day, "으하하")}
                className="schedule-selector-time-layout"
              >
                {time.length > 0
                  ? time.length
                  : `${timeTable[index]} (${time.length})`}
              </div>
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

export default ScheduleSelector;
