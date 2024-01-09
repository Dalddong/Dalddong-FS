import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken, signJwtRefreshToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    await MongoDBConnect();

    const { name, password } = await request.json();
    console.log(name, password, "라우트 아디비번");
    const findUser = await User.findOne({ name });
    console.log(findUser);
    if (!findUser) {
      return NextResponse.json(
        {
          message: "유저가 존재하지 않습니다.",
        },
        { status: 401 }
      );
    }

    const emailCorrect = name === findUser.name;
    const passwordCorrect = await bcrypt.compare(password, findUser.password);
    console.log(emailCorrect, passwordCorrect, "일치여부");
    if (emailCorrect && passwordCorrect) {
      const { name } = findUser;

      const refreshToken = signJwtRefreshToken({ name });
      const accessToken = signJwtAccessToken({ name });

      return NextResponse.json(
        {
          message: "로그인 성공",
          name: name,
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
        message: "로그인 에러",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
