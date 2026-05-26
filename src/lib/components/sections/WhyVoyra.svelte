<script lang="ts">
  import SectionLabel from "$lib/components/ui/SectionLabel.svelte";
  import { WHY_ITEMS, TIMELINE_STEPS } from "$lib/data/why";
  import { reveal } from "$lib/utils/reveal";
</script>

<section class="why" id="why" aria-label="Why choose Voyra">
  <div class="inner">
    <div class="left" use:reveal>
      <SectionLabel text="Why Voyra" dark />
      <div class="section-divider"></div>
      <h2 class="title">Built for<br />Travel, Driven<br />by Data.</h2>
      <p class="subtitle">
        We don't just post content — we build systems that grow your business.
        Every decision is backed by data, every week.
      </p>
      <div class="list" role="list">
        {#each WHY_ITEMS as item}
          <div class="item" role="listitem">
            <div class="icon" role="img" aria-label={item.title}>{item.icon}</div>
            <div>
              <p class="item-title">{item.title}</p>
              <p class="item-desc">{item.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="visual" use:reveal={{ delay: 150 }}>
      <div class="visual-card">
        <div class="visual-header">
          <div class="visual-dot teal"></div>
          <div class="visual-dot yellow"></div>
          <div class="visual-dot red"></div>
          <p class="visual-title">How Voyra Works</p>
        </div>
        <ol class="timeline" aria-label="Our process">
          {#each TIMELINE_STEPS as step}
            <li class="tl-item">
              <div class="tl-num" aria-hidden="true">{step.number}</div>
              <div class="tl-text">
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</section>

<style>
  .why {
    background: var(--surface-light);
    padding: var(--section-pad);
  }
  .inner {
    max-width: var(--max-w);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  .title {
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -1px;
    color: var(--deep);
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .subtitle {
    font-size: 0.95rem;
    color: rgba(26, 18, 8, 0.58);
    line-height: 1.75;
    margin-bottom: 2rem;
    max-width: 380px;
  }

  .list { display: flex; flex-direction: column; gap: 0.85rem; }
  .item {
    display: flex;
    gap: 1.1rem;
    align-items: flex-start;
    padding: 1.1rem 1.25rem;
    border-radius: var(--radius-md);
    border: 1.5px solid rgba(10, 180, 196, 0.1);
    background: #fff;
    transition: border-color var(--transition), box-shadow var(--transition),
      transform var(--transition);
  }
  .item:hover {
    border-color: rgba(10, 180, 196, 0.3);
    box-shadow: var(--shadow-sm);
    transform: translateX(4px);
  }
  .icon {
    width: 42px; height: 42px;
    border-radius: 10px;
    background: var(--teal-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
    border: 1px solid rgba(10, 180, 196, 0.15);
  }
  .item-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--deep);
    margin-bottom: 0.25rem;
  }
  .item-desc {
    font-size: 0.82rem;
    color: rgba(26, 18, 8, 0.55);
    line-height: 1.55;
  }

  /* Timeline visual */
  .visual-card {
    background: #fff;
    border: 1.5px solid rgba(10, 180, 196, 0.12);
    border-radius: var(--radius-card);
    overflow: hidden;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.06);
  }
  .visual-header {
    background: var(--teal-soft);
    border-bottom: 1px solid rgba(10, 180, 196, 0.15);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .visual-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .teal { background: var(--teal); }
  .yellow { background: #f6c90e; }
  .red { background: #ff5f57; }

  .visual-title {
    font-family: "Playfair Display", serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--deep);
    margin-left: auto;
    letter-spacing: -0.2px;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0.5rem 0;
  }
  .tl-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: background var(--transition);
  }
  .tl-item:last-child { border-bottom: none; }
  .tl-item:hover { background: var(--teal-soft); }

  .tl-num {
    width: 28px; height: 28px;
    border-radius: 50%;
    background: var(--teal);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .tl-text {
    font-size: 0.875rem;
    color: rgba(26, 18, 8, 0.6);
    line-height: 1.55;
  }
  .tl-text strong {
    color: var(--deep);
    font-weight: 600;
    display: block;
    margin-bottom: 0.15rem;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    .inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .subtitle { max-width: none; }
  }
</style>
