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
    const options = {
        theme: 'material',
        width: '100%',
        height: 800,
        vAxis: { direction:-1, minValue: 1, maxValue: 16 },
        pointSize: 8,
        lineWith: 4,
    };
    chart.draw(data, options);
}
