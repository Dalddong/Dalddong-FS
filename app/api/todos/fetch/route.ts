import { NextResponse } from "next/server";
export async function GET() {
  const data = {
    todos: "tossdos",
  };
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
