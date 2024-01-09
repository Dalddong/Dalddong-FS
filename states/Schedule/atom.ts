import { atom } from "recoil";
import { addDays } from "date-fns";

export const scheduleNameValue = atom({
  key: "scheduleNameValue",
  default: "",
});

export const schedulePlaceValue = atom({
  key: "schedulePlaceValue",
  default: "",
});

export const nomineeTimesValue = atom({
  key: "nomineeTimesValue",
  default: null,
});

export const nomineePlayTimeValue = atom({
  key: "nomineePlayTimeValue",
  default: "1",
});

export const nomineeDayValue = atom({
  key: "nomineeDayValue",
  default: [new Date(), addDays(new Date(), 7)],
});
