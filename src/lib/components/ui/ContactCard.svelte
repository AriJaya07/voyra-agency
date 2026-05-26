<script lang="ts">
  import type { ContactInfo } from "$lib/types";

  interface Props {
    contact: ContactInfo;
  }
  let { contact }: Props = $props();
</script>

<a
  href={contact.href}
  class="card"
  target={contact.type === "whatsapp" ? "_blank" : undefined}
  rel={contact.type === "whatsapp" ? "noopener noreferrer" : undefined}
  aria-label="Contact via {contact.label}: {contact.value}"
>
  <div class="icon {contact.colorClass}" aria-hidden="true">
    {contact.icon}
  </div>
  <div class="info">
    <p class="label">{contact.label}</p>
    <p class="value">{contact.value}</p>
  </div>
  <span class="arrow" aria-hidden="true">→</span>
</a>

<style>
  .card {
    background: #fff;
    border: 1.5px solid rgba(196, 168, 130, 0.2);
    border-radius: var(--radius-md);
    padding: 1.1rem 1.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    transition: transform var(--transition), border-color var(--transition),
      box-shadow var(--transition);
  }
  .card:hover {
    transform: translateX(6px);
    border-color: var(--teal);
    box-shadow: 0 4px 20px rgba(10, 180, 196, 0.1);
  }

  .icon {
    width: 46px;
    height: 46px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
  }
  .wa { background: #DCF8C6; }
  .em { background: #DBEAFE; }

  .info { flex: 1; }
  .label {
    font-size: 0.68rem;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .value {
    font-size: 0.925rem;
    font-weight: 600;
    color: var(--text-body);
  }

  .arrow {
    color: var(--teal);
    font-size: 1rem;
    transition: transform var(--transition);
    flex-shrink: 0;
  }
  .card:hover .arrow {
    transform: translateX(4px);
  }
</style>
