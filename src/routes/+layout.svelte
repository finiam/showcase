<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import TagFilter from "./components/TagFilter.svelte";
  import { page } from "$app/stores";
  import EventCard from "./components/EventCard.svelte";
  import "../app.css";
</script>

<svelte:head>
  <title>Finiam Showcase</title>
</svelte:head>

<Header />

<main class="bg-f-beige">
  <Hero />
  <div class="max-w-[1208px] mx-auto px-4 flex flex-col gap-16 lg:gap-32 py-32">
    <section>
      <p class="text-f-base opacity-40 mb-5">Our culture</p>
      <h2 class="text-f-2xl max-w-xl">
        This is the playground for complex minds that make it simple.
      </h2>
    </section>
    <TagFilter />

    <slot />

    <section>
      <p class="text-f-base opacity-40 mb-5">Our community impact</p>
      <h2 class="text-f-2xl lg:text-f-3xl">
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
