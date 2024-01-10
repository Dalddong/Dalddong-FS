import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = data;
    await MongoDBConnect();

    console.log(data, "data");
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "존재하는 계정입니다.",
          message: "exist account",
        },
        { status: 400 }
      );
    }

    const newUser = {
      password: await bcrypt.hash(password, 10),
      email,
    };

    await User.create(newUser);

    return NextResponse.json(
      {
        message: "create user success",
        data: data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "create user Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
