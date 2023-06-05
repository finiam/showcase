<script lang="ts">
  import type { getDataQuery } from "$lib/cms";
  import Expand from "$lib/icons/Expand.svelte";

  export let project: (typeof getDataQuery)["data"]["allProject"][number];

  let active = false;
</script>

<div
  class="root w-[381px] min-h-[530px] rounded-[20px] bg-white overflow-hidden flex flex-col"
>
  <header
    class="header h-[192px] py-5 px-4 bg-f-pistachio overflow-hidden"
    class:header-closed={active}
  >
    <img
      class="thumb w-[154px] aspect-square rouded-[18px]"
      src={project.image.asset.url}
      alt={project.name}
      class:thumb-closed={active}
    />
  </header>
  <div class="relative pt-24 px-11 pb-12 flex flex-col gap-11 flex-1">
    <button
      title="View details"
      class="btn absolute flex items-center justify-center top-0 -translate-y-1/2 right-9 h-[123px] w-[123px] rounded-full border border-white"
      class:btn-active={active}
      class:bg-f-pistachio={active}
      class:bg-f-violet={!active}
      on:click={() => {
        active = !active;
      }}
    >
      <Expand />
    </button>
    <div>
      <h3 class="text-f-xl mb-3">{project.name}</h3>
      <p>{project.description}</p>
    </div>
    <footer class="flex gap-1 mt-auto">
      {#each project.tags as tag, index (index)}
        <div class="p-1 rounded bg-f-violet leading-none">
          <span
            class="text-f-sm uppercase tracking-wider leading-none mix-blend-hard-light opacity-80"
          >
            {tag.title}
          </span>
        </div>
      {/each}
    </footer>
  </div>
</div>

<style>
  .root {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  .header {
    transition: height 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
  .thumb {
    transition: transform 0.3s ease-in-out;
  }
  .header-closed {
    transform: translateY(-100%);
    height: 0;
  }
  .thumb-closed {
    transform: translateY(120%);
  }
  .btn {
    transition: background-color 0.6s ease, transform 0.3s ease-in-out;
    transform-origin: center top;
  }
  .btn-active {
    transform: translateY(-10%) scale(0.6);
  }
</style>
