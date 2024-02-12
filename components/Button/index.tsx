"use client";
import React, { Children, useState } from "react";
import { debounce } from "lodash";
import type { ButtonProps } from "@/types/utils";

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = React.useCallback(
    debounce(() => {
      onClick && onClick();
    }, 1000),
    [onClick]
  );

  return (
    <button className={`${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
