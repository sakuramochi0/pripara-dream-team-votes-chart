const URL = 'https://docs.google.com/spreadsheets/d/1WOwQf4tjLCslhMTnLFb44ATlDwIBBTlhCfscHlPRTfw/gviz/tq?gid=0&headers=1&range=A:S';

google.charts.load('current', { packages:['corechart'], language: 'ja' });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const query = new google.visualization.Query(URL);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    const data = response.getDataTable();
    // const chart = new google.charts.Line(document.getElementById('chart'));
    const chart = new google.visualization.LineChart(document.getElementById('chart'));
    var ticks = [];
    for (var i = 1; i <= 15; i++) ticks.push(i);
    ticks.push(
        { v: 0, f: '' }, // 1位の上の余白
        { v: 20, f: '圏外' },
        { v: 21, f: '' } // 一番下の余白
    );
    const options = {
        theme: 'material',
        width: '100%',
        height: 800,
        chartArea: { width: '60%', height: '80%', right: '29%' },
        vAxis: {
            direction:-1,
            ticks: ticks,
        },
        pointSize: 8,
        lineWith: 4,
    };
    chart.draw(data, options);
}
