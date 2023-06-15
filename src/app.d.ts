// See https://kit.svelte.dev/docs/types#app

import type { Event, Projects, ProjectTag } from "$lib/cms";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      allProject: Project[];
      allProjectTag: ProjectTag[];
      allEvent: Event[];
    }
    // interface Platform {}
  }
}

export {};
