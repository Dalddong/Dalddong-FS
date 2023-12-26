"use client";
import React from "react";
import ScheduleContainer from "@/containers/schedule";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {params.slug}
      <ScheduleContainer />
    </>
  );
};

export default page;
