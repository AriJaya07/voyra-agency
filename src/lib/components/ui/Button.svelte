<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    variant?: "primary" | "ghost" | "accent";
    href?: string;
    type?: "button" | "submit" | "reset";
    class?: string;
    disabled?: boolean;
    onclick?: () => void;
    children: Snippet;
  }

  let {
    variant = "primary",
    href,
    type = "button",
    class: className = "",
    disabled = false,
    onclick,
    children,
  }: Props = $props();
</script>

{#if href}
  <a {href} class="btn btn-{variant} {className}" role="button">
    {@render children()}
  </a>
{:else}
  <button {type} {disabled} {onclick} class="btn btn-{variant} {className}">
    {@render children()}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: var(--radius-pill);
    font-family: "Poppins", system-ui, sans-serif;
    font-size: 0.925rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: background var(--transition), transform var(--transition),
      border-color var(--transition), box-shadow var(--transition);
    border: 1.5px solid transparent;
    white-space: nowrap;
    line-height: 1;
    letter-spacing: 0.2px;
  }

  /* PRIMARY — teal (matches logo + BaliTravelNow) */
  .btn-primary {
    background: var(--teal);
    color: #fff;
    border-color: var(--teal);
  }
  .btn-primary:hover:not(:disabled) {
    background: var(--teal-dark);
    border-color: var(--teal-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10, 180, 196, 0.3);
  }

  /* GHOST — transparent outline */
  .btn-ghost {
    background: transparent;
    color: var(--cream);
    border-color: rgba(245, 240, 232, 0.35);
  }
  .btn-ghost:hover:not(:disabled) {
    border-color: var(--cream);
    background: rgba(245, 240, 232, 0.08);
  }

  /* ACCENT — warm orange for secondary CTAs */
  .btn-accent {
    background: var(--accent);
    color: var(--deep);
    border-color: var(--accent);
  }
  .btn-accent:hover:not(:disabled) {
    background: var(--accent-dark);
    border-color: var(--accent-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 135, 74, 0.28);
  }

  .btn:disabled {
    opacity: 0.52;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  .btn:focus-visible {
    outline: 2px solid var(--teal);
    outline-offset: 3px;
  }
</style>
