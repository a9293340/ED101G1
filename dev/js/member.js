window.addEventListener('load',gogoPower);

function gogoPower(){
    // 第一次ajax 在vue 初始化時就執行並抓取會員資料 健康分析跟訂單資料
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
        memGender : '男',
        memSignIntime: '2020-06-12 15:20:00'
    }
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
        healId:10009,
        healClass : 1,
        healReview : '有點熱喔你有點熱喔你有點熱喔你有點熱喔你',
        healColdHot : 85,
        healhealth : 36,
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
            memSetOrder:[],
            memOtherOrder:[],
            memSingleOrder:[],
            memOrder,
            memHealth,
            nowDataSetNumber:0
        },
        methods: {
            changContentBtn(e){
                // console.log(e.target.dataset.change)
                let changeCount = e.target.dataset.change;
                document.getElementById('memContentOrderList').classList.add('memContentNone');
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
                    this.memSetOrder = memSetOrder;
                    this.memOtherOrder = memOtherOrder;
                    this.memSingleOrder = memSingleOrder;

                }
                if(Number(changeCount) == 3){
                    let now = new Date();
                    if(new Date(memData.memSignIntime) > now){
                        $(".infoText").html("遊玩次數達到本日上線囉~明日請早");
                        $("button").hide();
                    }
                }
            },
            showOrderList(e){
                let orderId = e.target.dataset.order;
                // 現在的訂單4
                this.nowDataSetNumber = orderId;
                console.log(orderId);
                // 跳轉至orderList的content
                document.getElementById('memContentOrderList').classList.remove('memContentNone');
                for(let j = 0; j<memContent.length;j++){
                    memContent[j].classList.add('memContentNone');
                }
            },
            showHealthList(e){
                let healthId = e.target.dataset.healthid;
                console.log(healthId);
                // 跳轉至healthList的content
            },
            GoBackToOrderContent(){
                document.getElementById('memContentOrderList').classList.add('memContentNone');
                memContent[1].classList.remove('memContentNone');
            }
        },
    })


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
    
    
    var ball = new Ball();
    
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
    
    var Board1 = new Board(
        {x:0,y:30},'.b1'
    );
    
    var Board2 = new Board(
        {x:0,y:455},'.b2'
    );
    
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
    
    var game = new Game();

    document.getElementsByClassName('start')[0].addEventListener('click',startGamesGo);

    function startGamesGo(){
        game.startGame();
    }

    // typeit
    new TypeIt("#memSimpleUsage", {
        strings: "每天只能玩一次喔",
        speed: 100,
        waitUntilVisible: true
        }).go();
}



