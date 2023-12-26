// Button.tsx
"use client";
import React from "react";

interface InputProps {
  width: string;
  height: string;
}

const Input: React.FC<InputProps> = ({ width, height }) => {
  return (
    <input
      type="text"
      className="text-dd-green border-2 border-solid rounded-lg border-dd-green box-border shadow-[0_6px_12px_0px_rgba(250,227,146,1)]"
      style={{
        width,
        height,
      }}
    />
  );
};

export default Input;
