import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, password } = await request.json();

    await MongoDBConnect();

    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "사용중인 이름입니다.",
          message: "duplicated name",
        },
        { status: 400 }
      );
    }

    const newUser = {
      name,
      password: await bcrypt.hash(password, 10),
    };

    await User.create(newUser);

    return NextResponse.json(
      {
        message: "create user success",
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
