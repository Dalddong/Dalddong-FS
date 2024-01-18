"use client";

import React from "react";

import Chart from "@/components/Chart";

import SVG_calendar from "@/public/svgs/calendar.svg";
import Button from "@/components/Button";
import type { ScheduleSummaryType } from "@/types/schedule";

import { useRecoilValue } from "recoil";
import { selectRecoilDays } from "@/states/Schedule/atom";
import { usePatchSchedule } from "@/hooks/schedule/useSchedule";
import { timeTable } from "@/utils/timeTable";
import { selectSummaryIndex } from "@/states/Schedule/atom";
import { findMostTimeAvailable } from "@/utils/findMostTimeAvailable";

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
    <div className="box-schedule-side-layout flex-col-center">
      <div className="w-[340px] mt-[5px]">
        <p className="text-left font-bold">
          <span>
            {selectDays[dayIdx].day} {timeTable[timeIdx]} 희망자
          </span>
        </p>
        <div className="card-layout centered-content h-[160px] p-[20px]">
          {selectDays[dayIdx].times[timeIdx].length > 0
            ? [...selectDays[dayIdx].times[timeIdx]].join(",")
            : "아직 희망자가 없어요!"}
        </div>
      </div>
      <Button
        className="card-layout centered-content w-[250px] h-[60px] mt-[5px] mb-[25px] text-[20px]"
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
