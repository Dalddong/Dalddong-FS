import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      accessToken: string;
      email: string; // 수정: String 대신 string
      refreshToken: string;
    };
  }
}
