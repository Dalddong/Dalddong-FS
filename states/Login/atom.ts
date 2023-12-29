import { atom } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const loginIdValue = atom({
  key: "loginIdValue",
  default: null,
});

export const loginPasswordState = atom({
  key: "loginPasswordValue",
  default: null,
});
