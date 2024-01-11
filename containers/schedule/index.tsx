"use client";
import React from "react";

import ScheduleIntro from "./ScheduleIntro";
import ScheduleSummary from "@/containers/schedule/ScheduleSummary";
import ScheduleSelector from "./ScheduleSelector";
import { useSchedule } from "@/hooks/schedule/useSchedule";
import { ScheduleContainerProps } from "@/types/schedule";
import ScheduleSkeleton from "@/components/Skeleton";
const ScheduleContainer: React.FC<ScheduleContainerProps> = ({ sid }) => {
  const { data, isLoading } = useSchedule(sid);
  const {
    nomineePlayTime,
    nomineeDays,
    scheduleName,
    schedulePlace,
    selectDays,
  } = data;

  // if (isLoading) return <ScheduleSkeleton skeleton={'s'}/>;

  return (
    <div className="container-schedule-layout">
      <ScheduleIntro
        schedulePlace={schedulePlace}
        scheduleName={scheduleName}
        nomineeDays={nomineeDays}
        nomineePlayTime={nomineePlayTime}
        isLoading={isLoading}
      />
      <ScheduleSelector selectDays={selectDays} />
      <ScheduleSummary selectDays={selectDays} />
    </div>
  );
};

export default ScheduleContainer;
