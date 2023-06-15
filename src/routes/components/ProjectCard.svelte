<script lang="ts">
  import { complementaryColor, textForBackground } from "$lib/utils";
  import { slide } from "svelte/transition";
  import { page } from "$app/stores";
  import type { Project } from "$lib/cms";
  import Expand from "$lib/icons/Expand.svelte";

  export let project: Project;

  let open = false;

  function getColorForTag(tag: string) {
    return $page.data.allProjectTag.find((item) => item.slug.current === tag)
      ?.color.hex;
  }

  let bgColor = getColorForTag(project.tags?.[0].slug.current);
</script>

<div
  class="relative root w-[381px] h-[530px] max-w-full rounded-[20px] bg-white overflow-hidden flex flex-col pb-6"
>
  <header
    class="relative header h-[192px] py-5 px-4 bg-f-pistachio overflow-hidden"
    style="background: {bgColor}"
    class:header-closed={open}
  >
    <img
      class="thumb w-[154px] aspect-square rounded-[18px]"
      src={project.image.asset.url}
      alt={project.name}
      class:thumb-closed={open}
    />
  </header>
  <button
    title="View details"
    class="btn absolute top-[132px] flex items-center justify-center right-9 h-[120px] w-[123px] rounded-full border border-white"
    class:btn-active={open}
    style="background-color: {complementaryColor(bgColor)}"
    on:click={() => {
      open = !open;
    }}
  >
    <Expand />
  </button>

  <div class="relative px-11 flex flex-col" style="transform: translateY(96px)">
    <h3 class="text-f-xl mb-3 leading-tight">{project.name}</h3>

    {#if open}
      <div
        in:slide|local={{ duration: 300, delay: 100 }}
        out:slide|local={{ duration: 300 }}
        class="mb-10"
      >
        {#if project.url}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            class="bg-gray-200 p-1 rounded text-f-sm uppercase tracking-wider"
          >
            Website
          </a>
        {/if}
        {#if project.githubUrl}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            class="bg-gray-200 p-1 rounded text-f-sm uppercase tracking-wider"
          >
            Github
          </a>
        {/if}
      </div>
    {/if}

    <p>{project.description}</p>
  </div>
  <footer class="flex gap-1 mt-auto px-11">
    {#each project.tags as tag, index (index)}
      {@const color = getColorForTag(tag.slug.current)}
      <div
        class="p-1 rounded bg-f-violet leading-none"
        style="background-color: {color}"
      >
        <span
          class="text-f-sm uppercase tracking-wider leading-none mix-blend-hard-light opacity-80"
          style="color: {textForBackground(color)}"
        >
          {tag.title}
        </span>
      </div>
    {/each}
  </footer>
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
    transform: translateY(-70%) scale(0.6);
  }
</style>
