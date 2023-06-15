<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import TagFilter from "./components/TagFilter.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import EventCard from "./components/EventCard.svelte";
</script>

<svelte:head>
  <title>Finiam Showcase</title>
</svelte:head>

<Header />

<main class="bg-f-beige">
  <Hero />
  <div class="max-w-[1208px] mx-auto px-4 flex flex-col gap-32 py-32">
    <section>
      <p class="text-f-base opacity-40 mb-5">Our culture</p>
      <h2 class="text-f-2xl max-w-xl">
        This is the playground for complex minds that make it simple.
      </h2>
    </section>
    <TagFilter />
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
      <slot />
    </section>
    <section>
      <p class="text-f-base opacity-40 mb-5">Our community impact</p>
      <h2 class="text-f-3xl">
        Spreading knowledge around blockchain, crypto, web3 and building the
        Starknet community in Portugal
      </h2>
    </section>
    <div class="flex flex-col">
      {#each $page.data.allEvent as event (event._id)}
        <EventCard {event} />
      {/each}
    </div>
  </div>
</main>
<Footer />
