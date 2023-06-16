<script lang="ts">
  import type { Event } from "$lib/cms";

  export let event: Event;
</script>

<div class="flex flex-wrap gap-6 lg:gap-10 items-center border-b border-black py-6">
  <figure class="w-[40px] lg:w-[90px] aspect-square bg-gray-400 rounded-full">
    <img loading="lazy" src={event.image.asset.url} alt={event.name} />
  </figure>

  <h3 class="text-[2rem]">{event.name}</h3>

  <div class="ml-auto flex gap-6">
    {#each event.links as link (link._key)}
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        class="rounded-full border border-black text-f-md lg:text-f-lg ml-auto p-4 lg:p-7 leading-none"
      >
        {link.title}
      </a>
    {/each}
  </div>
</div>
