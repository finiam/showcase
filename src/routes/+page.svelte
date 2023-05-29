<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: urlCat = $page.url.searchParams.get("tag");

  $: tags = data.allProjectTag;
  $: activeTag = tags.find((item) => item.slug.current === urlCat);
  $: projects = getFilteredProjects(activeTag);

  function getFilteredProjects(cat?: PageData["allProjectTag"][number]) {
    if (!cat) return data.allProject;

    return data.allProject.filter((project) =>
      project.tags.find((tag) => tag._id === activeTag?._id)
    );
  }

  $: console.log(projects);
</script>

<h1>Finiam showcase</h1>

<div>
  <h2>Tags - {activeTag?.title || "all"}</h2>
  {#each tags as tag (tag._id)}
    <a href="/?tag={tag.slug.current}">{tag.title}</a>
  {/each}
</div>

{#each projects as item (item._id)}
  <p>{item.name}</p>
{/each}
