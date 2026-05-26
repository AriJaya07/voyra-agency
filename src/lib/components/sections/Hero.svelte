<script lang="ts">
  import { onMount } from "svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import baliScreenshot from "$lib/assets/images/landingpage/balitravelnow.png";

  let heroTag: HTMLElement;
  let heroH1: HTMLElement;
  let heroSub: HTMLElement;
  let heroActions: HTMLElement;
  let heroBadges: HTMLElement;
  let heroMockup: HTMLElement;

  onMount(async () => {
    const { gsap } = await import("gsap");
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from(heroTag, { y: 20, opacity: 0, duration: 0.6, delay: 0.1 })
      .from(heroH1, { y: 36, opacity: 0, duration: 0.75 }, "-=0.35")
      .from(heroSub, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(heroActions, { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(heroBadges, { y: 12, opacity: 0, duration: 0.45 }, "-=0.2")
      .from(heroMockup, { x: 40, opacity: 0, duration: 0.85, ease: "power2.out" }, "-=0.8");
  });
</script>

<section class="hero" id="home" aria-label="Hero">
  <div class="bg-circle bg-circle-1" aria-hidden="true"></div>
  <div class="bg-circle bg-circle-2" aria-hidden="true"></div>

  <div class="inner">
    <!-- Left: content -->
    <div class="content">
      <p class="tag" bind:this={heroTag}>
        <span aria-hidden="true">✦</span> Travel Agency Digital Partner
      </p>

      <h1 bind:this={heroH1}>
        From <em>Journey</em><br />to Digital<br />Excellence.
      </h1>

      <p class="sub" bind:this={heroSub}>
        We transform traditional travel businesses into powerful digital brands —
        web presence, social media, Meta Ads, analytics, and AI in one place.
      </p>

      <div class="actions" bind:this={heroActions}>
        <Button href="#packages">Explore Packages →</Button>
        <Button href="#contact" variant="ghost">Chat with Us</Button>
      </div>

      <div class="trust-badges" bind:this={heroBadges} aria-label="Key features">
        <div class="badge"><span aria-hidden="true">📊</span> Weekly Reports</div>
        <div class="badge"><span aria-hidden="true">🗓️</span> Weekly Meetings</div>
        <div class="badge"><span aria-hidden="true">🌐</span> 24/7 Support</div>
      </div>
    </div>

    <!-- Right: Browser mockup showcasing BaliTravelNow -->
    <div class="mockup-wrap" bind:this={heroMockup} aria-label="Our work showcase">
      <div class="mockup-label">
        <span class="mockup-label-dot" aria-hidden="true"></span>
        Our Work
      </div>

      <div class="browser">
        <!-- Browser chrome -->
        <div class="browser-bar">
          <span class="dot red" aria-hidden="true"></span>
          <span class="dot yellow" aria-hidden="true"></span>
          <span class="dot green" aria-hidden="true"></span>
          <div class="browser-url">
            <span class="url-lock" aria-hidden="true">🔒</span>
            balitravelnow.com
          </div>
          <div class="browser-actions" aria-hidden="true">
            <span>⋯</span>
          </div>
        </div>

        <!-- Screenshot -->
        <div class="browser-body">
          <a
            href="https://balitravelnow.com"
            target="_blank"
            rel="noopener noreferrer"
            class="screenshot-link"
            aria-label="Visit BaliTravelNow.com — live travel booking site we built"
          >
            <img
              src={baliScreenshot}
              alt="BaliTravelNow.com — AI-powered Bali travel booking platform"
              class="screenshot"
              loading="eager"
              decoding="async"
            />
            <div class="screenshot-overlay">
              <span class="visit-btn">Visit Live Site ↗</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Floating badges -->
      <div class="float-badge float-badge-1">
        <span class="float-icon">🚀</span>
        <div>
          <p class="float-title">Live & Running</p>
          <p class="float-sub">balitravelnow.com</p>
        </div>
      </div>

      <div class="float-badge float-badge-2">
        <span class="float-icon">🤖</span>
        <div>
          <p class="float-title">AI-Powered</p>
          <p class="float-sub">Trip planner built-in</p>
        </div>
      </div>
    </div>
  </div>

  <p class="scroll-hint" aria-hidden="true">Scroll</p>
</section>

<style>
  .hero {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 5% 4rem;
    position: relative;
    overflow: hidden;
    background: var(--surface-dark);
  }

  .bg-circle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(90px);
  }
  .bg-circle-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(10, 180, 196, 0.1), transparent 70%);
    top: -200px; right: -150px;
  }
  .bg-circle-2 {
    width: 350px; height: 350px;
    background: radial-gradient(circle, rgba(212, 135, 74, 0.07), transparent 70%);
    bottom: -80px; left: -80px;
  }

  /* 2-col grid */
  .inner {
    position: relative;
    z-index: 1;
    max-width: var(--max-w);
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  /* ── LEFT CONTENT ── */
  .content { max-width: 560px; }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(10, 180, 196, 0.1);
    border: 1px solid rgba(10, 180, 196, 0.22);
    color: var(--teal);
    padding: 0.42rem 1rem;
    border-radius: var(--radius-pill);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    width: fit-content;
  }

  h1 {
    font-family: "Playfair Display", serif;
    font-size: clamp(2.6rem, 5.5vw, 5.5rem);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -2px;
    margin-bottom: 1.35rem;
    color: var(--cream);
  }
  h1 em {
    font-style: italic;
    background: linear-gradient(135deg, var(--teal) 30%, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sub {
    color: rgba(245, 240, 232, 0.58);
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    font-weight: 300;
    max-width: 440px;
    line-height: 1.78;
    margin-bottom: 2.25rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .trust-badges {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.09);
    color: rgba(245, 240, 232, 0.58);
    padding: 0.4rem 0.85rem;
    border-radius: var(--radius-pill);
    font-size: 0.76rem;
    font-weight: 400;
  }

  /* ── RIGHT MOCKUP ── */
  .mockup-wrap {
    position: relative;
    padding-top: 2.5rem;
  }

  .mockup-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 0.85rem;
  }
  .mockup-label-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--teal);
    display: inline-block;
    box-shadow: 0 0 6px var(--teal);
  }

  .browser {
    border-radius: 10px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.08),
      0 20px 60px rgba(0, 0, 0, 0.55),
      0 4px 16px rgba(10, 180, 196, 0.12);
    transform: perspective(1200px) rotateY(-3deg) rotateX(1deg);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .browser:hover {
    transform: perspective(1200px) rotateY(0deg) rotateX(0deg);
    box-shadow:
      0 0 0 1px rgba(10, 180, 196, 0.2),
      0 28px 80px rgba(0, 0, 0, 0.6),
      0 8px 24px rgba(10, 180, 196, 0.18);
  }

  .browser-bar {
    background: #1c1c1e;
    padding: 0.65rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .red { background: #ff5f57; }
  .yellow { background: #febc2e; }
  .green { background: #28c840; }

  .browser-url {
    flex: 1;
    background: #2c2c2e;
    border-radius: 6px;
    padding: 0.3rem 0.75rem;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.55);
    font-family: "Poppins", system-ui, sans-serif;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .url-lock { font-size: 0.65rem; }

  .browser-actions {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .browser-body {
    overflow: hidden;
    height: 340px;
    position: relative;
    background: #fff;
  }
  .screenshot-link {
    display: block;
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .screenshot {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 6s ease;
  }
  .screenshot-link:hover .screenshot {
    transform: translateY(-30%);
  }

  .screenshot-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(10, 180, 196, 0.75) 100%
    );
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 1.25rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .screenshot-link:hover .screenshot-overlay {
    opacity: 1;
  }
  .visit-btn {
    background: #fff;
    color: var(--teal-dark);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-pill);
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Poppins", system-ui, sans-serif;
    letter-spacing: 0.2px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  /* Floating badges */
  .float-badge {
    position: absolute;
    background: rgba(17, 16, 9, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(10, 180, 196, 0.2);
    border-radius: 10px;
    padding: 0.65rem 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    animation: float 4s ease-in-out infinite;
  }
  .float-badge-1 {
    bottom: -1rem;
    left: -1.5rem;
    animation-delay: 0s;
  }
  .float-badge-2 {
    top: 1rem;
    right: -1.25rem;
    animation-delay: 2s;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  .float-icon { font-size: 1.2rem; line-height: 1; }
  .float-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--cream);
    line-height: 1.2;
  }
  .float-sub {
    font-size: 0.65rem;
    color: rgba(245, 240, 232, 0.45);
    margin-top: 0.1rem;
  }

  /* Scroll hint */
  .scroll-hint {
    position: absolute;
    bottom: 2rem; right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(245, 240, 232, 0.25);
    font-size: 0.68rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    z-index: 1;
  }
  .scroll-hint::after {
    content: "";
    display: block;
    width: 1px; height: 50px;
    background: linear-gradient(to bottom, var(--teal), transparent);
    opacity: 0.35;
    margin-top: 0.5rem;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .inner { gap: 2.5rem; }
    .browser-body { height: 280px; }
  }

  @media (max-width: 768px) {
    .hero { padding-top: 5rem; padding-bottom: 3rem; min-height: auto; }
    .inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .content { max-width: none; }
    h1 { letter-spacing: -1px; }
    .scroll-hint { display: none; }

    /* Mockup on mobile: simpler */
    .browser {
      transform: none;
    }
    .browser-body { height: 240px; }
    .float-badge-1 { left: 0; bottom: -1.25rem; }
    .float-badge-2 { right: 0; top: 0.5rem; }
    .bg-circle-1 { width: 300px; height: 300px; }
    .bg-circle-2 { width: 200px; height: 200px; }
  }

  @media (max-width: 480px) {
    .float-badge-2 { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .bg-circle { display: none; }
    .float-badge { animation: none; }
    .browser { transform: none; }
    .screenshot-link:hover .screenshot { transform: none; }
  }
</style>
