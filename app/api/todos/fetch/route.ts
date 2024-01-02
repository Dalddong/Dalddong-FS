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

import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    todos: "reactquery fetching 완료",
  };
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
