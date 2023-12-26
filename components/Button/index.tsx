// Button.tsx
"use client";
import React from "react";

interface ButtonProps {
  width: string;
  height: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ width, height, children }) => {
  return (
    <button
      className="text-dd-green border-2 border-solid rounded-lg border-dd-green box-border shadow-[0_6px_12px_0px_rgba(250,227,146,1)]"
      style={{
        width,
        height,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
