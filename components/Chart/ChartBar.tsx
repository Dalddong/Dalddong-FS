"use client";

interface ChartBarType {
  data: string[];
  tailwindStyle: string;
}

const ChartBar: React.FC<ChartBarType> = ({ data, tailwindStyle }) => {
  const responseData = data ? data : [];

  return (
    <div className="w-[100px] border-2px border-black flex-col-center">
      <div className={`w-[70px] ${tailwindStyle} rounded-xl`}></div>
      <ul className="flex-col-center h-[100px] mt-[10px] overflow-scroll scrollbar-hide">
        {responseData.map((item: string, index: number) => (
          <li key={index} className="h-[15px] text-[13px] shrink-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChartBar;
