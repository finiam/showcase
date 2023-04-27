import { getAllProjects } from "$lib/cms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const data = await getAllProjects();

  console.log(data);

  if (!data) {
    throw error(500, "It broke");
  }

  return {
    projects: data.allProject,
  };
}) satisfies PageServerLoad;
