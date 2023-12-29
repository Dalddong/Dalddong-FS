"use client";
import React from "react";

import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import DayPicker from "@/components/Picker/DayPiceker";
import TimePicker from "@/components/Picker/TimePicker";
import PlacePicker from "@/components/Picker/PlacePicker";
import Button from "@/components/Button";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const router = useRouter();

  const handleRegisterButtonClick = () => {
    router.push("/schedule/1234");
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
