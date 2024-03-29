"use client";

import Button from "../Button";
import { useSessionUser } from "@/hooks/user/useSessionUser";
import KAKAOLOGIN from "@/public/images/kakaologin.png";
import NAVERLOGIN from "@/public/images/naverlogin.png";
import Image from "next/image";

const Login = () => {
  const { userName, kakaoLogin, naverLogin, signOut } = useSessionUser();

  if (userName) {
    return (
      <>
        <div className="schedule-intro-login-layout centered-content h-[60px] card-layout my-[10px] font-bold">
          {userName}님
        </div>
        <Button
          className="schedule-intro-login-layout card-layout my-[10px] font-bold"
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
        className="schedule-intro-login-layout my-[5px] "
        onClick={kakaoLogin}
      >
        <div className="schedule-intro-login-layout rounded-xl relative shrink-0">
          <Image
            src={KAKAOLOGIN}
            alt="kakaologin"
            fill
            sizes="280px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority
          />
        </div>
      </Button>
      <Button
        className="schedule-intro-login-layout my-[5px]"
        onClick={naverLogin}
      >
        <div className="schedule-intro-login-layout rounded-xl relative shrink-0">
          <Image
            src={NAVERLOGIN}
            alt="naverlogin"
            fill
            sizes="280px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority
          />
        </div>
      </Button>
    </>
  );
};

export default Login;
