import mongoose from "mongoose";
import "dotenv/config";

export default async function MongoDBConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connection Success");
  } catch (error) {}
}
