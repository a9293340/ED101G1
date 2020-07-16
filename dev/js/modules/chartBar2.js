const chartBarOrder = function(id,timeLabel,timeObj){
    // console.log(timeLabel,timeObj)
    let count = [];
    let price = [];
    timeObj.forEach((el)=>{
        count.push(Number(el.count)) 
        price.push(Number(el.price)) 
    })
    // console.log(timeLabel,count,price,Math.max(count))
    var data7 = {
        labels: timeLabel,
        datasets: [
        {
            yAxisID: 'A',
            type: "bar",
            label: "當日訂單數量",
            backgroundColor: "#e81760",
            borderColor: "#e81760",
            borderWidth: 3,
            data: count 
        },{
            yAxisID: 'B',
            type: "bar",
            label: "當日總營收",
            backgroundColor: "rgba(3, 169, 244)",
            borderColor: "rgba(3, 169, 244)",
            borderWidth: 3,
            data:price
        }
        ]
    };
    let myBar = new Chart(id, {
    type: 'bar',
    data: data7,
    options: {
        responsive: true,
        title: {
        display: false,
        text: '每日訂單狀況'
        },
        tooltips: {
            mode: 'index',
            intersect: true
        }, 
        legend:{  //小標題設定
            display:true,
            position:'right',
            labels:{
                fontColor:'#fff'
            }
        },
        title:{  //標題設定
            display:true,
            text:'每日訂餐狀況',
            fontSize:25,
            position:'top'
        },
        scales: {
            xAxes: [{
                categoryPercentage: 0.6,
                barPercentage: 0.85,
                gridLines : {
                    display: false,
                    drawBorder: false,
                    drawTicks: true,
                    tickMarkLength: 15,
                    borderDashOffset: 15
                },
                ticks: {
                    fontStyle: 'bold',
                    fontSize: 20,
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }],
            yAxes: [
                {
                    id: 'A',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawTicks: true,
                        tickMarkLength: 15,
                        borderDashOffset: 15,
                        color: "#FFFFFF"
                    },
                    ticks: {
                        display: true,
                        fontStyle: 'bold',
                        fontSize: 13,
                        beginAtZero: false,
                        suggestedMin: 0,
                    }
                },
                {
                    id: 'B',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display: false,
                        drawBorder: true,
                        drawTicks: true,
                        tickMarkLength: 15,
                        borderDashOffset: 15,
                        color: "#FFFFFF"
                    },
                    ticks: {
                        display: true,
                        fontStyle: 'bold',
                        fontSize: 13,
                        beginAtZero: false,
                        suggestedMin: 0
                    }
                }
            ]
        }
    }
    });
}

export default chartBarOrder;