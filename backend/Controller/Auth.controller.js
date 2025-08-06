import { asyncHandler } from "./Middleware/Asynchandler.js";
import { signupSchema, verifyEmailSchema } from "../Validators/Authvalidator.js";
import { User } from "../Models/User.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../Utils/GenerateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../Mailtrap/Emails.js";


export const signup = asyncHandler(async (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { email, password, name } = req.body;
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

  const user = new User({
    email,
    password: hashedPassword,
    name,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
  });

  await user.save();
  generateTokenAndSetCookie(res, user._id);
  await sendVerificationEmail(user.email, verificationToken);

  res.status(201).json({
    success: true,
    message: "User created successfully. Please verify your email.",
    user: { ...user._doc, password: undefined },
  });
});
