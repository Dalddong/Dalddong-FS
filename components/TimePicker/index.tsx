"use client";
import React from "react";
import Svg_down from "@/public/svgs/down.svg";

const TimePicker = () => {
  return (
    <div className="form-layout card-layout-rounded-full centered-content justify-evenly">
      <span className="w-[40px]">시간</span>
      <div className="centered-content w-[270px]">
        <Svg_down />
        <span>09:00 -</span>

        <Svg_down />
        <span className="mr-[16px]">22:00</span>

        <Svg_down />
        <span>2시간</span>
      </div>
    </div>
  );
};

export default TimePicker;