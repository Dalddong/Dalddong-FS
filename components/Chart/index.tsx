"use client";
import React from "react";

import SVG_share from "@/public/svgs/share.svg";
import SVG_chart from "@/public/svgs/barchart.svg";
import Button from "@/components/Button";

import { copyClipboard } from "@/utils/copyClipboard";
import { usePathname } from "next/navigation";
import ChartBar from "./ChartBar";

interface ChartType {
  array: [][];
}

const Chart: React.FC<ChartType> = ({ array }) => {
  const pathname = usePathname();
  const [first, second, third] = array;
  return (
    <>
      <div className="schedule-summary-chart-layout card-layout">
        <ChartBar
          data={first}
          tailwindStyle="h-[200px] mt-[0px] bg-dd-deep-yellow"
        />
        <ChartBar
          data={second}
          tailwindStyle="h-[170px] mt-[30px] bg-dd-medium-yellow"
        />
        <ChartBar
          data={third}
          tailwindStyle="h-[140px] mt-[60px] bg-dd-light-yellow"
        />
      </div>
      <div className="flex">
        <Button
          className="schedule-summary-chart-share-button card-layout centered-content"
          onClick={() =>
            copyClipboard(`${process.env.NEXT_PUBLIC_HOME_URL}${pathname}`)
          }
        >
          <SVG_share />
          <span>링크 공유</span>
        </Button>
        <Button
          className="card-layout w-[120px] h-[50px] centered-content"
          onClick={() => {
            console.log("공유버튼클릭");
          }}
        >
          <SVG_chart />
          <span>그래프 저장</span>
        </Button>
      </div>
    </>
  );
};

export default Chart;
