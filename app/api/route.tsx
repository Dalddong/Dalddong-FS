import { NextResponse } from "next/server";
export async function GET() {
  const data = {
    pokemon: {
      name: "꼬부기",
    },
  };
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
