import React from "react";
import Header from "@/components/Header";
import Input from "@/components/Input";

import SVG_key from "@/public/svgs/key.svg";
import SVG_person from "@/public/svgs/person.svg";
import SVG_map from "@/public/svgs/map.svg";
import SVG_time from "@/public/svgs/time.svg";

const ScheduleContainer = () => {
  return (
    <div className="container-schedule-layout">
      <div className="w-full h-[800px] lg:w-[350px] border-2 border-black flex-col-center">
        <Header />
        <div className="w-[300px">
          <h2 className="text-[40px] font-bold text-center">OOO 정기회의</h2>
          <p className="text-center">2023/06/13 ~ 2023/06/20</p>
          <div className="ml-2 mt-[10px] text-[18px]">
            <div className="flex items-center">
              <SVG_time />
              <span>1시간</span>
            </div>
            <div className="flex items-center">
              <SVG_map />
              <span>온라인</span>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[200px] my-[20px] border-[2px] border-black">
          달력위치
        </div>
        <p className="text-[18px]">로그인후 가능한 시간을 입력해 주세요!</p>
        <Input
          className="login-layout card-layout my-[10px]"
          content={<SVG_person />}
          placeholder="Username"
        />
        <Input
          className="login-layout card-layout my-[10px]"
          content={<SVG_key />}
          placeholder="Password"
        />
      </div>
      <div className="w-full h-[800px] lg:w-[600px] border-2 border-black">
        나
      </div>
      <div className="w-full h-[800px] lg:w-[350px] border-2 border-black">
        다
      </div>
    </div>
  );
};

export default ScheduleContainer;
