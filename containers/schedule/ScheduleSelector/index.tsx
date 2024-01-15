"use client";
import React, { useEffect } from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";
import type { ScheduleSelectorType } from "@/types/schedule";
import { timeTable } from "@/utils/timeTable";
import { useRecoilState } from "recoil";
import { selectRecoilDays } from "@/states/Schedule/atom";

const ScheduleSelector: React.FC<ScheduleSelectorType> = ({ selectDays }) => {
  const [abc, setAbc] = useRecoilState(selectRecoilDays);

  useEffect(() => {
    setAbc(selectDays);
  }, []);

  const selectTimesClicked = (dayIdx: number, timeIndex: number) => {
    const updatedAbc = JSON.parse(JSON.stringify(abc));

    if (!updatedAbc[dayIdx].times[timeIndex].includes("등록")) {
      updatedAbc[dayIdx].times[timeIndex].push("등록");

      setAbc(updatedAbc);
    } else {
      updatedAbc[dayIdx].times[timeIndex] = updatedAbc[dayIdx].times[
        timeIndex
      ].filter((item: any) => item !== "등록");
      setAbc(updatedAbc);
    }

    console.log(updatedAbc, "Updated abc");
  };

  return (
    <div className="box-schedule-middle-layout flex-col-center box-border">
      <p className=" mt-[5px] w-[350px] font-bold text-[14px] lg:w-[600px] lg:text-left lg:ml-[10px] lg:text-[16px]">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="relative w-[350px] h-[800px] py-[8px]  overflow-scroll scrollbar-hide   lg:w-[600px] px-[10px] lg:py-[10px] flex justify-around">
        {abc.map((item: any, dayIdx: number) => (
          <div className="flex-col-center" key={item._id}>
            <div className="schedule-selector-day-layout">
              <span>{item.day}</span>
            </div>
            {item.times.map((time: any, timeIndex: number) => (
              <div
                key={timeIndex}
                onClick={() => selectTimesClicked(dayIdx, timeIndex)}
                className={`schedule-selector-time-layout ${
                  time.includes("등록") ? "border-dd-green" : ""
                }`}
              >
                {timeTable[timeIndex]}({time.length})
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
