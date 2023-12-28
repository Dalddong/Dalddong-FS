"use client";
import React from "react";

interface InputProps {
  className: string;
  content: string | React.ReactNode;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ className, content, placeholder }) => {
  return (
    <div className={`${className} centered-content justify-evenly`}>
      <span className="w-[40px]">{content}</span>
      <input
        type="text"
        className="w-[270px] reset-all placeholder:text-gray-200"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

export default Input;
