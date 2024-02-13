/**
 * @swagger
 * /api/schedule:
 *   post:
 *     summary: 일정 만들기
 *     description: Creates a new schedule based on the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomineeDays:
 *                 type: array
 *                 items:
 *                   type: string
 *                 minItems: 2
 *                 maxItems: 2
 *               nomineePlayTime:
 *                 type: string
 *               schedulePlace:
 *                 type: string
 *               scheduleName:
 *                 type: string
 *               selectDays:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                     times:
 *                       type: array
 *                       items:
 *                         type: array
 *                         items:
 *                           type: string
 *     responses:
 *       200:
 *         description: Schedule created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Create Schedule Success!
 *               data:
 *                 _id:
 *                   type: string
 */

import { NextResponse } from "next/server";
import MongoDBConnect from "@/lib/mongodb";
import Schedule from "@/models/schedule";
import {
  UNFILLED_FORM,
  TOO_LONGNAME_FORM,
  TOO_LONGPLACE_FORM,
} from "@/utils/constants/alertMessages";

export async function POST(request: Request) {
  const scheduleData = await request.json();
  console.log("scheduleData", scheduleData);

  await MongoDBConnect();
  const createdScheduleData = await Schedule.create(scheduleData);
  let formStatus: string | boolean = "";

  if (scheduleData.scheduleName.length > 8) {
    formStatus = TOO_LONGNAME_FORM;
  } else if (scheduleData.schedulePlace.length > 10) {
    formStatus = TOO_LONGPLACE_FORM;
  } else if (
    scheduleData.scheduleName &&
    scheduleData.schedulePlace &&
    scheduleData.nomineeDays[1] !== "Invalid date"
  ) {
    formStatus = true;
  } else {
    formStatus = UNFILLED_FORM;
  }

  if (formStatus === true)
    return NextResponse.json(
      {
        message: "Create Schedule Success!",
        data: createdScheduleData,
        _id: createdScheduleData._id,
      },
      { status: 200 }
    );
  else {
    return NextResponse.json(
      {
        message: formStatus,
      },
      { status: 400 }
    );
  }
}
