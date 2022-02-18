<script>
  // your script goes here
  export let nbr = "?";
  export let infos = {
    heading: "Step title",
    content: "Content",
    link: {
      url: null,
      label: "Link",
    },
  };
</script>

<!-- markup (zero or more items) goes here -->
<div>
  <span
    class="rounded-md mb-4 heading heading-5 h-8 w-8 flex justify-center items-center bg-primary-500 text-white"
    >{nbr}</span
  >
  <h4 class="heading heading-4 mb-2">{infos.heading}</h4>
  <p class="paragraph paragraph-base">{infos.content}</p>
  {#if infos.link.url}
    <a class="link mt-2 inline-block">{infos.link.label}</a>
  {/if}
</div>

<style>
  /* your styles go here */
</style>
