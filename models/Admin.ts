import mongoose, { Schema, models } from "mongoose";

const AdminSchema = new Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export default models.Admin ||
  mongoose.model("Admin", AdminSchema);