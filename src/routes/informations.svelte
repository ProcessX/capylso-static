<script>
  // your script goes here

  import EssentialInfo from "$lib/essentialInfo/EssentialInfo.svelte";
  import CollapsableQuestion from "$lib/faq/CollapsableQuestion.svelte";
  import RegisterStep from "$lib/registerStep/RegisterStep.svelte";

  const essentialInfos = [
    {
      heading: "Où ?",
      detail: ["Rue de la tombe romaine", "1315 Glimes"],
      link: {
        url: "#",
        label: "Google Maps",
      },
    },
    {
      heading: "Quand ?",
      detail: ["Un samedi sur deux", "De 14h à 17h30"],
      link: {
        url: "#",
        label: "Calendrier",
      },
    },
    {
      heading: "Pour qui ?",
      detail: ["Tous les enfants", "De 5 à 18 ans"],
      link: {
        url: "#",
        label: "S’inscrire",
      },
    },
  ];

  const registerSteps = [
    {
      heading: "Nous contacter",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit egestas dapibus. Curabitur imperdiet",
      link: {
        url: "#",
        label: "Contact",
      },
    },
    {
      heading: "Faire un essai",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit egestas dapibus. Curabitur imperdiet",
      link: {
        url: "#",
        label: "Prochaine réunion",
      },
    },
    {
      heading: "Remplir les documents",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit egestas dapibus. Curabitur imperdiet",
      link: {
        url: "#",
        label: "Les documents",
      },
    },
    {
      heading: "Régler la côtisation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit egestas dapibus. Curabitur imperdiet",
      link: {
        url: "#",
        label: "Faire le virement",
      },
    },
  ];

  const faq = [
    {
      question: "Question ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ut lorem at accumsan.",
    },
    {
      question: "Question ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ut lorem at accumsan.",
    },
    {
      question: "Question ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ut lorem at accumsan.",
    },
    {
      question: "Question ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ut lorem at accumsan.",
    },
    {
      question: "Question ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ut lorem at accumsan.",
    },
  ];
</script>

<svelte:head>
  <title>Infos | Patro de Glimes</title>
</svelte:head>

<section>
  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h1 class="heading heading-1">Informations</h1>
      <p class="paragraph paragraph-base">
        Tout ce que vous avez besoin de savoir sur notre patro.
      </p>
      <p class="paragraph paragraph-base">
        Pour plus de détails, n’hésitez pas à contacter notre staff.
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
  <ul class="grid grid-container">
    <li class="col-start-2 col-end-5 tablet:col-end-14 laptop:col-end-6">
      <EssentialInfo
        heading={essentialInfos[0].heading}
        detail={essentialInfos[0].detail}
        link={essentialInfos[0].link}
      />
    </li>
    <li
      class="col-start-2 col-end-5 tablet:col-end-14 laptop:col-start-6 laptop:col-end-10"
    >
      <EssentialInfo
        heading={essentialInfos[1].heading}
        detail={essentialInfos[1].detail}
        link={essentialInfos[1].link}
      />
    </li>
    <li
      class="col-start-2 col-end-5 tablet:col-end-14 laptop:col-start-10 laptop:col-end-14"
    >
      <EssentialInfo
        heading={essentialInfos[2].heading}
        detail={essentialInfos[2].detail}
        link={essentialInfos[2].link}
      />
    </li>
  </ul>
</section>

<section>
  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h2 class="heading heading-2">Comment s'inscrire ?</h2>
      <p class="heading heading-5 text-primary-500">
        Nous rejoindre en quelques étapes.
      </p>
      <p class="paragraph paragraph-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        turpis ipsum, mattis at rhoncus a, interdum vitae quam.
      </p>
    </div>
    <ul
      class="gap-y-12 pt-16 border-t-2 border-gray-100 col-start-2 col-end-5 tablet:col-end-14 grid grid-cols-1  laptop:grid-cols-2 laptop:gap-x-6"
    >
      {#each registerSteps as step, i}
        <li>
          <RegisterStep nbr={i + 1} infos={step} />
        </li>
      {/each}
    </ul>
  </div>
</section>

<section>
  <div class="grid grid-container">
    <div class="col-start-2 col-end-5 tablet:col-end-14">
      <h2 class="heading heading-2">Questions courantes</h2>
      <ul class="grid grid-cols-1 gap-y-2">
        {#each faq as question, i}
          <li>
            <CollapsableQuestion nbr={i + 1} content={question} />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  /* your styles go here */
</style>
