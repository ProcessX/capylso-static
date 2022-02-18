<script>
  // your script goes here
  export let heading = "Heading";
  export let detail = ["Info"];
  export let link = {
    url: null,
    label: "Link",
  };
</script>

<!-- markup (zero or more items) goes here -->

<div class="text-center">
  <h5 class="heading heading-6  text-gray-400">{heading}</h5>
  {#each detail as line}
    <p class="paragraph paragraph-lg font-semibold text-gray-600">
      {line}
    </p>
  {/each}
  {#if link.url}
    <a class="link link-secondary mt-3 inline-block">{link.label}</a>
  {/if}
</div>

<style>
  /* your styles go here */
</style>
