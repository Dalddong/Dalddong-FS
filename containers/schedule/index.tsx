"use client";
import React from "react";

import ScheduleIntro from "./ScheduleIntro";
import ScheduleSummary from "@/containers/schedule/ScheduleSummary";
import ScheduleSelector from "./ScheduleSelector";
import { useSchedule } from "@/hooks/schedule/useSchedule";
import { useSearchParams } from "next/navigation";

interface ScheduleContainerProps {
  sid: string;
}

const ScheduleContainer: React.FC<ScheduleContainerProps> = ({ sid }) => {
  const { data, isLoading } = useSchedule(sid);
  console.log(data.schedulePlace);

  return (
    <div className="container-schedule-layout">
      {/* {isLoading ? "로딩중" : data.schedulePlace} */}
      <ScheduleIntro />
      <ScheduleSelector />
      <ScheduleSummary />
    </div>
  );
};

export default ScheduleContainer;
