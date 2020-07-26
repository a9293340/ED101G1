//使用方法 載入這支js
//將自選setcart() 套餐setsetdocart() 其他setordercart() 加入你們的加入購物車事件中


let totalOrder= [];
let orderCart = [];
let otherMenu = [];
let setdoMenu = [];
let singleNum = 0;
let setdoNum = 0;

var SinglePrice = 0 ;
var SetdoPrice = 0; 
var OtherPrice = 0 ;
var OrTotalPrice = 0;
var orderClass = -1;
var MemScore= 0;
var finalOrTotalPrice = 0;
var OrYourScore = 0;
var orderCartNumSin = 0;
var orderCartNumSet = 0;
var orderCartNumOth = 0;
var orderCartNum = 0;

var singleorderlist = new Vue({   //購物車 vue
    el: '#list',
    data: {
        finalsinglelist: [],
        finalsetdolist: [],
        finalorderlist: []
    },
})


localStorage.setItem('orderClass',orderClass);
if(localStorage.getItem('HeaderorderClass')){
    orderClass=1;
    localStorage.setItem('orderClass',orderClass);
    document.getElementById('orderAddress').innerHTML='外帶';
}    

function setcart() {          //一開始自選購物車重新渲染
    SinglePrice = 0 ;
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    orderCart = finalsinglelist; //整個的重點
    singleNum = localStorage.getItem('singleNum');
    console.log(singleorderlist.$data.finalsinglelist);
    // SinglePrice = 0 ;
    // if(singleorderlist.$data.finalsinglelist.length>0){
    // for(var i=0; i < singleorderlist.$data.finalsinglelist.length;i++){
    //     SinglePrice = parseInt(SinglePrice) + parseInt(singleorderlist.$data.finalsinglelist[i].soPrice);
    // }
    // }
    console.log(SinglePrice);
    OrderTotalPrice();
    setTimeout(function () {
        for (var h = 0; h < singleNum; h++) {
            if (document.getElementById(`b${h}`)) {
                document.getElementById(`b${h}`).addEventListener('click', deletesinglecart);
            } else {
                console.log("not yet");
            }
        }
    }, 1000);
    shoppingCartNum();

}

if (localStorage.getItem('singleOrder')) { //重點2
    setcart();
}
//...................................
function setsetdocart() {       //一開始套餐購物車重新渲染
   
    var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
    singleorderlist.$data.finalsetdolist = finalsetdolist;
    setdoMenu = finalsetdolist;
    console.log(singleorderlist.$data.finalsetdolist);
    // SetdoPrice = 0; 
    // if(singleorderlist.$data.finalsetdolist.length>0){
    // for(var i = 0; i<singleorderlist.$data.finalsetdolist.length; i++){
    //     SetdoPrice = parseInt(SetdoPrice)+parseInt(singleorderlist.$data.finalsetdolist[i].setdoPrice)*parseInt(singleorderlist.$data.finalsetdolist[i].setdoMany);
    // }
    // }
    console.log(SetdoPrice);
    OrderTotalPrice();
    setTimeout(function () {
        for (let g = 0; g < finalsetdolist.length; g++) {
            document.getElementById(`setdodelete${finalsetdolist[g].setdoId}`).addEventListener('click', deletesetdocart);
        }
    }, 1000);
    shoppingCartNum();
}
if (localStorage.getItem('setdoMenuList')) {
    setsetdocart();
}

function setordercart() {      //一開始其他購物車重新渲染
    
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    singleorderlist.$data.finalorderlist = finalorderlist;
    otherMenu = finalorderlist;
    // OtherPrice = 0;  
    // if( singleorderlist.$data.finalorderlist.length>0){
    //     for(var i=0;i < singleorderlist.$data.finalorderlist.length ; i++){
    //         OtherPrice = parseInt(OtherPrice) + parseInt(singleorderlist.$data.finalorderlist[i].otherPrice)* parseInt(singleorderlist.$data.finalorderlist[i].otherMany);
    //     }
    // }
    console.log(OtherPrice);
    OrderTotalPrice();
    setTimeout(function () {
        for (let g = 0; g < finalorderlist.length; g++) {
            document.getElementById(`orderdelete${finalorderlist[g].otherId}`).addEventListener('click', deleteordercart);
        }
    }, 1000);
    shoppingCartNum();

}
if (localStorage.getItem('otherOrder')) {
    setordercart();
}




