import { Schema, model, models } from "mongoose";
const userSchema = new Schema(
  {
    name: String,
    password: String,
    uid: Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);
export default User;
