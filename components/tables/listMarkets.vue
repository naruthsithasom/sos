<template>
  <div>
    <client-only>
      <section class="section1 py-5 m-p0">
        <div class="wrap-section1">
          <div class="my-0 p-0">
            <div class="row mx-0 mx-0">
              <div class="col-md-6 col-sm-6 text-right">
                <div class="wrap-text1-mobile1">
                  <img src="~/assets/images/star-01.png" class="iconstar" />
                  <button @click="ClickFavorite" class="btn mt-2" type="">
                    <h5>FAVORITE</h5>
                  </button>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 text-left">
                <div class="wrap-text1-mobile1">
                  <button
                    @click="ClickAllMarkets"
                    class="btn btn-market btn-text1-mobile mt-2"
                    type=""
                  >
                    <h5>MARKETS</h5>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 pb-3 w-100">
            <div class="row mx-0 mx-0 text-section1 wrap-section-mobile1">
              <div class="col-md-2 col-sm-2 px-0 col-4 m-text-right">
                <span class="text-new">CURRENCY</span>
              </div>
              <div class="col-md-2 col-sm-2 text-right col-4 m-text-center">
                <span class="text-new">LAST PRICE</span>
              </div>
              <div class="col-md-2 col-sm-2 col-4 m-text-right">
                <span class="text-new text-left">CHANGE</span>
              </div>
              <div class="col-md-2 col-sm-2 text-right col-4 m-text-center">
                <span class="text-new">24Hr. VOLUME</span>
              </div>
              <div class="col-md-2 col-sm-2 text-right col-4 m-text-center">
                <span class="text-new">24Hr. HIGH (THB)</span>
              </div>
              <div class="col-md-2 col-sm-2 text-right col-4 m-text-center">
                <span class="text-new t">24Hr. LOW (THB)</span>
              </div>
            </div>

            <div v-for="fav in favorites" :key="fav" v-show="showFav">
              <div class="row mx-0 mx-0 text-section1 wrap-section-mobile1">
                <div class="col-md-2 col-sm-2 col-4 pr-0">
                  <span class="">
                    <img
                      class="curren_icon"
                      :src="require(`~/assets/images/symbol/${fav.id}.png`)"
                    />
                  </span>
                   <span class="">{{ fav.id === 1 ? "BTC" : null }}</span>
                  <span class="">{{ fav.id === 2 ? "ETH" : null }}</span>
                  <span class="">{{ fav.id === 8 ? "USDT" : null }}</span>
                  <span class="">{{ fav.id === 10 ? "XRP" : null }}</span>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p
                    class="text-right text-success"
                    v-if="fav.percentChange >= 0"
                  >
                    {{ fav.last.toFixed(4) }}
                  </p>
                  <p
                    class="text-right text-danger"
                    v-if="fav.percentChange < 0"
                  >
                    {{ fav.last.toFixed(4) }}
                  </p>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="curren_icon"
                      src="~/assets/images/down-01.png"
                      v-if="fav.change < 0"
                    />
                    <img
                      class="curren_icon"
                      src="~/assets/images/up.png"
                      v-if="fav.change >= 0"
                    />

                    <span class="text-danger" v-if="fav.percentChange < 0"
                      >{{ fav.percentChange.toFixed(2) }} %</span
                    >
                    <span class="text-success" v-if="fav.percentChange >= 0"
                      >{{ fav.percentChange.toFixed(2) }} %</span
                    >
                  </div>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p class="text-right text-primary">
                    {{ fav.baseVolume.toFixed(8) }}
                  </p>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p class="text-right text-success">
                    {{ fav.high24hr.toFixed(2) }}
                  </p>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p class="text-right text-danger">
                    {{ fav.low24hr.toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>

            <div v-for="list in lists" :key="list.id" v-show="showAllMarkets">
              <div class="row mx-0 mx-0 text-section1 wrap-section-mobile1">
                <div class="col-md-2 col-sm-2 col-4 pr-0">
                  <span class="">
                    <img
                      class="curren_icon"
                      :src="require(`~/assets/images/symbol/${list.id}.png`)"
                    />
                  </span>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p
                    class="text-right text-success"
                    v-if="list.percentChange >= 0"
                  >
                    {{ list.last.toFixed(4) }}
                  </p>
                  <p
                    class="text-right text-danger"
                    v-if="list.percentChange < 0"
                  >
                    {{ list.last.toFixed(4) }}
                  </p>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <div class="itemPer">
                    <img
                      class="curren_icon"
                      src="~/assets/images/down-01.png"
                      v-if="list.change < 0"
                    />
                    <img
                      class="curren_icon"
                      src="~/assets/images/up.png"
                      v-if="list.change >= 0"
                    />

                    <span class="text-danger" v-if="list.percentChange < 0"
                      >{{ list.percentChange.toFixed(2) }} %</span
                    >
                    <span class="text-success" v-if="list.percentChange >= 0"
                      >{{ list.percentChange.toFixed(2) }} %</span
                    >
                  </div>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p class="text-right text-primary">
                    {{ list.baseVolume.toFixed(8) }}
                  </p>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p class="text-right text-success">
                    {{ list.high24hr.toFixed(2) }}
                  </p>
                </div>
                <div class="col-md-2 col-sm-2 col-4">
                  <p class="text-right text-danger">
                    {{ list.low24hr.toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      showFav: true,
      showAllMarkets: false,
      listFav: ["BTC", "ETH", "USDT", "XRP"],
      lists: [],
      CURRENCY: "ETH",
    }
  },
  async mounted() {
    await this.$axios
      .$get(`/api/market/ticker`)
      .then((res) => {
        this.lists = res
        this.favorites = [res.THB_BTC, res.THB_ETH, res.THB_USDT, res.THB_XRP]
        //console.log("updated>>", res.THB_BTC.percentChange)
      })
      .catch(() => console.log("api error>>", error))
    console.log("fav>>", this.lists)
  },

  methods: {
    ClickFavorite() {
      this.showAllMarkets = false
      this.showFav = true
    },
    ClickAllMarkets() {
      this.showFav = false
      this.showAllMarkets = true
    },
  },
}
</script>