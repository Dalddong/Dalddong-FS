"use client";

import Header from "@/components/Header";
import DayPicker from "@/components/Picker/DayPicker";
import TimePicker from "@/components/Picker/TimePicker";
import PlacePicker from "@/components/Picker/PlacePicker";
import { useRecoilValue } from "recoil";
import Button from "@/components/Button";
import { nomineeDayValue } from "@/states/Schedule/atom";
import { usePostSchedule } from "@/hooks/schedule/useSchedule";
import Loading from "@/components/Loading";
import useCheckForm from "@/hooks/util/useCheckForm";

const HomeContainer = () => {
  const dateRange = useRecoilValue(nomineeDayValue);
  const {
    scheduleName,
    schedulePlace,
    nomineePlaytime,
    filterDateRange,
    selectDays,
    formStatus,
  } = useCheckForm({ dateRange: dateRange });
  const { mutate, isPending } = usePostSchedule(
    filterDateRange,
    nomineePlaytime,
    scheduleName,
    schedulePlace,
    selectDays
  );

  const handlePostScheduleClick = () => {
    if (formStatus === true) {
      mutate();
    } else {
      alert(formStatus);
    }
  };

  return (
    <>
      <main className="container-main-layout flex-col-center">
        <Header />
        <DayPicker />
        <TimePicker />
        <PlacePicker />
        <Button
          className="button-confirm card-layout centered-button"
          onClick={handlePostScheduleClick}
        >
          등록하기
        </Button>
        {isPending ? <Loading text="일정이 만들어지고 있습니다." /> : ""}
      </main>
    </>
  );
};

export default HomeContainer;
