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
      />
      <Input
        className="form-layout card-layout-rounded-full"
        content="장소"
        placeholder="장소"
      />
    </>
  );
};

export default PlacePicker;
