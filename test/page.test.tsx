import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { nomineePlayTimeValue } from "@/states/Schedule/atom";
import { useRecoilValue } from "recoil";
// import ChartBar from "../components/Chart/ChartBar";
// import HomeContainer from "@/containers/home";
import DayPicker from "@/components/Picker/DayPicker";
import TanstackProvider from "@/components/Providers/TanstackProvider";
import RecoilRootProvider from "@/components/Providers/RecoilRootProvider";
import NextAuthSessionProvider from "@/components/Providers/NextAuthSessionProvider";

import Button from "@/components/Button";
import Header from "@/components/Header";

describe("Login Function", () => {
  // const abc = useRecoilValue(nomineePlayTimeValue);
  test("Page", () => {
    render(
      <RecoilRootProvider>
        <Button
          className="button-confirm card-layout centered-button"
          onClick={() => console.log("")}
        >
          등록하기
        </Button>
      </RecoilRootProvider>
    );
    expect(1).toBe(1);
  });

  test("DayPicker", () => {
    render(
      <RecoilRootProvider>
        <Header />
      </RecoilRootProvider>
    );
    expect(1).toBe(1);
  });
});
