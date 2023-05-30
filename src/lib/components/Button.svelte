<script lang="ts">
  type $$Props = Partial<HTMLAnchorElement> & {
    className?: string;
    outline?: boolean;
    noScroll?: boolean;
  };

  export let className = "";
  export let outline = false;
  export let noScroll = false;

  let baseCls =
    "root text-f-dark-gray text-f-lg rounded-full min-w-[100px] w-fit pointer";

  if (outline) {
    baseCls += ` border border-beige bg-transparent`;
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  {...$$restProps}
  class="{baseCls} {className}"
  data-sveltekit-noscroll={noScroll ? "" : "off"}
>
  <slot />
</a>

<style>
  .root {
    padding: 1.1rem 2.2rem;
    transition: transform 0.25s ease;
  }
  .root:hover {
    transform: scale(1.06);
  }
</style>
