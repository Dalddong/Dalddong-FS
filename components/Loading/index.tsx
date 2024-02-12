import React from "react";

const Loading = () => {
  return (
    <>
      <div className="h-[300px] flex flex-col justify-center items-center">
        <div className="flex space-x-2 justify-center items-center bg-white h-[50px]">
          <div className="h-8 w-8 bg-dd-deep-yellow rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-dd-deep-yellow rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-dd-deep-yellow rounded-full animate-bounce"></div>
        </div>
        <span className="text-dd-deep-yellow">로딩중입니다.</span>
      </div>
    </>
  );
};

export default Loading;
