"use client";
import React from "react";
import ScheduleContainer from "@/containers/schedule";

import { useSearchParams } from "next/navigation";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ScheduleContainer sid={params.slug} />
    </>
  );
};

export default page;
