import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      require: [true, "User Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address "],
    },
    password: {
      type: String,
      require: [true, "User password is required"],
      minLength: 8,
    },
  },
  { Timestamp: true }
);

const User = mongoose.model('User', userSchema)

export default User