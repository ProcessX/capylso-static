<script>
  import { page } from "$app/stores";
</script>

<header
  class="w-screen flex justify-between py-2 px-4 border-b-2 border-gray-100 fixed top-0 left-0 bg-white"
>
  <a class="flex flex-nowrap gap-4 items-center cursor-pointer">
    <div>Logo</div>
    <span class="heading heading-4 hidden tablet:block"
      >Patro de <span class="text-primary-500">Glimes</span></span
    >
  </a>

  <nav class="hidden desktop:flex gap-6 items-center">
    <ul class="flex gap-6 items-center leading-4 font-medium">
      <li>
        <a
          class="cursor-pointer hover:text-primary-500  transition-colors duration-200"
          >Infos</a
        >
      </li>
      <li>
        <a
          class="cursor-pointer hover:text-primary-500  transition-colors duration-200"
          >Documents</a
        >
      </li>
      <li>
        <a
          class="cursor-pointer hover:text-primary-500  transition-colors duration-200"
          >News</a
        >
      </li>
      <li>
        <a
          class="cursor-pointer hover:text-primary-500  transition-colors duration-200"
          >Calendrier</a
        >
      </li>
      <li>
        <a
          class="cursor-pointer hover:text-primary-500  transition-colors duration-200"
          >Staff</a
        >
      </li>
      <li>
        <a
          class="cursor-pointer hover:text-primary-500  transition-colors duration-200"
          >Galerie</a
        >
      </li>
    </ul>
    <ul class="flex gap-4">
      <li>
        <a class="btn bg-secondary-500 hover:bg-secondary-600">Contact</a>
      </li>
    </ul>
  </nav>

  <button class="desktop:hidden">Burger</button>

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
