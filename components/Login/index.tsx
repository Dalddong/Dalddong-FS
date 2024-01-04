"use client";
import Input from "@/components/Input";

import React from "react";
import Button from "../Button";
import SVG_key from "@/public/svgs/key.svg";
import SVG_person from "@/public/svgs/person.svg";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLoginButtonClick = () => {
    console.log("로그인 시도!");
  };

  const handleSignInTextClick = () => {
    router.push("/api/auth/signin");
  };

  return (
    <>
      <p className="text-[18px]">로그인후 가능한 시간을 입력해 주세요!</p>
      <Input
        className="login-layout card-layout my-[10px]"
        content={<SVG_person />}
        placeholder="Username"
      />
      <Input
        className="login-layout card-layout my-[10px]"
        content={<SVG_key />}
        placeholder="Password"
      />
      <Button
        className="login-layout card-layout my-[10px] font-bold"
        onClick={handleLoginButtonClick}
      >
        LOGIN
      </Button>
      <p
        className="text-[16px] underline cursor-pointer"
        onClick={() => handleSignInTextClick}
      >
        회원가입
      </p>
    </>
  );
};

export default Login;
