import { getCMSData } from "$lib/cms";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
  const data = await getCMSData();

  if (!data) {
    throw error(500, "Something went wrong");
  }

  return {
    allProject: data.allProject,
    allProjectTag: data.allProjectTag,
  };
}) satisfies LayoutServerLoad;
