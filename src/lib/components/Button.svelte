<script lang="ts">
  import { textForBackground } from "$lib/utils";

  type $$Props = Partial<HTMLAnchorElement> & {
    as?: "button" | "a";
    className?: string;
    outline?: boolean;
    noScroll?: boolean;
    bgColor?: string;
  };

  export let as = "a";
  export let bgColor = "transparent";
  export let outline = false;
  export let noScroll = false;
  export let className = "";

  let baseCls = `root py-[0.8rem] lg:py-[1.1rem] px-[1.85rem] lg:px-[2.2rem] text-f-dark-gray text-f-base lg:text-f-lg rounded-full lg:min-w-[100px] w-fit pointer ${className}`;

  if (outline) {
    baseCls += ` border border-beige bg-transparent`;
  }
</script>

<svelte:element
  this={as}
  class={baseCls}
  style="background-color: {bgColor}; color: {textForBackground(bgColor)}"
  data-sveltekit-noscroll={noScroll ? "" : "off"}
  on:click
  {...$$restProps}
>
  <slot />
</svelte:element>

<style>
  .root {
    transition: transform 0.25s ease;
  }
  .root:hover {
    transform: scale(1.03);
  }
</style>
