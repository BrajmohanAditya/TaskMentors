import { Resend } from "resend";
import { ENV } from "./env.js";

const resend = ENV.Resend_api_key ? new Resend(ENV.Resend_api_key) : null;

export const sendEmail = async (email, subject, message) => {
  try {
    if (!resend) {
      console.warn("⚠️ Resend API key is missing. Email was not sent.");
      console.log(`[Mock Email] To: ${email} | Subject: ${subject} | Message: ${message}`);
      return;
    }
    await resend.emails.send({
      from: "Task Mentors <noreply@taskmentors.com>", 
      to: email,
      subject: subject,
      text: message,
    });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

