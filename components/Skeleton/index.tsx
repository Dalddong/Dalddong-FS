"use client";

import ScheduleIntroSkeleton from "./Schedule/ScheduleIntroSkeleton";
import ScheduleSelectorSkeleton from "./Schedule/ScheduleSelectorSkeleton";
import ScheduleSummarySkeleton from "./Schedule/ScheduleSummarySkeleton";

const ScheduleSkeleton = () => {
  return (
    <div className="container-schedule-layout">
      <ScheduleIntroSkeleton />
      <ScheduleSelectorSkeleton />
      <ScheduleSummarySkeleton />
    </div>
  );
};

export default ScheduleSkeleton;
