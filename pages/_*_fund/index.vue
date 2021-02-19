<template>
  <div>
    <div style="padding-top: 30px"></div>
    <div class="headt float-left">
      <h2>WALLET</h2>
    </div>
    <div style="padding-top: 30px"></div>
    <div class="container-fulid bg-yellow mt-5">
      <div class="row">
        <div class="btn-group" role="group">
          <a type="button" class="btn btn-choose" href="fund.php">Fund</a>
          <a type="button" class="btn btn-group" href="deposit.php">Deposit</a>
          <a type="button" class="btn btn-group" href="withdraw.php"
            >Withdraw</a
          >
          <a type="button" class="btn btn-group" href="history.php"
            >Transaction History</a
          >
        </div>
      </div>
    </div>
    <div class="mb-5"></div>
    <div class="float-right space">
      <form class="form-inline">
        <img class="iconsearch" src="images/search-01.png" />
        <div class="form-group mx-sm-2 mb-2">
          <input type="text" class="form-control-search" id="inputPassword2" />
        </div>
      </form>
    </div>
    <div style="padding-top: 60px"></div>
    <div class="container-fluid space">
      <div class="row">
        <div class="col-2">
          <h6 class="texth">Coin</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">Total</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">Available</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">In-Order</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">In-withdraw</h6>
        </div>
        <div class="col-3">
          <h6 class="texth">Action</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="textfund">
            <img class="coin_icon" src="images/baht-01.png" /><label
              >THAI BAHT(THB)</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-3">
          <div class="text-center">
            <a type="button" class="btn btn-deposit" href="depositthb.php"
              >Deposit</a
            >
            <a type="button" class="btn btn-withdraw" href="withdrawthb.php"
              >Withdraw</a
            >
            <a type="button" class="btn btn-tradef" href="#">Trade</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="textfund">
            <img class="coin_icon" src="images/btc-01.png" /><label
              >BITCOIN (BTC)</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-3">
          <div class="text-center">
            <a type="button" class="btn btn-deposit" href="depositthb.php"
              >Deposit</a
            >
            <a type="button" class="btn btn-withdraw" href="withdrawthb.php"
              >Withdraw</a
            >
            <a type="button" class="btn btn-tradef" href="#">Trade</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="textfund">
            <img class="coin_icon" src="images/eth-01.png" /><label
              >ETHEREUM (ETH)</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-3">
          <div class="text-center">
            <a type="button" class="btn btn-deposit" href="depositthb.php"
              >Deposit</a
            >
            <a type="button" class="btn btn-withdraw" href="withdrawthb.php"
              >Withdraw</a
            >
            <a type="button" class="btn btn-tradef" href="#">Trade</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <h6 class="textfund">
            <img class="coin_icon" src="images/xrp-01.png" /><label
              >XRP (XRP)</label
            >
          </h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubfund">0</h6>
        </div>
        <div class="col-3">
          <div class="text-center">
            <a type="button" class="btn btn-deposit" href="depositthb.php"
              >Deposit</a
            >
            <a type="button" class="btn btn-withdraw" href="withdrawthb.php"
              >Withdraw</a
            >
            <a type="button" class="btn btn-tradef" href="#">Trade</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    titile: "หน้าจัดการเหรียญ",
  },
  data() {
    return {}
  },
}
</script>