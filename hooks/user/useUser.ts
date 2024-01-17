import { getSession } from "next-auth/react";

export const useUserName = async () => {
  const data = await getSession();
  return data;
};
