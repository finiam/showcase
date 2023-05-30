<script lang="ts">
  import type { PageData } from "./$types";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import Hero from "./components/Hero.svelte";
  import Button from "$lib/components/Button.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";
  import "../app.css";

  export let data: PageData;

  $: projects = data.allProject;
</script>

<Layout>
  <Header slot="header" />
  <div slot="body">
    <Hero />
    <div class="max-w-[1208px] mx-auto flex flex-col gap-32 py-32">
      <section>
        <p class="text-f-base opacity-40 mb-5">Our culture</p>
        <h2 class="text-f-2xl max-w-xl">
          This is the playground for complex minds that make it simple.
        </h2>
      </section>
      <div class="flex gap-3">
        <Button href="/" className="text-f-lg py-7" noScroll>All</Button>
        {#each data.allProjectTag as tag}
          <Button
            href={`?tag=${tag.slug.current}`}
            className="bg-f-orange"
            noScroll
          >
            {tag.title}
          </Button>
        {/each}
      </div>
      <section class="grid grid-cols-3 gap-9">
        {#each projects as project (project._id)}
          <ProjectCard {project} />
        {/each}
      </section>
    </div>
  </div>
  <Footer slot="footer" />
</Layout>
