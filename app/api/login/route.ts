import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken, signJwtRefreshToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    await MongoDBConnect();

    const { name, password } = await request.json();
    const findUser = await User.findOne({ name });

    if (!findUser) {
      return NextResponse.json(
        {
          message: "유저가존재하지않습니다.",
        },
        { status: 401 }
      );
    }

    const emailCorrect = name === findUser.name;
    const passwordCorrect = await bcrypt.compare(password, findUser.password);

    if (emailCorrect && passwordCorrect) {
      const { name } = findUser;

      // Generate a new refresh token
      const refreshToken = signJwtRefreshToken({ name });

      // Generate a new access token
      const accessToken = signJwtAccessToken({ name });

      return NextResponse.json(
        {
          message: "login success",
          name: findUser.name,
          accessToken,
          refreshToken,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          message: "비밀번호가 일치하지 않습니다.",
        },
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "로그인 Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
