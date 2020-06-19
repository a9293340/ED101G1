// import shopCart from '../../dev/js/layout/shoppingcart.js';
import charLine from '../../dev/js/modules/chartLine.js';
window.addEventListener('load',gogoPower);

function gogoPower(){
    
    let memHeaderBtn = document.getElementsByClassName('memHeaderBtn');
    let memContent = document.getElementsByClassName('memContent');
    // 折線圖
    let memHealthColdHot = [];
    let memHealthHealth = [];
    let memHealthStomach = [];

    
    let memVm = new Vue({
        el: '#memApp',
        data: {
            memData:{},
            memOrder:[],
            memHealth:[],
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
                    $.getJSON("../dev/js/modules/memSetOrder.json")
                    .then((data)=>{
                        this.memSetOrder = data;
                    });
                    $.getJSON("../dev/js/modules/memOtherOrder.json")
                    .then((data)=>{
                        this.memOtherOrder = data;
                    });
                    $.getJSON("../dev/js/modules/memSingleOrder.json")
                    .then((data)=>{
                        this.memSingleOrder = data;
                    });

                }
                if(Number(changeCount) == 2){
                    // 生成折線圖
                    document.getElementById("myChart").innerHTML = '';
                    charLine(memHealthColdHot,memHealthHealth,memHealthStomach);
                }
                if(Number(changeCount) == 3){
                    let now = new Date();
                    if(new Date(this.memData.memSignIntime) > now){
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
                $('html, body').animate({
                    scrollTop: 0
                }, 200);
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
                $('html, body').animate({
                    scrollTop: 0
                }, 200);
                let healthId = e.target.dataset.healthid;
                console.log(healthId);
                this.nowDataHealthNumber = Number(healthId);
                // ajax 套餐及其他商品資料 並丟入vue的data內
                $.getJSON("../dev/js/modules/memSetProduct.json")
                .then((data)=>{
                    this.memSetProduct = data;
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
                });
                $.getJSON("../dev/js/modules/memOtherProduct.json")
                .then((data)=>{
                    this.memOtherProduct = data;
                });
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
            },
            memBuyAgain(){
                // single
                let single = [];
                let setA = [];
                let other = [];
                let count = 0;
                if(localStorage['singleNum']){
                    count = Number(localStorage['singleNum'])
                }else{
                    localStorage['singleNum'] = 0;
                    count = localStorage['singleNum']
                }
                if(localStorage['singleOrder']){
                    single = JSON.parse(localStorage['singleOrder']);
                    for(let i = 0; i < this.memSingleOrder.length; i++){
                        if(this.memSingleOrder[i].soBelongOrder == this.nowDataSetNumber){
                            single.push({
                                "meat":this.memSingleOrder[i].mainfood,
                                "rice":this.memSingleOrder[i].soRice,
                                "single1":this.memSingleOrder[i].sideDishes1,
                                "single2":this.memSingleOrder[i].sideDishes2,
                                "single3":this.memSingleOrder[i].sideDishes3,
                                "soPrice":this.memSingleOrder[i].soPrice,
                                "soImg":this.memSingleOrder[i].soImg,
                                "sNum":count
                            })
                            count++
                        }
                    }
                    localStorage['singleNum'] = count;
                    localStorage['singleOrder'] = JSON.stringify(single);
                }else{
                    for(let i = 0; i < this.memSingleOrder.length; i++){
                        if(this.memSingleOrder[i].soBelongOrder == this.nowDataSetNumber){
                            single.push({
                                "meat":this.memSingleOrder[i].mainfood,
                                "rice":this.memSingleOrder[i].soRice,
                                "single1":this.memSingleOrder[i].sideDishes1,
                                "single2":this.memSingleOrder[i].sideDishes2,
                                "single3":this.memSingleOrder[i].sideDishes3,
                                "soPrice":this.memSingleOrder[i].soPrice,
                                "soImg":this.memSingleOrder[i].soImg,
                                "sNum":count
                            })
                            count++
                        }
                    }
                    localStorage['singleNum'] = count;
                    localStorage['singleOrder'] = JSON.stringify(single);
                }

                // set
                if(localStorage['setdoMenuList']){
                    setA = JSON.parse(localStorage['setdoMenuList']);
                    for(let i = 0; i < this.memSetOrder.length; i++){
                        if(this.memSetOrder[i].setoBelongOrder == this.nowDataSetNumber){
                            let check = 0;
                            for(let j = 0;j < setA.length;j++){
                                if(setA[j].setdoName == this.memSetOrder[i].setName){
                                    check ++;
                                }
                            }
                            if(check > 0){
                                for(let j = 0;j < setA.length;j++){
                                    if(setA[j].setdoName == this.memSetOrder[i].setName){
                                        setA[j].setdoMany += this.memSetOrder[i].setoAmount
                                    }
                                }
                            }else{
                                setA.push({
                                    "setdoMany":this.memSetOrder[i].setoAmount,
                                    "setdoId":this.memSetOrder[i].setId,
                                    "setdoImg":this.memSetOrder[i].setImage,
                                    "setdoName":this.memSetOrder[i].setName,
                                    "setdoPrice":this.memSetOrder[i].setoPrice / this.memSetOrder[i].setoAmount
                                })
                            }
                        }
                    }
                    localStorage['setdoMenuList'] = JSON.stringify(setA);
                }else{
                    for(let i = 0; i < this.memSetOrder.length; i++){
                        if(this.memSetOrder[i].setoBelongOrder == this.nowDataSetNumber){
                            setA.push({
                                "setdoMany":this.memSetOrder[i].setoAmount,
                                "setdoId":this.memSetOrder[i].setId,
                                "setdoImg":this.memSetOrder[i].setImage,
                                "setdoName":this.memSetOrder[i].setName,
                                "setdoPrice":this.memSetOrder[i].setoPrice / this.memSetOrder[i].setoAmount
                            })
                        }
                    }
                    localStorage['setdoMenuList'] = JSON.stringify(setA);
                }

                //other
                if(localStorage['otherOrder']){
                    other = JSON.parse(localStorage['otherOrder']);
                    for(let i = 0; i < this.memOtherOrder.length; i++){
                        if(this.memOtherOrder[i].ooBelongOrder == this.nowDataSetNumber){
                            let check = 0;
                            for(let j = 0;j < other.length;j++){
                                if(other[j].otherName == this.memOtherOrder[i].opName){
                                    check ++;
                                }
                            }
                            if(check > 0){
                                for(let j = 0;j < other.length;j++){
                                    if(other[j].otherName == this.memOtherOrder[i].opName){
                                        other[j].otherMany += this.memOtherOrder[i].ooAmount
                                    }
                                }
                            }else{
                                other.push({
                                    "otherMany":this.memOtherOrder[i].ooAmount,
                                    "otherId":this.memOtherOrder[i].opId,
                                    "otherImg":this.memOtherOrder[i].opImage,
                                    "otherName":this.memOtherOrder[i].opName,
                                    "otherPrice":this.memOtherOrder[i].ooPrice / this.memOtherOrder[i].ooAmount
                                })
                            }
                        }
                    }
                    localStorage['otherOrder'] = JSON.stringify(other);
                }else{
                    for(let i = 0; i < this.memOtherOrder.length; i++){
                        if(this.memOtherOrder[i].ooBelongOrder == this.nowDataSetNumber){
                            other.push({
                                "otherMany":this.memOtherOrder[i].ooAmount,
                                "otherId":this.memOtherOrder[i].opId,
                                "otherImg":this.memOtherOrder[i].opImage,
                                "otherName":this.memOtherOrder[i].opName,
                                "otherPrice":this.memOtherOrder[i].ooPrice / this.memOtherOrder[i].ooAmount
                            })
                        }
                    }
                    localStorage['otherOrder'] = JSON.stringify(other);
                }
                setcart()
                setsetdocart()
                setordercart()
            },
            AddOtherToCart(e){
                let id = Number(e.target.dataset.count)
                console.log(id)
                let other = []
                if(localStorage['otherOrder']){
                    other = JSON.parse(localStorage['otherOrder']);
                    if(other.some(function(item){return item.otherId == id})){
                        for(let i = 0;i<other.length;i++){
                            if(other[i].otherId == id){
                                other[i].otherMany ++;
                            }
                        }
                    }else{
                        for(let i = 0; i < this.memOtherProduct.length; i++){
                            if(this.memOtherProduct[i].opId == id){
                                other.push({
                                    "otherMany":1,
                                    "otherId":this.memOtherProduct[i].opId,
                                    "otherImg":this.memOtherProduct[i].opImage,
                                    "otherName":this.memOtherProduct[i].opName,
                                    "otherPrice":this.memOtherProduct[i].opPrice
                                })
                            }
                        }
                    }
                    localStorage['otherOrder'] = JSON.stringify(other);
                    // console.log(other.some(function(item){return item.otherId == id}))
                }else{
                    for(let i = 0; i < this.memOtherProduct.length; i++){
                        if(this.memOtherProduct[i].opId == id){
                            other.push({
                                "otherMany":1,
                                "otherId":this.memOtherProduct[i].opId,
                                "otherImg":this.memOtherProduct[i].opImage,
                                "otherName":this.memOtherProduct[i].opName,
                                "otherPrice":this.memOtherProduct[i].opPrice
                            })
                        }
                    }
                    localStorage['otherOrder'] = JSON.stringify(other);
                }
                setcart()
                setsetdocart()
                setordercart()
            },
            AddSetToCart(e){
                let id = Number(e.target.dataset.count)
                console.log(id)
                let setA = [];
                if(localStorage['setdoMenuList']){
                    setA = JSON.parse(localStorage['setdoMenuList']);
                    if(setA.some(function(item){return item.setdoId == id})){
                        for(let i = 0;i<setA.length;i++){
                            if(setA[i].setdoId == id){
                                setA[i].setdoMany ++;
                            }
                        }
                    }else{
                        for(let i = 0; i < this.memSetProduct.length; i++){
                            if(this.memSetProduct[i].setId == id){
                                setA.push({
                                    "setdoMany":1,
                                    "setdoId":this.memSetProduct[i].setId,
                                    "setdoImg":this.memSetProduct[i].setImage,
                                    "setdoName":this.memSetProduct[i].setName,
                                    "setdoPrice":this.memSetProduct[i].setPrice
                                })
                            }
                        }
                    }
                    localStorage['setdoMenuList'] = JSON.stringify(setA);
                }else{
                    for(let i = 0; i < this.memSetProduct.length; i++){
                        if(this.memSetProduct[i].setId == id){
                            setA.push({
                                "setdoMany":1,
                                "setdoId":this.memSetProduct[i].setId,
                                "setdoImg":this.memSetProduct[i].setImage,
                                "setdoName":this.memSetProduct[i].setName,
                                "setdoPrice":this.memSetProduct[i].setPrice
                            })
                        }
                    }
                    localStorage['setdoMenuList'] = JSON.stringify(setA);
                }
                setcart()
                setsetdocart()
                setordercart()
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
        mounted() {
            // ajax memData
            $.getJSON("../dev/js/modules/memData.json")
            .then((data)=>{
                this.memData = data;
            });
            // ajax memOrder
            $.getJSON("../dev/js/modules/memOrder.json")
            .then((data)=>{
                this.memOrder = data;
                // console.log(data)
            });
            // ajax memHealth 並且 畫折線圖
            $.getJSON("../dev/js/modules/memHealth.json")
            .then((data)=>{
                this.memHealth = data;
                for(let i = 0; i<this.memHealth.length;i++){
                    let objColdHot = {x:new Date(this.memHealth[i].healLastTime),y:this.memHealth[i].healColdHot};
                    let objhealth = {x:new Date(this.memHealth[i].healLastTime),y:this.memHealth[i].healhealth};
                    let objStomach = {x:new Date(this.memHealth[i].healLastTime),y:this.memHealth[i].healStomach};
                    memHealthColdHot.push(objColdHot);
                    memHealthHealth.push(objhealth);
                    memHealthStomach.push(objStomach);
                }
                // 生成折線圖
                setTimeout(() => {
                    document.getElementById("myChart").innerHTML = '';
                    charLine(memHealthColdHot,memHealthHealth,memHealthStomach);
                }, 100);
                // console.log(this.memHealth)
            });
        },
    })

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
    Ball.prototype = Object.create(gameObject.prototype);
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
        memVm.$data.memData.memSignIntime = today;
        console.log('aaa'+memVm.$data.memData.memSignIntime);
        // 要加入積分
        memVm.$data.memData.memScore += this.grade;
        console.log('bbb'+memVm.$data.memData.memScore);
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

}



