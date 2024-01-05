"use client";
import React from "react";
import type { InputProps } from "@/types/utils";

const Input: React.FC<InputProps> = ({
  className,
  content,
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <div className={`${className} centered-content justify-evenly`}>
      <span className="w-[40px]">{content}</span>
      <input
        type={type}
        className="w-[270px] reset-all placeholder:text-gray-200"
        placeholder={`${placeholder}`}
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
    </div>
  );
};

export default Input;
