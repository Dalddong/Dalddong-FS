"use client";

import React from "react";

import Chart from "@/components/Chart";

import SVG_calendar from "@/public/svgs/calendar.svg";
import SVG_share from "@/public/svgs/share.svg";
import SVG_chart from "@/public/svgs/barchart.svg";
import Button from "@/components/Button";
import type { ScheduleSummaryType } from "@/types/schedule";

import { useRecoilValue } from "recoil";
import { selectRecoilDays } from "@/states/Schedule/atom";
import { usePatchSchedule } from "@/hooks/schedule/useSchedule";
import { timeTable } from "@/utils/timeTable";
import { selectSummaryIndex } from "@/states/Schedule/atom";

const ScheduleSummary: React.FC<ScheduleSummaryType> = ({
  selectDays,
  sid,
}) => {
  const RecoilDays = useRecoilValue(selectRecoilDays);
  const selectSummaryIndexObj = useRecoilValue(selectSummaryIndex);
  const { dayIdx, timeIdx } = selectSummaryIndexObj;

  const patchSchedule = usePatchSchedule(RecoilDays, sid);

  return (
    <div className="box-schedule-side-layout flex-col-center">
      <div className="w-[340px] mt-[5px]">
        <p className="text-left font-bold">
          <span className="mr-[8px]">{selectDays[dayIdx].day}</span>
          <span className="mr-[8px]">{timeTable[timeIdx]}</span>
          <span className="mr-[8px]">희망자</span>
        </p>
        <div className="card-layout centered-content h-[160px] p-[20px]">
          {selectDays[dayIdx].times[timeIdx].length > 0
            ? selectDays[dayIdx].times[timeIdx]
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
