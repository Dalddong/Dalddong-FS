import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = {
      todos: "reactquery fetching 완료",
    };
    return NextResponse.json(
      {
        message: "OK",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed get todos",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
