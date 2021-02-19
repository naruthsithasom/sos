<template>
  <div>
    <Navbarlogin />
    <div style="padding-top: 30px"></div>
    <div class="headt float-left">
      <h2>MARKET</h2>
    </div>
    <div class="float-right space">
      <form class="form-inline">
        <img class="iconsearch" src="~/assets/images/search-01.png" />
        <div class="form-group mx-sm-2 mb-2">
          <input type="text" class="form-control-search" id="inputPassword2" />
        </div>
      </form>
    </div>

    <div class="mt-5"></div>
    <div class="col-12 table mb-3">
      <div class="row">
        <div class="col-6 text-right">
          <button class="btn btn-fav" type="submit">
            <img src="~/assets/images/star-01.png" class="iconstar" /><label
              class="h5"
              >FAVORITE</label
            >
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-market" type="submit">
            <h5>MARKETS</h5>
          </button>
        </div>
      </div>
    </div>

    <div class="container-fulid inforbox">
      <div class="row">
        <div class="col-2">
          <h6 class="text">CURRENCY</h6>
        </div>
        <div class="col-2">
          <h6 class="text">LAST PRICE(THB)</h6>
        </div>
        <div class="col-2">
          <h6 class="text">CHANGE</h6>
        </div>
        <div class="col-2">
          <h6 class="text">24H VOLUME</h6>
        </div>
        <div class="col-2">
          <h6 class="text">24H HIGH(THB)</h6>
        </div>
        <div class="col-2">
          <h6 class="text">24H LOW(THB)</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="infor">
            <img class="curren_icon" src="~/assets/images/btc-01.png" /><label
              >BTC</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textred">334,000</h6>
        </div>
        <div class="col-2">
          <h6 class="textred">
            <img class="curren_icon" src="~/assets/images/down-01.png" />1.01%
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">172.4018 BTC</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">337,810.81</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">330,900.05</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="infor">
            <img class="curren_icon" src="~/assets/images/eth-01.png" /><label
              >ETH</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textred">10,661.1</h6>
        </div>
        <div class="col-2">
          <h6 class="textred">
            <img class="curren_icon" src="~/assets/images/down-01.png" />3.78%
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">2,566.0216 ETH</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">11,090</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">10,580.01</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="infor">
            <img class="curren_icon" src="~/assets/images/usdt-01.png" /><label
              >USDT</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textgreen">31.52</h6>
        </div>
        <div class="col-2">
          <h6 class="textgreen">
            <img class="curren_icon" src="~/assets/images/up-01.png" />0.57%
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">1,467,131 USDT</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">31.60</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">31.215</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="infor">
            <img class="curren_icon" src="~/assets/images/xrp-01.png" /><label
              >XRP</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textred">7.7</h6>
        </div>
        <div class="col-2">
          <h6 class="textred">
            <img class="curren_icon" src="~/assets/images/down-01.png" />3.75%
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">1,286,122 XRP</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">8.10</h6>
        </div>
        <div class="col-2">
          <h6 class="textblack">7.60</h6>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 80px"></div>
    <!-- <div class="bottom-vue"></div> -->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer"
import Navbarlogin from '../components/Navbarlogin'
export default {
  // middleware: "auth",
  components: {
    Footer,
    Navbarlogin,
  },
  head: {
    title: "หน้าระบบเทรด",
  },
}
</script>
<style scoped>

</style>