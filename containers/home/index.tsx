"use client";
import React from "react";

import Header from "@/components/Header";
import DayPicker from "@/components/Picker/DayPicker";
import TimePicker from "@/components/Picker/TimePicker";
import PlacePicker from "@/components/Picker/PlacePicker";
import Button from "@/components/Button";

import { usePostSchedule } from "@/hooks/schedule/useSchedule";
import { selectDaysMaker } from "@/utils/functions/selectDaysMaker";
import { useRecoilValue } from "recoil";
import {
  nomineeDayValue,
  nomineePlayTimeValue,
  scheduleNameValue,
  schedulePlaceValue,
} from "@/states/Schedule/atom";
import { changeDateFormat } from "@/utils/functions/moment";
import { UNFILLED_FORM } from "@/utils/constants/alertMessages";
import Loading from "@/components/Loading";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const dateRange = useRecoilValue(nomineeDayValue);
  const filterDateRange = dateRange.map((item) => changeDateFormat(item));
  const selectDays = selectDaysMaker(dateRange);
  const scheduleName = useRecoilValue(scheduleNameValue);
  const schedulePlace = useRecoilValue(schedulePlaceValue);
  const nomineePlaytime = useRecoilValue(nomineePlayTimeValue);

  const { mutate, isPending } = usePostSchedule(
    filterDateRange,
    nomineePlaytime,
    scheduleName,
    schedulePlace,
    selectDays
  );

  const handlePostScheduleClick = () => {
    if (
      scheduleName &&
      schedulePlace &&
      filterDateRange[1] !== "Invalid date"
    ) {
      mutate();
    } else {
      alert(UNFILLED_FORM);
    }
  };

  if (isPending)
    return (
      <div className="container-main-layout flex-col-center">
        <Header />
        <Loading />
      </div>
    );

  return (
    <div className="container-main-layout flex-col-center">
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
    </div>
  );
};

export default HomeContainer;
