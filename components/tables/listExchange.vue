<template>
 <div>
   <b-container fluid>
      <b-row>
         <b-col lg="3" class="bg-primary">
            <b-row>
               <b-col sm="12" lg="12" md="12">
                  <input />
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
         <b-col lg="6" class="bg-success">
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
                              class="bg-danger d-flex justify-content-around"
                              >
                              <span>Price you spend</span>
                              <span>0THB</span>
                           </b-col>
                           <b-col
                              lg="6"
                              class="bg-primary d-flex justify-content-around"
                              >
                              <span>Price you spend</span>
                              <span>0THB</span>
                           </b-col>
                        </b-row>
                        <b-row class="bg-light">
                           <b-col lg="6" class="bg-danger">
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
                                    <b-button class="btn w-100 btn-info">BUY</b-button>
                                 </b-col>
                              </b-row>
                           </b-col>
                           <b-col lg="6" class="bg-primary">
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
                                    <b-button class="btn w-100 btn-warning"
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
                              class="bg-danger d-flex justify-content-around"
                              >
                              <span>Price you spend</span>
                              <span>0THB</span>
                           </b-col>
                           <b-col
                              lg="6"
                              class="bg-primary d-flex justify-content-around"
                              >
                              <span>Price you spend</span>
                              <span>0THB</span>
                           </b-col>
                        </b-row>
                        <b-row class="bg-light">
                           <b-col lg="6" class="bg-danger">
                              <b-row>
                                 <b-col lg="6" sm="6"><label>You spend</label></b-col>
                                 <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                              </b-row>
                              <b-row class="w-100">
                                 <b-col lg="12" sm="12">
                                    <b-button class="btn w-100 btn-info">BUY</b-button>
                                 </b-col>
                              </b-row>
                           </b-col>
                           <b-col lg="6" class="bg-primary">
                              <b-row>
                                 <b-col lg="6" sm="6"><label>You sell</label></b-col>
                                 <b-col lg="6" sm="6"><input class="w-100" /></b-col>
                              </b-row>
                              <b-row class="w-100">
                                 <b-col lg="12" sm="12">
                                    <b-button class="btn w-100 btn-warning"
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
                              class="bg-danger d-flex justify-content-around"
                              >
                              <span>Price you spend</span>
                              <span>0THB</span>
                           </b-col>
                           <b-col
                              lg="6"
                              class="bg-primary d-flex justify-content-around"
                              >
                              <span>Price you spend</span>
                              <span>0THB</span>
                           </b-col>
                        </b-row>
                        <b-row class="bg-light">
                           <b-col lg="6" class="bg-danger">
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
                                    <b-button class="btn w-100 btn-info">BUY</b-button>
                                 </b-col>
                              </b-row>
                           </b-col>
                           <b-col lg="6" class="bg-primary">
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
                                    <b-button class="btn w-100 btn-warning"
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
         <b-col lg="3" class="bg-danger">
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
         <b-col lg="6" class="bg-info">
            <b-table striped hover :items="item4" :fields="myOpenOrder"></b-table>
         </b-col>
         <b-col lg="6" class="bg-primary">
            <b-table
               striped
               hover
               :items="item5"
               :fields="myOrderHistory"
               ></b-table>
         </b-col>
      </b-row>
   </b-container>
</div>
</template>
<script>
export default {
  data() {
    return {
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
      //      fields: [
      //   { key: "coin", sortable: true },
      //   { key: "Price(THB)", sortable: true },
      //   { key: "change", sortable: true, variant: "danger" },
      // ],
      // item1: [
      //   { isActive: false, coin: 1, "Price(THB)": 100, change: 250 },
      //   { isActive: false, coin: 2, "Price(THB)": 200, change: 50 },
      //   { isActive: false, coin: 3, "Price(THB)": 20, change: 90 },
      // ],
      // lastTrades: [
      //   { key: "Time", sortable: true },
      //   { key: "Rate(THB)", soartable: true },
      //   { key: "Vol(BTC)", sortable: true, variant: "danger" },
      // ],
      // item2: [
      //   { isActive: false, Time: 1, "Rate(THB)": 100, "Vol(BTC)": 250 },
      //   { isActive: false, Time: 2, "Rate(THB)": 200, "Vol(BTC)": 50 },
      //   { isActive: false, Time: 3, "Rate(THB)": 20, "Vol(BTC)": 90 },
      // ],
    }
  },
}
</script>