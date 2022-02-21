<script>
  // your script goes here
  import Logo from "./Logo.svelte";
  import * as menu from "../../../utils/headerMenu.json";
  import Link from "./Link.svelte";
  console.log(menu);
</script>

<!-- markup (zero or more items) goes here -->
<nav>
  <Logo />
  <ul>
    {#each menu.links as link}
      <li>
        <Link URL={link.URL} label={link.label} />
      </li>
    {/each}
  </ul>
  <ul>
    <li>
      <a class="btn">Btn</a>
    </li>
  </ul>
</nav>

<style>
  /* your styles go here */
</style>