function deletesinglecart() {       //刪除購物車
    let A = this.dataset.num;
    console.log(A);
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    for (let i = 0; i < finalsinglelist.length; i++) {

        if (finalsinglelist[i].sNum == Number(A)) {
            finalsinglelist.splice(i, 1);
            orderCart.splice(i, 1);
        }
    }

    console.log(finalsinglelist);
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    localStorage.setItem('singleOrder', JSON.stringify(finalsinglelist));
    OrderTotalPrice();
    shoppingCartNum();

}

function deletesetdocart() {
    let A = this.dataset.num;
    console.log(A);
    var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
    for (let i = 0; i < finalsetdolist.length; i++) {

        if (finalsetdolist[i].setdoId == Number(A)) {
            finalsetdolist.splice(i, 1);
            setdoMenu.splice(i, 1);
        }
    }
    singleorderlist.$data.finalsetdolist = finalsetdolist;
    localStorage.setItem('setdoMenuList', JSON.stringify(finalsetdolist));
    OrderTotalPrice();
    shoppingCartNum();
}


function deleteordercart() {
    let A = this.dataset.num;
    console.log(A);
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    for (let i = 0; i < finalorderlist.length; i++) {

        if (finalorderlist[i].otherId == Number(A)) {
            finalorderlist.splice(i, 1);
            otherMenu.splice(i, 1);
        }
    }
    singleorderlist.$data.finalorderlist = finalorderlist;
    localStorage.setItem('otherOrder', JSON.stringify(finalorderlist));
    OrderTotalPrice();
    shoppingCartNum();
}

function OrderTotalPrice(){
    SinglePrice = 0 ;
    if(singleorderlist.$data.finalsinglelist.length>0){
    for(var i=0; i < singleorderlist.$data.finalsinglelist.length;i++){
        SinglePrice = parseInt(SinglePrice) + parseInt(singleorderlist.$data.finalsinglelist[i].soPrice);
    }
    }
    SetdoPrice = 0; 
    if(singleorderlist.$data.finalsetdolist.length>0){
    for(var i = 0; i<singleorderlist.$data.finalsetdolist.length; i++){
        SetdoPrice = parseInt(SetdoPrice)+parseInt(singleorderlist.$data.finalsetdolist[i].setdoPrice)*parseInt(singleorderlist.$data.finalsetdolist[i].setdoMany);
    }
    }
    OtherPrice = 0;  
    if( singleorderlist.$data.finalorderlist.length>0){
        for(var i=0;i < singleorderlist.$data.finalorderlist.length ; i++){
            OtherPrice = parseInt(OtherPrice) + parseInt(singleorderlist.$data.finalorderlist[i].otherPrice)* parseInt(singleorderlist.$data.finalorderlist[i].otherMany);
        }
    }


    OrTotalPrice = 0;
    console.log(SetdoPrice);
    OrTotalPrice = parseInt(SinglePrice)+parseInt(SetdoPrice)+parseInt(OtherPrice);
    OrYourScore = parseInt(OrTotalPrice/100);
    document.getElementById('orderYourSorce').innerText=`獲得積分: ${OrYourScore}點`;
    document.getElementById('OrTotal').innerText=`總價: ${OrTotalPrice}元`;
    finalOrTotalPrice = OrTotalPrice;
    document.getElementById('orderUseScore').value ="";
    orederScoreAndPrice();

}

// shoppingcart 出現消失
document.getElementById('shoppingcart').addEventListener('click',()=>{
    // alert('a')
    document.getElementById('ordercart').classList.toggle('ordercartOpen');
    if(sessionStorage.getItem('memId')=='good'){
         MemScore = sessionStorage.getItem('orderMemScore');
        document.getElementById('orderScore').innerText = `我的積分：`+ MemScore + `點`;
    }
})


