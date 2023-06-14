<script lang="ts">
  import type { LayoutData } from "./$types";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import Hero from "./components/Hero.svelte";
  import Button from "$lib/components/Button.svelte";
  import "../app.css";

  export let data: LayoutData;
</script>

<Layout>
  <Header slot="header" />
  <div slot="body">
    <Hero />
    <div class="max-w-[1208px] mx-auto px-4 flex flex-col gap-32 py-32">
      <section>
        <p class="text-f-base opacity-40 mb-5">Our culture</p>
        <h2 class="text-f-2xl max-w-xl">
          This is the playground for complex minds that make it simple.
        </h2>
      </section>
      <div class="flex gap-3 flex-wrap">
        {#each data.allProjectTag as tag}
          <Button
            href={`/${tag.slug.current}`}
            bgColor={tag.color.hex}
            noScroll
          >
            {tag.title}
          </Button>
        {/each}
      </div>
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
        <slot />
      </section>
      <section class="hidden">
        <p class="text-f-base opacity-40 mb-5">Our community impact</p>
        <h2 class="text-f-3xl">
          Spreading knowledge around blockchain, crypto, web3 and building the
          Starknet community in Portugal
        </h2>
      </section>
      <div class="flex flex-col hidden">
        <div class="flex gap-10 items-center border-b border-black py-6">
          <figure class="w-[90px] h-[90px] bg-gray-400 rounded-full" />
          <h3 class="text-[2rem]">Starknet Portugal</h3>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-black text-f-lg ml-auto p-7 leading-none"
          >
            TG
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-black text-f-lg p-7 leading-none"
          >
            MEETUP
          </a>
        </div>
        <div class="flex gap-10 items-center border-b border-black py-6">
          <figure class="w-[90px] h-[90px] bg-gray-400 rounded-full" />
          <h3 class="text-[2rem]">Starknet Portugal</h3>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-black text-f-lg ml-auto p-7 leading-none"
          >
            TG
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-black text-f-lg p-7 leading-none"
          >
            MEETUP
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer slot="footer" />
</Layout>
