import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

const PACKAGE_LABELS: Record<string, string> = {
  basic: "Basic — Social Media Only",
  intermediate: "Intermediate — Social Media + Website",
  advance: "Advance — Full Digital Suite",
  unsure: "Not sure yet, need advice",
};

function adminEmailHtml(
  name: string,
  business: string,
  contactInfo: string,
  pkg: string,
  message: string
) {
  return `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#F0EDE8;font-family:'Poppins',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#FDFBF7;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#0AB4C4 0%,#089aaa 100%);padding:28px 32px;text-align:center;">
          <p style="margin:0 0 4px;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:3px;text-transform:uppercase;">Voyra Agency</p>
          <h1 style="margin:0;color:#fff;font-family:Georgia,serif;font-size:22px;font-weight:700;">New Inquiry Received 🎉</h1>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px;">
          <p style="margin:0 0 24px;color:#6B5B45;font-size:14px;line-height:1.6;">A potential client just submitted a contact form on <strong style="color:#0AB4C4;">voyra.id</strong>. Details below:</p>

          <!-- Info table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E8DFC8;border-radius:10px;overflow:hidden;margin-bottom:24px;">
            <tr style="background:#F5F0E8;">
              <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#8B5E3C;letter-spacing:1.5px;text-transform:uppercase;width:120px;">Field</td>
              <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#8B5E3C;letter-spacing:1.5px;text-transform:uppercase;">Value</td>
            </tr>
            <tr style="border-top:1px solid #E8DFC8;">
              <td style="padding:14px 16px;color:#6B5B45;font-size:13px;font-weight:500;">Name</td>
              <td style="padding:14px 16px;color:#1A1208;font-size:14px;font-weight:700;">${name}</td>
            </tr>
            <tr style="border-top:1px solid #E8DFC8;background:#FDFBF7;">
              <td style="padding:14px 16px;color:#6B5B45;font-size:13px;font-weight:500;">Business</td>
              <td style="padding:14px 16px;color:#1A1208;font-size:14px;font-weight:700;">${business}</td>
            </tr>
            <tr style="border-top:1px solid #E8DFC8;">
              <td style="padding:14px 16px;color:#6B5B45;font-size:13px;font-weight:500;">Contact</td>
              <td style="padding:14px 16px;color:#0AB4C4;font-size:14px;font-weight:600;">${contactInfo}</td>
            </tr>
            <tr style="border-top:1px solid #E8DFC8;background:#FDFBF7;">
              <td style="padding:14px 16px;color:#6B5B45;font-size:13px;font-weight:500;">Package</td>
              <td style="padding:14px 16px;color:#D4874A;font-size:14px;font-weight:700;">${PACKAGE_LABELS[pkg] ?? "Not specified"}</td>
            </tr>
          </table>

          ${message ? `
          <!-- Message -->
          <div style="background:#F5F0E8;border-left:4px solid #0AB4C4;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#8B5E3C;letter-spacing:1.5px;text-transform:uppercase;">Their Message</p>
            <p style="margin:0;color:#1A1208;font-size:14px;line-height:1.7;">${message}</p>
          </div>
          ` : ""}

          <!-- CTA -->
          <div style="text-align:center;margin:8px 0 24px;">
            <a href="https://wa.me/6285792132517" style="display:inline-block;background:#25D366;border:2px solid #25D366;color:#ffffff;font-weight:700;font-size:14px;padding:13px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.3px;mso-padding-alt:0;"><span style="color:#ffffff !important;-webkit-text-fill-color:#ffffff;mso-color-alt:#ffffff;">Reply via WhatsApp ↗</span></a>
          </div>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#F5F0E8;padding:16px 32px;text-align:center;border-top:1px solid #E8DFC8;">
          <p style="margin:0;font-size:12px;color:#C4A882;">Voyra Agency · voyra.id · support@balitravelnow.com</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function userConfirmationHtml(name: string, business: string, pkg: string) {
  const pkgLabel = PACKAGE_LABELS[pkg] ?? null;

  return `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#F0EDE8;font-family:'Poppins',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#FDFBF7;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      <!-- Header with brand gradient -->
      <tr>
        <td style="background:linear-gradient(135deg,#0AB4C4 0%,#089aaa 60%,#D4874A 100%);padding:40px 32px;text-align:center;">
          <p style="margin:0 0 6px;color:rgba(255,255,255,0.75);font-size:11px;letter-spacing:3px;text-transform:uppercase;">Voyra Agency</p>
          <h1 style="margin:0 0 8px;color:#fff;font-family:Georgia,serif;font-size:26px;font-weight:700;line-height:1.2;">We've received<br/>your message ✦</h1>
          <p style="margin:0;color:rgba(255,255,255,0.85);font-size:13px;">Travel Agency Digital Partner</p>
        </td>
      </tr>

      <!-- Greeting -->
      <tr>
        <td style="padding:36px 32px 0;">
          <p style="margin:0 0 12px;color:#1A1208;font-size:16px;font-weight:600;">Hi ${name}! 👋</p>
          <p style="margin:0;color:#6B5B45;font-size:14px;line-height:1.75;">
            Thank you for reaching out to Voyra Agency. We've received your inquiry for <strong style="color:#1A1208;">${business}</strong> and our team is already reviewing it.
          </p>
        </td>
      </tr>

      <!-- What happens next -->
      <tr>
        <td style="padding:28px 32px 0;">
          <p style="margin:0 0 16px;font-size:12px;font-weight:700;color:#8B5E3C;letter-spacing:2px;text-transform:uppercase;">What Happens Next</p>
          <table width="100%" cellpadding="0" cellspacing="0">

            <tr>
              <td style="vertical-align:top;width:40px;padding:0 0 20px;">
                <div style="width:32px;height:32px;background:#E6F8FA;border-radius:50%;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:#0AB4C4;">1</div>
              </td>
              <td style="padding:0 0 20px 12px;vertical-align:top;">
                <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1A1208;">Team review in progress</p>
                <p style="margin:0;font-size:13px;color:#6B5B45;line-height:1.6;">Our digital strategist reviews your business needs and the package that fits best.</p>
              </td>
            </tr>

            <tr>
              <td style="vertical-align:top;width:40px;padding:0 0 20px;">
                <div style="width:32px;height:32px;background:#E6F8FA;border-radius:50%;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:#0AB4C4;">2</div>
              </td>
              <td style="padding:0 0 20px 12px;vertical-align:top;">
                <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1A1208;">Personal outreach</p>
                <p style="margin:0;font-size:13px;color:#6B5B45;line-height:1.6;">We'll contact you via WhatsApp or email to schedule a free discovery call.</p>
              </td>
            </tr>

            <tr>
              <td style="vertical-align:top;width:40px;padding:0 0 4px;">
                <div style="width:32px;height:32px;background:#E6F8FA;border-radius:50%;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:#0AB4C4;">3</div>
              </td>
              <td style="padding:0 0 4px 12px;vertical-align:top;">
                <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1A1208;">Kickoff & onboarding</p>
                <p style="margin:0;font-size:13px;color:#6B5B45;line-height:1.6;">Once we align, we start immediately — weekly reports and meetings from day one.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>

      ${pkgLabel ? `
      <!-- Package interest highlight -->
      <tr>
        <td style="padding:20px 32px 0;">
          <div style="background:linear-gradient(135deg,rgba(10,180,196,0.06),rgba(212,135,74,0.04));border:1.5px solid rgba(10,180,196,0.2);border-radius:12px;padding:20px 24px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#8B5E3C;letter-spacing:2px;text-transform:uppercase;">Your Package Interest</p>
            <p style="margin:0;font-size:16px;font-weight:700;color:#0AB4C4;">${pkgLabel}</p>
          </div>
        </td>
      </tr>
      ` : ""}

      <!-- Need faster? -->
      <tr>
        <td style="padding:28px 32px 0;">
          <div style="background:#F5F0E8;border-radius:12px;padding:20px 24px;text-align:center;">
            <p style="margin:0 0 6px;font-size:14px;font-weight:600;color:#1A1208;">Need a faster response?</p>
            <p style="margin:0 0 16px;font-size:13px;color:#6B5B45;">Chat directly with our team on WhatsApp — we're online now.</p>
            <a href="https://wa.me/6285792132517" style="display:inline-block;background:#25D366;border:2px solid #25D366;color:#ffffff;font-weight:700;font-size:13px;padding:11px 28px;border-radius:50px;text-decoration:none;"><span style="color:#ffffff !important;-webkit-text-fill-color:#ffffff;mso-color-alt:#ffffff;">WhatsApp Us Now ↗</span></a>
          </div>
        </td>
      </tr>

      <!-- Our promise -->
      <tr>
        <td style="padding:28px 32px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="text-align:center;padding:0 12px 0 0;">
                <p style="margin:0 0 4px;font-size:22px;">📊</p>
                <p style="margin:0;font-size:12px;font-weight:600;color:#1A1208;">Weekly Reports</p>
                <p style="margin:0;font-size:11px;color:#8B5E3C;">Full transparency</p>
              </td>
              <td style="text-align:center;padding:0 12px;">
                <p style="margin:0 0 4px;font-size:22px;">🗓️</p>
                <p style="margin:0;font-size:12px;font-weight:600;color:#1A1208;">Weekly Meetings</p>
                <p style="margin:0;font-size:11px;color:#8B5E3C;">Strategy alignment</p>
              </td>
              <td style="text-align:center;padding:0 0 0 12px;">
                <p style="margin:0 0 4px;font-size:22px;">🌐</p>
                <p style="margin:0;font-size:12px;font-weight:600;color:#1A1208;">24/7 Support</p>
                <p style="margin:0;font-size:11px;color:#8B5E3C;">Always reachable</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Sign off -->
      <tr>
        <td style="padding:28px 32px 8px;">
          <p style="margin:0;font-size:14px;color:#6B5B45;line-height:1.6;">Talk soon,<br/><strong style="color:#1A1208;font-size:15px;">The Voyra Team</strong><br/><span style="font-size:12px;color:#8B5E3C;">Voyra Agency · Travel Goes Digital</span></p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#F5F0E8;padding:16px 32px;text-align:center;border-top:1px solid #E8DFC8;margin-top:8px;">
          <p style="margin:0 0 4px;font-size:12px;color:#C4A882;">voyra.id · support@balitravelnow.com · +62 857-9213-2517</p>
          <p style="margin:0;font-size:11px;color:#D4C0A0;">You received this because you submitted a form on voyra.id</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

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

      const senderAddress = `"Voyra Agency" <${smtpFrom ?? smtpUser}>`;
      const userHasEmail = contactInfo.includes("@");

      const sends = [
        transporter.sendMail({
          from: senderAddress,
          to: "me.jayakusuma@gmail.com",
          replyTo: userHasEmail ? contactInfo : undefined,
          subject: `✦ New inquiry from ${name} — ${business}`,
          html: adminEmailHtml(name, business, contactInfo, pkg, message),
        }),
      ];

      if (userHasEmail) {
        sends.push(
          transporter.sendMail({
            from: senderAddress,
            to: contactInfo,
            subject: `We've received your message, ${name} — Voyra Agency`,
            html: userConfirmationHtml(name, business, pkg),
          })
        );
      }

      await Promise.all(sends);

      return { success: true };
    } catch (err) {
      console.error("[Contact form]", err);
      return fail(500, {
        message: "Failed to send message. Please contact us directly via WhatsApp.",
      });
    }
  },
};
