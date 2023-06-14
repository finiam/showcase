// See https://kit.svelte.dev/docs/types#app

import type { Projects, ProjectTag } from "$lib/cms";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      allProject: Project[];
      allProjectTag: ProjectTag[];
    }
    // interface Platform {}
  }
}

export {};
