<template>
  <div>
    <!-- <Navbarlogin /> -->
    <div style="padding-top: 30px"></div>
    <div class="headt float-left">
      <h2>EXCHANGE</h2>
    </div>
    <div style="padding-top: 70px"></div>
    <div class="container-fulid space">
      <div class="row">
        <div class="col-3 lo">
          <form class="form-inline text-center">
            <img src="~/assets/images/search-01.png" style="width: 20px" />
            <div class="form-group mx-sm-2 mb-2">
              <input
                type="text"
                class="form-control-search"
                id="inputPassword2"
              />
            </div>
          </form>
          <div class="container bg-yellow mt-3 text-right">
            <div class="row">
              <h6 class="textex" style="padding-right: 35px">
                <label>Coin</label
                ><img class="" src="~/assets/images/updown-01.png" />
              </h6>
              <h6 class="textex">
                <label>Price(THB)</label
                ><img class="" src="~/assets/images/updown-01.png" />
              </h6>
              <h6 class="textex">
                <label>Change</label
                ><img class="" src="~/assets/images/updown-01.png" />
              </h6>
            </div>
          </div>
          <div class="row">
            <div>
              <h6 class="textsubex">
                <img
                  class="curren_icon"
                  src="~/assets/images/btc-01.png"
                /><label>BITCOIN (BTC)</label>
              </h6>
              <h6 class="textsubex">
                <img
                  class="curren_icon"
                  src="~/assets/images/eth-01.png"
                /><label>ETHEREUM (ETH)</label>
              </h6>
              <h6 class="textsubex">
                <img
                  class="curren_icon"
                  src="~/assets/images/usdt-01.png"
                /><label>TETHER (USDT)</label>
              </h6>
              <h6 class="textsubex">
                <img
                  class="curren_icon"
                  src="~/assets/images/xrp-01.png"
                /><label>XRP (XRP)</label>
              </h6>
            </div>
            <div style="padding-left: 20px">
              <h6 class="textsubex"><label>0</label></h6>
              <h6 class="textsubex"><label>0</label></h6>
              <h6 class="textsubex"><label>0</label></h6>
              <h6 class="textsubex"><label>0</label></h6>
            </div>
            <div style="padding-left: 50px">
              <h6 class="textsubex"><label>0</label></h6>
              <h6 class="textsubex"><label>0</label></h6>
              <h6 class="textsubex"><label>0</label></h6>
              <h6 class="textsubex"><label>0</label></h6>
            </div>
          </div>
          <div class="mt-5"></div>
          <h5 style="color: #e7af24">Latest Trades</h5>
          <div class="container bg-yellow mt-3 text-right">
            <div class="row" style="padding-bottom: 5px">
              <h6 class="textex" style="padding-right: 35px">Time</h6>
              <h6 class="textex">Rate(THB)</h6>
              <h6 class="textex">Vol(BTC)</h6>
            </div>
          </div>
          <div class="row">
            <h6 class="textsubredex">
              <img class="subicon" src="~/assets/images/down-01.png" /> 2 mins
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubgreenex">
              <img class="subicon" src="~/assets/images/up-01.png" /><label>
                5 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubredex">
              <img class="subicon" src="~/assets/images/down-01.png" /><label>
                7 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubgreenex">
              <img class="subicon" src="~/assets/images/up-01.png" /><label
                >12 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubgreenex">
              <img class="subicon" src="~/assets/images/up-01.png" /><label
                >15 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubredex">
              <img class="subicon" src="~/assets/images/down-01.png" />22 mins
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubgreenex">
              <img class="subicon" src="~/assets/images/up-01.png" /><label
                >35 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubredex">
              <img class="subicon" src="~/assets/images/down-01.png" /><label
                >37 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubgreenex">
              <img class="subicon" src="~/assets/images/up-01.png" /><label
                >42 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
          <div class="row">
            <h6 class="textsubgreenex">
              <img class="subicon" src="~/assets/images/up-01.png" /><label
                >48 mins</label
              >
            </h6>
            <h6 class="textsubex0"><label>0</label></h6>
            <h6 class="textsubex0"><label>0</label></h6>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="row">
            <div>
              <a class="btn btn-current btn_show active" href="#BTC"
                ><h6>BTC/SOS</h6>
              </a>
              <a class="btn btn-current btn_show" href="#ETH"
                ><h6>ETH/SOS</h6>
              </a>
              <a
                class="btn btn-current btn_show"
                data-toggle="collapse"
                href="#USDT"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                ><h6>USDT/SOS</h6>
              </a>
            </div>
            <div class=" ">
              <div class="card card-body boxshow">
                <div class="row">
                  <h3 style="color: #ee2926">
                    334,000<span class="texts">THB</span>
                  </h3>
                  <div>
                    <div class="row" style="color: #404041; padding-left: 20px">
                      <h6 class="textcard">CHANGE</h6>
                      <h6 class="textcard">24H VOLUME</h6>
                      <h6 class="textcard">24 HIGH(THB)</h6>
                      <h6 class="textcard">24 LOW(THB)</h6>
                    </div>
                    <div class="row" style="padding-left: 20px">
                      <h6 class="textcardr">-1.01%</h6>
                      <h6 class="textcard">172.4018 BTC</h6>
                      <h6 class="textcard">337,810.81</h6>
                      <h6 class="textcard" style="padding-left: 12px">
                        330,900.05
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="boxgraph">
                  <!-- <h1 class="text-center" style="padding-top: 50px">GRAPHsdfsdfdsfdfsd</h1> -->
                  <figure class="highcharts-figure">
                    <div id="container"></div>
                    <p class="highcharts-description">
                      Basic line chart showing trends in a dataset. This chart
                      includes the
                      <code>series-label</code> module, which adds a label to
                      each line for enhanced readability.
                    </p>
                  </figure>
                </div>
              </div>
              <div class="card card-body boxshow">
                <div class="row">
                  <h3 style="color: #05914d">
                    244,000<span class="texts">THB</span>
                  </h3>
                  <div>
                    <div class="row" style="color: #404041; padding-left: 20px">
                      <h6 class="textcard">CHANGE</h6>
                      <h6 class="textcard">24H VOLUME</h6>
                      <h6 class="textcard">24 HIGH(THB)</h6>
                      <h6 class="textcard">24 LOW(THB)</h6>
                    </div>
                    <div class="row" style="padding-left: 20px">
                      <h6 class="textcardg">1.01%</h6>
                      <h6 class="textcard">172.4018 BTC</h6>
                      <h6 class="textcard">337,810.81</h6>
                      <h6 class="textcard" style="padding-left: 12px">
                        330,900.05
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="boxgraph">
                  <h1 class="text-center" style="padding-top: 100px">GRAPH</h1>
                </div>
              </div>
            </div>
            <div class="card card-body boxshow">
              <div class="row">
                <h3 style="color: #ee2926">
                  142,025<span class="texts">THB</span>
                </h3>
                <div>
                  <div class="row" style="color: #404041; padding-left: 20px">
                    <h6 class="textcard">CHANGE</h6>
                    <h6 class="textcard">24H VOLUME</h6>
                    <h6 class="textcard">24 HIGH(THB)</h6>
                    <h6 class="textcard">24 LOW(THB)</h6>
                  </div>
                  <div class="row" style="padding-left: 20px">
                    <h6 class="textcardr">-1.01%</h6>
                    <h6 class="textcard">172.4018 BTC</h6>
                    <h6 class="textcard">337,810.81</h6>
                    <h6 class="textcard" style="padding-left: 12px">
                      330,900.05
                    </h6>
                  </div>
                </div>
              </div>
              <div class="boxgraph">
                <h1 class="text-center" style="padding-top: 100px">GRAPH</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div>
              <a class="btn btn-current active" href="#BTC"
                ><h6>LIMIT ORDER</h6>
              </a>
              <a class="btn btn-current" href="#ETH"><h6>MARKET ORDER</h6> </a>
              <a
                class="btn btn-current"
                data-toggle="collapse"
                href="#USDT"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                ><h6>STOP-LIMIT</h6>
              </a>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <form>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        Price you spend
                      </h6>
                      <h6
                        for="inputEmail3"
                        class="col-8 text-right textformorder"
                      >
                        0 THB
                      </h6>
                    </div>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        Price you spend
                      </h6>
                      <div class="col-8">
                        <input
                          class="form-control ex form-contro text-right"
                          style="width: max"
                          placeholder="0.00 THB"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        Price / BTC
                      </h6>
                      <div class="col-8">
                        <input
                          class="form-control ex form-contro text-right"
                          style="width: max"
                          placeholder="0.00 THB"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        BTC youreceive
                      </h6>
                      <div class="col-8">
                        <input
                          class="form-control ex form-contro text-right"
                          style="width: max"
                          placeholder="0.00 BTC"
                        />
                      </div>
                    </div>
                  </form>
                  <button type="button" class="btn btn-buy btn-lg btn-block">
                    Buy &nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </button>
                </div>
                <div class="col-6">
                  <form>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        Price you spend
                      </h6>
                      <h6
                        for="inputEmail3"
                        class="col-8 text-right textformorder"
                      >
                        0 THB
                      </h6>
                    </div>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        Price you spend
                      </h6>
                      <div class="col-8">
                        <input
                          class="form-control ex form-contro text-right"
                          style="width: max"
                          placeholder="0.00 THB"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        Price / BTC
                      </h6>
                      <div class="col-8">
                        <input
                          class="form-control ex form-contro text-right"
                          style="width: max"
                          placeholder="0.00 THB"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <h6 for="inputEmail3" class="col-4 textformorder">
                        BTC youreceive
                      </h6>
                      <div class="col-8">
                        <input
                          class="form-control ex form-contro text-right"
                          style="width: max"
                          placeholder="0.00 BTC"
                        />
                      </div>
                    </div>
                  </form>
                  <button type="button" class="btn btn-sell btn-lg btn-block">
                    Sell &nbsp;&nbsp;&nbsp;&nbsp;BTC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 lo">
          <h5 style="color: #e7af24">Order Book</h5>
          <div class="dropdown">
            <button
              class="btn btn-order dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              BIDS/ASKS
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item text0" type="button">#</button>
              <button class="dropdown-item text0" type="button">#</button>
              <button class="dropdown-item text0" type="button">#</button>
            </div>
          </div>
          <div class="container bg-yellow mt-3 text-right">
            <div class="row">
              <h6 class="textex" style="padding-right: 30px">
                <label>Vol(THB)</label>
              </h6>
              <h6 class="textex"><label>Vol(BTC)</label></h6>
              <h6 class="textex"><label>Rate(THB)</label></h6>
            </div>
          </div>
          <!-- <?php for($x=1;$x<=18;$x++) { ?>
          <div class="container">
            <div class="row">
              <h6 class="text0">0</h6>
              <h6 class="text0">0</h6>
              <h6 class="text0">0</h6>
            </div>
          </div>
          <?php } ?> -->
          <ul>
            <li v-for=" x in tableOrder" :key="x.tableOrder">{{x.volTHB}} : {{x.volBTC}} : {{x.rateTHB}}</li>
          </ul>
        </div>
      </div>
      <div class="mt-3"></div>
      <div class="lo">
        <div class="row">
          <div class="col-6">
            <h5 style="color: #e7af24">My Open Orders</h5>
            <div class="boxorder">
              <div class="row">
                <h6 class="textorder">Order</h6>
                <h6 class="textorder">Type</h6>
                <h6 class="textorder">Rate</h6>
                <h6 class="textorder">Volume</h6>
                <h6 class="textorder">Condition</h6>
                <h6 class="textorder">Order Date</h6>
                <h6 class="textorder">Cancel</h6>
              </div>
            </div>
          </div>
          <div class="col-6">
            <h5 style="color: #e7af24">My Orders History</h5>
            <div class="boxorder">
              <div class="row">
                <h6 class="textorder">Order</h6>
                <h6 class="textorder">Type</h6>
                <h6 class="textorder">Rate</h6>
                <h6 class="textorder">Volume</h6>
                <h6 class="textorder">Condition</h6>
                <h6 class="textorder">Order Date</h6>
                <h6 class="textorder">Closed Date</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 80px"></div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
// import Poplogin from "@/components/Poplogin"
// import Navbarlogin from "../components/Navbarlogin"
export default {
  middleware: "auth",
  components: {
     
  },
  head: {
    // ใส้กราฟฟิก
    script: [
      {
        src: "https://code.highcharts.com/highcharts.js",
        type: "text/javascript",
      },
      {
        src: "https://code.highcharts.com/modules/series-label.js",
        type: "text/javascript",
      },
      {
        src: "https://code.highcharts.com/modules/exporting.js",
        type: "text/javascript",
      },
      {
        src: "https://code.highcharts.com/modules/export-data.js",
        type: "text/javascript",
      },
      {
        src: "https://code.highcharts.com/modules/accessibility.js",
        type: "text/javascript",
      },
    ],
  },
  data() {
    return {
      tableOrder:[
        { id: 1, volTHB: 123, volBTC: 234, rateTHB: 345},
      ]
    }
  },
}
</script>
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 360px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>