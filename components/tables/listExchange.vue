<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="3" class="bg-light">
          <b-row>
            <b-col sm="12" lg="12" md="12">
              <input class="w-100"/>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" lg="12" md="12">
              <b-table striped hover :items="item1" :fields="fields"></b-table>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" lg="12" md="12">
              <h1>Latest Trades</h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" lg="12" md="12">
              <b-table
                striped
                hover
                :items="item2"
                :fields="lastTrades"
              ></b-table>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6" class="bg-light">
          <b-row>
            <b-col sm="12" md="12" lg="12">
              <b-tabs content-class="mt-1">
                <b-tab title="BTC/SOS" active>
                  <b-row>
                    <b-col lg="4" md="4" sm="4"> 1</b-col>
                    <b-col lg="2" md="2" sm="2">CHANGE</b-col>
                    <b-col lg="2" md="2" sm="2">24 VOLUME</b-col>
                    <b-col lg="2" md="2" sm="2">24 HIGHT(THB)</b-col>
                    <b-col lg="2" md="2" sm="2">24 LOW (THB)</b-col>
                  </b-row>
                  <b-row class="bg-light">
                    <b-col lg="4" md="4" sm="4">1</b-col>
                    <b-col lg="2" md="2" sm="2">2</b-col>
                    <b-col lg="2" md="2" sm="2">3</b-col>
                    <b-col lg="2" md="2" sm="2">4</b-col>
                    <b-col lg="2" md="2" sm="2">5</b-col>
                  </b-row>
                </b-tab>
                <b-tab title="ETH/SOS">
                  <b-row>
                    <b-col lg="4" md="4" sm="4"> 1</b-col>
                    <b-col lg="2" md="2" sm="2">CHANGE</b-col>
                    <b-col lg="2" md="2" sm="2">24 VOLUME</b-col>
                    <b-col lg="2" md="2" sm="2">24 HIGHT(THB)</b-col>
                    <b-col lg="2" md="2" sm="2">24 LOW (THB)</b-col>
                  </b-row>
                  <b-row class="bg-light">
                    <b-col lg="4" md="4" sm="4">1</b-col>
                    <b-col lg="2" md="2" sm="2">2</b-col>
                    <b-col lg="2" md="2" sm="2">3</b-col>
                    <b-col lg="2" md="2" sm="2">4</b-col>
                    <b-col lg="2" md="2" sm="2">5</b-col>
                  </b-row>
                </b-tab>
                <b-tab title="USDT/SOS">
                  <b-row>
                    <b-col lg="4" md="4" sm="4"> 1</b-col>
                    <b-col lg="2" md="2" sm="2">CHANGE</b-col>
                    <b-col lg="2" md="2" sm="2">24 VOLUME</b-col>
                    <b-col lg="2" md="2" sm="2">24 HIGHT(THB)</b-col>
                    <b-col lg="2" md="2" sm="2">24 LOW (THB)</b-col>
                  </b-row>
                  <b-row class="bg-light">
                    <b-col lg="4" md="4" sm="4">1</b-col>
                    <b-col lg="2" md="2" sm="2">2</b-col>
                    <b-col lg="2" md="2" sm="2">3</b-col>
                    <b-col lg="2" md="2" sm="2">4</b-col>
                    <b-col lg="2" md="2" sm="2">5</b-col>
                  </b-row>
                </b-tab>
              </b-tabs>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12">GHAPIC</b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="12" lg="12">
              <b-tabs content-class="mt-1">
                <b-tab title="LIMIT ORDER" active>
                  <b-row>
                    <b-col
                      lg="6"
                      class="bg-light d-flex justify-content-around"
                    >
                      <span>Price you spend</span>
                      <span>0THB</span>
                    </b-col>
                    <b-col
                      lg="6"
                      class="bg-light d-flex justify-content-around"
                    >
                      <span>Price you spend</span>
                      <span>0THB</span>
                    </b-col>
                  </b-row>
                  <b-row class="bg-light">
                    <b-col lg="6" class="bg-light">
                      <b-row>
                        <b-col lg="6" sm="6"
                          ><label>Price you spend</label></b-col
                        >
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"><label>Price / BTC</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"
                          ><label>Price you spend</label></b-col
                        >
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row class="w-100">
                        <b-col lg="12" sm="12">
                          <b-button v-b-modal.modal-1 class="btn w-100 btn-info"
                            >BUY</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col lg="6" class="bg-light">
                      <b-row>
                        <b-col lg="6" sm="6"
                          ><label>Price you spend</label></b-col
                        >
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"><label>Price / BTC</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"
                          ><label>THB you spend</label></b-col
                        >
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row class="w-100">
                        <b-col lg="12" sm="12">
                          <b-button
                            v-b-modal.modal-1
                            class="btn w-100 btn-warning"
                            >SELL</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-tab>
                <b-tab title="MARTKET">
                  <b-row>
                    <b-col
                      lg="6"
                      class="bg-light d-flex justify-content-around"
                    >
                      <span>Price you spend</span>
                      <span>0THB</span>
                    </b-col>
                    <b-col
                      lg="6"
                      class="bg-light d-flex justify-content-around"
                    >
                      <span>Price you spend</span>
                      <span>0THB</span>
                    </b-col>
                  </b-row>
                  <b-row class="bg-light">
                    <b-col lg="6" class="bg-light">
                      <b-row>
                        <b-col lg="6" sm="6"><label>You spend</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row class="w-100">
                        <b-col lg="12" sm="12">
                          <b-button v-b-modal.modal-1 class="btn w-100 btn-info"
                            >BUY</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col lg="6" class="bg-light">
                      <b-row>
                        <b-col lg="6" sm="6"><label>You sell</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row class="w-100">
                        <b-col lg="12" sm="12">
                          <b-button
                            v-b-modal.modal-1
                            class="btn w-100 btn-warning"
                            >SELL</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-tab>
                <b-tab title="STOP-LIMIT">
                  <b-row>
                    <b-col
                      lg="6"
                      class="bg-light d-flex justify-content-around"
                    >
                      <span>Price you spend</span>
                      <span>0THB</span>
                    </b-col>
                    <b-col
                      lg="6"
                      class="bg-light d-flex justify-content-around"
                    >
                      <span>Price you spend</span>
                      <span>0THB</span>
                    </b-col>
                  </b-row>
                  <b-row class="bg-light">
                    <b-col lg="6" class="bg-light">
                      <b-row>
                        <b-col lg="6" sm="6"><label>You spend</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"><label>Stop</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"><label>Limit</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"
                          ><label>Price you spend</label></b-col
                        >
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row class="w-100">
                        <b-col lg="12" sm="12">
                          <b-button v-b-modal.modal-1 class="btn w-100 btn-info"
                            >BUY</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col lg="6" class="bg-light">
                      <b-row>
                        <b-col lg="6" sm="6"><label>You sell</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"><label>Stop</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"><label>Limit</label></b-col>
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6" sm="6"
                          ><label>THB you spend</label></b-col
                        >
                        <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                      </b-row>
                      <b-row class="w-100">
                        <b-col lg="12" sm="12">
                          <b-button
                            v-b-modal.modal-1
                            class="btn w-100 btn-warning"
                            >SELL</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-tab>
              </b-tabs>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="3" class="bg-light">
          <b-row>
            <b-col sm="12" lg="12" md="12">
              <h1>Order Book</h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" lg="12" md="12">
              <b-table
                striped
                hover
                :items="item3"
                :fields="orderBooks"
              ></b-table>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col lg="6" class="bg-light">
          <b-table striped hover :items="item4" :fields="myOpenOrder"></b-table>
        </b-col>
        <b-col lg="6" class="bg-light">
          <b-table
            striped
            hover
            :items="item5"
            :fields="myOrderHistory"
          ></b-table>
        </b-col>
      </b-row>
      <b-container>
        <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-container>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listName:[],
      lists:[],
      favorites: [],
      fields: [
        { key: "coin", sortable: true },
        { key: "Price(THB)", sortable: true },
        { key: "change", sortable: true, variant: "danger" },
      ],
      item1: [
        { isActive: false, coin: 1, "Price(THB)": 100, change: 250 },
        { isActive: false, coin: 2, "Price(THB)": 200, change: 50 },
        { isActive: false, coin: 3, "Price(THB)": 20, change: 90 },
      ],
      lastTrades: [
        { key: "Time", sortable: true },
        { key: "Rate(THB)", sortable: true },
        { key: "Vol(BTC)", sortable: true, variant: "warning" },
      ],
      item2: [
        { isActive: false, Time: 1, "Rate(THB)": 55, "Vol(BTC)": 1320 },
        { isActive: false, Time: 2, "Rate(THB)": 95, "Vol(BTC)": 840 },
        { isActive: false, Time: 3, "Rate(THB)": 45, "Vol(BTC)": 8 },
      ],
      orderBooks: [
        { key: "Vol(THB)" },
        { key: "Vol(BTC)" },
        { key: "Rate(THB)", variant: "warning" },
      ],
      item3: [
        { isActive: false, "Vol(THB)": 1, "Vol(BTC)": 55, "Rate(THB)": 1320 },
        { isActive: false, "Vol(THB)": 2, "Vol(BTC)": 95, "Rate(THB)": 840 },
        { isActive: false, "Vol(THB)": 3, "Vol(BTC)": 45, "Rate(THB)": 8 },
      ],
      myOpenOrder: [
        { key: "Order" },
        { key: "Type" },
        { key: "Rate" },
        { key: "Volume" },
        { key: "Condition" },
        { key: "Order Date" },
        { key: "Cancel", variant: "danger" },
      ],
      item4: [
        {
          isActive: false,
          Order: 1,
          Type: 55,
          Rate: 1320,
          Volume: 234.234,
          Condition: 234,
          "Order Date": "2021-05-21",
          Cancel: "No",
        },
        {
          isActive: false,
          Order: 2,
          Type: 35,
          Rate: 1320,
          Volume: 234.234,
          Condition: 234,
          "Order Date": "2021-05-21",
          Cancel: "Yes",
        },
        {
          isActive: false,
          Order: 3,
          Type: 3455,
          Rate: 120,
          Volume: 234.234,
          Condition: 234,
          "Order Date": "2021-05-21",
          Cancel: "No",
        },
      ],
      myOrderHistory: [
        { key: "Order" },
        { key: "Type" },
        { key: "Rate" },
        { key: "Volume" },
        { key: "Condition" },
        { key: "Order Date" },
        { key: "Cancel", variant: "danger" },
      ],
      item5: [
        {
          isActive: false,
          Order: 1,
          Type: 55,
          Rate: 1320,
          Volume: 234.234,
          Condition: 234,
          "Order Date": "2021-05-21",
          Cancel: "No",
        },
        {
          isActive: false,
          Order: 2,
          Type: 35,
          Rate: 1320,
          Volume: 234.234,
          Condition: 234,
          "Order Date": "2021-05-21",
          Cancel: "No",
        },
        {
          isActive: false,
          Order: 3,
          Type: 3455,
          Rate: 120,
          Volume: 234.234,
          Condition: 234,
          "Order Date": "2021-05-21",
          Cancel: "No",
        },
      ],
    }
  },
    async mounted() {
    await this.$axios
      .$get(`/api/market/ticker`)
      .then((res) => {
        this.lists = res
        this.listName = [Object.keys(res)]
        this.favorites = [res.THB_BTC, res.THB_ETH, res.THB_USDT, res.THB_XRP]
        //console.log("updated>>", res.THB_BTC.percentChange)
      })
      .catch(() => console.log("api error>>", error))
    console.log("fav>>", this.favorites)
    console.log("name>>", this.listName)
  },
  methods:{

  }
}
</script>