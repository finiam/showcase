import request from "graphql-request";
import { query, types, alias } from "typed-graphqlify";

const TagsQuery = {
  _id: types.string,
  slug: {
    current: types.string,
  },
  title: types.string,
};

const getDataQuery = query("GetData", {
  allProject: [
    {
      _id: types.string,
      name: types.string,
      description: types.string,
      tags: [TagsQuery],
      image: {
        asset: {
          url: types.string,
        },
      },
    },
  ],
  allProjectTag: [TagsQuery],
});

/* const CMS_QUERY = `
  query {
    allProject {
      id: _id
      name
      description
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
      }
    }
    allProjectCategory {
      id: _id
      slug {
        current
      }
      title
    }
  }
`; */

export async function getCMSData() {
  try {
    const query = await request<(typeof getDataQuery)["data"]>(
      import.meta.env.VITE_CMS_URL,
      getDataQuery.toString()
    );

    console.log(query);

    return query;
  } catch (err) {
    console.log(err);

    return null;
  }
}
