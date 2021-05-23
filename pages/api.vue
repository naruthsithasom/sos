<template>
  <div class="contanier">
    <client-only>
    <!-- <div v-for="t in ticket" :key="t.id">
      <h2>{{ t.id}}: {{ t.last }} "</h2>
    </div> -->
    <h4>{{ticket}}</h4>
    </client-only>
  </div>
</template>
<script>
export default {

async asyncData({ $axios }){
    //  const ticket = await $axios.$get("/api/market/ticker")
     const ticket = await $axios.$post("https://sosapi.mike.orangeworkshop.info/api/register",{
       username : "deandev",
       email: "naruth@ots.co.th",
       password: "123123"
     })
     return ticket
   }
 }
</script>