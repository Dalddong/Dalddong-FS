import { NextResponse } from "next/server";
import MongoDBConnect from "@/lib/mongodb";
import Schedule from "@/models/schedule";

export async function POST(request: Request) {
  const scheduleData = await request.json();
  console.log("scheduleData", scheduleData);

  await MongoDBConnect();
  const createdScheduleData = await Schedule.create(scheduleData);

  return NextResponse.json({
    message: "Create Schedule Success!",
    data: createdScheduleData,
    _id: createdScheduleData._id,
  });
}
