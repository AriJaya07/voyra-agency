import {
  ADMIN_EMAIL,
  SMTP_FROM,
  SMTP_HOST,
  SMTP_PASS,
  SMTP_PORT,
  SMTP_USER,
} from "$env/static/private";

export const smtp = {
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT ?? "587", 10),
  user: SMTP_USER,
  pass: SMTP_PASS,
  from: SMTP_FROM,
} as const;

export const adminEmail = ADMIN_EMAIL ?? "me.jayakusuma@gmail.com";

export function isSmtpConfigured(): boolean {
  return Boolean(smtp.host && smtp.user && smtp.pass);
}
