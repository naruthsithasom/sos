<template>
  <div>
    <client-only>
      <!-- <nav
        class="navbar navbar-expand-lg navbar-light bg-light nav-border-buttom p-0"
      >
        <div class="container-fluid toggle-bg p-nav">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <span class="nav-menu-logo">
              <img
                class="toggle-img"
                src="~/assets/images/logo.png"
                width="150px"
              />
            </span>
            <span class="nav-menu-lg">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 toggle-nav-link">
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/"
                    ><p>HOME</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/markets"
                    ><p>MARKETS</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/exchange"
                    ><p>EXCHANGE</p></a
                  >
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link toggle-text" aria-current="page" href="/register"
                    ><p>REGISTER</p></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    v-b-modal.modal-center
                    class="nav-link toggle-text"
                    aria-current="page"
                    href="#"
                  >
                    <i class="fa fa-user cl-g" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div>
            <b-modal id="modal-center" centered title="Login" @ok="handleOk">
              <div class="my-4">
                <b-container fluid>
                  <b-row class="my-1">
                    <b-col sm="2">
                      <label><small> USER</small></label>
                    </b-col>
                    <b-col sm="10">
                      <b-form-input
                        v-model="form.username"
                        size="sm"
                        placeholder=""
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="2">
                      <label><small>PASSWORD</small></label>
                    </b-col>
                    <b-col sm="10">
                      <b-form-input
                        v-model="form.password"
                        size="sm"
                        placeholder=""
                        type="password"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="2"></b-col>
                    <b-col sm="5" class="text-center">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="form.readme"
                        value="yes"
                        unchecked-value="not_accepted"
                      >
                        Remember ME
                      </b-form-checkbox>
                    </b-col>
                    <b-col sm="5" class="text-center"
                      ><a href="#">Forget password?</a></b-col
                    >
                  </b-row>
                </b-container>
              </div>
            </b-modal>
          </div>
        </div>
      </nav> -->

      <Nuxt />

      <!-- <footer class="container-fluid p-0 ">
        <div class="row footer-box4 mx-0 px-0 d-flex align-items-center px-4">
          <div class="col-4 text-center px-0">
            <p class="text-white">2020 SOSNATION All Right Reserved</p>
          </div>
          <div class="col-4 text-center p-0 m-0">
            <img src="~/assets/images/wgc.png" alt="" width="120px"/>
          </div>
          <div class="col-4 text-center p-0 m-0">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link " href="#"><p class="text-white">HOME</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><p class="text-white">MARKETS</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#"><p class="text-white">EXCHANGE</p></a>
              </li>
            </ul>
          </div>
        </div>
      </footer > -->
    </client-only>
  </div>
</template>
<script>
export default {
  components: {
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

        form:{
        username: "",
        password: "",
        readme:"no",
      },
    }
  },
  async mounted() {
 
  },
  watch: {
  
  },
  methods: {
     handleOk(){
      console.log("Login>>",JSON.stringify(this.form))
    },
  },
}
</script>
 <style>
</style>
