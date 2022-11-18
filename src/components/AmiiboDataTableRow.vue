<script setup>
  const props = defineProps({
    amiibo : {
      type : Object
    }
  })
</script>

<template>
  <tr>
    <td>{{ props.amiibo.character }}</td>
    <td>{{ props.amiibo.gameSeries }}</td>
    <td>
      <RouterLink :to="{name: 'amiiboDetails',params :{ amiiboTail : props.amiibo.tail}}"><button>Voir</button></RouterLink>
    </td>
  </tr>
</template>

<style scoped>

</style>