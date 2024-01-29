import { Schema, model, models } from "mongoose";

const scheduleSchema = new Schema({
  nomineeDays: { type: [String], required: true },
  nomineePlayTime: { type: String, required: true },
  schedulePlace: { type: String, required: true },
  scheduleName: { type: String, required: true },
  selectDays: {
    type: [
      {
        day: String,
        times: [[String]],
      },
    ],
    required: true,
  },
});

const Schedule = models.Schedule || model("Schedule", scheduleSchema);
export default Schedule;
