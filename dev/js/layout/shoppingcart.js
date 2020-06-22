//使用方法 載入這支js
//將自選setcart() 套餐setsetdocart() 其他setordercart() 加入你們的加入購物車事件中



let orderCart = [];
let otherMenu = [];
let setdoMenu = [];
let singleNum = 0;
let setdoNum = 0;


var singleorderlist = new Vue({   //購物車 vue
    el: '#list',
    data: {
        finalsinglelist: [],
        finalsetdolist: [],
        finalorderlist: []
    },
})





function setcart() {          //一開始自選購物車重新渲染
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    orderCart = finalsinglelist; //整個的重點
    singleNum = localStorage.getItem('singleNum');
    console.log(singleorderlist.$data.finalsinglelist);

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

    setTimeout(function () {
        for (let g = 0; g < finalsetdolist.length; g++) {
            document.getElementById(`setdodelete${finalsetdolist[g].setdoId}`).addEventListener('click', deletesetdocart);
        }
    }, 1000);
}
if (localStorage.getItem('setdoMenuList')) {
    setsetdocart();
}

function setordercart() {          //一開始其他購物車重新渲染
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    singleorderlist.$data.finalorderlist = finalorderlist;
    otherMenu = finalorderlist;

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
$('#homeContainderBgc').hide();
$('#member').click(function (e) { 
    e.preventDefault();
    $('#homeContainderBgc').show(500);
});
$('#homeContainderBgc').click(function (e) { 
    e.preventDefault();
    $('#homeContainderBgc').hide(500);
});





