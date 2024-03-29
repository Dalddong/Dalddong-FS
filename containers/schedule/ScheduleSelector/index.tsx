"use client";
import React, { useEffect, useState } from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";
import type { ScheduleSelectorType } from "@/types/schedule";
import { timeTable } from "@/utils/constants/timeTable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectRecoilDays, selectSummaryIndex } from "@/states/Schedule/atom";
import { useSessionUser } from "@/hooks/user/useSessionUser";
import { UNAUTHORIZE_LOGIN } from "@/utils/constants/alertMessages";
import type { ScheduleItem } from "@/types/schedule";
import usePagination from "@/hooks/util/usePagination";

const ScheduleSelector: React.FC<ScheduleSelectorType> = ({ selectDays }) => {
  const [selectDaysBoard, setSelectDaysBoard] =
    useRecoilState(selectRecoilDays);
  const setSelectSummaryIndex = useSetRecoilState(selectSummaryIndex);
  const { userName } = useSessionUser();

  const {
    currentPage,
    itemsPerPage,
    startIndex,
    sliceNumber,
    handlePageChange,
  } = usePagination({
    totalItems: selectDaysBoard.length,
  });

  const visibleItems = selectDaysBoard.slice(startIndex, sliceNumber);

  useEffect(() => {
    setSelectDaysBoard(selectDays);
  }, [selectDays]);

  const handleSelectTimesClicked = async (
    dayIdx: number,
    timeIndex: number
  ) => {
    const updatedSelctDaysBoard = JSON.parse(JSON.stringify(selectDaysBoard));
    const targetDayIdx = currentPage * itemsPerPage + dayIdx;
    const times = updatedSelctDaysBoard[targetDayIdx].times[timeIndex];

    if (userName) {
      times.includes(userName)
        ? (updatedSelctDaysBoard[targetDayIdx].times[timeIndex] = times.filter(
            (item: string) => item !== userName
          ))
        : times.push(userName);
    } else {
      alert(UNAUTHORIZE_LOGIN);
    }

    setSelectDaysBoard(updatedSelctDaysBoard);
  };

  const handleSelectTimesHover = (dayIdx: number, timeIndex: number) => {
    const targetDayIdx = currentPage * itemsPerPage + dayIdx;
    setSelectSummaryIndex({ dayIdx: targetDayIdx, timeIdx: timeIndex });
  };

  return (
    <section className="schedule-selector-component-layout">
      <p className="schedule-selector-explain-text">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="schedule-selector-scroll-component">
        {visibleItems.map((item: ScheduleItem, dayIdx: number) => (
          <div className="schedule-selector-day-wrapper" key={item._id}>
            <div className="schedule-selector-day-button">
              <span>{item.day}</span>
            </div>
            {item.times.map((time: string[], timeIndex: number) => (
              <div
                key={timeIndex}
                onClick={() => handleSelectTimesClicked(dayIdx, timeIndex)}
                className={`schedule-selector-time-layout ${
                  time.length > 0 ? "border-dd-green" : ""
                }`}
                onMouseOver={() => handleSelectTimesHover(dayIdx, timeIndex)}
              >
                {timeTable[timeIndex]}({time.length})
              </div>
            ))}
          </div>
        ))}
        <div
          className="schedule-selector-pagination-button left-0"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <SVG_left />
        </div>
        <div
          className="schedule-selector-pagination-button right-0"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <SVG_right />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSelector;
