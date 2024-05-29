<script setup lang="ts">
import Header from './components/Header.vue';

</script>

<template>
  <Header></Header>

  <div class="">
    <div class="snap-x overflow-x-scroll flex space-x-2">
      <div class="snap-start shrink-0 w-64 h-64">
        <img src="@/assets/pexels-egalaxy.jpg" alt="Image 1" class="w-full h-full object-cover">
      </div>
      <div class="snap-start shrink-0 w-64 h-64">
        <img src="@/assets/pexels-katlovessteve.jpg" alt="Image 2" class="w-full h-full object-cover">
      </div>
      <div class="snap-start shrink-0 w-64 h-64">
        <img src="@/assets/pexels-pfotenfotograf.jpg" alt="Image 3" class="w-full h-full object-cover">
      </div>
      <div class="snap-start shrink-0 w-64 h-64">
        <img src="@/assets/pexels-pixabay.jpg" alt="Image 4" class="w-full h-full object-cover">
      </div>
    </div>
  </div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Sobre</RouterLink>
  </nav>


  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
