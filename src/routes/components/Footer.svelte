<script>
  import Button from "$lib/components/Button.svelte";
</script>

<footer
  class="relative bg-f-green px-4 pt-16 lg:pt-32 pb-14 text-f-beige text-f-lg"
>
  <div
    class="absolute inset-0 m-auto -top-20 w-[287px] lg:w-[449px] max-w-full aspect-square bg-f-violet rounded-full z-0"
  />
  <section class="relative max-w-[1208px] mx-auto flex flex-col gap-60">
    <div class="flex flex-wrap gap-5 justify-between items-start">
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
          bgColor="#fff"
        >
          Book a call
        </Button>
        <Button
          href="https://finiam.homerun.co"
          target="_blank"
          bgColor="#dedb7b"
        >
          Join our team
        </Button>
      </div>
    </div>

    <div>
      <h2 class="mb-16 text-f-xl lg:text-f-4xl text-f-beige">
        Let's build the next big thing, together.
      </h2>
      <div class="flex flex-wrap gap-4 items-center">
        <Button
          target="_blank"
          outline
          className="text-f-white"
          href="mailto:contact@finiam.com">contact@finiam.com</Button
        >
        <Button
          target="_blank"
          outline
          className="text-f-white"
          href="https://twitter.com/wearefiniam">TW</Button
        >
        <Button
          target="_blank"
          outline
          className="text-f-white"
          href="https://www.linkedin.com/company/finiam/">IN</Button
        >
        <a
          target="_blank"
          href="https://www.ondastudio.co/"
          class="text-f-lg text-f-beige opacity-50 ml-auto">Shaped by Onda</a
        >
      </div>
    </div>
  </section>
</footer>
