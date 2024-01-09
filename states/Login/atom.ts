import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const signupAndLoginToggleState = atom({
  key: "signupAndLoginToggleState",
  default: "login",
  effects_UNSTABLE: [persistAtom],
});

export const loginErrorMessage = atom({
  key: "loginErrorMessage",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const loginIdValue = atom({
  key: "loginIdValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const loginPasswordValue = atom({
  key: "loginPasswordValue",
  default: "",
});
