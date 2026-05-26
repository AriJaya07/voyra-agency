<script lang="ts">
  import SectionLabel from "$lib/components/ui/SectionLabel.svelte";
  import { STATS, FEATURE_PILLS } from "$lib/data/stats";
  import { reveal } from "$lib/utils/reveal";

  const pillOffsets = [0, 2, 4, 2, 0];
</script>

<section class="about" id="about" aria-label="About Voyra">
  <div class="inner">
    <div class="left" use:reveal>
      <SectionLabel text="About Voyra" dark />
      <div class="section-divider"></div>
      <h2 class="title">Your Travel Business,<br />Digitally Transformed.</h2>
      <p class="body-text">
        Voyra Agency is built exclusively for travel businesses ready to compete
        in the digital world. We combine strategy, creativity, and technology to
        grow your brand — consistently, week after week.
      </p>
      <div class="stats" aria-label="Key statistics">
        {#each STATS as stat}
          <div class="stat-card">
            <p class="stat-num">{stat.value}</p>
            <p class="stat-label">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="right" use:reveal={{ delay: 150 }}>
      <p class="pills-heading">What We Deliver</p>
      <div class="pills" role="list" aria-label="Our services">
        {#each FEATURE_PILLS as pill, i}
          <div
            class="pill"
            style="margin-left: {pillOffsets[i]}rem"
            role="listitem"
          >
            <span class="dot" aria-hidden="true"></span>
            {pill}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    background: var(--surface-light);
    padding: var(--section-pad);
  }
  .inner {
    max-width: var(--max-w);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .title {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.75rem, 3.5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: var(--deep);
    margin-bottom: 1.1rem;
  }

  .body-text {
    font-size: 0.95rem;
    color: rgba(26, 18, 8, 0.62);
    line-height: 1.82;
    margin-bottom: 2rem;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .stat-card {
    background: #fff;
    border: 1px solid rgba(10, 180, 196, 0.12);
    border-radius: var(--radius-md);
    padding: 1.25rem;
    transition: border-color var(--transition), box-shadow var(--transition);
  }
  .stat-card:hover {
    border-color: rgba(10, 180, 196, 0.35);
    box-shadow: var(--shadow-sm);
  }
  .stat-num {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--teal-dark);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 0.35rem;
    letter-spacing: 0.2px;
  }

  .pills-heading {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
  }

  .pills {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
  .pill {
    background: #fff;
    border: 1.5px solid rgba(10, 180, 196, 0.15);
    border-radius: var(--radius-pill);
    padding: 0.85rem 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--text-body);
    font-size: 0.9rem;
    font-weight: 500;
    transition: transform var(--transition), border-color var(--transition),
      box-shadow var(--transition);
    cursor: default;
  }
  .pill:hover {
    transform: translateX(8px);
    border-color: var(--teal);
    box-shadow: 0 3px 16px rgba(10, 180, 196, 0.1);
  }
  .dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--teal);
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    .inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .pill { margin-left: 0 !important; }
  }
</style>
