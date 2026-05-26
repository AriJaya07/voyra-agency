<script lang="ts">
  import SectionLabel from "$lib/components/ui/SectionLabel.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import ContactCard from "$lib/components/ui/ContactCard.svelte";
  import { CONTACT_CARDS } from "$lib/data/contact";
  import { enhance } from "$app/forms";
  import { reveal } from "$lib/utils/reveal";

  let submitting = $state(false);
  let submitted = $state(false);
  let errorMsg = $state("");
</script>

<section class="contact" id="contact" aria-label="Contact Voyra">
  <div class="inner">
    <div class="left" use:reveal>
      <SectionLabel text="Get in Touch" dark />
      <div class="section-divider"></div>
      <h2 class="title">Ready to Go<br />Digital?</h2>
      <p class="desc">
        Reach out directly — our team will review your inquiry and
        guide you to the right package for your travel business.
      </p>

      <div class="cards" aria-label="Contact options">
        {#each CONTACT_CARDS as contact}
          <ContactCard {contact} />
        {/each}
      </div>

      <div class="response-time">
        <span class="pulse" aria-hidden="true"></span>
        Typically responds during business hours
      </div>
    </div>

    <div class="right" use:reveal={{ delay: 150 }}>
      {#if submitted}
        <div class="success" role="status" aria-live="polite">
          <div class="success-circle" aria-hidden="true">✦</div>
          <h3>Message Sent!</h3>
          <p>We'll review your message and get back to you soon. Talk soon!</p>
          <button class="reset-btn" onclick={() => (submitted = false)}>
            Send another message
          </button>
        </div>
      {:else}
        <div class="form-card">
          <h3 class="form-title">Send Us a Message</h3>
          <form
            method="POST"
            action="?/contact"
            use:enhance={() => {
              submitting = true;
              errorMsg = "";
              return async ({ result, update }) => {
                submitting = false;
                if (result.type === "success") {
                  submitted = true;
                } else if (result.type === "failure") {
                  const data = result.data as { message?: string } | undefined;
                  errorMsg =
                    data?.message ??
                    "Something went wrong. Please try again or contact us via WhatsApp.";
                }
                await update({ reset: false });
              };
            }}
            aria-label="Contact form"
            novalidate
          >
            <div class="row">
              <div class="group">
                <label for="name">Your Name <span class="req" aria-hidden="true">*</span></label>
                <input id="name" name="name" type="text" placeholder="Budi Santoso" autocomplete="name" required />
              </div>
              <div class="group">
                <label for="business">Business Name <span class="req" aria-hidden="true">*</span></label>
                <input id="business" name="business" type="text" placeholder="Santoso Travel" autocomplete="organization" required />
              </div>
            </div>

            <div class="group">
              <label for="contact_info">Email or WhatsApp <span class="req" aria-hidden="true">*</span></label>
              <input id="contact_info" name="contact_info" type="text" placeholder="your@email.com or +62857..." autocomplete="email" required />
            </div>

            <div class="group">
              <label for="package">Package Interest</label>
              <select id="package" name="package">
                <option value="">Select a package...</option>
                <option value="basic">Basic — Social Media Only</option>
                <option value="intermediate">Intermediate — Social Media + Website</option>
                <option value="advance">Advance — Full Digital Suite</option>
                <option value="unsure">Not sure yet, need advice</option>
              </select>
            </div>

            <div class="group">
              <label for="message">Tell us about your business</label>
              <textarea id="message" name="message" placeholder="What does your travel business do? What are your goals?" rows="4"></textarea>
            </div>

            {#if errorMsg}
              <p class="error" role="alert">{errorMsg}</p>
            {/if}

            <Button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message →"}
            </Button>
          </form>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .contact {
    background: var(--accent-soft);
    padding: var(--section-pad);
  }
  .inner {
    max-width: var(--max-w);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 5rem;
    align-items: stretch;
  }

  .title {
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -1px;
    color: var(--deep);
    margin-top: 0.5rem;
  }
  .desc {
    color: rgba(26, 18, 8, 0.58);
    line-height: 1.8;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .cards { display: flex; flex-direction: column; gap: 0.85rem; margin-top: 2rem; }

  .response-time {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1.25rem;
    font-size: 0.8rem;
    color: rgba(26, 18, 8, 0.48);
    font-style: italic;
  }
  .pulse {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
    position: relative;
  }
  .pulse::after {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.3);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.5); opacity: 0; }
  }

  .right {
    display: flex;
    flex-direction: column;
  }

  /* Form card */
  .form-card {
    flex: 1;
    background: #fff;
    border: 1.5px solid rgba(10, 180, 196, 0.1);
    border-radius: var(--radius-card);
    padding: 2rem;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
  }

  .form-title {
    font-family: "Playfair Display", serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--deep);
    margin-bottom: 1.5rem;
    letter-spacing: -0.3px;
  }

  form { display: flex; flex-direction: column; gap: 1rem; flex: 1; }
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .group { display: flex; flex-direction: column; gap: 0.4rem; }
  label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .req { color: var(--teal); }
  input, select, textarea {
    background: var(--surface-light);
    border: 1.5px solid rgba(196, 168, 130, 0.25);
    border-radius: var(--radius-sm);
    padding: 0.825rem 1rem;
    font-family: "Poppins", system-ui, sans-serif;
    font-size: 0.9rem;
    color: var(--text-body);
    outline: none;
    transition: border-color var(--transition), box-shadow var(--transition);
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
  }
  input::placeholder, textarea::placeholder {
    color: rgba(26, 18, 8, 0.3);
  }
  input:focus, select:focus, textarea:focus {
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(10, 180, 196, 0.1);
    background: #fff;
  }
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230AB4C4' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-color: var(--surface-light);
    padding-right: 2.5rem;
    cursor: pointer;
  }
  textarea { resize: vertical; min-height: 110px; }

  .error {
    color: #dc2626;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    background: rgba(220, 38, 38, 0.06);
    border: 1px solid rgba(220, 38, 38, 0.2);
    border-radius: var(--radius-sm);
    line-height: 1.5;
  }

  /* Success */
  .success {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3rem 2rem;
    gap: 1rem;
    background: #fff;
    border: 1.5px solid rgba(10, 180, 196, 0.15);
    border-radius: var(--radius-card);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.06);
  }
  .success-circle {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--teal-soft);
    border: 2px solid var(--teal);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--teal);
  }
  .success h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    color: var(--deep);
    letter-spacing: -0.5px;
  }
  .success p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.65; }
  .reset-btn {
    margin-top: 0.5rem;
    background: none;
    border: 1.5px solid rgba(10, 180, 196, 0.25);
    color: var(--teal-dark);
    padding: 0.6rem 1.4rem;
    border-radius: var(--radius-pill);
    font-family: "Poppins", system-ui, sans-serif;
    font-size: 0.875rem;
    cursor: pointer;
    transition: border-color var(--transition), background var(--transition);
  }
  .reset-btn:hover {
    background: var(--teal-soft);
    border-color: var(--teal);
  }

  @media (max-width: 900px) {
    .inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .row { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    .title { font-size: clamp(1.75rem, 7vw, 2.5rem); }
    .desc { font-size: 0.875rem; }
    .cards { gap: 0.65rem; }
    .form-card { padding: 1.5rem 1.1rem; }
    input, select, textarea { padding: 0.75rem 0.875rem; font-size: 0.85rem; }
    .success { padding: 2.5rem 1.25rem; }
    .response-time { font-size: 0.75rem; }
  }
</style>
