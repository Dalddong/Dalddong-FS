/**
 * @swagger
 * /api/schedule/{id}:
 *   get:
 *     summary: 일정 조회
 *     description: Retrieve schedule details by providing its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the schedule
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Schedule details retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: OK
 *               data:
 *                 _id:
 *                   type: string
 *                 nomineeDays:
 *                   type: array
 *                   items:
 *                     type: string
 *                 nomineePlayTime:
 *                   type: string
 *                 schedulePlace:
 *                   type: string
 *                 scheduleName:
 *                   type: string
 *                 selectDays:
 *                   type: array
 *                   items:
 *                     day:
 *                       type: string
 *                     times:
 *                       type: array
 *                       items:
 *                         type: array
 *                         items:
 *                           type: string
 *       404:
 *         description: Schedule not found
 *         content:
 *           application/json:
 *             example:
 *               message: Schedule not found
 *   patch:
 *     summary: 일정 등록
 *     description: Update a schedule's selectDays by providing its ID and the updated data.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the schedule
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 day:
 *                   type: string
 *                   example: "01/29"
 *                 times:
 *                   type: array
 *                   items:
 *                     type: array
 *                     items:
 *                       type: string
 *                   example:
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *                     - []
 *
 *     responses:
 *       201:
 *         description: Schedule updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Update Schedule success
 *               data:
 *                 _id:
 *                   type: string
 *                 nomineeDays:
 *                   type: array
 *                   items:
 *                     type: string
 *                 nomineePlayTime:
 *                   type: string
 *                 schedulePlace:
 *                   type: string
 *                 scheduleName:
 *                   type: string
 *                 selectDays:
 *                   type: array
 *                   items:
 *                     day:
 *                       type: string
 *                     times:
 *                       type: array
 *                       items:
 *                         type: array
 *                         items:
 *                           type: string
 *       404:
 *         description: Schedule not found
 *         content:
 *           application/json:
 *             example:
 *               message: Schedule not found
 *       500:
 *         description: Error updating Schedule
 *         content:
 *           application/json:
 *             example:
 *               message: Error updating Schedule
 */

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
