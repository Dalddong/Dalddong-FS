"use client";
import Input from "@/components/Input";

import React from "react";
import Button from "../Button";
import SVG_key from "@/public/svgs/key.svg";
import SVG_person from "@/public/svgs/person.svg";
import { useState } from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import { INVALID_LOGIN } from "@/utils/errorMessages";

const Login = () => {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginButtonClick = async () => {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    const status = res?.status;

    if (status === (await 401)) {
      setErrorMessage(INVALID_LOGIN);
    }
  };

  const gg = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
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
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  if (session && session.user) {
    return (
      <>
        <p className="text-[18px]">
          {session.user.name}님 반갑습니다.
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
          onClick={() => signOut()}
        >
          LOGOUT
        </Button>
      </>
    );
  }

  return (
    <>
      <Input
        className="login-layout card-layout my-[10px]"
        content={<SVG_person />}
        placeholder="Username"
        value={email}
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
      <div className="flex">
        <Button
          className="login-layout w-[160px] card-layout my-[10px] mr-[10px] font-bold"
          onClick={handleLoginButtonClick}
        >
          LOGIN
        </Button>
        <Button
          className="login-layout w-[160px] card-layout my-[10px] font-bold"
          onClick={gg}
        >
          SIGN UP
        </Button>
      </div>
      <p className="text-red-600">{errorMessage}</p>
    </>
  );
};

export default Login;
