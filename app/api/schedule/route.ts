import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  const data = {
    id: res.id,
    title: "모임제목",
    period: "2023/01/13~2023/04/25",
    place: "장소",
  };
  return NextResponse.json(data, res);
}
