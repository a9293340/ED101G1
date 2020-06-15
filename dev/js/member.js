<<<<<<< HEAD
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
    memHeight :178,
    memWeight :65,
    memGender : '男'
=======
window.addEventListener('load',gogoPower);

function gogoPower(){
    // 第一次ajax 在vue 初始化時就執行並抓取會員資料 健康分析跟訂單資料
    let memData = {
        memId : 10001,
        memEmail : 'f1020@gmail.com',
        memPsw : 'a1234567A',
        memName : '黃阿炳',
        memScore : 1020,
        memImage : './images/member/rcc_author3.jpg',
        memAddr : '桃園市中大路200號',
        memPhone : '0922222222',
        memHeight :178.1,
        memWeight :65.4,
        memGender : '男',
        memSignIntime: '2020-06-12 15:20:00'
    }
    let memOrder = [{
        orderId: 10002,
        orderTotalPrice: 800,
        orderStatus: 3,
        orderClass:0
    },{
        orderId: 10001,
        orderTotalPrice: 600,
        orderStatus: 4,
        orderClass:1
    }];
    let memHealth = [{
        healId:10009,
        healClass : 1,
        healReview : '有點熱喔你有點熱喔你有點熱喔你有點熱喔你',
        healColdHot : 85,
        healhealth : 84,
        healStomach : 77,
        healLastTime : '2020-05-15 10:06:20',
        healNewWeight : 65.4,
        healNewheight : 178.1
    },{
        healId:10003,
        healClass : 1,
        healReview : '有點熱喔你有點熱喔你有點熱喔你有點熱喔你',
        healColdHot : 77,
        healhealth : 48,
        healStomach : 82,
        healLastTime : '2020-05-12 12:06:20',
        healNewWeight : 69.4,
        healNewheight : 178.1
    },{
        healId:10001,
        healClass : 2,
        healReview : '有點肥喔你有點肥喔你有點肥喔你有點肥喔你',
        healColdHot : 63,
        healhealth : 27,
        healStomach : 42,
        healLastTime : '2020-05-10 10:06:20',
        healNewWeight : 98.4,
        healNewheight : 178.1
    }]

    
    let memHeaderBtn = document.getElementsByClassName('memHeaderBtn');
    let memContent = document.getElementsByClassName('memContent');
    // 折線圖
    let memHealthColdHot = [];
    let memHealthHealth = [];
    let memHealthStomach = [];
    // ajax後寫入
    for(let i = 0; i<memHealth.length;i++){
        let objColdHot = {x:new Date(memHealth[i].healLastTime),y:memHealth[i].healColdHot};
        let objhealth = {x:new Date(memHealth[i].healLastTime),y:memHealth[i].healhealth};
        let objStomach = {x:new Date(memHealth[i].healLastTime),y:memHealth[i].healStomach};
        memHealthColdHot.push(objColdHot);
        memHealthHealth.push(objhealth);
        memHealthStomach.push(objStomach);
    }

    
    let memVm = new Vue({
        el: '#memApp',
        data: {
            memData,
            memOrder,
            memHealth,
            nowDataSetNumber:0,
            nowDataHealthNumber:0,
            memSetOrder:[],
            memOtherOrder:[],
            memSingleOrder:[],
            memSetProduct:[],
            memOtherProduct:[],
            memCold:0,
            memHot:0,
            memSad:0,
            memHappy:0,
            memFat:0,
            memThin:0
        },
        methods: {
            changContentBtn(e){
                // console.log(e.target.dataset.change)
                let changeCount = e.target.dataset.change;
                document.getElementById('memContentOrderList').classList.add('memContentNone');
                
                document.getElementById('memContentHealthList').classList.add('memContentNone');
                for(let j = 0; j<memContent.length;j++){
                    memContent[j].classList.add('memContentNone');
                    memHeaderBtn[j].classList.remove('memHeaderBtnOrange');
                }
                memContent[Number(changeCount)].classList.remove('memContentNone');
                memHeaderBtn[Number(changeCount)].classList.add('memHeaderBtnOrange');
                if(Number(changeCount) == 1){
                    // 第二次Ajax 取得套餐等orderList資訊並丟入Vue的data內
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
                        ooAmount: 1,
                        opImage: 'https://fakeimg.pl/100/',
                        ooBelongOrder: 10001
                    },{
                        opName: '綠茶',
                        ooPrice: 25,
                        ooAmount: 1,
                        opImage: 'https://fakeimg.pl/100/',
                        ooBelongOrder: 10001
                    },{
                        opName: '人參雞精',
                        ooPrice: 110,
                        ooAmount: 1,
                        opImage: 'https://fakeimg.pl/100/',
                        ooBelongOrder: 10001
                    },{
                        opName: '紅茶',
                        ooPrice: 25,
                        ooAmount: 1,
                        opImage: 'https://fakeimg.pl/100/',
                        ooBelongOrder: 10002
                    },{
                        opName: '綠茶',
                        ooPrice: 25,
                        ooAmount: 1,
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
                        soBelongOrder: 10001,
                        soImg: 'https://fakeimg.pl/100/'
                    },{
                        soRice: '白米',
                        sideDishes1: '清蒸毛豆',
                        sideDishes2: '花椰菜炒蝦仁',
                        sideDishes3: '咖哩',
                        mainfood: '清蒸鱈魚',
                        soPrice: '140',
                        soAmount: 3,
                        soBelongOrder: 10001,
                        soImg: 'https://fakeimg.pl/100/'
                    },{
                        soRice: '白米',
                        sideDishes1: '番茄炒蛋',
                        sideDishes2: '三杯杏鮑菇',
                        sideDishes3: '竹筍炒肉絲',
                        mainfood: '滷排骨',
                        soPrice: '130',
                        soAmount: 2,
                        soImg: 'https://fakeimg.pl/100/',
                        soBelongOrder: 10002
                    }]
                    this.memSetOrder = memSetOrder;
                    this.memOtherOrder = memOtherOrder;
                    this.memSingleOrder = memSingleOrder;

                }
                if(Number(changeCount) == 2){
                    // 生成折線圖
                    document.getElementById("myChart").innerHTML = '';
                    memDrawChartLine();
                }
                if(Number(changeCount) == 3){
                    let now = new Date();
                    if(new Date(memData.memSignIntime) > now){
                        $(".infoText").html("遊玩次數達到本日上線囉~明日請早");
                        $("button").hide();
                    }
                    document.getElementById('memSimpleUsage').innerText = '';
                    tomotoTypeIt();
                    setInterval(()=>{
                        document.getElementById('memSimpleUsage').innerText = '';
                        tomotoTypeIt();
                    }, 10000);
                }
            },
            showOrderList(e){
                let orderId = e.target.dataset.order;
                // 現在的訂單4
                this.nowDataSetNumber = Number(orderId);
                console.log(orderId);
                //生成QRCode(要換成php網址)
                $('#memContentOrderListQRCode').html('');
                $('#memContentOrderListQRCode').qrcode({
                    width: 120,
                    height: 120,
                    text: '../php/memOrderList.php'
                });
                // 跳轉至orderList的content
                document.getElementById('memContentOrderList').classList.remove('memContentNone');
                for(let j = 0; j<memContent.length;j++){
                    memContent[j].classList.add('memContentNone');
                }
            },
            showHealthList(e){
                let healthId = e.target.dataset.healthid;
                console.log(healthId);
                this.nowDataHealthNumber = Number(healthId);
                // ajax 套餐及其他商品資料 並丟入vue的data內
                let memSetProduct = [{
                    setId: 1001,
                    setName: '鱈魚便當',
                    setPrice: 130,
                    setCalories:800,
                    setColdHot: 21,  //最冷
                    setHealth:96,
                    setClass:0,
                    setImage:'https://fakeimg.pl/110/',
                    setInfo:'寶島食堂嚴選冰島鱈魚，無細刺，肉質滑嫩鮮甜，如雪花般入口即化的綿密感魚肉更富含OMEGA-3即DHA、EPA適合成長中的孩子食用。'
                },{
                    setId: 1002,
                    setName: '雞腿便當',
                    setPrice: 110,
                    setCalories:1200,
                    setColdHot: 83,
                    setHealth:18,  //最低
                    setClass:0,
                    setImage:'https://fakeimg.pl/100/',
                    setInfo:'很多人說寶島食堂的雞腿很好吃，汁非常多，肉鮮美不柴，外皮金黃酥脆，那是因為我們池上木片便當使用了國產黃金雞，最後再經由師傅的油炸功力讓一隻金黃酥脆多汁又鮮嫩的雞腿能夠送到您的手中。'
                },{
                    setId: 1003,
                    setName: '滷排骨便當',
                    setPrice: 100,
                    setCalories:1000,
                    setColdHot: 83,
                    setHealth:98,  //最高
                    setClass:0,
                    setImage:'https://fakeimg.pl/100/',
                    setInfo:'寶島食堂獨特的排骨醃料配方，醃料採用數十種配料，醃製入味，再採用大吟釀醬油的醬汁滷出新味道，軟嫩可口。'
                },{
                    setId: 1004,
                    setName: '炸豬排便當',
                    setPrice: 140,
                    setCalories:1000,
                    setColdHot: 96,  //最熱
                    setHealth:63,  
                    setClass:1,
                    setImage:'https://fakeimg.pl/100/',
                    setInfo:'獨特的里肌醃料配方，當日醃製完畢即放入冷凍庫並在隔日清晨直送各店家，油炸後香濃可口，且無骨，適合小孩子食用。古法秘製，真空加速入味，裹上一層白面紗進入油炸鍋，3分鐘起鍋金黃外皮，肉質扎實'
                },{
                    setId: 1005,
                    setName: '香腸便當',
                    setPrice: 120,
                    setCalories:1600,  //最肥
                    setColdHot: 57,  
                    setHealth:44,  
                    setClass:1,
                    setImage:'https://fakeimg.pl/100/',
                    setInfo:'使用乾淨的冷油下去油炸，外觀紅潤有光澤，內部更是口感扎實，不禁讓人懷念起兒時的好味道。'
                },{
                    setId: 1006,
                    setName: '鮭魚便當',
                    setPrice: 120,
                    setCalories:600,  //最瘦
                    setColdHot: 41,  
                    setHealth:89,  
                    setClass:1,
                    setImage:'https://fakeimg.pl/130/',
                    setInfo:'鮭魚飯便當：嚴選智利紅鮭，令人食指大動的粉橘色魚肉咬下去清爽健康的魚油在口腔裡娉然散開餘韻纏繞，欲罷不能，一口接著一口！非常適合正在發育的小朋友品嘗。'
                }]
                let memOtherProduct=[{
                    opId:1001,
                    opName:'薑母茶',
                    opPrice:60,
                    opClass:0,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1002,
                    opName:'蔬果汁',
                    opPrice:45,
                    opClass:0,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1003,
                    opName:'綠茶',
                    opPrice:25,
                    opClass:0,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1004,
                    opName:'鳳梨',
                    opPrice:30,
                    opClass:1,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1005,
                    opName:'西瓜',
                    opPrice:30,
                    opClass:1,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1006,
                    opName:'蘋果',
                    opPrice:30,
                    opClass:1,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1007,
                    opName:'益生菌',
                    opPrice:80,
                    opClass:2,
                    opImage:'https://fakeimg.pl/100/'
                },{
                    opId:1008,
                    opName:'人參雞精',
                    opPrice:80,
                    opClass:2,
                    opImage:'https://fakeimg.pl/100/'
                },]

                this.memSetProduct = memSetProduct;
                this.memOtherProduct = memOtherProduct;
                // 找出Set中 冷、熱、健康好壞、BMI高低的東西
                let cold = 100;
                let hot = 0;
                let sad = 100;
                let happy = 0;
                let fat = 0;
                let thin = 10000;
                for(let i =0;i<this.memSetProduct.length;i++){
                    if(this.memSetProduct[i].setColdHot < cold){
                        this.memCold = this.memSetProduct[i].setId
                        cold = this.memSetProduct[i].setColdHot
                    }
                    if(this.memSetProduct[i].setColdHot > hot){
                        this.memHot = this.memSetProduct[i].setId
                        hot = this.memSetProduct[i].setColdHot
                    }
                    if(this.memSetProduct[i].setHealth < sad){
                        this.memSad = this.memSetProduct[i].setId
                        sad = this.memSetProduct[i].setHealth
                    }
                    if(this.memSetProduct[i].setHealth > happy){
                        this.memHappy = this.memSetProduct[i].setId
                        happy = this.memSetProduct[i].setHealth
                    }
                    if(this.memSetProduct[i].setCalories > fat){
                        this.memFat = this.memSetProduct[i].setId
                        fat = this.memSetProduct[i].setCalories
                    }
                    if(this.memSetProduct[i].setCalories < thin){
                        this.memThin = this.memSetProduct[i].setId
                        thin = this.memSetProduct[i].setCalories
                    }
                }
                // console.log(this.memCold,this.memHot,this.memSad,this.memHappy,this.memFat,this.memThin)
                // 跳轉至healthList的content
                document.getElementById('memContentHealthList').classList.remove('memContentNone');
                for(let j = 0; j<memContent.length;j++){
                    memContent[j].classList.add('memContentNone');
                }
            },
            GoBackToOrderContent(){
                document.getElementById('memContentOrderList').classList.add('memContentNone');
                memContent[1].classList.remove('memContentNone');
            },
            GoBackToHealthContent(){
                document.getElementById('memContentHealthList').classList.add('memContentNone');
                memContent[0].classList.remove('memContentNone');
            },
            memStartGamesGo(){
                game.startGame();
            }
        },
        computed: {
            memChooseCirleColor1(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 1){
                            return 'memContentOrderListCircle memContentOrderListCircleGreen';
                        }else if(this.memOrder[i].orderStatus > 1){
                            return 'memContentOrderListCircle memContentOrderListCircleGrey';
                        }else{
                            return 'memContentOrderListCircle';
                        }
                    }
                }
            },
            memChooseCirleColor2(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 2){
                            return 'memContentOrderListCircle memContentOrderListCircleGreen';
                        }else if(this.memOrder[i].orderStatus > 2){
                            return 'memContentOrderListCircle memContentOrderListCircleGrey';
                        }else{
                            return 'memContentOrderListCircle';
                        }
                    }
                }
            },
            memChooseCirleColor3(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 3){
                            return 'memContentOrderListCircle memContentOrderListCircleGreen';
                        }else if(this.memOrder[i].orderStatus > 3){
                            return 'memContentOrderListCircle memContentOrderListCircleGrey';
                        }else{
                            return 'memContentOrderListCircle';
                        }
                    }
                }
            },
            memChooseCirleColor4(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 4){
                            return 'memContentOrderListCircle memContentOrderListCircleGreen';
                        }else{
                            return 'memContentOrderListCircle';
                        }
                    }
                }
            },
            memChooseCircleFontColor1(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 1){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGreen';
                        }else if(this.memOrder[i].orderStatus > 1){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGrey';
                        }else{
                            return 'memContentOrderListCircleFont';
                        }
                    }
                }
            },
            memChooseCircleFontColor2(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 2){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGreen';
                        }else if(this.memOrder[i].orderStatus > 2){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGrey';
                        }else{
                            return 'memContentOrderListCircleFont';
                        }
                    }
                }
            },
            memChooseCircleFontColor3(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 3){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGreen';
                        }else if(this.memOrder[i].orderStatus > 3){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGrey';
                        }else{
                            return 'memContentOrderListCircleFont';
                        }
                    }
                }
            },
            memChooseCircleFontColor4(){
                for(let i = 0; i< this.memOrder.length;i++){
                    if(this.memOrder[i].orderId == this.nowDataSetNumber){
                        if(this.memOrder[i].orderStatus == 4){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGreen';
                        }else{
                            return 'memContentOrderListCircleFont';
                        }
                    }
                }
            },
        },
    })

    // chartjs
    function memDrawChartLine(){
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

    //遊戲
    var gameObject = function(position,size,selector){
        this.$el = $(selector);
        this.position = position;
        this.size = size;
        this.$el.css('position','absolute')
        this.updateCss()
    }
    //更新CSS
    gameObject.prototype.updateCss = function(){
        this.$el.css('left',this.position.x)
        this.$el.css('top',this.position.y)
        this.$el.css('width',this.size.width)
        this.$el.css('height',this.size.height)
    }
    //偵測碰撞
    gameObject.prototype.collide = function(otherObject){
        var inRangeX = otherObject.position.x > this.position.x && otherObject.position.x < this.position.x + this.size.width;
        var inRangeY = otherObject.position.y > this.position.y && otherObject.position.y < this.position.y + this.size.height;
        return inRangeX && inRangeY;
    }
    
    
    var Ball = function(){
        this.size = {width: 25,height:25};
        this.position = {x: 250, y:250};
        this.velocity = {x:3,y:5}; 
        //繼承步驟1
        gameObject.call(this,this.position,this.size,'.ball');
    }
        //繼承步驟2
    Ball.prototype = Object.create(gameObject.prototype);
        //繼承步驟3
    Ball.prototype.constructor = Ball.constructor;
    
    //球位置更新
    Ball.prototype.update = function(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.updateCss();
        if(this.position.x < 0 || this.position.x > 500){
            this.velocity.x = -this.velocity.x;
        };
        if(this.position.y < 0 || this.position.y > 500){
            this.velocity.y = -this.velocity.y;
        }
    };
    //球
    Ball.prototype.init = function(){
        this.position = {x: 250, y:250};
        var speed = 8;
        var angle = Math.random()*Math.PI*2;
        this.velocity = {
            x: speed * Math.cos(angle),
            y: speed * Math.sin(angle)
        }; 
        this.update();
    }
    
    var Board = function(position,selector){
        this.size = {width:100,height:15};
        gameObject.call(this,position,this.size,selector);
    }
    Board.prototype = Object.create(gameObject.prototype);
    Board.prototype.constructor = Board.constructor;
    
    Board.prototype.update = function(){
        if(this.position.x < 0){
            this.position.x = 0
        };
        if(this.position.x + this.size.width >500){
            this.position.x = 500 - this.size.width
        }
        this.updateCss();
    }
    //遊戲機制
    var Game = function(){
        this.timer = null;
        this.grade = 0;
        this.initControl();
        this.control = {
    
        };
    }
    //遊戲控制
    Game.prototype.initControl = function(){
        let _this = this;
        $(window).keydown(function(evt){
            _this.control[evt.key] = true;
            console.log(_this.control);
        })
        $(window).keyup(function(evt){
            _this.control[evt.key] = false;
            console.log(_this.control);
        })
    }
    //開始遊戲
    Game.prototype.startGame = function(){
        var time = 3;
        var _this = this;
        this.grade = 0;
        ball.init();
        $("button").hide();
        let timeCount = setInterval(function(){
            $(".infoText").text(time);
            time--;
            if(time < 0){
                clearInterval(timeCount);
                $(".info").hide();
                _this.startGameMain();
            }
        },1000);
    }
    //開始遊戲
    Game.prototype.startGameMain = function(){
        let _this = this;
        this.timer = setInterval(function(){
            if(Board1.collide(ball)){
                console.log('hit board1');
                ball.velocity.y = -ball.velocity.y;
                ball.velocity.x *= 1.1
                ball.velocity.y *= 1.1
                ball.velocity.x += 0.5 - Math.random()
                ball.velocity.y += 0.5 - Math.random()
            }
            if(Board2.collide(ball)){
                console.log('hit board2');
                ball.velocity.y = -ball.velocity.y;
                _this.grade += 10;
            }
            if(ball.position.y < 0){
                console.log('Board1 lose')
                _this.endGame('Computer lose');
            }
            if(ball.position.y > 500){
                console.log('Board2 lose')
                _this.endGame('Player lose');
            }
            if(_this.control["ArrowLeft"]){
                Board2.position.x -=12;
            }
            if(_this.control["ArrowRight"]){
                Board2.position.x +=12;
            }
            Board1.position.x += ball.position.x > Board1.position.x + Board1.size.width/2 ? 12:0;
            Board1.position.x += ball.position.x < Board1.position.x + Board1.size.width/2 ? -12:0;
            Board1.update();
            Board2.update();
            ball.update();
            $(".grade").text(_this.grade);
        },30)
    }
    Game.prototype.endGame = function(result){
        clearInterval(this.timer);
        $(".info").show();
        // 把今日遊玩紀錄寫入資料庫
        let now = new Date();
        let today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        if(result == 'Computer lose'){
            this.grade += 100;
        }
        $(".infoText").html(`${result} You Get Score：${this.grade}<br>遊玩次數達到本日上線囉~明日請早`);
        memData.memSignIntime = today;
        console.log(memData.memSignIntime);
        // 要加入積分
        memData.memScore += this.grade;
        console.log(memData.memScore);
        // 將 memData.memScore 與 memData.memSignIntime回傳資料庫
    }

    var ball = new Ball();
    var Board1 = new Board(
        {x:0,y:30},'.b1'
    );
    
    var Board2 = new Board(
        {x:0,y:455},'.b2'
    );
    var game = new Game();


    // 生成折線圖
    document.getElementById("myChart").innerHTML = '';
    memDrawChartLine();

    // typeit
    function tomotoTypeIt(){
        new TypeIt("#memSimpleUsage", {
            speed: 150,
            waitUntilVisible: true
            }).type("每天只能完一次喔", {delay: 300})
            .move(-3)
            .delete(1)
            .type('玩',{delay: 300})
            .move('END')
            .pause(300)
            .delete(8)
            .type('快點來賺寶幣8~')
            .go();
    }

>>>>>>> EricHong
}
new Vue({
    el: '#memApp',
    data: {
        memData,
    },
})