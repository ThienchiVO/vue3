<script setup>
import { onBeforeMount,ref } from 'vue'
import axios from 'axios'
import AmiiboDataTableRow from '@/components/AmiiboDataTableRow.vue'

const API_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'


const amiiboList = ref([])
const isDataLoading = ref(true)

onBeforeMount(async ()=>{
  const allAmiibo = await axios.get(API_AMIIBO);
  const {data,status} = allAmiibo;
  if(status===200){
    isDataLoading.value=false
  }
  amiiboList.value = data
  console.log(data)
})

</script>

<template>
  <div id="page-wrapper">

    <!-- Main -->
    <section id="main">
      <div class="container">

        <!-- Content -->
        <article class="box post">

          <header>
            <h2>Ma Collection</h2>
            <p v-if="!isDataLoading">Il y a {{amiiboList.amiibo.length}} amiibos</p>
          </header>
            <table>
              <tr>
                <th>Character</th>
                <th>game Series</th>
                <th>Action</th>
              </tr>
              <AmiiboDataTableRow v-for="amiibo in amiiboList.amiibo" :key="amiibo.tail" :amiibo="amiibo"></AmiiboDataTableRow>
            </table>

        </article>

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

<style>

</style>
