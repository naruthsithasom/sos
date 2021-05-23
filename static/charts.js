const chart = LightweightCharts.createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 0.01 },
    { time: '2019-04-12', value: 2.63 },
    { time: '2019-04-13', value: 16.64 },
    { time: '2019-04-14', value: 1.89 },
    { time: '2019-04-15', value: 100.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 0.64 },
    { time: '2019-04-19', value: 0.89 },
    { time: '2019-04-20', value: 0.43 },
]);