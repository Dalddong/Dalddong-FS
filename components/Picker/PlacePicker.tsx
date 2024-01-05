"use client";
import React from "react";
import Input from "@/components/Input";

const PlacePicker = () => {
  return (
    <>
      <Input
        className="form-layout card-layout-rounded-full"
        content="이름"
        placeholder="이름"
        value=""
        onChange={() => {
          console.log("ㅋㅋ");
        }}
        type="text"
      />
      <Input
        className="form-layout card-layout-rounded-full"
        content="장소"
        placeholder="장소"
        value=""
        onChange={() => {
          console.log("ㅋㅋ");
        }}
        type="text"
      />
    </>
  );
};

export default PlacePicker;
