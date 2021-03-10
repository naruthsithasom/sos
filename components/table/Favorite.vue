<template>
  <div>
    <h1>Favorite</h1>
    <div v-for="list in lists" :key="list.id" class="row">
      <div class="col-2">
        <h6 class="infor">
          <img class="curren_icon" src="~/assets/images/btc-01.png" /><label
            >Symbols</label
          >
        </h6>
      </div>
      <div class="col-2">
        <h6 class="textred">{{ list.last }}</h6>
      </div>
      <div class="col-2">
        <h6 class="textred">
          <img class="curren_icon" src="~/assets/images/up.png" />
          {{ list.change }}
        </h6>
      </div>
      <div class="col-2">
        <h6 class="textblack">{{ list.baseVolume }} BTC</h6>
      </div>
      <div class="col-2">
        <h6 class="textblack">{{ list.high24hr }}</h6>
      </div>
      <!-- <div class="col-2">
        <h6 class="textblack">{{ llist.low24hr }}</h6>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: {},
    }
  },
  // async updated(){
  //   await this.$axios.$get(`/api/market/ticker`).then(res =>{
  //     this.lists = res
  //   }).catch( error => console.log("tickerr error>>",error))
  // },
  async updated() {
    await this.$axios.$get("/api/market/ticker").then((res) => {
      this.lists = res
      console.log("ticker>>", JSON.stringify(res))
    })
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      //this.count++
      console.log("nextTick")
    })
  },
  methods: {},
}
</script>
<style scoped>
</style>