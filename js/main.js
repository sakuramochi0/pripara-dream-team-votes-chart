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
    // 次のキャラ順に色を割り当てること
    // あろま らぁら みかん みれぃ ドロシー
    // ファララ そふぃ コヨイ ひびき ゆい
    // シオン のん ファルル ちり ショウゴ
    // ガァララ みちる にの
    const lineColors = [
        '#9C27B0','#EA80FC','#FF5252','#FFEB3B','#40C4FF',
        '#64FFDA','#F50057','#1A237E','#673AB7','#FFF59D',
        '#9C27B0','#FF80AB','#B2FF59','#009688','#FFF59D',
        '#283593','#9E9E9E','#69F0AE',
    ];
    const options = {
        theme: 'material',
        width: '100%',
        height: 800,
        chartArea: { width: '60%', height: '80%', right: '29%', top: '5%' },
        vAxis: {
            direction:-1,
            ticks: ticks,
        },
        pointSize: 8,
        lineWith: 4,
        colors: lineColors,
    };
    chart.draw(data, options);
}
