const log = console.log;

const chartProperties = {
  width: 1500,
  height: 600,
  timeScale:{
    timeVisible: true,
    secondsVisible: false,
  }
}

const domElement = document.getElementById('tvchart')
const chart = LightweightCharts.createChart(domElement, chartProperties)
const candleSeries = chart.addCandlestickSeries();

fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000')
  .then( res => res.json())
  .then( data => {
    const cdata = data.map( d => {
      return {time:0, open:0, high:0, low:0, close:0}
    })
    candleSeries.setData(cdata)
  })
  .catch( error => log(error))