import { getCMSData } from "$lib/cms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const data = await getCMSData();

  if (!data) {
    throw error(500, "Something went wrong");
  }

  return data;
}) satisfies PageServerLoad;
