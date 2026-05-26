<script lang="ts">
  import { SITE } from "$lib/data/site";
  import logo from "$lib/assets/images/voyra-logo.png";

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="top">
    <div class="brand">
      <a href="/" class="logo-link" aria-label="Voyra Agency home">
        <img src={logo} alt="Voyra Agency" class="logo-img" />
        <div class="brand-text">
          <span class="brand-name">Voyra Agency</span>
          <span class="brand-tag">{SITE.tagline}</span>
        </div>
      </a>
      <p class="desc">
        Transforming traditional travel businesses into powerful digital brands —
        built exclusively for travel agencies ready to grow.
      </p>
    </div>

    <nav aria-label="Footer navigation">
      <p class="col-heading">Navigation</p>
      <ul>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#why">Why Voyra</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div class="contact-col">
      <p class="col-heading">Contact Us</p>
      <ul>
        <li>
          <a href={SITE.waHref} target="_blank" rel="noopener noreferrer" class="contact-link">
            <span class="contact-icon">💬</span>
            <span>{SITE.phone}</span>
          </a>
        </li>
        <li>
          <a href="mailto:{SITE.email}" class="contact-link">
            <span class="contact-icon">✉️</span>
            <span>{SITE.email}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="bottom">
    <p class="copy">© {year} Voyra Agency. All rights reserved.</p>
    <p class="craft">Made with care for travel businesses that dare to go digital.</p>
  </div>
</footer>

<style>
  footer {
    background: var(--surface-dark);
    border-top: 1px solid rgba(10, 180, 196, 0.08);
  }

  .top {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 4rem 5% 3rem;
    display: grid;
    grid-template-columns: 1.8fr 1fr 1.2fr;
    gap: 3.5rem;
    align-items: start;
  }

  .logo-link {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    text-decoration: none;
    margin-bottom: 1rem;
  }
  .logo-img {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .brand-text {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .brand-name {
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1.2;
    letter-spacing: -0.3px;
  }
  .brand-tag {
    font-size: 0.68rem;
    color: var(--teal);
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .desc {
    font-size: 0.85rem;
    color: rgba(245, 240, 232, 0.38);
    line-height: 1.7;
    max-width: 300px;
  }

  .col-heading {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(245, 240, 232, 0.3);
    margin-bottom: 1.25rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  a {
    color: rgba(245, 240, 232, 0.52);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color var(--transition);
  }
  a:hover { color: var(--cream); }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .contact-icon { font-size: 1rem; }

  .bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 1.5rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-w);
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .copy, .craft {
    font-size: 0.78rem;
    color: rgba(245, 240, 232, 0.2);
  }

  @media (max-width: 900px) {
    .top {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .brand { grid-column: 1 / -1; }
    .desc { max-width: none; }
  }

  @media (max-width: 560px) {
    .top { grid-template-columns: 1fr; }
    .bottom {
      flex-direction: column;
      text-align: center;
      gap: 0.4rem;
    }
  }
</style>
