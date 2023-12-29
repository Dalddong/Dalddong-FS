"use client";

import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface RecoilRootProviderProps {
  children: ReactNode;
}

const RecoilRootProvider: React.FC<RecoilRootProviderProps> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
