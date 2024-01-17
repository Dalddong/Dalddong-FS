"use client";
import React from "react";

import SVG_share from "@/public/svgs/share.svg";
import SVG_chart from "@/public/svgs/barchart.svg";
import Button from "@/components/Button";

import { copyClipboard } from "@/utils/copyClipboard";
import { usePathname } from "next/navigation";

interface ChartType {
  array: [][];
}

const Chart: React.FC<ChartType> = ({ array }) => {
  const pathname = usePathname();
  const [first, second, third] = array;
  const colors = ["deep", "medium", "light"];
  return (
    <>
      <div className="w-[340px] h-[340px] card-layout flex justify-between p-[10px] text-[13px] font-bold">
        {array.map((items, index) => (
          <div
            key={index}
            className={`w-[100px] border-2px border-black flex-col-center`}
          >
            <div
              className={`w-[70px] h-[${200 - index * 30}px] mt-[${
                index * 30
              }px] rounded-xl bg-dd-${colors[index]}-yellow`}
            ></div>
            <ul
              className={`flex-col-center h-[100px] mt-[10px] overflow-scroll scrollbar-hide`}
            >
              {items
                ? items.map((item) => (
                    <li key={item} className="h-[15px] text-[13px] shrink-0">
                      {item}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex">
        <Button
          className="card-layout w-[120px] h-[50px] mr-[10px] centered-content"
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
