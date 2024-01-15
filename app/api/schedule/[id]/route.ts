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

export async function PATCH(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const patchData = await request.json();

  try {
    // Assuming Schedule is your Mongoose model
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      id,
      { selectDays: patchData.selectDays },
      { new: true } // This option returns the updated document
    );

    if (!updatedSchedule) {
      return NextResponse.json(
        {
          message: "Schedule not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Update Schedule success",
        data: updatedSchedule,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error updating Schedule",
      },
      { status: 500 }
    );
  }
}
