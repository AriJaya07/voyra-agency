<script lang="ts">
  import { onMount } from "svelte";
  import logo from "$lib/assets/images/voyra-logo.png";

  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const handler = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  });

  function closeMenu() {
    menuOpen = false;
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === "Escape" && menuOpen) closeMenu();
  }}
/>

<!-- Header bar — no mobile-menu inside so backdrop-filter doesn't trap fixed children -->
<header class="nav" class:scrolled aria-label="Site header">
  <div class="inner">
    <a href="/" class="logo-link" onclick={closeMenu} aria-label="Voyra Agency home">
      <img src={logo} alt="Voyra Agency" class="logo-img" />
    </a>

    <nav class="links" aria-label="Main navigation">
      <a href="#packages" class="link">Packages</a>
      <a href="#why" class="link">Why Voyra</a>
      <a href="#contact" class="link">Contact</a>
    </nav>

    <a href="#contact" class="cta-btn" aria-label="Get started with Voyra">
      Get Started →
    </a>

    <button
      class="hamburger"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
    </button>
  </div>
</header>

<!-- Mobile overlay — sibling to header, NOT a child, so position:fixed is always viewport-relative -->
<nav
  id="mobile-menu"
  class="mobile-menu"
  class:open={menuOpen}
  aria-label="Mobile navigation"
  aria-hidden={!menuOpen}
>
  <button class="mobile-close" onclick={closeMenu} aria-label="Close menu">
    <span class="close-bar"></span>
    <span class="close-bar"></span>
  </button>

  <a href="/" onclick={closeMenu} class="mobile-logo-link">
    <img src={logo} alt="Voyra Agency" class="mobile-logo-img" />
  </a>

  <a href="#packages" class="mobile-link" onclick={closeMenu}>Packages</a>
  <a href="#why" class="mobile-link" onclick={closeMenu}>Why Voyra</a>
  <a href="#contact" class="mobile-link" onclick={closeMenu}>Contact</a>

  <a href="#contact" class="mobile-cta" onclick={closeMenu}>Get Started →</a>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    transition: background 0.35s ease, border-color 0.35s ease,
      backdrop-filter 0.35s ease;
    border-bottom: 1px solid transparent;
  }
  .nav.scrolled {
    background: rgba(17, 16, 9, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-color: rgba(10, 180, 196, 0.15);
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 5%;
    max-width: var(--max-w);
    margin: 0 auto;
    gap: 2rem;
  }

  .logo-link {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
  }
  .logo-img {
    height: 48px; width: 48px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform var(--transition);
  }
  .logo-img:hover { transform: scale(1.05); }

  .links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .link {
    color: rgba(245, 240, 232, 0.72);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.2px;
    transition: color var(--transition);
    padding: 0.3rem 0;
    position: relative;
  }
  .link::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1.5px;
    background: var(--teal);
    transition: width 0.25s ease;
    border-radius: 2px;
  }
  .link:hover { color: #fff; }
  .link:hover::after { width: 100%; }

  .cta-btn {
    background: var(--teal);
    color: #fff;
    padding: 0.6rem 1.4rem;
    border-radius: var(--radius-pill);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: background var(--transition), transform var(--transition),
      box-shadow var(--transition);
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: 0.1px;
  }
  .cta-btn:hover {
    background: var(--teal-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(10, 180, 196, 0.3);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 6px;
    background: none;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
  }
  .bar {
    display: block;
    width: 22px; height: 2px;
    background: var(--cream);
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  .bar:nth-child(1).open { transform: rotate(45deg) translate(5px, 5px); }
  .bar:nth-child(2).open { opacity: 0; transform: scaleX(0); }
  .bar:nth-child(3).open { transform: rotate(-45deg) translate(5px, -5px); }

  /* ── MOBILE OVERLAY ── */
  /* Sibling to <header>, never a child — avoids backdrop-filter containing-block trap */
  .mobile-menu {
    position: fixed;
    inset: 0;
    z-index: 300;
    background: var(--surface-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.38s cubic-bezier(0.76, 0, 0.24, 1);
    padding: 2rem;
    pointer-events: none;
    visibility: hidden;
  }
  .mobile-menu.open {
    transform: translateX(0);
    pointer-events: all;
    visibility: visible;
  }

  /* X close button */
  .mobile-close {
    position: absolute;
    top: 1.25rem; right: 5%;
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;
    padding: 0;
  }
  .close-bar {
    display: block;
    width: 16px; height: 1.5px;
    background: var(--cream);
    border-radius: 2px;
    position: absolute;
  }
  .close-bar:nth-child(1) { transform: rotate(45deg); }
  .close-bar:nth-child(2) { transform: rotate(-45deg); }

  .mobile-logo-link {
    display: block;
    margin-bottom: 2.5rem;
    text-decoration: none;
  }
  .mobile-logo-img {
    height: 72px; width: 72px;
    border-radius: 50%;
    object-fit: cover;
  }

  .mobile-link {
    color: rgba(245, 240, 232, 0.72);
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 300;
    padding: 0.75rem 0;
    transition: color var(--transition);
    letter-spacing: -0.5px;
    text-align: center;
    width: 100%;
  }
  .mobile-link:hover { color: #fff; }

  .mobile-cta {
    margin-top: 2.5rem;
    background: var(--teal);
    color: #fff;
    padding: 0.875rem 2.5rem;
    border-radius: var(--radius-pill);
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: background var(--transition);
    text-align: center;
    width: 100%;
    max-width: 280px;
  }
  .mobile-cta:hover { background: var(--teal-dark); }

  @media (max-width: 768px) {
    .links, .cta-btn { display: none; }
    .hamburger { display: flex; }
  }
</style>
