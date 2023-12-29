"use client";
import React from "react";
import type { ButtonProps } from "@/types/utils";

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
