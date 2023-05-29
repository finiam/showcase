<script lang="ts">
  type $$Props = Partial<HTMLButtonElement & HTMLAnchorElement> & {
    as?: "button" | "a";
    className?: string;
    outline?: boolean;
  };

  export let as: "button" | "a" = "a";
  export let className = "";
  export let outline = false;

  let baseCls = "root text-f-dark-gray text-f-lg rounded-full min-w-[100px] w-fit";

  if (outline) {
    baseCls += ` border border-beige bg-transparent`;
  }
</script>

<svelte:element this={as} {...$$restProps} class="{baseCls} {className}">
  <slot />
</svelte:element>

<style>
  .root {
    padding: 1.1rem 2.2rem;
  }
</style>
