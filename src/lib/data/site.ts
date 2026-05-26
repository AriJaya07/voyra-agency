import type { SiteConfig } from "$lib/types";

const WA_NUMBER = "6285792132517";

const WA_TEXT = encodeURIComponent(
  "Halo Voyra Agency! \n\nSaya menemukan website Voyra dan tertarik dengan layanan *digital marketing* untuk bisnis travel saya.\n\nBisa bantu saya memilih paket yang tepat?"
);

export const SITE: SiteConfig = {
  name: "Voyra Agency",
  tagline: "Travel Goes Digital",
  description:
    "Voyra Agency transforms traditional travel businesses into powerful digital brands — web presence, social media, ads, analytics, and AI in one package.",
  email: "support@balitravelnow.com",
  phone: "+62 857-9213-2517",
  waHref: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`,
};
