<script>
  // your script goes here
  export let title = "Document";
</script>

<!-- markup (zero or more items) goes here -->
<div class="flex flex-col tablet:flex-row items-center">
  <div>
    <h4 class="heading heading-4">{title}</h4>
    <p class="text-gray-400 paragraph paragraph-sm">
      À remplir <span class="text-primary-500 font-medium">X fois</span> / an
    </p>
  </div>
  <a
    class="mt-4 tablet:mt-0 tablet:ml-auto tablet:mr-0 btn border-2 border-primary-100 bg-transparent text-primary-500 hover:bg-primary-50"
    >Télécharger</a
  >
</div>

<style>
  /* your styles go here */
</style>
