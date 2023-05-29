<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import "../app.css";
  import Hero from "./components/Hero.svelte";
  import Button from "$lib/components/Button.svelte";

  export let data: PageData;

  $: urlTag = $page.url.searchParams.get("tag");
  $: activeTag = data.allProjectTag.find(
    (item) => item.slug.current === urlTag
  );
  $: projects = getFilteredProjects(activeTag);

  function getFilteredProjects(cat?: PageData["allProjectTag"][number]) {
    if (!cat) return data.allProject;

    return data.allProject.filter((project) =>
      project.tags.find((tag) => tag._id === activeTag?._id)
    );
  }

  $: console.log(projects);
</script>

<Layout>
  <Header slot="header" />
  <div slot="body">
    <Hero />
    <div class="max-w-6xl mx-auto flex flex-col gap-32 py-32">
      <section>
        <p class="text-f-base opacity-40 mb-5">Our culture</p>
        <h2 class="text-f-2xl max-w-xl">
          This is the playground for complex minds that make it simple.
        </h2>
      </section>
      <div class="flex gap-3">
        <Button as="a" href="/" className="text-f-lg py-7">All</Button>
        {#each data.allProjectTag as tag (tag._id)}
          <Button href="/?tag={tag.slug.current}" className="bg-f-orange">
            {tag.title}
          </Button>
        {/each}
      </div>
    </div>
  </div>
  <Footer slot="footer" />
</Layout>
