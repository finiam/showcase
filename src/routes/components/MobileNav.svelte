<script>
  import Button from "$lib/components/Button.svelte";
  import { slide } from "svelte/transition";
</script>

<nav
  class="fixed inset-0 w-full h-screen bg-f-dark-gray flex flex-col pt-24 px-4 gap-5"
  transition:slide
>
  <a class="text-f-2xl opacity-40 text-f-beige" href="https://finiam.com"
    >Home</a
  >
  <a class="text-f-2xl opacity-40 text-f-beige" href="https://finiam.com/about"
    >About</a
  >
  <a class="text-f-2xl opacity-40 text-f-beige" href="https://finiam.com/work"
    >Work</a
  >
  <a class="text-f-2xl opacity-40 text-f-beige" href="https://blog.finiam.com/"
    >Blog</a
  >
  <footer class="mt-10">
    <Button
      href="https://calendly.com/jfsgomes/meet-and-greet"
      target="_blank"
      bgColor="#ed7a5f"
      className="text-f-xl"
    >
      Let's talk
    </Button>
  </footer>
</nav>
