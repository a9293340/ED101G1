// import shopCart from '../../dev/js/layout/shoppingcart.js';
import charLine from '../../dev/js/modules/chartLine.js';
import nextDay from '../../dev/js/modules/findDays.js';
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
            memOrderPageArr:[],
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
            memThin:0,
            memOrderPages:0,
            memPage:2
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

                }
                if(Number(changeCount) == 2){
                    // 生成折線圖
                    document.getElementById("myChart").innerHTML = '';
                    charLine(memHealthColdHot,memHealthHealth,memHealthStomach);
                }
                if(Number(changeCount) == 3){
                    // let now = new Date();
                    if(new Date(this.memData.memPlayTime) > new Date()){
                        // alert('aaa')
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
                console.log(this.nowDataSetNumber);
                console.log(this.memSetOrder)
                //生成QRCode(要換成php網址)
                $('#memContentOrderListQRCode').html('');
                $('#memContentOrderListQRCode').qrcode({
                    width: 120,
                    height: 120,
                    text: `../php/memOrderList.php?orderId=${this.nowDataSetNumber}`
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
                                "meatId":this.memSingleOrder[i].mainfoodId,
                                "rice":this.memSingleOrder[i].soRice,
                                "riceId":this.memSingleOrder[i].soRiceId,
                                "single1":this.memSingleOrder[i].sideDishes1,
                                "singleId1":this.memSingleOrder[i].sideDishes1Id,
                                "single2":this.memSingleOrder[i].sideDishes2,
                                "singleId2":this.memSingleOrder[i].sideDishes2Id,
                                "single3":this.memSingleOrder[i].sideDishes3,
                                "singleId3":this.memSingleOrder[i].sideDishes3Id,
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
                                "meatId":this.memSingleOrder[i].mainfoodId,
                                "rice":this.memSingleOrder[i].soRice,
                                "riceId":this.memSingleOrder[i].soRiceId,
                                "single1":this.memSingleOrder[i].sideDishes1,
                                "singleId1":this.memSingleOrder[i].sideDishes1Id,
                                "single2":this.memSingleOrder[i].sideDishes2,
                                "singleId2":this.memSingleOrder[i].sideDishes2Id,
                                "single3":this.memSingleOrder[i].sideDishes3,
                                "singleId3":this.memSingleOrder[i].sideDishes3Id,
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
                alert('已加入購物車');
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
                alert('已加入購物車');

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
                alert('已加入購物車');

            },
            memChangeBigHead(e){
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onload = function(){
                    document.getElementById('memPicture').src = reader.result;
                    // ajax
                }
                reader.readAsDataURL(file);
            },
            //分頁 
            memGoNextPage(e){
                let index = Number(e.target.dataset.index);
                for(let i = 0; i<document.getElementsByClassName('memContentOrderPages').length;i++){
                    document.getElementsByClassName('memContentOrderPages')[i].classList.remove('memContentOrderPagesDark');
                }
                document.getElementsByClassName('memContentOrderPages')[index].classList.toggle('memContentOrderPagesDark');
                this.memOrderPageArr = [];
                // console.log('aaa',index);
                for(let i = 0; i < this.memOrder.length; i++){
                    if( i >= (index*this.memPage) && i <((index+1)*this.memPage)){
                        // console.log('aaa',i);
                        this.memOrderPageArr.push(this.memOrder[i]);
                    }
                }
                console.log(this.memOrderPageArr);
            },
            cansolOrder(e){
                let check = confirm('確定要取消訂單？');
                if(check){
                    let id = Number(e.target.dataset.order);
                    fetch(`./php/cansolOrder.php?orderId=${id}`, {})
                    .then((response) => {
                        return response.text(); 
                    }).then((Data) => {
                        // console.log(Data);
                        if(Data == 'good'){
                            location.reload();
                        }
                    }).catch((err) => {
                        console.log('錯誤:', err);
                    });
                };
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
                        if(this.memOrder[i].orderStatus == 4 || this.memOrder[i].orderStatus == 5){
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
                        if(this.memOrder[i].orderStatus == 4 || this.memOrder[i].orderStatus == 5){
                            return 'memContentOrderListCircleFont memContentOrderListCircleFontGreen';
                        }else{
                            return 'memContentOrderListCircleFont';
                        }
                    }
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                $.ajax({
                    type: "GET",
                    url: "./php/memajax1.php",
                    success: function (response) {
                        memVm.$data.memData = JSON.parse(response)[0][0];
                        memVm.$data.memOrder = JSON.parse(response)[1];
                        for(let i = 0; i < memVm.$data.memOrder.length; i++){
                            if(i <(memVm.$data.memPage)){
                                // console.log('aaa',i);
                                memVm.$data.memOrderPageArr.push(memVm.$data.memOrder[i]);
                            }
                        }
                        memVm.$data.memHealth = JSON.parse(response)[2];
                        memVm.$data.memOrderPages = Math.ceil(memVm.$data.memOrder.length / memVm.$data.memPage);
                        console.log(JSON.parse(response));
                        // this.memData = JSON.parse(response)[0][0];
                        // this.memOrder = JSON.parse(response)[1];
                        // this.memHealth = JSON.parse(response)[2];
                        for(let i = 0; i<memVm.$data.memHealth.length;i++){
                            let objColdHot = {x:new Date(memVm.$data.memHealth[i].healLastTime),y:memVm.$data.memHealth[i].healColdHot};
                            let objhealth = {x:new Date(memVm.$data.memHealth[i].healLastTime),y:memVm.$data.memHealth[i].healHealth};
                            let objStomach = {x:new Date(memVm.$data.memHealth[i].healLastTime),y:memVm.$data.memHealth[i].healStomach};
                            memHealthColdHot.push(objColdHot);
                            memHealthHealth.push(objhealth);
                            memHealthStomach.push(objStomach);
                        }
                        // 生成折線圖
                        if(memVm.$data.memHealth.length != 0){
                            console.log('b',memHealthHealth);
                            setTimeout(() => {
                                document.getElementById("myChart").innerHTML = '';
                                charLine(memHealthColdHot,memHealthHealth,memHealthStomach);
                            }, 100);
                        }
                        $.ajax({
                            type: "GET",
                            url: "./php/memajax2.php",
                            success: function (response) {
                                memVm.$data.memSingleOrder = JSON.parse(response)[0];
                                memVm.$data.memSetOrder = JSON.parse(response)[1];
                                memVm.$data.memOtherOrder = JSON.parse(response)[2];
                                console.log(JSON.parse(response));
                                console.log(memVm.$data.memSingleOrder);
                                $.ajax({
                                    type: "GET",
                                    url: "./php/memajax3.php",
                                    success: function (response) {
                                        memVm.$data.memSetProduct = JSON.parse(response)[0];
                                        memVm.$data.memOtherProduct = JSON.parse(response)[1];
                                        console.log(memVm.$data.memOtherProduct);
                                    }
                                });
                                document.getElementsByClassName('memContentOrderPages')[0].classList.toggle('memContentOrderPagesDark');
                            }
                        });
                    }
                });
            })

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
            // console.log(_this.control);
        })
        $(window).keyup(function(evt){
            _this.control[evt.key] = false;
            // console.log(_this.control);
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
        let _this = this;
        clearInterval(this.timer);
        $(".info").show();
        // 把今日遊玩紀錄寫入資料庫
        let now = nextDay(1);
        let today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        if(result == 'Computer lose'){
            this.grade += 100;
        }
        $(".infoText").html(`${result} You Get Score：${this.grade}<br>遊玩次數達到本日上線囉~明日請早`);
        memVm.$data.memData.memPlaytime = today;
        console.log('aaa'+memVm.$data.memData.memPlaytime);
        // 要加入積分
        memVm.$data.memData.memScore = Number(memVm.$data.memData.memScore) + Number(this.grade);
        let Score = Number(memVm.$data.memData.memScore) + Number(this.grade);
        console.log('bbb'+memVm.$data.memData.memScore);
        // 將 memData.memScore 與 memData.memPlaytime回傳資料庫
        _this.ajaxGame(Score,today);
    }

    Game.prototype.ajaxGame = function(Score,today){
        var xhr = new XMLHttpRequest();
        xhr.onload=function (){
            if( xhr.status == 200 ){
                alert('遊戲結束')
            }else{
                alert( xhr.status );
            }
        }
        var url = `./php/memPlayGameScoreAndTimePlus.php?memScore=${Score}&memPlayTime=${today}`;
        xhr.open("Get", url, true);
        xhr.send( null );
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



