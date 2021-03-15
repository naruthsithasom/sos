<template>
  <div>
    <!-- <Navbarlogin /> -->
    <div style="padding-top: 30px"></div>
    <div class="headt float-left">
      <h2>WALLET</h2>
    </div>
    <div style="padding-top: 30px"></div>
    <div class="container-fulid bg-yellow mt-5">
      <div class="row">
        <div class="btn-group" role="group">
          <a type="button" class="btn btn-group" href="/fund">Fund</a>
          <a type="button" class="btn btn-group" href="/deposit">Deposit</a>
          <a type="button" class="btn btn-choose" href="/withdraw"
            >Withdraw</a
          >
          <a type="button" class="btn btn-group" href="/history"
            >Transaction History</a
          >
        </div>
      </div>
    </div>
    <div class="container float-center">
      <div class="row">
        <div class="col-6 text-right">
          <a type="button" class="btn btn-box" href="/withdrawthb">
            <img src="~/assets/images/thb-01.png" class="thb" />
            <h4 class="inforw">THB</h4>
          </a>
        </div>
        <div class="col-6 text-left">
          <a type="button" class="btn btn-box" href="/withdrawcoin">
            <img src="~/assets/images/coin-01.png" class="thb" />
            <h4 class="inforw">Coin</h4>
          </a>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 80px"></div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
// import Navbarlogin from "../components/Navbarlogin"
// import Footer from "../components/Footer"
export default {
  Navbarlogin,
  Footer
}
</script>