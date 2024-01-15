"use client";
import React from "react";

import ScheduleIntro from "./ScheduleIntro";
import ScheduleSummary from "@/containers/schedule/ScheduleSummary";
import ScheduleSelector from "./ScheduleSelector";
import { useSchedule } from "@/hooks/schedule/useSchedule";
import { ScheduleContainerProps } from "@/types/schedule";

const ScheduleContainer: React.FC<ScheduleContainerProps> = ({ sid }) => {
  const { data, isLoading } = useSchedule(sid);
  const {
    nomineePlayTime,
    nomineeDays,
    scheduleName,
    schedulePlace,
    selectDays,
  } = data;

  return (
    <div className="container-schedule-layout">
      <ScheduleIntro
        schedulePlace={schedulePlace}
        scheduleName={scheduleName}
        nomineeDays={nomineeDays}
        nomineePlayTime={nomineePlayTime}
        isLoading={isLoading}
      />
      <ScheduleSelector selectDays={selectDays} isLoading={isLoading} />
      <ScheduleSummary selectDays={selectDays} isLoading={isLoading} />
    </div>
  );
};

export default ScheduleContainer;
