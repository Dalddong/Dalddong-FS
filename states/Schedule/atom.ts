import { atom } from "recoil";
import { addDays } from "date-fns";

export const scheduleNameValue = atom({
  key: "scheduleNameValue",
  default: null,
});

export const schedulePlaceValue = atom({
  key: "schedulePlaceValue",
  default: null,
});

export const nomineeDayValue = atom({
  key: "nomineeDayValue",
  default: null,
});

export const nomineeTimesValue = atom({
  key: "nomineeTimesValue",
  default: null,
});

export const playTimeValue = atom({
  key: "playTimeValue",
  default: null,
});

export const dateRangeState = atom({
  key: "dateRangeState",
  default: [new Date(), addDays(new Date(), 7)],
});
