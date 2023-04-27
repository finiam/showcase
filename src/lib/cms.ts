import request from "graphql-request";

const ALL_PROJECTS = `
query {
    allProject {
      name
      slug {
        current
      }
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
      }
    }
}  
`;

export async function getAllProjects() {
  return request(import.meta.env.VITE_CMS_URL, ALL_PROJECTS);
}
