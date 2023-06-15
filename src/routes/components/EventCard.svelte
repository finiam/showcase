<script lang="ts">
  import type { Event } from "$lib/cms";

  export let event: Event;
</script>

<div class="flex flex-wrap gap-10 items-center border-b border-black py-6">
  <figure class="w-[90px] h-[90px] bg-gray-400 rounded-full">
    <img loading="lazy" src={event.image.asset.url} alt={event.name} />
  </figure>

  <h3 class="text-[2rem]">{event.name}</h3>

  {#if event.tgUrl}
    <a
      href={event.tgUrl}
      target="_blank"
      rel="noreferrer"
      class="rounded-full border border-black text-f-lg ml-auto p-7 leading-none"
    >
      TG
    </a>
  {/if}
  {#if event.eventUrl}
    <a
      href={event.eventUrl}
      target="_blank"
      rel="noreferrer"
      class="rounded-full border border-black text-f-lg p-7 leading-none"
    >
      MEETUP
    </a>
  {/if}
</div>
