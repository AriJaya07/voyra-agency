<script lang="ts">
  import SectionLabel from "$lib/components/ui/SectionLabel.svelte";
  import PackageCard from "$lib/components/ui/PackageCard.svelte";
  import { PACKAGES } from "$lib/data/packages";
  import { reveal } from "$lib/utils/reveal";
</script>

<section class="packages" id="packages" aria-label="Our packages">
  <div class="inner">
    <div class="header" use:reveal>
      <div class="header-left">
        <SectionLabel text="Our Packages" />
        <div class="section-divider"></div>
        <h2 class="title">Choose Your<br />Digital Level.</h2>
      </div>
      <p class="subtitle">
        Every package includes dedicated support, weekly reports, and a weekly
        strategy meeting with the Voyra team — starting from day one.
      </p>
    </div>

    <!-- Grid: PackageCard handles its own reveal internally -->
    <div class="grid" aria-label="Package options" role="list">
      {#each PACKAGES as pkg, i}
        <div role="listitem" class="grid-item">
          <PackageCard {pkg} revealDelay={i * 120} />
        </div>
      {/each}
    </div>

    <div class="guarantee" use:reveal={{ delay: 400 }}>
      <span class="guarantee-icon" aria-hidden="true">✦</span>
      No lock-in contracts. Start, pause, or upgrade anytime.
    </div>
  </div>
</section>

<style>
  .packages {
    background: var(--deep);
    padding: var(--section-pad);
  }
  .inner {
    max-width: var(--max-w);
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .title {
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-top: 0.5rem;
  }

  .subtitle {
    color: rgba(245, 240, 232, 0.5);
    font-size: 0.95rem;
    max-width: 300px;
    line-height: 1.7;
    flex-shrink: 0;
  }

  /* Grid: equal height cards */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: stretch; /* all cells same height */
  }
  .grid-item {
    display: flex; /* make PackageCard fill full height */
  }

  .guarantee {
    margin-top: 2.5rem;
    text-align: center;
    color: rgba(245, 240, 232, 0.38);
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .guarantee-icon { color: var(--teal); font-size: 0.7rem; }

  @media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 680px) {
    .grid { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; }
    .header { flex-direction: column; align-items: flex-start; }
    .subtitle { max-width: none; }
  }
</style>
