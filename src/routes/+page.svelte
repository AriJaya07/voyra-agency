<script lang="ts">
  import Hero from "$lib/components/sections/Hero.svelte";
  import About from "$lib/components/sections/About.svelte";
  import Packages from "$lib/components/sections/Packages.svelte";
  import WhyVoyra from "$lib/components/sections/WhyVoyra.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
  import { SITE } from "$lib/data/site";
</script>

<svelte:head>
  <title>{SITE.name} — {SITE.tagline}</title>
  <meta name="description" content={SITE.description} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{SITE.name} — {SITE.tagline}" />
  <meta property="og:description" content={SITE.description} />
  <meta property="og:image" content="/og.png" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{SITE.name} — {SITE.tagline}" />
  <meta name="twitter:description" content={SITE.description} />
  <meta name="twitter:image" content="/og.png" />

  <!-- SEO -->
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://voyra.id" />
</svelte:head>

<Hero />
<About />
<Packages />
<WhyVoyra />
<Contact />
