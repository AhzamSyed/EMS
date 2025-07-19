import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    email:   { type: String, required: true, unique: true },
    name:    { type: String, required: true },
    role:    { type: String, default: "staff" },
    salary:  { type: Number, default: 0 },
    // extra fields…
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
