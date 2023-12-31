"use client";
import Input from "@/components/Input";

import React from "react";
import Button from "../Button";
import SVG_key from "@/public/svgs/key.svg";
import SVG_person from "@/public/svgs/person.svg";

import { useRecoilState } from "recoil";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  loginIdValue,
  loginPasswordValue,
  loginErrorMessage,
  signupAndLoginToggleState,
  loginState,
} from "@/states/Login/atom";
import { usePostLogin } from "@/hooks/login/usePostLogin";

const Login = () => {
  const { data: session } = useSession();
  const [id, setId] = useRecoilState(loginIdValue);
  const [password, setPassword] = useRecoilState(loginPasswordValue);
  const [errorMessage, setErrorMessage] = useRecoilState(loginErrorMessage);
  const [isLogedIn, setIsLogedIn] = useRecoilState(loginState);
  const [signUpState, setSignUpState] = useRecoilState(
    signupAndLoginToggleState
  );
  const postLogin = usePostLogin(id, password);

  const handleLoginButtonClick = async () => {
    postLogin();
  };

  const handleSignUpButtonClick = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: id,
          password: password,
        }),
      });
      const data = await response.json();

      console.log(data, "??");
      if (data.error) {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.log("회원가입 fetch ERROR");
    }
  };

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("acToken");
    setIsLogedIn(false);
  };

  return (
    <>
      {isLogedIn ? (
        <>
          <p className="text-[18px]">
            {id}님 반갑습니다.
            <br /> 시간을 입력해 주세요!
          </p>
          <Button
            className="login-layout card-layout my-[10px] font-bold"
            onClick={() => console.log("정보변경로직")}
          >
            회원정보 변경
          </Button>
          <Button
            className="login-layout card-layout my-[10px] font-bold"
            onClick={handleLogoutButtonClick}
          >
            LOGOUT
          </Button>
        </>
      ) : (
        <>
          <Input
            className="login-layout card-layout my-[10px]"
            content={<SVG_person />}
            placeholder="Username"
            value={id}
            onChange={handleIdChange}
            type="text"
          />
          <Input
            className="login-layout card-layout shi my-[10px]"
            content={<SVG_key />}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          <Button
            className="login-layout card-layout my-[10px] font-bold"
            onClick={
              signUpState === "login"
                ? handleLoginButtonClick
                : handleSignUpButtonClick
            }
          >
            {signUpState === "login" ? "LOGIN" : "회원가입"}
          </Button>

          <p className="text-red-600">{errorMessage}</p>

          <div className=" w-[200px] flex justify-evenly">
            <p
              className="text-[16px] underline cursor-pointer"
              onClick={() => setSignUpState("login")}
            >
              로그인
            </p>
            <p
              className="text-[16px] underline cursor-pointer"
              onClick={() => setSignUpState("signUp")}
            >
              회원가입
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
