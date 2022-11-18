<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- Header -->
    <section id="header">

      <!-- Logo -->
      <h1><a href="index.html">AmiiVue</a></h1>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current"><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/amiiboList">Liste Amiibo</RouterLink></li>
        </ul>
      </nav>
    </section>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
