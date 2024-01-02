"use client";
import React from "react";

const Chart = () => {
  return (
    <div className="w-[340px] h-[340px] card-layout flex justify-between p-[10px] text-[13px] font-bold">
      <div className="w-[100px]  border-2px border-black flex-col-center">
        <div className="w-[70px] h-[200px] rounded-xl bg-dd-deep-yellow"></div>
        <ul className="flex-col-center mt-[10px] ">
          <li>23(화) 9:00</li>
          <li>23(화) 9:00</li>
          <li>23(화) 9:00</li>
        </ul>
      </div>
      <div className="w-[100px]  border-2px border-black flex-col-center">
        <div className="w-[70px] h-[170px] mt-[30px] rounded-xl bg-dd-medium-yellow"></div>
        <ul className="flex-col-center mt-[10px]">
          <li>23(화) 9:00</li>
          <li>23(화) 9:00</li>
          <li>23(화) 9:00</li>
        </ul>
      </div>
      <div className="w-[100px]  border-2px border-black flex-col-center">
        <div className="w-[70px] h-[140px] mt-[60px] rounded-xl bg-dd-light-yellow"></div>
        <ul className="flex-col-center mt-[10px]">
          <li>23(화) 9:00</li>
          <li>23(화) 9:00</li>
          <li>23(화) 9:00</li>
        </ul>
      </div>
    </div>
  );
};

export default Chart;
