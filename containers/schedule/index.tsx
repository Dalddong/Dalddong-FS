"use client";

import ScheduleIntro from "./ScheduleIntro";
import ScheduleSelector from "./ScheduleSelector";
import ScheduleSummary from "@/containers/schedule/ScheduleSummary";
import { useGetSchedule } from "@/hooks/schedule/useSchedule";
import { ScheduleContainerProps } from "@/types/schedule";
import ScheduleSkeleton from "@/components/Skeleton/index";

const ScheduleContainer: React.FC<ScheduleContainerProps> = ({ sid }) => {
  const { data, isLoading } = useGetSchedule(sid);
  const {
    nomineePlayTime,
    nomineeDays,
    scheduleName,
    schedulePlace,
    selectDays,
  } = data;

  if (isLoading) return <ScheduleSkeleton />;

  return (
    <main className="container-schedule-layout">
      <ScheduleIntro
        schedulePlace={schedulePlace}
        scheduleName={scheduleName}
        nomineeDays={nomineeDays}
        nomineePlayTime={nomineePlayTime}
      />
      <ScheduleSelector selectDays={selectDays} />
      <ScheduleSummary selectDays={selectDays} sid={sid} />
    </main>
  );
};

export default ScheduleContainer;
