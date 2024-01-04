"use client";
import Input from "@/components/Input";

import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";
import Button from "../Button";
import SVG_key from "@/public/svgs/key.svg";
import SVG_person from "@/public/svgs/person.svg";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  console.log(session, "session값");

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
        className="login-layout card-layout shi my-[10px]"
        content={<SVG_key />}
        placeholder="Password"
      />
      {session && session.user ? "로그아웃하기" : "로그인하기"}
      <Button
        className="login-layout card-layout my-[10px] font-bold"
        onClick={() => signIn()}
      >
        LOGIN
      </Button>

      <Button
        className="login-layout card-layout my-[10px] font-bold"
        onClick={() => signOut()}
      >
        LOGOUT
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
