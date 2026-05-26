<script lang="ts">
  import type { Package } from "$lib/types";
  import { reveal } from "$lib/utils/reveal";

  interface Props {
    pkg: Package;
    revealDelay?: number;
  }
  let { pkg, revealDelay = 0 }: Props = $props();
</script>

<article
  class="card"
  class:featured={pkg.featured}
  use:reveal={{ delay: revealDelay }}
  aria-label="{pkg.name} package"
>
  {#if pkg.featured}
    <span class="badge">Most Popular</span>
  {/if}

  <div class="card-top">
    <p class="tier">{pkg.tier}</p>
    <h3 class="name">{pkg.name}</h3>
  </div>

  <!-- Price block -->
  <div class="price-block" aria-label="Price: {pkg.price} {pkg.priceNote}">
    <div class="price-row">
      <span class="price-amount">{pkg.price}</span>
    </div>
    <div class="price-meta">
      <span class="price-note">{pkg.priceNote}</span>
      <span class="price-usd">{pkg.priceUSD}</span>
    </div>
  </div>

  <hr class="divider" />

  <ul class="features" aria-label="Package features">
    {#each pkg.features as feature}
      <li>
        <span class="check" aria-hidden="true">✓</span>
        <span>{feature}</span>
      </li>
    {/each}
  </ul>

  <a href="#contact" class="cta" class:cta-featured={pkg.featured}>
    {pkg.cta} →
  </a>
</article>

<style>
  .card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-card);
    padding: 1.75rem;
    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .card::after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: transparent;
    transition: background 0.3s ease;
  }
  .card:hover {
    border-color: rgba(10, 180, 196, 0.3);
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
  .card:hover::after {
    background: linear-gradient(90deg, var(--teal), var(--accent));
  }
  .card.featured {
    background: rgba(10, 180, 196, 0.07);
    border-color: rgba(10, 180, 196, 0.28);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
  }
  .card.featured::after {
    background: linear-gradient(90deg, var(--teal), var(--accent));
  }
  .card.featured:hover {
    transform: translateY(-10px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
  }

  .badge {
    position: absolute;
    top: 1.1rem; right: 1.1rem;
    background: var(--teal);
    color: #fff;
    font-size: 0.62rem;
    font-weight: 700;
    padding: 0.28rem 0.75rem;
    border-radius: var(--radius-pill);
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .tier {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 0.4rem;
  }

  .name {
    font-family: "Playfair Display", serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--cream);
    letter-spacing: -0.5px;
    line-height: 1.1;
    margin-bottom: 1.25rem;
  }

  /* Price */
  .price-block {
    background: rgba(10, 180, 196, 0.06);
    border: 1px solid rgba(10, 180, 196, 0.15);
    border-radius: var(--radius-sm);
    padding: 1rem 1.1rem;
    margin-bottom: 1.25rem;
  }
  .price-row {
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .price-amount {
    font-family: "Poppins", system-ui, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--teal);
    letter-spacing: -0.5px;
    line-height: 1;
  }
  .card.featured .price-amount {
    color: var(--teal);
  }
  .price-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price-note {
    font-size: 0.75rem;
    color: rgba(245, 240, 232, 0.5);
    font-weight: 400;
  }
  .price-usd {
    font-size: 0.72rem;
    color: rgba(245, 240, 232, 0.35);
    font-weight: 400;
  }

  .divider {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: 1.1rem;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    flex: 1;
    margin-bottom: 1.6rem;
  }
  .features li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.845rem;
    color: rgba(245, 240, 232, 0.72);
    line-height: 1.45;
  }
  .check {
    color: var(--teal);
    font-weight: 700;
    font-size: 0.78rem;
    flex-shrink: 0;
    margin-top: 0.12rem;
    width: 14px;
  }

  .cta {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.85rem 1rem;
    border-radius: var(--radius-pill);
    font-size: 0.875rem;
    font-weight: 600;
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, 0.18);
    color: var(--cream);
    transition: background var(--transition), border-color var(--transition),
      color var(--transition), transform var(--transition);
    margin-top: auto;
    letter-spacing: 0.2px;
    font-family: "Poppins", system-ui, sans-serif;
  }
  .cta:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
  }
  .cta-featured {
    background: var(--teal);
    border-color: var(--teal);
    color: #fff;
  }
  .cta-featured:hover {
    background: var(--teal-dark);
    border-color: var(--teal-dark);
    transform: translateY(-1px);
  }
</style>
