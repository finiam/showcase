<script lang="ts">
  import ProjectCard from "../components/ProjectCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#each data.filteredProjects as project (project._id)}
  <ProjectCard {project} />
{/each}
