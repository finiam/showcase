import { getCMSData } from "$lib/cms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ url }) => {
  const urlTag = url.searchParams.get("tag");
  const urlProject = url.searchParams.get("project");

  const data = await getCMSData();

  console.log(`page.server.ts: tag=${urlTag}, project=${urlProject}`);

  if (!data) {
    throw error(500, "Something went wrong");
  }

  if (!urlTag) {
    return data;
  }

  const filteredProjects = data?.allProject.filter((item) =>
    item.tags.find((tag) => tag.slug.current === urlTag)
  );

  return {
    allProject: filteredProjects,
    allProjectTag: data.allProjectTag,
  };
}) satisfies PageServerLoad;
