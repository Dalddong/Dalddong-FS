import MongoDBConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Schedule from "@/models/schedule";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  await MongoDBConnect();
  const schedule = await Schedule.findOne({
    _id: id,
  });

  // Check if schedule is not found, then redirect to '/'
  if (!schedule) {
    return NextResponse.error();
  }

  return NextResponse.json({
    message: "OK",
    data: schedule,
  });
}
