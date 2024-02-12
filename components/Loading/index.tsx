import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-50">
        <div className="flex space-x-2 justify-center items-center h-[50px]">
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
