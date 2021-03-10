<template>
  <div>
    <client-only>
      <Navbar />
         <div class="container-fluid">
          <div class="my-5">
            <div class="row">
              <div class="col-md-6">
                <div class="headtext-new">
                  <h2>MARKETS</h2>
                </div>
              </div>
              <div class="col-md-6">
                <div class="">
                  <form class="form-inline">
                    <img
                      src="~/assets/images/search-01.png"
                      style="width: 20px"
                    />
                    <div class="form-group mx-sm-2 mb-2">
                      <input
                        type="text"
                        class="form-control-search"
                        id="inputPassword2"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="mt-5"></div> -->
          <div class="container-fulid my-5">
            <div class="row">
              <div class="col-md-6 text-right">
                <button class="btn btn-fav" type="">
                  <img
                    src="~/assets/images/star-01.png"
                    class="iconstar"
                  /><label class="h5">FAVORITE</label>
                </button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-market" type="">
                  <h5>MARKETS</h5>
                </button>
              </div>
            </div>
          </div>

          <div class="container-fulid mt-5 ">
            <div class="row">
              <div class="col-md-2 col-sm-2 ">
                <h6 class="text">CURRENCY</h6>
              </div>
              <div class="col-md-2 col-sm-2">
                <h6 class="text">LAST PRICE(THB)</h6>
              </div>
              <div class="col-md-2 col-sm-2">
                <h6 class="text">CHANGE</h6>
              </div>
              <div class="col-md-2 col-sm-2">
                <h6 class="text">24H VOLUME</h6>
              </div>
              <div class="col-md-2 col-sm-2">
                <h6 class="text">24H HIGH(THB)</h6>
              </div>
              <div class="col-md-2 col-sm-2">
                <h6 class="text">24H LOW(THB)</h6>
              </div>
            </div>
            <div v-for="t in ticket" :key="t.id">
              <div class="row">
                <div class="col-md-2 col-sm-2">
                   <img
                    class="curren_icon"
                    :src="require(`~/assets/images/symbol/${t.id}.png`)"
                  /><label></label>
                </div>
                <div class="col-md-2 col-sm-2">
                  <h6 class="textred">{{ t.last }}</h6>
                </div>
                <div class="col-md-2 col-sm-2">
                  <h6 class="textred">
                    <img class="curren_icon" src="~/assets/images/up.png" />
                    {{ t.change }}
                  </h6>
                </div>
                <div class="col-md-2 col-sm-2">
                  <h6 class="textblack">{{ t.baseVolume }} </h6>
                </div>
                <div class="col-md-2 col-sm-2">
                  <h6 class="textblack">{{ t.high24hr }}</h6>
                </div>
                <div class="col-md-2 col-sm-2">
                  <h6 class="textblack">{{ t.low24hr }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5"></div>
        <div class="container-fulid">
          <div class="row">
            <div class="col-6">
              <h1 class="step">3 Step to start</h1>
            </div>
            <div class="col-1 dash"></div>
            <div class="col-5 text-right">
              <div class="mt-5 mb-5">
                <div class="container-fulid">
                  <div class="row">
                    <div class="col-2">
                      <img
                        class="iconadmin"
                        src="~/assets/images/admin-01.png"
                      />
                    </div>
                    <div class="col-3">
                      <h3 class="textstep">LOG IN</h3>
                    </div>
                  </div>
                </div>
                <div class="mt-5"></div>
                <div class="container-fulid">
                  <div class="row">
                    <div class="col-2">
                      <img class="icon" src="~/assets/images/money-01.png" />
                    </div>
                    <div class="col-3">
                      <h4 class="textstep">DEPOSITE FUND</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-5"></div>
                <div class="container-fulid">
                  <div class="row">
                    <div class="col-2">
                      <img class="icon" src="~/assets/images/graph-01.png" />
                    </div>
                    <div class="col-3">
                      <h4 class="textstep">TRANDING</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5"></div>
        <div class="container-fulid bg-exchange">
          <div class="textwhite mb-2">
            <h2>EXCHANGE</h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-12">
                <div class="textwhite">
                  <h4>Sell</h4>
                </div>
                <div class="input-group text-center">
                  <input
                    type="text"
                    class="form-controlcurren"
                    aria-label="Text input with dropdown button"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-dropdown dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        class="drop_curren_icon"
                        src="~/assets/images/btc-01.png"
                      />
                      <!-- class="_" -->
                      BTC
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/btc-01.png"
                        />
                        <!-- class="_" -->
                        BTC</a
                      >
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/eth-01.png"
                        />
                        <!-- class="_" -->
                        ETH</a
                      >
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/usdt-01.png"
                        />
                        <!-- class="_" -->
                        USDT</a
                      >
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/xrp-01.png"
                        />
                        <!-- class="_" -->
                        XRP</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-12">
                <img class="iconarrow" src="~/assets/images/arrow-01.png" />
              </div>
              <div class="col-md-5 col-sm-12">
                <div class="textwhite">
                  <h4>Recieve</h4>
                </div>
                <div class="input-group text-center">
                  <input
                    type="text"
                    class="form-controlcurren"
                    aria-label="Text input with dropdown button"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-dropdown dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        class="drop_curren_icon"
                        src="~/assets/images/eth-01.png"
                      />
                      <!-- class="_" -->
                      ETH
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/btc-01.png"
                        />
                        <!-- class="_" -->
                        BTC</a
                      >
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/eth-01.png"
                        />
                        <!-- class="_" -->
                        ETH</a
                      >
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/usdt-01.png"
                        />
                        <!-- class="_" -->
                        USDT</a
                      >
                      <a class="dropdown-item" href="#"
                        ><img
                          class="drop_curren_icon"
                          src="~/assets/images/xrp-01.png"
                        />
                        <!-- class="_" -->
                        XRP</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-submit" type="submit">
              <h5>submit</h5>
            </button>
          </div>
          <div style="padding-bottom: 30px"></div>
        </div>
        <div class="container-fluid bg-grey">
          <div class="textyellow" style="padding-top: 150px">
            <h2>STAR TRADE NOW</h2>
          </div>
          <div class="container text-center">
            <button class="btn btn-trade" type="submit">
              <h5>Trade now</h5>
            </button>
            <button class="btn btn-trade" type="submit">
              <h5>Register now</h5>
            </button>
          </div>
          <div style="padding-bottom: 150px"></div>
        </div>
       <!-- <Footer /> -->
    </client-only>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      ticket: {},
      count: 0,
    }
  },
  async mounted() {
    await this.$axios.$get("/api/market/ticker").then((res) => {
      this.ticket = res
      console.log("tickert>>", res.THB_ABT)
    })
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      //this.count++
      console.log("nextTick")
    })
  },
  methods: {
    showBTC(id, last) {
      let price = ""
      if (id == "1") {
        return (price = last)
      }
    },
  },
}
</script>

<style>
</style>