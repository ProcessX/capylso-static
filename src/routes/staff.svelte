<script context="module">
  import Instructor from "$lib/staffMember/Instructor.svelte";
  import TeamMember from "$lib/staffMember/TeamMember.svelte";

  import * as staff from "../utils/staff.json";

  export const prerender = true;
</script>

<svelte:head>
  <title>Staff | Calypso2</title>
</svelte:head>

<section class="pt-20">
  <div class="grid-container">
    <div class="col-layout col-span-6">
      <h1 class="heading heading-1">
        Staff <span class="text-primary-500">&</span> moniteurs
      </h1>
      <p class="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
        egestas dapibus. Curabitur imperdiet, ipsum finibus tempor.
      </p>
    </div>
  </div>
</section>

<section>
  <div class="grid-container">
    <h2 class="heading heading-2 col-layout col-span-12">
      <span class="text-primary-500">Nos</span> moniteurs
    </h2>
    <ul class="col-layout col-span-12 col-start-2 grid grid-cols-2">
      {#each staff.instructors as instructor}
        <li>
          <Instructor
            firstname={instructor.firstname}
            lastname={instructor.lastname}
            qualifications={instructor.qualifications}
          />
        </li>
      {/each}
    </ul>
  </div>
</section>

<section>
  <div class="grid-container">
    <h2 class="heading heading-2 col-layout col-span-12 text-center">
      Le reste de
      <span class="text-primary-500">l'équipe</span>
    </h2>
  </div>
  <ul class="col-layout col-span-12 col-start-2 flex justify-center">
    {#each staff.members as member}
      <li>
        <TeamMember firstname={member.firstname} lastname={member.lastname} />
      </li>
    {/each}
  </ul>
</section>

<style>
</style>
