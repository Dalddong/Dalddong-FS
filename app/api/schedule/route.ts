import { NextResponse } from "next/server";
import MongoDBConnect from "@/lib/mongodb";
import Schedule from "@/models/schedule";

export async function POST(request: Request) {
  const { nomineeDay, nomineeTimes, playTime, schedulePlace, scheduleName } =
    await request.json();
  const scheduleData = {
    nomineeDay,
    nomineeTimes,
    playTime,
    schedulePlace,
    scheduleName,
  };
  await MongoDBConnect();
  const createdScheduleData = await Schedule.create(scheduleData);

  return NextResponse.json({
    message: "Create Schedule Success",
    data: scheduleData,
    id: createdScheduleData._id,
  });
}
