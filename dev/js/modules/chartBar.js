import findColor from './findColor.js';
const chartBarSet = function(id,label,box,title1){
    console.log(label,box);
    console.log(title1);
    let massPopChart = new Chart(id,{
        type:'bar', //圖表類型 bar , horizontalBar, pie, line, doughnut, radar, polarArea
        //--------------
        data:{
            labels: label, //項目
            datasets: [{
                label: '數量', //圖表標題
                data: box, //資料內容
                backgroundColor:findColor(label.length),
                borderWidth:0,
                
            }]
        },
        //--------------
        options:{  //對各玩意兒設定
            responsive: true,  //資料從0開始
            legend: false,
            scales:{
                xAxes:[{
                    barPercentage: 0.5,
                    gridLines: {
                        display: false ,
                        color: "#FFFFFF"
                    },
                }],
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    },
                    gridLines: {
                        display: true ,
                        color: "#FFFFFF"
                    },
                }]
            },
            title:{  //標題設定
                display:true,
                text: title1,
                fontSize:25,
                position:'top'
            },
            layout:{  //整塊圖表範圍的調整
                padding:{
                    left:0,
                    right:0,
                    bottom:0,
                    top:30
                }
            },
            tooltips:{  //tooltip開關
                enabled:true
            }
        }
    });
}

export default chartBarSet;