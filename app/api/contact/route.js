import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, requirements } = await req.json();

    console.log("Form data received:", { name, email, phone, requirements });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sawari Luxe" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Sawari Luxe Inquiry",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${requirements}
      `,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${requirements}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send inquiry" }, { status: 500 });
  }
}