<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home | Website</title>
</svelte:head>

<section>
  <h1 class="heading heading-1">Heading 1</h1>
  <h2 class="heading heading-2">Heading 2</h2>
  <p class="paragraph paragraph-xl">Index</p>
  <p class="paragraph paragraph-lg">Index</p>
  <p class="paragraph">Index</p>
  <p class="paragraph paragraph-sm">Index</p>
  <p class="paragraph paragraph-xs">Index</p>
  <a class="btn btn-lg btn-primary btn-outline">Button</a>
  <div class="grid-container">
    <a class="btn btn-lg btn-outline">Button</a>
  </div>

  <div class="grid-container mb-4">
    <p class="col-layout col-span-6 bg-gray-300">test</p>
    <p class="col-layout col-span-6 bg-gray-300">test</p>
  </div>
  <div class="grid-container mb-4">
    <p class="col-layout col-layout-left col-span-7 bg-gray-300">test</p>
  </div>
</section>

<style>
</style>
