"use client";
import React from "react";

import ScheduleIntro from "./ScheduleIntro";
import ScheduleSummary from "@/containers/schedule/ScheduleSummary";
import ScheduleSelector from "./ScheduleSelector";

const ScheduleContainer = () => {
  return (
    <div className="container-schedule-layout">
      <ScheduleIntro />
      <ScheduleSelector />
      <ScheduleSummary />
    </div>
  );
};

export default ScheduleContainer;