document.getElementById('orderCartClose').addEventListener('click',()=>{
    document.getElementById('ordercart').classList.toggle('ordercartOpen');
})


//login signup
if(sessionStorage['memId'] === 'good'){
    console.log(sessionStorage['memImage']);
    document.getElementById('memHead').src = sessionStorage['memImage'];
    $('#homeContainderBgc').hide();
    $('#homeContainer').hide();
    $('#member').hide();
}else{
    $('#homeContainderBgc').hide();
    $('#homeContainer').hide();
    $('#member_aflogin').hide();
}


$('#member').click(function (e) { 
    e.preventDefault();
    $('#homeContainderBgc').show(550);
    $('#homeContainer').show(550);
});
$('#homeContainderBgc').click(function (e) { 
    e.preventDefault();
    $('#homeContainderBgc').hide(550);
    $('#homeContainer').hide(550);

});


//登出  php 刪除session
$('#log_out').click(function(e){
    e.preventDefault();
    // console.log('aaa');
    $.ajax({
        type: "GET",
        url: "./php/clearSession.php",
        success: function (response) {
            sessionStorage['memId'] = 'bad';
            sessionStorage['memImage'] = 'bad';
            sessionStorage['memName'] = '';
            // location.href='./homepage.html';
            $('#member_aflogin').hide();
            $('#member').show(500);
        }
    });
})

if(sessionStorage['memName'] != ''){
    $('#member_name').text('Hi~'+sessionStorage['memName']);
}

if(localStorage.getItem('address')){
    let orad = localStorage.getItem('address');
    document.getElementById('orderAddress').innerHTML = '外送地址 :'+ orad;
    orderClass=0;
    localStorage.setItem('orderClass',orderClass);
}
if(sessionStorage.getItem('memId')=='good'){
    MemScore = sessionStorage.getItem('orderMemScore');
   document.getElementById('orderScore').innerText = `我的積分：`+ MemScore + `點`;
}

document.getElementById('orderUseScore').addEventListener('keyup',orederScoreAndPrice);

function orederScoreAndPrice(){
    // console.log('123');
    MemScore = sessionStorage.getItem('orderMemScore');
    finalOrTotalPrice = OrTotalPrice;
    // OrTotalPrice = OrTotalPrice - document.getElementById('orderUseScore').value;
    // MemScore= MemScore - document.getElementById('orderUseScore').value;
    console.log(MemScore);
    console.log(document.getElementById('orderUseScore').value);

    // if(parseInt(document.getElementById('orderUseScore').value) <= parseInt(finalOrTotalPrice)){
        // finalOrTotalPrice = finalOrTotalPrice - document.getElementById('orderUseScore').value;
        // document.getElementById('OrTotal').innerText=`總價:`+ finalOrTotalPrice + `元`;
    // }

    if(parseInt(document.getElementById('orderUseScore').value) <= parseInt(MemScore) && parseInt(document.getElementById('orderUseScore').value) <= parseInt(finalOrTotalPrice) && document.getElementById('orderUseScore').value !== ""){
    
    MemScore = MemScore - document.getElementById('orderUseScore').value;
    document.getElementById('orderScore').innerText = `我的積分：`+ MemScore + `點`;
    finalOrTotalPrice = finalOrTotalPrice - document.getElementById('orderUseScore').value;
        document.getElementById('OrTotal').innerText=`總價:`+ finalOrTotalPrice + `元`;
    console.log(MemScore);
    }else if(document.getElementById('orderUseScore').value ==""){
        // document.getElementById('orderUseScore').value='0';
        MemScore = MemScore - 0;
    document.getElementById('orderScore').innerText = `我的積分：`+ MemScore + `點`;
    finalOrTotalPrice = finalOrTotalPrice - 0;
        document.getElementById('OrTotal').innerText=`總價:`+ finalOrTotalPrice + `元`;
    }else{
        alert('便當沒有那麼貴 請重新輸入');
        MemScore = MemScore - 0;
    document.getElementById('orderScore').innerText = `我的積分：`+ MemScore + `點`;
    finalOrTotalPrice = finalOrTotalPrice - 0;
        document.getElementById('OrTotal').innerText=`總價:`+ finalOrTotalPrice + `元`;
        document.getElementById('orderUseScore').value ="";
    }    
}




