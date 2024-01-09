import { atom } from "recoil";
import { addDays } from "date-fns";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const scheduleNameValue = atom({
  key: "scheduleNameValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const schedulePlaceValue = atom({
  key: "schedulePlaceValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const nomineeTimesValue = atom({
  key: "nomineeTimesValue",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const nomineePlayTimeValue = atom({
  key: "nomineePlayTimeValue",
  default: "1",
  effects_UNSTABLE: [persistAtom],
});

export const nomineeDayValue = atom({
  key: "nomineeDayValue",
  default: [new Date(), addDays(new Date(), 7)],
});
