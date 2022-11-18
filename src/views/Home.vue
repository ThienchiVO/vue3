<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="page-wrapper">

    <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>

    <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <section class="middle">
            <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"/>
            <header>
              <h2>character</h2>
            </header>
            <p>gameSeries</p>
          </section>
        </div>
        <div class="col-4 col-12-medium">
          <section class="middle">
            <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"/>
            <header>
              <h2>character</h2>
            </header>
            <p>gameSeries</p>
          </section>
        </div>
        <div class="col-4 col-12-medium">
          <section class="middle">
            <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"/>
            <header>
              <h2>character</h2>
            </header>
            <p>gameSeries</p>
          </section>
        </div>
      </div>
      <footer>
        <ul class="actions">
          <li><RouterLink to="/amiiboList" class="button large">Liste complète</RouterLink></li>
        </ul>
      </footer>
    </section>

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Copyright -->
            <div id="copyright">
              <ul class="links">
                <li>&copy;AmiiVue ~ Sciences U Lyon . All rights reserved.</li>
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>
