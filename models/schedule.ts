import { Schema, model, models } from "mongoose";

const scheduleSchema = new Schema({
  nomineeDays: [String],
  nomineePlayTime: { type: String, required: true },
  schedulePlace: String,
  scheduleName: String,
  selectDays: [
    {
      day: String,
      times: [[String]],
    },
  ],
});

const Schedule = models.Schedule || model("Schedule", scheduleSchema);
export default Schedule;
