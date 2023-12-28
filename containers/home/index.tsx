"use client";
import React from "react";

import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import DayPicker from "@/components/DayPicker";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TimePicker from "@/components/TimePicker";
interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const router = useRouter();

  return (
    <div className="container-main-layout flex-col-center">
      <Header />
      <DayPicker />
      <TimePicker />
      <Input
        className="form-layout card-layout-rounded-full"
        content="이름"
        placeholder="이름"
      />
      <Input
        className="form-layout card-layout-rounded-full"
        content="장소"
        placeholder="장소"
      />
      <Button
        className="button-confirm card-layout centered-button"
        onClick={() => router.push("/schedule/123")}
      >
        등록하기
      </Button>
    </div>
  );
};

export default HomeContainer;
