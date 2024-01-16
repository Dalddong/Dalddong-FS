import { atom } from "recoil";
import { addDays } from "date-fns";

export const scheduleNameValue = atom<string>({
  key: "scheduleNameValue",
  default: "",
});

export const schedulePlaceValue = atom<string>({
  key: "schedulePlaceValue",
  default: "",
});

export const nomineeTimesValue = atom({
  key: "nomineeTimesValue",
  default: null,
});

export const nomineePlayTimeValue = atom<string>({
  key: "nomineePlayTimeValue",
  default: "1",
});

export const nomineeDayValue = atom({
  key: "nomineeDayValue",
  default: [new Date(), addDays(new Date(), 7)],
});

export const selectRecoilDays = atom({
  key: "selectRecoilDays",
  default: [] as any,
});

export const selectIndex = atom({
  key: "selectIndex",
  default: "",
});
