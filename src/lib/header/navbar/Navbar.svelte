<script>
  // your script goes here
  import * as menu from "../../../utils/headerMenu.json";
  import Logo from "./Logo.svelte";
  import Link from "./Link.svelte";
  import LogoFacebook from "/src/assets/icons/logo-facebook.svg";
  import Burger from "/src/assets/icons/burger.svg";
</script>

<!-- markup (zero or more items) goes here -->
<nav class="flex justify-between items-center w-full">
  <Logo />
  <ul class="hidden laptop:flex gap-8">
    {#each menu.links as link}
      <li>
        <Link URL={link.URL} label={link.label} />
      </li>
    {/each}
  </ul>
  <ul class="hidden laptop:flex gap-4">
    <li>
      <a
        href="/"
        class="btn btn-sm btn-icon btn-outline btn-secondary btn-secondary-outline"
        ><LogoFacebook /></a
      >
    </li>
    <li>
      <a href="/" class="btn btn-sm btn-secondary">Contact</a>
    </li>
  </ul>
  <button
    class="laptop:hidden btn btn-sm btn-icon btn-outline btn-secondary btn-secondary-outline"
    ><Burger /></button
  >
</nav>

<style>
  /* your styles go here */
</style>
