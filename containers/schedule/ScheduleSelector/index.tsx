"use client";
import React, { useEffect, useState } from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";
import type { ScheduleSelectorType } from "@/types/schedule";
import { timeTable } from "@/utils/timeTable";
import { useRecoilState } from "recoil";
import { selectRecoilDays } from "@/states/Schedule/atom";
import { useUserName } from "@/hooks/user/useUser";

const ScheduleSelector: React.FC<ScheduleSelectorType> = ({ selectDays }) => {
  const [selectDaysBoard, setSelectDaysBoard] =
    useRecoilState<any>(selectRecoilDays);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(selectDaysBoard.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleItems = selectDaysBoard.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setSelectDaysBoard(selectDays);
    setCurrentPage(0);
  }, [selectDays]);

  const handlePageChange = (newPage: number) => {
    if (newPage > -1 && newPage < totalPages) setCurrentPage(newPage);
    else console.log("안돼");
  };

  const selectTimesClicked = async (dayIdx: number, timeIndex: number) => {
    const updatedSelctDaysBoard = JSON.parse(JSON.stringify(selectDaysBoard));
    const targetDayIdx = currentPage * itemsPerPage + dayIdx;
    const userName = await useUserName();
    if (
      !updatedSelctDaysBoard[targetDayIdx].times[timeIndex].includes(
        userName?.user.name
      )
    ) {
      updatedSelctDaysBoard[targetDayIdx].times[timeIndex].push(
        userName?.user.name
      );

      setSelectDaysBoard(updatedSelctDaysBoard);
    } else {
      updatedSelctDaysBoard[targetDayIdx].times[timeIndex] =
        updatedSelctDaysBoard[targetDayIdx].times[timeIndex].filter(
          (item: any) => item !== userName?.user.name
        );
      setSelectDaysBoard(updatedSelctDaysBoard);
    }

    console.log(updatedSelctDaysBoard, "Updated selectDaysBoard");
  };

  return (
    <div className="box-schedule-middle-layout flex-col-center box-border">
      <p className=" mt-[5px] w-[350px] font-bold text-[14px] lg:w-[600px] lg:text-left lg:ml-[10px] lg:text-[16px]">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="relative w-[350px] h-[800px] py-[8px]  overflow-scroll scrollbar-hide   lg:w-[600px] px-[10px] lg:py-[10px] flex">
        {visibleItems.map((item: any, dayIdx: number) => (
          <div className="flex-col-center" key={item._id}>
            <div className="schedule-selector-day-layout">
              <span>{item.day}</span>
            </div>
            {item.times.map((time: any, timeIndex: number) => (
              <div
                key={timeIndex}
                onClick={() => selectTimesClicked(dayIdx, timeIndex)}
                className={`schedule-selector-time-layout ${
                  time.length > 0 ? "border-dd-green" : ""
                }`}
              >
                {timeTable[timeIndex]}({time.length})
              </div>
            ))}
          </div>
        ))}
        <div
          className="absolute top-[16px] lg:top-[20px] left-0"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <SVG_left />
        </div>
        <div
          className="absolute top-[16px] lg:top-[20px] right-0"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <SVG_right />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelector;
