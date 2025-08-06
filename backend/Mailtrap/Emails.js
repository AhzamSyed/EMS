
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.mailtrap.io",
  port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 2525,
  auth: {
    user: process.env.MAIL_USER, // from .env
    pass: process.env.MAIL_PASS, // from .env
  },
});

export const sendVerificationEmail = async (toEmail, code) => {
  const mailOptions = {
    from: '"EMS App" <no-reply@ems.com>',
    to: toEmail,
    subject: "Verify your EMS account",
    text: `Your verification code is ${code}`,
    html: `<p>Your verification code is <strong>${code}</strong></p>
           <p>Code expires in 24 hours.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Verification email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Email send error:", err);
    throw err;
  }
};

export const sendWelcomeEmail = async (toEmail, name) => {
  const mailOptions = {
    from: '"EMS App" <no-reply@ems.com>',
    to: toEmail,
    subject: "Welcome to EMS",
    text: `Welcome ${name}, your account is verified.`,
    html: `<h3>Welcome ${name}!</h3><p>Your account is successfully verified. Start using EMS.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Welcome email send error:", err);
    throw err;
  }
};
