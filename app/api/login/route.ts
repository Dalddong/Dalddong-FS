import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken } from "@/lib/jwt";
export async function POST(request: Request) {
  try {
    await MongoDBConnect();

    const { email, password } = await request.json();
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return NextResponse.json(
        {
          message: "유저가존재하지않습니다.",
          data: null,
        },
        { status: 201 }
      );
    }

    const emailCorrect = email === findUser.email;
    const passwordCorrect = await bcrypt.compare(password, findUser.password);

    if (emailCorrect && passwordCorrect) {
      const { email, name } = findUser;
      const accessToken = signJwtAccessToken({ email, name });
      return NextResponse.json(
        {
          message: "로그인 success",
          name: findUser.name,
          accessToken,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          message: "아이디 비밀번호 불일치",
          data: null,
        },
        { status: 201 }
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
