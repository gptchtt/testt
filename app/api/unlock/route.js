import { NextResponse } from "next/server";
import content from "../../../content.config.js";

export async function POST(request) {
  const body = await request.json();
  const submitted = (body?.password || "").trim().toLowerCase();
  const correct = content.password.trim().toLowerCase();

  if (submitted === correct) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("gift_unlocked", "true", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365 // سنة كاملة، عشان تفتح تاني من غير باسورد
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
