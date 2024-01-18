"use client";

import React from "react";

import Chart from "@/components/Chart";

import SVG_calendar from "@/public/svgs/calendar.svg";
import Button from "@/components/Button";
import type { ScheduleSummaryType } from "@/types/schedule";

import { useRecoilValue } from "recoil";
import { selectRecoilDays } from "@/states/Schedule/atom";
import { usePatchSchedule } from "@/hooks/schedule/useSchedule";
import { timeTable } from "@/utils/constants/timeTable";
import { selectSummaryIndex } from "@/states/Schedule/atom";
import { findMostTimeAvailable } from "@/utils/functions/findMostTimeAvailable";

const ScheduleSummary: React.FC<ScheduleSummaryType> = ({
  selectDays,
  sid,
}) => {
  const RecoilDays = useRecoilValue(selectRecoilDays);
  const selectSummaryIndexObj = useRecoilValue(selectSummaryIndex);
  const { dayIdx, timeIdx } = selectSummaryIndexObj;

  const array = findMostTimeAvailable(selectDays);

  const patchSchedule = usePatchSchedule(RecoilDays, sid);

  return (
    <div className="schedule-summary-component-layout">
      <div className="schedule-summary-peoples-layout">
        <p className="schedule-summary-peoples-text">
          <span>
            {selectDays[dayIdx].day} {timeTable[timeIdx]} 희망자
          </span>
        </p>
        <div className="schedule-summary-peoples-list card-layout">
          {selectDays[dayIdx].times[timeIdx].length > 0
            ? [...selectDays[dayIdx].times[timeIdx]].join(",")
            : "아직 희망자가 없어요!"}
        </div>
      </div>
      <Button
        className="schedule-summary-post-button card-layout centered-content "
        onClick={patchSchedule}
      >
        <SVG_calendar />
        <span className="ml-[4px]">일정 등록</span>
      </Button>
      <Chart array={array} />
    </div>
  );
};

export default ScheduleSummary;
