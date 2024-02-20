"use client";

import Input from "@/components/Input";
import { useRecoilState } from "recoil";
import { schedulePlaceValue, scheduleNameValue } from "@/states/Schedule/atom";

const PlacePicker = () => {
  const [schedulePlace, setSchedulePlace] = useRecoilState(schedulePlaceValue);
  const [scheduleName, setScheduleName] = useRecoilState(scheduleNameValue);

  const handleSchedulePlaceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSchedulePlace(event.target.value);
  };
  const handleScheduleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setScheduleName(event.target.value);
  };

  return (
    <>
      <Input
        className="form-layout card-layout-rounded-full"
        content="이름"
        placeholder="이름"
        value={scheduleName}
        onChange={handleScheduleNameChange}
        type="text"
      />
      <Input
        className="form-layout card-layout-rounded-full"
        content="장소"
        placeholder="장소"
        value={schedulePlace}
        onChange={handleSchedulePlaceChange}
        type="text"
      />
    </>
  );
};

export default PlacePicker;
