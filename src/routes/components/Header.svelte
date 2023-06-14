<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import FiniamLogo from "$lib/components/FiniamLogo.svelte";
  import { slide } from "svelte/transition";
  import MobileNav from "./MobileNav.svelte";

  let mobileNavOpen = false;
  let headerHidden = false;
  let y = 0;
  let prevY = 0;

  function handleScroll() {
    headerHidden = y > prevY;
    prevY = y;
  }
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY={y} />
<header
  class="root fixed left-0 top-6 right-0 m-auto max-w-layout px-4 lg:px-7 flex justify-between items-center z-10"
  class:header-hidden={headerHidden && y > 50}
>
  <a
    href="/"
    title="Finiam"
    class="block z-20 transition-color"
    class:text-f-beige={mobileNavOpen}
    class:text-f-dark-gray={!mobileNavOpen}
  >
    <FiniamLogo />
  </a>
  <nav
    class="hidden lg:flex p-0 w-fit h-full bg-transparent items-center gap-14 text-f-base flex-row"
  >
    <a
      class="text-f-2xl lg:text-f-base opacity-60 hover:opacity-100 text-f-beige lg:text-f-dark-gray"
      href="https://finiam.com">Home</a
    >
    <a
      class="text-f-2xl lg:text-f-base opacity-60 hover:opacity-100 text-f-beige lg:text-f-dark-gray"
      href="https://finiam.com/about">About</a
    >
    <a
      class="text-f-2xl lg:text-f-base opacity-60 hover:opacity-100 text-f-beige lg:text-f-dark-gray"
      href="https://finiam.com/work">Work</a
    >
    <a
      class="text-f-2xl lg:text-f-base opacity-60 hover:opacity-100 text-f-beige lg:text-f-dark-gray"
      href="https://blog.finiam.com/">Blog</a
    >
    <Button
      href="https://calendly.com/jfsgomes/meet-and-greet"
      target="_blank"
      className="text-f-xl mt-16 lg:m-0 lg:text-f-base bg-f-orange"
      bgColor="#ed7a5f"
    >
      Let's talk
    </Button>
  </nav>
  <button
    type="button"
    class="btn-toggle flex lg:hidden flex-col justify-between z-20 transition-color"
    class:text-f-dark-gray={!mobileNavOpen}
    class:text-f-beige={mobileNavOpen}
    class:btn-toggle-open={mobileNavOpen}
    on:click={() => (mobileNavOpen = !mobileNavOpen)}
  >
    <span />
    <span />
  </button>

  {#if mobileNavOpen}
    <MobileNav />
  {/if}
</header>

<style>
  .root {
    transition: all 0.2s ease;
  }
  .transition-color {
    transition: color 0.5s ease;
  }
  .header-hidden {
    transform: translateY(-100%);
    opacity: 0;
  }
  .btn-toggle {
    width: 3rem;
    height: 1rem;
  }
  .btn-toggle span {
    width: 100%;
    height: 3px;
    background: currentColor;
    transition: transform 0.4s ease;
  }
  .btn-toggle-open {
    scale: 0.8;
  }
  .btn-toggle-open span:first-of-type {
    transform: translateY(6px) rotateZ(45deg);
  }
  .btn-toggle-open span:last-of-type {
    transform: translateY(-6px) rotateZ(-45deg);
  }
</style>
