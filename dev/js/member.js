window.addEventListener('load',gogoPower);

function gogoPower(){
    let memData = {
        memId : 10001,
        memEmail : 'f1020@gmail.com',
        memPsw : 'a1234567A',
        memSurname : '黃',
        memName : '阿炳',
        memScore : 1020,
        memImage : './images/member/rcc_author3.jpg',
        memAddr : '桃園市中大路200號',
        memPhone : '0922222222',
        memHeight :178.1,
        memWeight :65.4,
        memGender : '男'
    }
    let memSetOrder = [{
        setName: '排骨飯',
        setoPrice: 240,
        setoAmount: 3,
        setImage: 'https://fakeimg.pl/100/',
        setoBelongOrder: 10001,
        setClass : 0
    },{
        setName: '雞腿飯',
        setoPrice: 85,
        setoAmount: 1,
        setImage: 'https://fakeimg.pl/100/',
        setoBelongOrder: 10001,
        setClass : 1
    },{
        setName: '排骨飯',
        setoPrice: 160,
        setoAmount: 2,
        setImage: 'https://fakeimg.pl/100/',
        setoBelongOrder: 10002,
        setClass : 0
    },{
        setName: '魚排飯',
        setoPrice: 300,
        setoAmount: 3,
        setImage: 'https://fakeimg.pl/100/',
        setoBelongOrder: 10002,
        setClass : 0
    },{
        setName: '雞腿飯',
        setoPrice: 170,
        setoAmount: 2,
        setImage: 'https://fakeimg.pl/100/',
        setoBelongOrder: 10002,
        setClass : 1
    }]
    let memOtherOrder = [{
        opName: '紅茶',
        ooPrice: 25,
        ooAmount: 100,
        opImage: 'https://fakeimg.pl/100/',
        ooBelongOrder: 10001
    },{
        opName: '綠茶',
        ooPrice: 25,
        ooAmount: 100,
        opImage: 'https://fakeimg.pl/100/',
        ooBelongOrder: 10001
    },{
        opName: '人參雞精',
        ooPrice: 110,
        ooAmount: 220,
        opImage: 'https://fakeimg.pl/100/',
        ooBelongOrder: 10001
    },{
        opName: '紅茶',
        ooPrice: 25,
        ooAmount: 50,
        opImage: 'https://fakeimg.pl/100/',
        ooBelongOrder: 10002
    },{
        opName: '綠茶',
        ooPrice: 25,
        ooAmount: 100,
        opImage: 'https://fakeimg.pl/100/',
        ooBelongOrder: 10002
    }]
    let memSingleOrder = [{
        soRice: '白米',
        sideDishes1: '番茄炒蛋',
        sideDishes2: '三杯杏鮑菇',
        sideDishes3: '竹筍炒肉絲',
        mainfood: '滷排骨',
        soPrice: '130',
        soAmount: 2,
        soBelongOrder: 10001
    },{
        soRice: '白米',
        sideDishes1: '清蒸毛豆',
        sideDishes2: '花椰菜炒蝦仁',
        sideDishes3: '咖哩',
        mainfood: '清蒸鱈魚',
        soPrice: '140',
        soAmount: 3,
        soBelongOrder: 10001
    },{
        soRice: '白米',
        sideDishes1: '番茄炒蛋',
        sideDishes2: '三杯杏鮑菇',
        sideDishes3: '竹筍炒肉絲',
        mainfood: '滷排骨',
        soPrice: '130',
        soAmount: 2,
        soBelongOrder: 10002
    }]
    let memOrder = [{
        orderId: 10002,
        orderTotalPrice: 800,
        orderStatus: '3'
    },{
        orderId: 10001,
        orderTotalPrice: 600,
        orderStatus: '4'
    }];
    let memHealth = [{
        healClass : 1,
        healReview : '有點熱喔你有點熱喔你有點熱喔你有點熱喔你',
        healColdHot : 85,
        healhealth : 36,
        healStomach : 77,
        healLastTime : '2020-05-15 10:06:20',
        healNewWeight : 65.4,
        healNewheight : 178.1
    },{
        healClass : 1,
        healReview : '有點熱喔你有點熱喔你有點熱喔你有點熱喔你',
        healColdHot : 77,
        healhealth : 48,
        healStomach : 82,
        healLastTime : '2020-05-12 12:06:20',
        healNewWeight : 69.4,
        healNewheight : 178.1
    },{
        healClass : 2,
        healReview : '有點肥喔你有點肥喔你有點肥喔你有點肥喔你',
        healColdHot : 63,
        healhealth : 27,
        healStomach : 42,
        healLastTime : '2020-05-10 10:06:20',
        healNewWeight : 78.4,
        healNewheight : 178.1
    }]
    
    let memHeaderBtn = document.getElementsByClassName('memHeaderBtn');
    let memContent = document.getElementsByClassName('memContent');
    
    let memVm = new Vue({
        el: '#memApp',
        data: {
            memData,
            memSetOrder,
            memOtherOrder,
            memSingleOrder,
            memOrder,
            memHealth
        },
    })

    // 頁籤
    for(let i = 0;i<memHeaderBtn.length;i++){
        memHeaderBtn[i].addEventListener('click',changeContent);
    }
    function changeContent(){
        let changeCount = this.dataset.change;
        for(let j = 0; j<memContent.length;j++){
            memContent[j].classList.add('memContentNone');
            memHeaderBtn[j].classList.remove('memHeaderBtnOrange');
        }
        memContent[Number(changeCount)].classList.remove('memContentNone');
        memHeaderBtn[Number(changeCount)].classList.add('memHeaderBtnOrange');
    }

    // 折線圖
    let memHealthColdHot = [];
    let memHealthHealth = [];
    let memHealthStomach = [];
    for(let i = 0; i<memHealth.length;i++){
        let objColdHot = {x:new Date(memHealth[i].healLastTime),y:memHealth[i].healColdHot};
        let objhealth = {x:new Date(memHealth[i].healLastTime),y:memHealth[i].healhealth};
        let objStomach = {x:new Date(memHealth[i].healLastTime),y:memHealth[i].healStomach};
        memHealthColdHot.push(objColdHot);
        memHealthHealth.push(objhealth);
        memHealthStomach.push(objStomach);

    }

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
                label: 'ColdHot',
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
                label: 'Health',
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
                label: 'Stomach',
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


}



