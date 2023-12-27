"use client";
import React from "react";
import ScheduleContainer from "@/containers/schedule";
import Header from "@/components/Header";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {/* 주소:{params.slug} */}
      <Header />
      <ScheduleContainer />
    </>
  );
};

export default page;
