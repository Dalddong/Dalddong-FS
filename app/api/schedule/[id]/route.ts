import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(request.url, "리퀘");
  const data = {
    title: "모임제목",
    period: "2023/01/13~2023/04/25",
    place: "장소",
  };
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const res = await request.json();
  console.log("sfaf", res);
  return NextResponse.json(res);
}
