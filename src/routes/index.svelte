<script context="module">
  import Counter from "$lib/Counter.svelte";
  export const prerender = true;
</script>

<svelte:head>
  <title>Accueil | Patro de Glimes</title>
</svelte:head>

<section>
  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h1 class="heading heading-1">
        Un patro jeune près de <spans class="text-primary-500">chez toi</spans>
      </h1>
      <p class="paragraph paragraph-base">
        Lance-toi dans un mouvement de jeunesse qui bouge.
      </p>
      <p class="paragraph paragraph-base">
        Ouvert à tous, pour les enfants de 5 à 18 ans.
      </p>
      <div class="flex gap-4 flex-wrap">
        <a href="" class="btn btn-lg bg-primary-500 hover:bg-primary-600"
          >S'inscrire</a
        >
        <a
          href=""
          class="btn btn-lg border-2 border-primary-100 bg-transparent text-primary-500 hover:bg-primary-50"
          >Nous contacter</a
        >
      </div>
    </div>
  </div>
</section>

<section>
  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h2 class="heading heading-2">Le patro, c'est quoi&nbsp?</h2>
      <p class="heading heading-5 text-secondary-500">
        Un mouvement de jeunesse pour tous.
      </p>
      <p class="paragraph paragraph-base">
        Au patro de Glimes, nous nous rassemblons un samedi sur deux pour jouer
        et rire ensemble.
      </p>
      <p class="paragraph paragraph-base">
        Peu importe ton âge, si tu veux faire des rencontres dans la bonne
        humeur, notre patro est fait pour toi.
      </p>
      <div class="flex gap-4">
        <a href="" class="btn btn-lg bg-secondary-500 hover:bg-secondary-600"
          >Infos utiles</a
        >
        <a
          href=""
          class="btn btn-lg border-2 border-secondary-100 bg-transparent text-secondary-500 hover:bg-secondary-50"
          >Quoi de neuf ?</a
        >
      </div>
    </div>
  </div>

  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h2 class="heading heading-2">Viens essayer&nbsp!</h2>
      <p class="heading heading-5 text-primary-500">
        Une après-midi gratuite, sans inscription.
      </p>
      <p class="paragraph paragraph-base">
        Vous hésitez ? Pour que chaque enfant puisse se faire une idée, nous
        vous offrons une après-midi d’animation. Pas besoin de s’inscrire, vous
        pouvez même passer à l’improviste.
      </p>
      <div class="flex gap-4">
        <a href="" class="btn btn-lg bg-primary-500 hover:bg-primary-700"
          >Le calendrier</a
        >
        <a
          href=""
          class="btn btn-lg border-2 border-primary-100 bg-transparent text-primary-500 hover:bg-primary-50"
          >Nous trouver</a
        >
      </div>
    </div>
  </div>
</section>

<style>
</style>
