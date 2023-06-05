import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent }) => {
  const data = await parent();

  const filteredProjects = data?.allProject.filter((item) =>
    item.tags.find((tag) => tag.slug.current === params.tag)
  );

  return {
    filteredProjects,
  };
};
