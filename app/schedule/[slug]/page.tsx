"use client";
import React from "react";
import ScheduleContainer from "@/containers/schedule";
const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {/* 주소:{params.slug} */}

      <ScheduleContainer />
    </>
  );
};

export default page;
