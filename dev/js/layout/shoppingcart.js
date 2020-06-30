//使用方法 載入這支js
//將自選setcart() 套餐setsetdocart() 其他setordercart() 加入你們的加入購物車事件中



let orderCart = [];
let otherMenu = [];
let setdoMenu = [];
let singleNum = 0;
let setdoNum = 0;

var SinglePrice = 0 ;
var SetdoPrice = 0; 
var OtherPrice = 0 ;
var OrTotalPrice = 0;

var singleorderlist = new Vue({   //購物車 vue
    el: '#list',
    data: {
        finalsinglelist: [],
        finalsetdolist: [],
        finalorderlist: []
    },
})





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
   var OrYourScore = parseInt(OrTotalPrice/100);
    document.getElementById('orderYourSorce').innerText=`獲得積分: ${OrYourScore}點`;
   document.getElementById('OrTotal').innerText=`總價: ${OrTotalPrice}元`;

}

// shoppingcart 出現消失
document.getElementById('shoppingcart').addEventListener('click',()=>{
    // alert('a')
    document.getElementById('ordercart').classList.toggle('ordercartOpen');
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
            location.href='./order.html';
            // $('#member_aflogin').hide();
            // $('#member').show(500);
        }
    });
})





