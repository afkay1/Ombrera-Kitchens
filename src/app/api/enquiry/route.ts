import { NextResponse } from "next/server";
import { clean, isEmail, isPhone, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

const bad = (error: string) => NextResponse.json({ ok: false, error }, { status: 422 });

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return bad("invalid_body");
  }
  if (clean(form.get("company"))) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 160);
  const phone = clean(form.get("phone"), 40);
  if (!name) return bad("name");
  if (!isEmail(email)) return bad("email");
  if (!isPhone(phone)) return bad("phone");
  for (const k of ["city", "projectType", "contactMethod"]) if (!clean(form.get(k), 120)) return bad(k);

  const field = (k: string, max = 120) => clean(form.get(k), max) || "-";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `City: ${field("city")}`,
    `Project: ${field("projectType")}`,
    `Style: ${field("style")}`,
    `Layout: ${field("layout")}`,
    `Budget: ${field("budget")}`,
    `Timeline: ${field("timeline")}`,
    `Contact by: ${field("contactMethod")}`,
    `Language: ${field("lang", 4)}`,
    "",
    clean(form.get("message"), 5000) || "(no message)",
  ].join("\n");

  const ok = await sendMail(`Kitchen consultation request from ${name}`, text, email);
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false }, { status: 502 });
}
