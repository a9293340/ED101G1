function memDrawChartLine(memHealthColdHot,memHealthHealth,memHealthStomach){
    let ctx = document.getElementById("myChart").getContext('2d');
    const colors = {
        green: {
            fill: '#e0eadf',
            stroke: '#5eb84d',
        },
        lightBlue: {
            stroke: '#6fccdd',
        },
        darkBlue: {
            fill: '#92bed2',
            stroke: '#3282bf',
        },
        purple: {
            fill: '#8fa8c8',
            stroke: '#75539e',
        },
    };
    var myChart = new Chart(ctx, {
        type: 'line',
        responsive: false,
        data: {
            datasets: [{
                label: '冷暖值',
                fill: false,
                backgroundColor: '#ffffff',
                pointBackgroundColor: colors.purple.stroke,
                borderColor: colors.purple.stroke,
                pointHighlightStroke: colors.purple.stroke,
                borderCapStyle: 'butt',
                pointRadius:6,
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1,
                data: memHealthColdHot,
            },{
                label: '健康值',
                fill: false,
                backgroundColor: '#ffffff',
                pointBackgroundColor: colors.darkBlue.stroke,
                borderColor: colors.darkBlue.stroke,
                pointHighlightStroke: colors.darkBlue.stroke,
                borderCapStyle: 'butt',
                pointRadius:6,
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1,
                data: memHealthHealth,
            },{
                label: '腸胃值',
                fill: false,
                backgroundColor: '#ffffff',
                pointBackgroundColor: colors.lightBlue.stroke,
                borderColor: colors.lightBlue.stroke,
                pointHighlightStroke: colors.lightBlue.stroke,
                borderCapStyle: 'butt',
                pointRadius:6,
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1,
                data: memHealthStomach,
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: "time",
                    display: true,
                    id: "date-axis",
                    ticks: {
                        source: "data",
                        minRotation: 45,
                    },
                    gridLines: { 
                        display: false
                    } 
                }],
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        stepSize:20,
                        beginAtZero: true,
                    },
                    gridLines: { 
                        display: true
                    } 
                }],
            }
        }
    });
    Chart.defaults.global.defaultFontSize = 16;
}

export default memDrawChartLine;