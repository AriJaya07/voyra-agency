<script lang="ts">
  interface Props {
    text: string;
    dark?: boolean;
  }
  let { text, dark = false }: Props = $props();
</script>

<span class="label" class:dark>{text}</span>

<style>
  .label {
    color: var(--teal);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.875rem;
  }
  .dark {
    color: var(--teal-dark);
  }
</style>
