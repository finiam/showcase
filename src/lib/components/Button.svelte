<script lang="ts">
  type $$Props = Partial<HTMLButtonElement & HTMLAnchorElement> & {
    as: "button" | "a";
    className?: string;
  };

  export let as: "button" | "a" = "button";
  export let className = "";
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class="rounded-full bg-f-orange py-3 px-9 min-w-[100px] w-fit {className}"
>
  <slot />
</svelte:element>
