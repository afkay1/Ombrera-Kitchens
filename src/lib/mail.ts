interface Attachment {
  filename: string;
  content: string; // base64
}

/** Sends an email through Resend when configured. Returns true in demo mode. */
export async function sendMail(subject: string, text: string, replyTo?: string, attachments: Attachment[] = []): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!key || !to) return true;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || "Ombrera Kitchens <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo,
      subject,
      text,
      attachments: attachments.length ? attachments : undefined,
    }),
  });
  return res.ok;
}

export const clean = (v: unknown, max = 500) =>
  String(v ?? "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f<>]/g, " ")
    .trim()
    .slice(0, max);

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isPhone = (v: string) => /^[+()\d\s-]{7,20}$/.test(v);
