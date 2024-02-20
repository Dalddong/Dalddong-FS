"use client";

import ScheduleContainer from "@/containers/schedule";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ScheduleContainer sid={params.slug} />
    </>
  );
};

export default page;
