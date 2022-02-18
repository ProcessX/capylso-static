<script context="module">
  import DocContainer from "$lib/docContainer/DocContainer.svelte";

  const docs = [
    {
      title: "Fiche signalétique",
    },
    {
      title: "Fiche médicale",
    },
    {
      title: "Authorisation parentale",
    },
  ];
</script>

<svelte:head>
  <title>Documents | Patro de Glimes</title>
</svelte:head>

<section>
  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h1 class="heading heading-1">Documents</h1>
      <p class="paragraph paragraph-base">
        Retrouvez ici tous les documents pour votre enfant.
      </p>
      <p class="paragraph paragraph-base">
        En cas de question, n’hésitez pas à nous contacter.
      </p>
      <div class="flex gap-4 flex-wrap">
        <a href="" class="btn btn-lg bg-primary-500 hover:bg-primary-600"
          >Nous contacter</a
        >
      </div>
    </div>
  </div>
</section>

<section>
  <div class="grid grid-container">
    <ul class="col-start-2 col-end-5 tablet:col-end-14">
      {#each docs as doc}
        <li class="py-4 border-b-2 border-gray-100 last:border-0">
          <DocContainer title={doc.title} />
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
</style>
