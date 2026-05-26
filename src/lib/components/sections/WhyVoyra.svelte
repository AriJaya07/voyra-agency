<script lang="ts">
  import SectionLabel from "$lib/components/ui/SectionLabel.svelte";
  import { WHY_ITEMS, TIMELINE_STEPS } from "$lib/data/why";
  import { reveal } from "$lib/utils/reveal";
</script>

<section class="why" id="why" aria-label="Why choose Voyra">
  <div class="inner">

    <!-- Left: heading + 2×2 feature grid -->
    <div class="left" use:reveal>
      <SectionLabel text="Why Voyra" dark />
      <h2 class="title">Built for<br /><em>Travel</em>, Driven<br />by Data.</h2>
      <p class="subtitle">
        We don't just post content — we build systems that grow your business.
        Every decision is backed by data, every week.
      </p>

      <div class="grid" role="list">
        {#each WHY_ITEMS as item}
          <div class="feature" role="listitem">
            <div class="feature-icon" aria-hidden="true">{item.icon}</div>
            <p class="feature-title">{item.title}</p>
            <p class="feature-desc">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Right: process stepper -->
    <div class="right" use:reveal={{ delay: 160 }}>
      <p class="process-label">How Voyra Works</p>
      <ol class="stepper" aria-label="Our process">
        {#each TIMELINE_STEPS as step, i}
          <li class="step">
            <div class="step-left">
              <div class="step-num" aria-hidden="true">{step.number}</div>
              {#if i < TIMELINE_STEPS.length - 1}
                <div class="step-line" aria-hidden="true"></div>
              {/if}
            </div>
            <div class="step-body">
              <p class="step-title">{step.title}</p>
              <p class="step-desc">{step.description}</p>
            </div>
          </li>
        {/each}
      </ol>
    </div>

  </div>
</section>

<style>
  .why {
    background: #fff;
    padding: var(--section-pad);
    position: relative;
    overflow: hidden;
  }

  .inner {
    position: relative;
    z-index: 1;
    max-width: var(--max-w);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  /* ── LEFT ── */
  .title {
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 3.8vw, 3rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -1.5px;
    color: var(--deep);
    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }
  .title em {
    font-style: italic;
    background: linear-gradient(135deg, var(--teal) 30%, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .subtitle {
    font-size: 0.9rem;
    color: rgba(26, 18, 8, 0.55);
    line-height: 1.78;
    margin-bottom: 2.25rem;
    max-width: 400px;
    font-weight: 400;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .feature {
    background: var(--surface-light);
    border: 1.5px solid rgba(196, 168, 130, 0.18);
    border-radius: var(--radius-card);
    padding: 1.4rem 1.25rem;
    transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .feature::after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: transparent;
    transition: background 0.25s ease;
  }
  .feature:hover {
    border-color: rgba(10, 180, 196, 0.3);
    background: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.07);
  }
  .feature:hover::after {
    background: linear-gradient(90deg, var(--teal), var(--accent));
  }
  .feature-icon {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    display: block;
    line-height: 1;
  }
  .feature-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--deep);
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }
  .feature-desc {
    font-size: 0.78rem;
    color: rgba(26, 18, 8, 0.52);
    line-height: 1.65;
    font-weight: 400;
  }

  /* ── RIGHT: STEPPER ── */
  .right {
    padding-top: 0.25rem;
  }
  .process-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 2rem;
  }

  .stepper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .step {
    display: flex;
    gap: 1.25rem;
  }

  /* Left track: number + line */
  .step-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }
  .step-num {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(10, 180, 196, 0.12);
    border: 1.5px solid rgba(10, 180, 196, 0.35);
    color: var(--teal);
    font-size: 0.78rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.25s ease, border-color 0.25s ease;
  }
  .step:hover .step-num {
    background: rgba(10, 180, 196, 0.22);
    border-color: var(--teal);
  }
  .step-line {
    width: 1.5px;
    flex: 1;
    min-height: 28px;
    background: linear-gradient(to bottom, rgba(10, 180, 196, 0.4), rgba(10, 180, 196, 0.08));
    margin: 6px 0;
  }

  /* Step body */
  .step-body {
    padding-bottom: 2rem;
  }
  .step:last-child .step-body {
    padding-bottom: 0;
  }
  .step-title {
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--deep);
    margin-bottom: 0.35rem;
    margin-top: 0.5rem;
    line-height: 1.2;
  }
  .step-desc {
    font-size: 0.82rem;
    color: rgba(26, 18, 8, 0.52);
    line-height: 1.65;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    .inner { grid-template-columns: 1fr; gap: 3rem; }
    .subtitle { max-width: none; }
    .grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 520px) {
    .grid { grid-template-columns: 1fr; }
    .feature { padding: 1.1rem 1rem; }
    .step-body { padding-bottom: 1.5rem; }
    .step-title { font-size: 0.875rem; }
    .step-desc { font-size: 0.78rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .feature { transition: none; }
  }
</style>
