<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/layout/Navbar.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Navbar />

<main id="main-content">
  {@render children()}
</main>

<Footer />

<style>
  #main-content {
    min-height: 100dvh;
  }
</style>
