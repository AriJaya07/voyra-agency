import type { ContactInfo } from "$lib/types";
import { SITE } from "./site";

export const CONTACT_CARDS: ContactInfo[] = [
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: SITE.phone,
    href: SITE.waHref,
    icon: "💬",
    colorClass: "wa",
  },
  {
    type: "email",
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "✉️",
    colorClass: "em",
  },
];
