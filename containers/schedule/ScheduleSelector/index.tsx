"use client";
import React from "react";

import SVG_left from "@/public/svgs/leftArrow.svg";
import SVG_right from "@/public/svgs/rightArrow.svg";

interface ScheduleSelectorType {
  selectDays: object[];
}

const ScheduleSelector: React.FC<ScheduleSelectorType> = ({ selectDays }) => {
  console.log("selectDays 하위", selectDays);
  return (
    <div className="box-schedule-middle-layout flex-col-center box-border">
      <p className=" mt-[5px] w-[350px] font-bold text-[14px] lg:w-[600px] lg:text-left lg:ml-[10px] lg:text-[16px]">
        가능한 시간을 모두 선택후 일정을 등록해주세요.
      </p>
      <div className="relative w-[350px] h-[800px] py-[8px]  overflow-scroll scrollbar-hide   lg:w-[600px] px-[10px] lg:py-[10px] flex justify-around">
        <div className="flex-col-center ">
          <div className="w-[50px] h-[30px] shrink-0 lg:w-[100px] lg:h-[40px] border-2 border-dd-green rounded-xl mb-[5px] centered-content font-bold">
            <span>화</span>
            <span>13</span>
          </div>

          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            7:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            8:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            10:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            11:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            12:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            13:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            14:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            15:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            16:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            17:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            18:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            19:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            20:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            21:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            22:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            23:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            24:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            1:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            2:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            3:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            4:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            5:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            6:00
          </div>
        </div>
        <div className="flex-col-center">
          <div className="w-[50px] h-[30px] lg:w-[100px] lg:h-[40px] border-2 border-dd-green rounded-xl mb-[5px] centered-content font-bold">
            <span>화</span>
            <span>13</span>
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
        </div>
        <div className="flex-col-center">
          <div className="w-[50px] h-[30px] lg:w-[100px] lg:h-[40px] border-2 border-dd-green rounded-xl mb-[5px] centered-content font-bold">
            <span>화</span>
            <span>13</span>
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
        </div>
        <div className="flex-col-center">
          <div className="w-[50px] h-[30px] lg:w-[100px] lg:h-[40px] border-2 border-dd-green rounded-xl mb-[5px] centered-content font-bold">
            <span>화</span>
            <span>13</span>
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
        </div>
        <div className="flex-col-center ">
          <div className="w-[50px] h-[30px] shrink-0 lg:w-[100px] lg:h-[40px] border-2 border-dd-green rounded-xl mb-[5px] centered-content font-bold">
            <span>화</span>
            <span>13</span>
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
          <div className="w-[50px] h-[30px] shrink-0 border-2 text-[12px] border-dd-light-yellow rounded-xl mb-[3px] centered-content lg:w-[90px] lg:h-[35px]">
            9:00
          </div>
        </div>

        <div className="absolute top-[16px] lg:top-[20px] left-0">
          <SVG_left />
        </div>
        <div className="absolute top-[16px] lg:top-[20px] right-0">
          <SVG_right />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelector;
