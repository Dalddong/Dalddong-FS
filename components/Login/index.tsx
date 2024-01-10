"use client";
import React from "react";

import Button from "../Button";
import { signIn, signOut, useSession } from "next-auth/react";
import KAKAOLOGIN from "@/public/images/kakaologin.png";
import NAVERLOGIN from "@/public/images/naverlogin.png";
import Image from "next/image";

const Login = () => {
  const { data: session } = useSession();

  console.log(session, "session");

  if (session && session.user) {
    return (
      <>
        <div
          className="login-layout centered-content h-[200px] card-layout my-[10px] font-bold"
          onClick={() => console.log("정보변경로직")}
        >
          {session.user.name}님 반갑습니다.
          <br /> 시간을 입력해 주세요!
        </div>
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
      <Button
        className="login-layout my-[5px] "
        onClick={() => signIn("kakao")}
      >
        <div className="login-layout rounded-xl relative shrink-0">
          <Image
            src={KAKAOLOGIN}
            alt="kakaologin"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority
          />
        </div>
      </Button>
      <Button className="login-layout my-[5px]" onClick={() => signIn("naver")}>
        <div className="login-layout rounded-xl relative shrink-0">
          <Image
            src={NAVERLOGIN}
            alt="kakaologin"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority
          />
        </div>
      </Button>
    </>
  );
};

export default Login;
