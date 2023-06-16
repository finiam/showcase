<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import { fade } from "svelte/transition";
  import ProjectCard from "./ProjectCard.svelte";
  import { seeAllCards } from "$lib/stores";

  let root: HTMLElement;

  function handleToggle() {
    if ($seeAllCards) {
      root.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }

    $seeAllCards = !$seeAllCards;
  }
</script>

<div class="flex flex-col gap-9">
  <section
    bind:this={root}
    class="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start"
  >
    {#each $page.data.allProject.slice(0, 3) as project (project._id)}
      <ProjectCard {project} />
    {/each}
  </section>

  {#if $seeAllCards}
    <section
      class="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start overflow-hidden pb-2"
      out:fade={{ delay: 200, duration: 200 }}
    >
      {#each $page.data.allProject.slice(3) as project (project._id)}
        <ProjectCard {project} />
      {/each}
    </section>
  {/if}
</div>

{#if $page.data.allProject.length > 3}
  <div class="text-center w-full">
    <Button as="button" bgColor="#DEDB7B" on:click={handleToggle}>
      See {$seeAllCards ? "less" : "more"}
    </Button>
  </div>
{/if}
