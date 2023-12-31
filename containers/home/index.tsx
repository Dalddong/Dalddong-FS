"use client";
import React from "react";

import Header from "@/components/Header";
import DayPicker from "@/components/Picker/DayPiceker";
import TimePicker from "@/components/Picker/TimePicker";
import PlacePicker from "@/components/Picker/PlacePicker";
import Button from "@/components/Button";

import { usePostSchedule } from "@/hooks/schedule/usePostSchedule";

import { useRecoilValue } from "recoil";
import {
  nomineeDayValue,
  nomineePlayTimeValue,
  scheduleNameValue,
  schedulePlaceValue,
} from "@/states/Schedule/atom";
import { changeDateFormat } from "@/utils/moment";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const dateRange = useRecoilValue(nomineeDayValue);
  const filterDateRange = dateRange.map((item) => changeDateFormat(item));
  const scheduleName = useRecoilValue(scheduleNameValue);
  const schedulePlace = useRecoilValue(schedulePlaceValue);
  const nomineePlaytime = useRecoilValue(nomineePlayTimeValue);

  const postSchedule = usePostSchedule(
    filterDateRange,
    nomineePlaytime,
    scheduleName,
    schedulePlace
  );

  const handleRegisterButtonClick = () => {
    postSchedule();
  };

  return (
    <div className="container-main-layout flex-col-center">
      <Header />
      <DayPicker />
      <TimePicker />
      <PlacePicker />
      <Button
        className="button-confirm card-layout centered-button"
        onClick={handleRegisterButtonClick}
      >
        등록하기
      </Button>
    </div>
  );
};

export default HomeContainer;
