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
