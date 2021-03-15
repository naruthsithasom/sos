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
          <a type="button" class="btn btn-group" href="/withdraw"
            >Withdraw</a
          >
          <a type="button" class="btn btn-choose" href="/history"
            >Transaction History</a
          >
        </div>
      </div>
    </div>
    <div class="mb-5"></div>
    <div class="container-fluid clearfix">
      <div class="float-left">
        <div class="form-inline space">
          <img class="iconsearch" src="~/assets/images/search-01.png" />
          <div class="form-group mx-sm-2 mb-2">
            <input
              type="text"
              class="form-control-search"
              id="inputPassword2"
            />
          </div>
        </div>
      </div>
      <div class="float-right">
        <div class="container">
          <div class="row">
            <div class="textshow"><h5>show</h5></div>
            <div class="dropdown">
              <button
                class="btn btn-show dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                10
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item textshow" type="button">20</button>
                <button class="dropdown-item textshow" type="button">30</button>
                <button class="dropdown-item textshow" type="button">40</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3"></div>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <h6 class="texth">Date</h6>
        </div>
        <div class="col-1">
          <h6 class="texth">Time</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">Currency</h6>
        </div>
        <div class="col-1">
          <h6 class="texth">Type</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">Amount</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">Transaction Fee</h6>
        </div>
        <div class="col-2">
          <h6 class="texth">Total</h6>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="x in tableHistory" :key="x.tableHistory">
        {{ x.date }} : {{ x.time }} : {{ x.currency }} : {{ x.type }} :
        {{ x.amount }} : {{ x["transaction fee"] }} : {{ x.total }}
      </li>
    </ul>
    <!-- <?php for($x=1;$x<=10;$x++) { ?>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <h6 class="textsubh">2020-10-0</h6>
        </div>
        <div class="col-1">
          <h6 class="textsubh">10:08:22</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubh">BTC/SOS</h6>
        </div>
        <div class="col-1">
          <h6 class="textsubred">Sell</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubh">0.05900 SOS</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubh">0.00000 SOS</h6>
        </div>
        <div class="col-2">
          <h6 class="textsubh">0.00000 SOS</h6>
        </div>
      </div>
    </div>
    <?php } ?> -->
    <div class="mt-5"></div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" style="color: #e7af24" href="history.php">1</a>
        </li>
        <li class="page-item"><a class="page-link" href="history.php">2</a></li>
        <li class="page-item"><a class="page-link" href="history.php">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <div style="padding-bottom: 80px"></div>
  </div>
</template>
<script>
// import Navbarlogin from "../components/Navbarlogin"
// import Footer from "../components/Footer"
export default {
  data() {
    return {
      tableHistory: [
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
        {
          date: "2021-02-23",
          time: "19:03:59",
          currency: "BTC/SOS",
          type: "sell",
          amount: "0.0232323",
          "transaction fee": "0.0000 sos",
          total: "0.00000 sos",
        },
      ],
    }
  },
  components: {
    Navbarlogin,
    Footer,
  },
}
</script>