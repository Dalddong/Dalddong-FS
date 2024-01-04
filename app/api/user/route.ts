import { Schema, model, models } from "mongoose";
import MongoDBConnect from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, password } = await request.json();
    const newUser = {
      name,
      password: await bcrypt.hash(password, 10),
    };

    await MongoDBConnect();
    const createdUser = await User.create(newUser);

    return NextResponse.json(
      {
        message: "create user success",
        data: {
          ...newUser,
          _id: createdUser._id, // Include the _id in the response
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "user Post Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
