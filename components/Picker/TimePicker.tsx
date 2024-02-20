"use client";

import SVG_down from "@/public/svgs/down.svg";
import { useRecoilState } from "recoil";
import { nomineePlayTimeValue } from "@/states/Schedule/atom";

const TimePicker = () => {
  const [nomineePlayTime, setNomineePlayTime] =
    useRecoilState(nomineePlayTimeValue);
  const hours = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNomineePlayTime(e.target.value);
  };

  return (
    <div className="form-layout card-layout-rounded-full centered-content justify-evenly">
      <span className="form-input-width">시간</span>
      <div className="flex items-center w-[270px]">
        <SVG_down />
        <select
          className="appearance-none border-none"
          value={nomineePlayTime}
          onChange={handleDurationChange}
        >
          {hours.map((hour) => (
            <option key={hour} value={hour} className="text-[16px]">
              {hour}시간
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
