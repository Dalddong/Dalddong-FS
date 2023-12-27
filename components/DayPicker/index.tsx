"use client";
import React from "react";
import Svg_down from "@/public/svgs/down.svg";

const DayPicker = () => {
  return (
    <div className="form-layout card-layout-rounded-full centered-content justify-evenly">
      <span className="w-[40px]">기간</span>
      <div className="centered-content w-[270px]">
        <Svg_down /> 2020.12.12 -
        <Svg_down />
        2020.12.12
      </div>
    </div>
  );
};

export default DayPicker;
