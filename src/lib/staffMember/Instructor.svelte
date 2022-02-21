<script>
  // your script goes here
  export let firstname = "John";
  export let lastname = "Doe";
  export let qualifications = [];
</script>

<!-- markup (zero or more items) goes here -->
<div>
  <div>Mugshot</div>
  <div>
    <h5 class="paragraph">
      {firstname} <span class="uppercase">{lastname}</span>
    </h5>
    {#each qualifications as qualification}
      <p class="paragraph paragraph-sm">{qualification}</p>
    {/each}
  </div>
</div>

<style>
  /* your styles go here */
</style>
