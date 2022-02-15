<script>
  import { page } from "$app/stores";
</script>

<header>
  <p>Header</p>

  <a>
    <div>Logo</div>
    <span>Patro de Glimes</span>
  </a>

  <nav>
    <ul>
      <li>
        <a>Infos</a>
      </li>
      <li>
        <a>Documents</a>
      </li>
      <li>
        <a>News</a>
      </li>
      <li>
        <a>Calendrier</a>
      </li>
      <li>
        <a>Staff</a>
      </li>
      <li>
        <a>Galerie</a>
      </li>
    </ul>
    <ul>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  </nav>

  <button>Burger</button>

  <!--
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
	
	</nav>
-->
</header>

<style>
</style>
