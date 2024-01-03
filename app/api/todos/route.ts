/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo API
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Todo 목록 조회
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: 성공적으로 조회됨
 *         content:
 *           application/json:
 *             example:
 *               todos: "reactquery fetching 완료"
 */

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Todo 추가
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             todos: "새로운 Todo"
 *     responses:
 *       200:
 *         description: 성공적으로 추가됨
 *         content:
 *           application/json:
 *             example:
 *               res: "새로운 Todo가 추가되었습니다."
 */

import MongoDBConnect from "@/lib/mongodb";
import Todo from "@/models/todos";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    await MongoDBConnect();
    const todos = await Todo.find();
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

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();
    const newCourse = {
      title,
      description,
    };

    await MongoDBConnect();
    await Todo.create(newCourse);
    return NextResponse.json(
      {
        message: "Create Todo success",
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

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    await MongoDBConnect();
    await Todo.findByIdAndDelete(id);

    return NextResponse.json({
      message: "TODO Delete success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "failed to Delete",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
