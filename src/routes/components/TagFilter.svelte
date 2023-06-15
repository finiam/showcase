<script>
  import { page } from "$app/stores";

  import Button from "$lib/components/Button.svelte";
</script>

<div class="flex gap-3 flex-wrap">
  <Button href={`/`} bgColor="#fff" noScroll>All</Button>
  {#each $page.data.allProjectTag as tag}
    <Button href={`/${tag.slug.current}`} bgColor={tag.color.hex} noScroll>
      {tag.title}
    </Button>
  {/each}
</div>
