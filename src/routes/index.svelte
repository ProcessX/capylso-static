<script context="module">
  import Counter from "$lib/Counter.svelte";
  export const prerender = true;
</script>

<svelte:head>
  <title>Accueil | Patro de Glimes</title>
</svelte:head>

<section>
  <div class="grid grid-container">
    <div class="col-span-1">
      <p>l</p>
    </div>
    <div class="col-span-25">
      <p>a</p>
    </div>
  </div>
  <div class="grid-container">
    <div class="row">
      <h1 class="heading heading-1">
        Un patro jeune près de <spans class="text-lime-500">chez toi</spans>
      </h1>
      <p class="paragraph paragraph-base">
        Lance-toi dans un mouvement de jeunesse qui bouge.
      </p>
      <p class="paragraph paragraph-base">
        Ouvert à tous, pour les enfants de 5 à 18 ans.
      </p>
      <div>
        <a href="">S'inscrire</a>
        <a href="">Nous contacter</a>
      </div>
    </div>
  </div>
</section>

<section>
  <h2 class="heading heading-2">Le patro, c'est quoi&nbsp?</h2>
  <p class="heading heading-5 text-amber-500">
    Un mouvement de jeunesse pour tous.
  </p>
  <p class="paragraph paragraph-base">
    Au patro de Glimes, nous nous rassemblons un samedi sur deux pour jouer et
    rire ensemble.
  </p>
  <p class="paragraph paragraph-base">
    Peu importe ton âge, si tu veux faire des rencontres dans la bonne humeur,
    notre patro est fait pour toi.
  </p>
  <div>
    <a href="">Infos utiles</a>
    <a href="">Quoi de neuf ?</a>
  </div>
</section>

<section>
  <h2 class="heading heading-2">Viens essayer&nbsp!</h2>
  <p class="heading heading-5 text-lime-500">
    Une après-midi gratuite, sans inscription.
  </p>
  <p class="paragraph paragraph-base">
    Vous hésitez ? Pour que chaque enfant puisse se faire une idée, nous vous
    offrons une après-midi d’animation. Pas besoin de s’inscrire, vous pouvez
    même passer à l’improviste.
  </p>
  <div>
    <a href="">Le calendrier</a>
    <a href="">Nous trouver</a>
  </div>
</section>

<style>
</style>
