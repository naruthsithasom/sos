<template>
  <div class="contanier">
    <div v-for="t in ticket" :key="t.id">
      <h2>{{ t.id}}: {{ t.last }} "</h2>
    </div>
  </div>
</template>
<script>
export default {

async asyncData({ $axios }){
     const ticket = await $axios.$get("/api/market/ticker")
    return  {ticket}
  }
 }
</script>