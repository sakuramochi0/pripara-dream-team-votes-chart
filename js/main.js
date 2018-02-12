const URL = 'https://docs.google.com/spreadsheets/d/1WOwQf4tjLCslhMTnLFb44ATlDwIBBTlhCfscHlPRTfw/gviz/tq?gid=0&headers=1&range=A:AK';

google.charts.load('current', {packages: ['corechart'], language: 'ja'});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const query = new google.visualization.Query(URL);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    const data = response.getDataTable();
    const chart = new google.visualization.LineChart(document.getElementById('chart'));
    const ticks = [];
    const chara_num = 36;
    for (let i = 1; i <= chara_num; i++) ticks.push(i);
    ticks.push(
        {v: 0, f: ''}, // 1位の上の余白
        {v: 40, f: '圏外'},
        {v: 41, f: ''} // 一番下の余白
    );
    // 次のキャラ順に色を割り当てること
    // あろま らぁら みれぃ ひびき コヨイ
    // みかん ファララ ゆい ドロシー そふぃ
    // ファルル のん ガァララ みちる にの
    // シオン ちり ショウゴ
    const lineColors = [
        '#9C27B0', '#EA80FC', '#FFEB3B', '#673AB7', '#1A237E',
        '#FF5252', '#64FFDA', '#FFF59D', '#40C4FF', '#F50057',
        '#B2FF59', '#FF80AB', '#283593', '#9E9E9E', '#69F0AE',
        '#9C27B0', '#009688', '#FFF59D',

    ];
    const options = {
        theme: 'material',
        width: '100%',
        height: 800,
        chartArea: {width: '60%', height: '80%', right: '29%', top: '5%'},
        vAxis: {
            direction: -1,
            ticks: ticks,
        },
        pointSize: 8,
        lineWith: 4,
        colors: lineColors,
    };
    chart.draw(data, options);
}
