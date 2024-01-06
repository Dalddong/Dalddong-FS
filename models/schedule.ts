import { Schema, model, models } from "mongoose";

const scheduleSchema = new Schema({
  nomineeDay: String,
  nomineeTimes: [String],
  playTime: String,
  schedulPlace: String,
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
