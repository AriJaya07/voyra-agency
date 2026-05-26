import { site } from "$lib/config";
import type { SiteConfig } from "$lib/types";

export const SITE: SiteConfig = {
  name: site.name,
  tagline: site.tagline,
  description: site.description,
  email: site.email,
  phone: site.phone,
  waHref: site.waHref,
};
