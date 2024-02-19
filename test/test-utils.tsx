import TanstackProvider from "@/components/Providers/TanstackProvider";
import RecoilRootProvider from "@/components/Providers/RecoilRootProvider";
import NextAuthSessionProvider from "@/components/Providers/NextAuthSessionProvider";

import { render } from "@testing-library/react";
import React from "react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <RecoilRootProvider>{children}</RecoilRootProvider>
    </TanstackProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export { customRender };