document.getElementById('orderBuy').addEventListener('click',orderBuy);
document.getElementById('orderDelivey').addEventListener('click',function(){
    if(localStorage.getItem('address')){
        document.getElementById('orderAddress').innerHTML = '外送地址 :'+ localStorage.getItem('address');
        orderClass=0;
        localStorage.setItem('orderClass',orderClass);
    }
    document.getElementById('orderAdress').style.display="block";
    document.getElementById('orderDelivey').style.backgroundColor="#37AB64";
    document.getElementById('orderOut').style.backgroundColor="#FFD23F";
    console.log(orderClass);
})
document.getElementById('orderOut').addEventListener('click',function(){
    orderClass=1;
    localStorage.setItem('orderClass',orderClass);
    document.getElementById('orderAddress').innerHTML='外帶';
    document.getElementById('orderAdress').style.display="none";
    document.getElementById('orderOut').style.backgroundColor="#37AB64";
    document.getElementById('orderDelivey').style.backgroundColor="#FFD23F";
    console.log(orderClass);
})




// 訂單傳到PHP
function orderBuy(){
   
    var orderSin = [];
    var orderSet = [];
    var orderOth = [];
    var orderAdr = '';
    var orderListTextPost = '';
    var orderCla =''
    var now = new Date();
    var orderTime =`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.log(orderTime);
    memId = sessionStorage.getItem('mEmmEmId');
    memLogin = sessionStorage.getItem('memId');
    orderSin = JSON.parse(localStorage.getItem('singleOrder'));
    orderSet =  JSON.parse(localStorage.getItem('setdoMenuList'));
    orderOth =  JSON.parse(localStorage.getItem('otherOrder'));
    orderAdr = localStorage.getItem('address');
    orderCla = localStorage.getItem('orderClass');
    orderListTextPost = orderListText.value;

    

    totalOrder=[orderSin,orderSet,orderOth,memId,orderAdr,orderListTextPost,orderCla,finalOrTotalPrice,orderTime,parseInt(MemScore)+parseInt(OrYourScore)];
    // console.log(totalOrder);
    // console.log(totalOrder);
    console.log(MemScore);
    console.log(OrYourScore);
    
    if(orderSin.length==0 && orderSet.length==0 && orderSet.length==0){
        var orderEmpty = 0;
    }else{
        orderEmpty = 1;
    }
    if(orderEmpty==0 || memLogin !=='good' || orderCla==-1){
        if(orderEmpty==0){
            alert('請選擇便當喔');
        }
        if(memLogin !=='good'){
            alert('請先登入會員');
        }
        if(orderCla==-1){
            alert('請選擇外送或外帶');
        }
    }else{
       
    var totalOrderPost = new XMLHttpRequest();
    totalOrderPost.open('POST','../dest/php/shopping.php',true);
    totalOrderPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    totalOrderPost.send("totalOrder=" + JSON.stringify(totalOrder));
    totalOrderPost.onload = function(){
        var posttest = JSON.parse(totalOrderPost.responseText);
        // var posttest = totalOrderPost.responseText;
        console.log(posttest);
        if(totalOrderPost.responseText == "error"){
            alert("Error");
          }else{
            alert('Succesfully uploaded');  
    
          }
       
        }
        sessionStorage.setItem('orderMemScore',parseInt(MemScore)+parseInt(OrYourScore));

        finalsinglelist = [];
        singleorderlist.$data.finalsinglelist = finalsinglelist;
        orderCart=finalsinglelist;
        localStorage.setItem('singleOrder', JSON.stringify(finalsinglelist));
    
        finalsetdolist = [];
        singleorderlist.$data.finalsetdolist = finalsetdolist;
        setdoMenu = finalsetdolist;;
        localStorage.setItem('setdoMenuList', JSON.stringify(finalsetdolist));
    
        finalorderlist = [];
        singleorderlist.$data.finalorderlist = finalorderlist;
        otherMenu=finalorderlist;
        localStorage.setItem('otherOrder', JSON.stringify(finalorderlist));
        
        // 
     
        OrderTotalPrice();
        shoppingCartNum();

        orderListText.value="";
        alert('已新增訂單 可至會員專區查看');
        
        

        
    }

    
    
}




// google API
    let input = document.getElementById('input');
    let btn = document.getElementById('btn');
    let gps = document.getElementById('gps');
    btn.addEventListener('click',()=>{
        if(input.value==''){
            alert('請輸入地址');
        }else{

        service.getDistanceMatrix(
        {
            origins: [input.value],
            destinations: ['桃園市中壢區中大路300號'],
            travelMode: google.maps.TravelMode["DRIVING"],
            unitSystem: google.maps.UnitSystem.METRIC,
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
            window.alert('Error was' + status);
            } else {
            console.log(response);
            if(response.rows[0].elements[0].distance.value > 5000 ){
                document.getElementById('orderAddress').innerHTML='超出外送範圍';
                document.getElementById('orderAddress').style.color = 'red';
                orderClass=-1;
                localStorage.setItem('orderClass',orderClass);
                alert(`
                    總共距離${response.rows[0].elements[0].distance.text}，超出外送範圍
                    ${response}
                    `);
            }else{
                document.getElementById('orderAddress').innerHTML = '外送地址 :'+response.originAddresses[0];
                orderClass=0;
                localStorage.setItem('address',response.originAddresses[0]);
                localStorage.setItem('orderClass',orderClass);
                alert(`總共距離${response.rows[0].elements[0].distance.text}，運送時間預估${response.rows[0].elements[0].duration.text}`);
            }
            }
        });
        }
        input.value = '';
    });
    gps.addEventListener('click',()=>{
        navigator.geolocation.getCurrentPosition(
        succCallback,
        errorCallback,
        {
            enableHighAccuracy: false,
            timeout: 10000000,
            maximumAge: 0,
        });
    });
    function succCallback(e){
    let lati = e.coords.latitude;
    let longi = e.coords.longitude;
    let accuracy = e.coords.accuracy;
    service.getDistanceMatrix(
        {
            origins: [{lat: lati, lng: longi}],
            destinations: ['桃園市中壢區中大路300號'],
            travelMode: google.maps.TravelMode["DRIVING"],
            unitSystem: google.maps.UnitSystem.METRIC,
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
            window.alert('Error was' + status);
            } else {
            console.log(response.originAddresses);
            if(response.rows[0].elements[0].distance.value > 5000 ){
                orderClass=-1;
                localStorage.setItem('orderClass',orderClass);
                document.getElementById('orderAddress').innerHTML='超出外送範圍';
                document.getElementById('orderAddress').style.color = 'red';
                alert(`
                    總共距離${response.rows[0].elements[0].distance.text}，超出外送範圍
                    ${response.originAddresses}
                    
                `)
                ;
            }else{
                document.getElementById('orderAddress').innerHTML = '外送地址 :'+response.originAddresses[0];
                orderClass=0;
                localStorage.setItem('address',response.originAddresses[0]);
                localStorage.setItem('orderClass',orderClass);
                alert(`總共距離${response.rows[0].elements[0].distance.text}，運送時間預估${response.rows[0].elements[0].duration.text}`);
            }
            }
        });
    
    }

    function errorCallback(e){
        document.getElementById('position').innerHTML = `錯誤碼: ${e.code}<br>錯誤訊息: ${e.message}`
    }

    function shoppingCartNum(){
        if(localStorage.getItem('singleOrder')){
            orderCartNumSin = JSON.parse(localStorage.getItem('singleOrder')).length;
        }
        if(localStorage.getItem('setdoMenuList')){
            orderCartNumSet = JSON.parse(localStorage.getItem('setdoMenuList')).length;
        }
        if(localStorage.getItem('otherOrder')){
            orderCartNumOth = JSON.parse(localStorage.getItem('otherOrder')).length;
        }

        orderCartNum = orderCartNumSin + orderCartNumSet + orderCartNumOth ;
        document.getElementById('shoppingNum').innerText = orderCartNum;
        console.log(orderCartNum);
    }
