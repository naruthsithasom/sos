<template>
  <div>
    <client-only>
      <NavbarIndex/>
      <div class="container-fluid p-0 container-mobile">
        <div class="py-5 bg-text1">
          <div class="row wrap-text1">
            <div class="col-md-6 col-sm-6">
              <div class="col-12 my-4 text-center">
                <div class="headtext-new">
                  <h2>MARKETS</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="col-12 my-4">
                <div class="form-group row mx-0 mx-0">
                  <label
                    class="col-sm-2 col-form-label col-2 text-right hide-search"
                  >
                    <img
                      src="~/assets/images/search-01.png"
                      style="width: 20px"
                      class=""
                    />
                  </label>
                  <div class="col-sm-10 col-12 px-0">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <ListMarkets /> -->

      <div class="py-4 m-p-hide"></div>
      <div class="container-fluid p-0 container-mobile">
        <section class="section2">
          <div class="wrap-section2">
            <div class="row mx-0 px-0">
              <div class="col-lg-6 col-md-6 col-sm-12 px-0">
                <div class="box1">
                  <div class="row m-0 p-0 h-box1">
                    <div class="col-12 m-0 p-0">3 Step to start</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 px-0">
                <div class="box2">
                  <div class="row p-0 m-0 h-box2">
                    <div class="col-5 p-0 m-0 text-center">
                      <img src="~/assets/images/admin-01.png" alt="" />
                    </div>
                    <div class="col-7 p-0 m-0">LOGIN</div>
                  </div>
                  <div class="row p-0 m-0 h-box2">
                    <div class="col-5 p-0 m-0 text-center">
                      <img src="~/assets/images/money-01.png" alt="" />
                    </div>
                    <div class="col-7 p-0 m-0">DEPOSITE FUND</div>
                  </div>
                  <div class="row p-0 m-0 h-box2">
                    <div class="col-5 p-0 m-0 text-center">
                      <img src="~/assets/images/graph-01.png" alt="" />
                    </div>
                    <div class="col-7 p-0 m-0">TRANDING</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="py-4 m-p-hide"></div>
      </div>
      <div class="container-fluid p-0 container-mobile">
        <section class="section3">
          <div class="wrap-section3 container-fulid bg-exchange p-0 m-0">
            <div class="row p-0 m-0 h-box3">
              <div class="col-12 col-lg-12 col-md-12 col-sm-12 m-p2">
                <p class="f-box3">EXCHANGE</p>
              </div>
            </div>

            <div
              class="row p-0 m-0 w-100 d-flex align-items-center p-box3-inline"
            >
              <div class="col-12 col-lg-5 col-md-5 col-sm-12">
                <div class="f-box3 text-center pb-5 m-p0">Sell</div>
                <div class="m-p2">
                  <b-input-group class="m-0 p-0">
                    <b-form-input class="p-0 m-0"></b-form-input>
                    <span class="p-0 m-0">
                      <b-dropdown
                        :text="CURRENCY"
                        variant="primary"
                        class="m-0 p-0"
                      >
                        <b-dropdown-item
                          ><img
                            src="~/assets/images/btc-01.png"
                            width="20"
                          />BTC</b-dropdown-item
                        >
                        <b-dropdown-item>Action D</b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </b-input-group>
                </div>
              </div>

              <div class="col-12 col-lg-2 col-md-2 col-sm-12">
                <p class="f-box3 m-p-hide">></p>
              </div>
              <div class="col-12 col-lg-5 col-md-5 col-sm-12">
                <div class="f-box3 text-center pb-5 m-p0">Revicer</div>
                <div class="m-p2">
                  <b-input-group class="m-0 p-0">
                    <b-form-input class="p-0 m-0"></b-form-input>
                    <span class="p-0 m-0">
                      <b-dropdown
                        text="list"
                        variant="primary"
                        v-for="i in 1"
                        :key="i"
                        class="m-0 p-0"
                      >
                        <div v-for="list in listFav" :key="list">
                          <b-dropdown-item v-model="recieve"
                            ><img
                              src="~/assets/images/btc-01.png"
                              width="20"
                            />{{ list }}</b-dropdown-item
                          >
                          <!-- <b-dropdown-item>Action D</b-dropdown-item> -->
                        </div>
                      </b-dropdown>
                    </span>
                  </b-input-group>
                </div>
              </div>
            </div>

            <div class="row p-0 m-0 h-box3">
              <div
                class="col-12 col-lg-12 col-md-12 col-sm-12 text-center m-p2"
              >
                <button type="button" class="btn btn-outline-light px-5">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="container-fluid p-0 container-mobile">
        <section class="section4">
          <div class="wrap-section4">
            <div class="row mx-0 px-0">
              <div
                class="col-12 text-center h-box4 p-0 m-0"
                style="font-size: 2rem"
              >
                STAR TRADE NOW
              </div>
            </div>
            <div class="row h-box4-sub mx-0 px-0">
              <div class="col-6 text-right p-0 m-0">
                <button type="button" class="btn btn-outline-warning px-5 mx-5">
                  Tradew Now
                </button>
              </div>
              <div class="col-6 text-left p-0 m-0">
                <button type="button" class="btn btn-outline-warning px-5 mx-5">
                  Register
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </client-only>
  </div>
</template>

<script>
import NavbarIndex from "../components/navbars/navbarIndex"
 import ListMarkets from "../components/tables/listMarkets"
export default {
  components: {
     NavbarIndex,
     ListMarkets,

  },
    head:{
    title: 'home'
},
  data() {
    return {
      showFav: true,
      showAllMarkets: false,
      listFav: ["BTC", "ETH", "USDT", "XRP"],
      favorites: [],
      lists: [],
      RedOrGreen: "",
      watchPercentChange: "",

      CURRENCY: "ETH",
      recieve: "",
    }
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

<style>
</style>