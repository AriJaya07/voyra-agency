import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  contact: async ({ request }) => {
    const data = await request.formData();

    const name = data.get("name")?.toString().trim() ?? "";
    const business = data.get("business")?.toString().trim() ?? "";
    const contactInfo = data.get("contact_info")?.toString().trim() ?? "";
    const pkg = data.get("package")?.toString() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    if (!name || !business || !contactInfo) {
      return fail(400, {
        message: "Please fill in your name, business name, and contact info.",
      });
    }

    let smtpHost: string | undefined;
    let smtpPort: number;
    let smtpUser: string | undefined;
    let smtpPass: string | undefined;
    let smtpFrom: string | undefined;

    try {
      const { env } = await import("$env/dynamic/private");
      smtpHost = env.SMTP_HOST;
      smtpPort = parseInt(env.SMTP_PORT ?? "587", 10);
      smtpUser = env.SMTP_USER;
      smtpPass = env.SMTP_PASS;
      smtpFrom = env.SMTP_FROM;
    } catch {
      smtpPort = 587;
    }

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("[Voyra Contact Form]", { name, business, contactInfo, pkg, message });
      return { success: true };
    }

    const html = `
      <div style="font-family: 'Poppins', sans-serif; max-width: 600px; background: #FDFBF7; padding: 32px; border-radius: 12px;">
        <div style="background: #0AB4C4; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: #fff; font-size: 1.5rem; margin: 0; font-family: Georgia, serif;">Voyra Agency</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 0.85rem;">New Contact Form Inquiry</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #E8DFC8;">
            <td style="padding: 12px 0; color: #6B5B45; font-size: 0.85rem; width: 140px; font-weight: 500;">Name</td>
            <td style="padding: 12px 0; color: #1A1208; font-weight: 600;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E8DFC8;">
            <td style="padding: 12px 0; color: #6B5B45; font-size: 0.85rem; font-weight: 500;">Business</td>
            <td style="padding: 12px 0; color: #1A1208; font-weight: 600;">${business}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E8DFC8;">
            <td style="padding: 12px 0; color: #6B5B45; font-size: 0.85rem; font-weight: 500;">Contact</td>
            <td style="padding: 12px 0; color: #1A1208;">${contactInfo}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E8DFC8;">
            <td style="padding: 12px 0; color: #6B5B45; font-size: 0.85rem; font-weight: 500;">Package</td>
            <td style="padding: 12px 0; color: #0AB4C4; font-weight: 600;">${pkg || "Not specified"}</td>
          </tr>
        </table>
        ${
          message
            ? `<div style="background: #F5F0E8; padding: 16px; border-radius: 8px; border-left: 3px solid #0AB4C4;">
                <p style="margin: 0 0 8px; color: #6B5B45; font-size: 0.8rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <p style="margin: 0; color: #1A1208; line-height: 1.6;">${message}</p>
              </div>`
            : ""
        }
        <p style="margin-top: 24px; font-size: 0.8rem; color: #C4A882; text-align: center;">Sent via Voyra Agency website — voyra.id</p>
      </div>
    `;

    try {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: false,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Voyra Agency" <${smtpFrom ?? smtpUser}>`,
        to: "me.jayakusuma@gmail.com",
        replyTo: contactInfo.includes("@") ? contactInfo : undefined,
        subject: `New inquiry from ${name} — ${business}`,
        html,
      });

      return { success: true };
    } catch (err) {
      console.error("[Contact form]", err);
      return fail(500, {
        message: "Failed to send message. Please contact us directly via WhatsApp.",
      });
    }
  },
};
