import { useSession, signIn, signOut, getSession } from "next-auth/react";

export const useSessionUser = () => {
  const { data: userData } = useSession();

  const userName = userData?.user.name;

  const kakaoLogin = () => {
    signIn("kakao");
  };
  const naverLogin = () => {
    signIn("naver");
  };

  return { userName, kakaoLogin, naverLogin, signOut };
};

export const useUserName = async () => {
  const data = await getSession();
  return data;
};
