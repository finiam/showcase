<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: urlCat = $page.url.searchParams.get("category");

  $: categories = data.allProjectCategory;
  $: activeCategory = categories.find((item) => item.slug.current === urlCat);
  $: projects = getFilteredProjects(activeCategory);

  function getFilteredProjects(cat?: PageData["allProjectCategory"][number]) {
    if (!cat) return data.allProject;

    return data.allProject.filter((project) =>
      project.category.find((cat) => cat._id === activeCategory?._id)
    );
  }

  $: console.log(projects);
</script>

<h1>Finiam showcase</h1>

<div>
  <h2>Categories - {activeCategory?.title || "all"}</h2>
  {#each categories as cat (cat._id)}
    <a href="/?category={cat.slug.current}">{cat.title}</a>
  {/each}
</div>

{#each projects as item (item._id)}
  <p>{item.name}</p>
{/each}
