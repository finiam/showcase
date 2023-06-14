import request from "graphql-request";
import { query, types, params } from "typed-graphqlify";

const TagsQuery = {
  _id: types.string,
  slug: {
    current: types.string,
  },
  title: types.string,
  color: { hex: types.string },
};

export const getDataQuery = query("GetData", {
  allProject: params({ sort: { orderRank: "ASC" } }, [
    {
      _id: types.string,
      name: types.string,
      slug: {
        current: types.string,
      },
      description: types.string,
      tags: [TagsQuery],
      githubUrl: types.string,
      url: types.string,
      image: {
        asset: {
          url: types.string,
        },
      },
    },
  ]),
  allProjectTag: params({ sort: { orderRank: "ASC" } }, [TagsQuery]),
});

export type Project = (typeof getDataQuery)["data"]["allProject"][number];
export type ProjectTag = (typeof getDataQuery)["data"]["allProjectTag"][number];

export async function getCMSData() {
  try {
    const query = await request<(typeof getDataQuery)["data"]>(
      import.meta.env.VITE_CMS_URL,
      getDataQuery.toString()
    );

    return query;
  } catch (err) {
    console.log(err);

    return null;
  }
}
