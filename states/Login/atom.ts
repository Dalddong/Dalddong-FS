import { atom } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: false,
});
export const signupAndLoginToggleState = atom({
  key: "signupAndLoginToggleState",
  default: "login",
});

export const loginErrorMessage = atom({
  key: "loginErrorMessage",
  default: "",
});

export const loginIdValue = atom({
  key: "loginIdValue",
  default: "",
});

export const loginPasswordValue = atom({
  key: "loginPasswordValue",
  default: "",
});
