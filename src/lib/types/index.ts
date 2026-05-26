export type PackageId = "basic" | "intermediate" | "advance";

export interface Package {
  id: PackageId;
  tier: string;
  name: string;
  featured: boolean;
  features: string[];
  cta: string;
  price: string;
  priceUSD: string;
  priceNote: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

export interface ContactInfo {
  type: "whatsapp" | "email";
  label: string;
  value: string;
  href: string;
  icon: string;
  colorClass: "wa" | "em";
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  waHref: string;
}
