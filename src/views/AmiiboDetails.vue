<script setup>
  import { useRoute } from 'vue-router';
  import { onBeforeMount,ref } from 'vue'
  import axios from 'axios'

  const API_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'

  const route = useRoute()
  const currentAmiibo = ref({})

  onBeforeMount(async ()=>{

    const oneAmiibo = await axios.get(API_AMIIBO+'/?tail='+route.params.amiiboTail)
    const {data} = oneAmiibo;
    currentAmiibo.value = data;

    console.log(currentAmiibo.value);
  })
</script>

<template>
  <div id="page-wrapper">

    <!-- Main -->
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium">

            <!-- Sidebar -->
            <section class="box">
              <header>
                <h3>Infos</h3>
              </header>
              <p> amiiboSeries: <b>amiiboSeries</b> <br/>
                character: Cube<br/>
                gameSeries: Animal Crossing<br/>
                type: card
              </p>

            </section>
            <section class="box">
              <header>
                <h3>Dates sorties</h3>
              </header>

              <ul class="divided">
                <li>au: 2016-03-19</li>
                <li>eu: 2016-03-18</li>
                <li></li>
                <li></li>
              </ul>

            </section>

          </div>
          <div class="col-8 col-12-medium imp-medium">

            <!-- Content -->
            <article class="box post">
              <a href="#" class="featured"><img
                  src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_04610001-01610502.png"
                  alt=""/></a>
              <header>
                <h2>Name</h2>
                <p>type</p>
              </header>


            </article>

          </div>
        </div>
      </div>
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



<style scoped>

</style>