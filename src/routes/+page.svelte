<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import "../app.css";
  import Hero from "./components/Hero.svelte";

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

<!-- <h1>Finiam showcase</h1>

<div>
  <h2>Tags - {activeTag?.title || "all"}</h2>
  {#each data.allProjectTag as tag (tag._id)}
    <a href="/?tag={tag.slug.current}">{tag.title}</a>
  {/each}
</div>

{#each projects as item (item._id)}
  <p>{item.name}</p>
{/each} -->

<Layout>
  <Header slot="header" />
  <div slot="body">
    <Hero />
  </div>
  <Footer slot="footer" />
</Layout>
