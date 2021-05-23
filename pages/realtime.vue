<template>
  <div class="">
    <!-- <div id="chart"></div> -->
    <!-- <div id='candlestick'></div> -->
		<div id="tvchart"></div>
   </div>
</template>
<script>
import Vue from 'vue'
import * as LightWeightCharts from 'lightweight-charts';

Vue.prototype.$lwcCore = () => {
  return {
    LightWeightCharts
  }
}

export default {
  head: {
    script: [
      {
        async:"true",
        src:"https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js",
      },
      // {
      //   async:"true",
      //   src:'/charts.js'
      // },
      // {
      //   src:'/candlestick.js'
      // }
			{
				async:"true",
				src:"/testChart.js"
			}
    ],
  },
  data: function () {
    return {
      connection: null,
      events: null,
      count: 0,
      test: null,
      show: [],
    }
  },
  methods: {},
  computed: {},
  mounted() {
    /*let events = null
    console.log("Starting websocket..")
    this.connection = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade")
    this.connection.onopen = function (event) {
      console.log("1>>", event)
      console.log("Success webSocket..")
    }
    this.connection.onmessage = async function (event) {
      await setTimeout(() => {
        console.log(`${event.data}`)
        //count++
        events = JSON.parse(event.data)
        //this.show = [...events]
        //console.log("++", events.p)
      }, 2000)
    }
  */
  },
}
</script>

