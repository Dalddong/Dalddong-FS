"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  const onclickLogin = async () => {
    const res = await signIn("credentials", {
      email: "frog@frog.com",
      password: "12345",
      redirect: false,
    });
    const status = await res?.status;

    if (status === 401) {
      alert("아이디 비밀번호 다시확인해주세요");
    } else {
      alert("로그인성공!");
    }
  };

  if (session && session.user) {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-red-300"
        onClick={() => signOut()}
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <button
      className="px-12 py-4 border rounded-xl bg-yellow-300"
      onClick={onclickLogin}
    >
      LogIn
    </button>
  );
};

export default page;
