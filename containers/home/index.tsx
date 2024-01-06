"use client";
import React from "react";

import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import DayPicker from "@/components/Picker/DayPiceker";
import TimePicker from "@/components/Picker/TimePicker";
import PlacePicker from "@/components/Picker/PlacePicker";
import Button from "@/components/Button";

import { useRecoilValue } from "recoil";
import { dateRangeState } from "@/states/Schedule/atom";
import { changeDateFormat } from "@/utils/moment";
import moment from "moment";
interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const router = useRouter();
  const dateRange = useRecoilValue(dateRangeState);
  const filterDateRange = [
    changeDateFormat(dateRange[0]),
    changeDateFormat(dateRange[1]),
  ];

  const handleRegisterButtonClick = () => {
    console.log("등록하기 data", filterDateRange);
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
