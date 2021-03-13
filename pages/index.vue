<template>
  <div>
    <client-only>
      <Navbar />

      <div class="container-fluid p-0 container-mobile">
        <div>
          <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

          <div class="mt-3">
            Submitted Names:
            <div v-if="submittedNames.length === 0">--</div>
            <ul v-else class="mb-0 pl-3">
              <li v-for="name in submittedNames" >{{ name }}</li>
            </ul>
          </div>

          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Submit Your Name"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
                :state="nameState"
              >
                <b-form-input
                  id="name-input"
                  v-model="name"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
        
        <div class="py-4 bg-text1">
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
        <section class="section1">
          <div class="wrap-section1">
            <div class="my-0 p-0">
              <div class="row mx-0 mx-0">
                <div class="col-md-6 col-sm-6 text-right">
                  <div class="wrap-text1-mobile1">
                    <img src="~/assets/images/star-01.png" class="iconstar" />
                    <button
                      @click="ClickFavorite"
                      class="btn btn-fav btn-text1-mobile mt-2"
                      type=""
                    >
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

              <div v-for="fav in favorites" :key="fav.id" v-show="showFav">
                <div class="row mx-0 mx-0 text-section1 wrap-section-mobile1">
                  <div class="col-md-2 col-sm-2 col-4 pr-0">
                    <span class="">
                      <img
                        class="curren_icon"
                        :src="require(`~/assets/images/symbol/${fav.id}.png`)"
                      />
                    </span>
                    <!-- <span>{{ fav.id }}</span> -->
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
                    <div class="itemPer">
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

        <section class="section2">
          <div class="wrap-section2">
            <div class="row mx-0 px-0">
              <div class="col-lg-6 col-md-6 col-sm-12 px-0 sec2-col1">
                <div class="box1">
                  <div class="row m-0 p-0 h-box1">
                    <div class="col-12 m-0 p-0">3 Step to start</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 px-0 sec2-col2">
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

        <section class="section3">
          <div class="wrap-section3 container-fulid bg-exchange p-0 m-0">
            <div class="row p-0 m-0 h-box3">
              <div class="col-12 col-lg-12 col-md-12 col-sm-12">
                <p class="f-box3">EXCHANGE</p>
              </div>
            </div>

            <div
              class="row p-0 m-0 w-100 d-flex align-items-center"
              style="height: 16.6vh"
            >
              <div class="col-5 col-lg-5 col-md-5 col-sm-5">
                <div>
                  <b-input-group class="m-0 p-0">
                    <b-form-input class="p-0 m-0"></b-form-input>
                    <span class="p-0 m-0">
                      <b-dropdown
                        text="Dropdown"
                        variant="primary"
                        v-for="i in 1"
                        :key="i"
                        class="m-0 p-0"
                      >
                        <b-dropdown-item>Action C</b-dropdown-item>
                        <b-dropdown-item>Action D</b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </b-input-group>
                </div>
              </div>

              <div class="col-2 col-lg-2 col-md-2 col-sm-2">
                <p class="f-box3">></p>
              </div>
              <div class="col-5 col-lg-5 col-md-5 col-sm-5">
                <div>
                  <b-input-group class="m-0 p-0">
                    <b-form-input class="p-0 m-0"></b-form-input>
                    <span class="p-0 m-0">
                      <b-dropdown
                        text="Dropdown"
                        variant="primary"
                        v-for="i in 1"
                        :key="i"
                        class="m-0 p-0"
                      >
                        <b-dropdown-item>Action C</b-dropdown-item>
                        <b-dropdown-item>Action D</b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </b-input-group>
                </div>
              </div>
            </div>

            <div class="row p-0 m-0 h-box3">
              <div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                <button type="button" class="btn btn-outline-light px-5">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
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
            <div class="row footer-box4 mx-0 px-0">
              <div class="col-4 text-center h-box4">
                <p class="text-white">2020 SOSNATION All Right Reserved</p>
              </div>
              <div class="col-4 text-center h-box4 p-0 m-0">
                <img src="~/assets/images/logo_f-01.png" alt="" />
              </div>
              <div class="col-4 text-center h-box4 p-0 m-0">
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">MARKETS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">EXCHANGE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!-- <div class="">
          <div class="row mx-0 mx-0">
            <div class="col-6">
              <h1 class="step">3 Step to start</h1>
            </div>
            <div class="col-1 dash"></div>
            <div class="col-5 text-right">
              <div class="mt-5 mb-5">
                <div class="">
                  <div class="row mx-0 mx-0">
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
                <div class="">
                  <div class="row mx-0 mx-0">
                    <div class="col-2">
                      <img class="icon" src="~/assets/images/money-01.png" />
                    </div>
                    <div class="col-3">
                      <h4 class="textstep">DEPOSITE FUND</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-5"></div>
                <div class="">
                  <div class="row mx-0 mx-0">
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
        </div> -->
        <!-- <div class="container-fulid bg-exchange">
        <div class="textwhite mb-2">
          <h2>EXCHANGE</h2>
        </div>
        <div class="container">
          <div class="row mx-0 mx-0">
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
                     BTC
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/btc-01.png"
                      />
                       BTC</a
                    >
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/eth-01.png"
                      />
                       ETH</a
                    >
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/usdt-01.png"
                      />
                       USDT</a
                    >
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/xrp-01.png"
                      />
                       XRP</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-12">
              <img class="iconarrow mx-0 mx-0" src="~/assets/images/arrow mx-0-01.png" />
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
                     ETH
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/btc-01.png"
                      />
                       BTC</a
                    >
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/eth-01.png"
                      />
                       ETH</a
                    >
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/usdt-01.png"
                      />
                       USDT</a
                    >
                    <a class="dropdown-item" href="#"
                      ><img
                        class="drop_curren_icon"
                        src="~/assets/images/xrp-01.png"
                      />
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
      </div> -->
      </div>
      <!-- <Footer /> -->
    </client-only>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ListMarkets from "../components/table/listMarkets"
export default {
  components: {
    Navbar,
    Footer,
    ListMarkets,
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

      status: true,
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],

      name: "",
      nameState: null,
      submittedNames: [],
    }
  },
  async mounted() {
    await this.$axios.$get(`/api/market/ticker`).then((res) => {
      this.lists = res
      this.favorites = [res.THB_BTC, res.THB_ETH, res.THB_USDT, res.THB_XRP]
      console.log("updated>>", res.THB_BTC.percentChange)
    })
  },
  watch: {
    watchPercentChange(newChange, oldChange) {
      console.log(`new= ${newChange} : old= ${oldChange}`)
    },
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
  checkFormValidity() {
    const valid = this.$refs.form.checkValidity()
    this.nameState = valid
    return valid
  },
  resetModal() {
    this.name = ""
    this.nameState = null
  },
  handleOk(bvModalEvt) {
    // Prevent modal from closing
    bvModalEvt.preventDefault()
    // Trigger submit handler
    this.handleSubmit()
  },
  handleSubmit() {
    // Exit when the form isn't valid
    if (!this.checkFormValidity()) {
      return
    }
    // Push the name to submitted names
    this.submittedNames.push(this.name)
    // Hide the modal manually
    this.$nextTick(() => {
      this.$bvModal.hide("modal-prevent-closing")
    })
  },
}
</script>

<style>
</style>