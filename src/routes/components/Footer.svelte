<script>
  import Button from "$lib/components/Button.svelte";
</script>

<footer class="relative bg-f-green pt-32 pb-9 text-f-beige text-f-lg">
  <div
    class="absolute inset-0 m-auto w-[449px] h-[449px] bg-f-violet rounded-full z-0"
  />
  <section class="relative max-w-6xl mx-auto flex flex-col gap-60">
    <div class="flex justify-between items-start">
      <ul class="flex flex-col flex-wrap w-56 max-h-36 gap-6">
        <li>
          <a href="https://finiam.com">Finiam</a>
        </li>
        <li>
          <a href="https://finiam.com/about">About</a>
        </li>
        <li>
          <a href="https://finiam.com/work">Work</a>
        </li>
        <li>
          <a href="https://blog.finiam.com">Blog</a>
        </li>
        <li>
          <a href="https://finiam.com/contact">Contact</a>
        </li>
        <li>
          <a href="https://finiam.homerun.co/">Careers</a>
        </li>
      </ul>

      <div class="flex gap-5">
        <Button
          href="https://calendly.com/jfsgomes/meet-and-greet"
          target="_blank"
          className="bg-f-white "
        >
          Book a call
        </Button>
        <Button
          href="https://finiam.homerun.co"
          target="_blank"
          className="bg-f-pistachio"
        >
          Join our team
        </Button>
      </div>
    </div>

    <div>
      <h2 class="mb-16 text-f-3xl text-f-beige">
        Let's build the next big thing, together.
      </h2>
      <div class="flex gap-4 items-center">
        <Button outline className="text-f-white">contact@finiam.com</Button>
        <Button outline className="text-f-white">TW</Button>
        <Button outline className="text-f-white">IN</Button>
        <a
          href="https://ondastudio.co"
          class="text-f-lg text-f-beige opacity-50 ml-auto">Shaped by Onda</a
        >
      </div>
    </div>
  </section>
</footer>
