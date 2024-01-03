import { NextResponse, NextRequest } from "next/server";
import MongoDBConnect from "@/lib/mongodb";
import Todo from "@/models/todos";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await MongoDBConnect();
    const todos = await Todo.findOne({
      _id: params.id,
    });
    return NextResponse.json(
      {
        message: "OK",
        data: todos,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "failed",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { newTitle: title, newDescription: description } =
      await request.json();
    const newCourse = {
      title,
      description,
    };

    await MongoDBConnect();
    await Todo.findByIdAndUpdate(params.id, newCourse);
    return NextResponse.json(
      {
        message: "Update Todo success",
        data: newCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "failed",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
