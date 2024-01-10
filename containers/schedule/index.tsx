"use client";
import React from "react";

import ScheduleIntro from "./ScheduleIntro";
import ScheduleSummary from "@/containers/schedule/ScheduleSummary";
import ScheduleSelector from "./ScheduleSelector";
import { useSchedule } from "@/hooks/schedule/useSchedule";

interface ScheduleContainerProps {
  sid: string;
}

const ScheduleContainer: React.FC<ScheduleContainerProps> = ({ sid }) => {
  const { data } = useSchedule(sid);

  return (
    <div className="container-schedule-layout">
      <ScheduleIntro />
      <ScheduleSelector />
      <ScheduleSummary />
    </div>
  );
};

export default ScheduleContainer;
