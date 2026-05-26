import {
  PUBLIC_SITE_EMAIL,
  PUBLIC_SITE_NAME,
  PUBLIC_SITE_PHONE,
  PUBLIC_SITE_TAGLINE,
  PUBLIC_SITE_URL,
  PUBLIC_WA_DEFAULT_MESSAGE,
  PUBLIC_WA_NUMBER,
} from "$env/static/public";

/** Strip non-digits and normalize Indonesian numbers for wa.me (e.g. 0857… → 62857…). */
export function normalizeWaNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("62")) return digits;
  return digits;
}

const DEFAULT_WA_MESSAGE =
  "Halo Voyra Agency!\n\nSaya menemukan website Voyra dan tertarik dengan layanan *digital marketing* untuk bisnis travel saya.\n\nBisa bantu saya memilih paket yang tepat?";

export const wa = {
  number: normalizeWaNumber(PUBLIC_WA_NUMBER ?? "085792132517"),
  defaultMessage: (PUBLIC_WA_DEFAULT_MESSAGE ?? DEFAULT_WA_MESSAGE).replace(/\\n/g, "\n"),
  get href(): string {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
  },
} as const;

export const site = {
  name: PUBLIC_SITE_NAME ?? "Voyra Agency",
  tagline: PUBLIC_SITE_TAGLINE ?? "Travel Goes Digital",
  description:
    "Voyra Agency transforms traditional travel businesses into powerful digital brands — web presence, social media, ads, analytics, and AI in one package.",
  email: PUBLIC_SITE_EMAIL ?? "support@balitravelnow.com",
  phone: PUBLIC_SITE_PHONE ?? "+62 857-9213-2517",
  url: PUBLIC_SITE_URL ?? "https://voyra.id",
  waHref: wa.href,
} as const;
