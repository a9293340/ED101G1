
        
    function single(){
        var singleRequest = new XMLHttpRequest();
        singleRequest.open('GET','../dest/php/orderGet.php')
        singleRequest.onload=function(){
            // console.log(singleRequest.responseText);
            var singleData = JSON.parse(singleRequest.responseText);
            getsingle(singleData[0]);
            getsetdo(singleData[1]);
            getother(singleData[2]);
        };
        singleRequest.send();
        }
        
        single();
        
    
        let sgproduct=[];  
        let orderRice=[];
        let orderMeat=[];
        let orderSingle=[];
        let orderSetdo=[];
        let other=[];
    function getsingle(data){
    // console.log(data[0]);
    sgproduct=data;
    console.log(sgproduct[0]);

    for(var j=0; j<sgproduct.length;j++){

        if(sgproduct[j].spClass==0){
            orderRice.push(sgproduct[j]);
        }
        if(sgproduct[j].spClass==1){
            orderMeat.push(sgproduct[j]);
        }
        if(sgproduct[j].spClass==2){
            orderSingle.push(sgproduct[j]);
        }
    }

}
    function getsetdo(data){
        orderSetdo=data;
        console.log(orderSetdo[0]);
        var app3 = new Vue({
            el:'#buy_app3',  
            data:{
                orderSetdo,
            }
        })
    }

    function getother(data){
        other = data;
        console.log(other[0]);
      
    }

setTimeout(() => {
    document.getElementsByClassName('closelightbox1')[0].addEventListener('click',closelightBox1)
    document.getElementsByClassName('closelightbox0')[0].addEventListener('click',closelightBox0)
    document.getElementsByClassName('closelightbox2')[0].addEventListener('click',closelightBox2)
    
for(var j=0; j < orderRice.length;j++){   //rice 的 click事件
    document.getElementById(`riceimg${orderRice[j].spId}`).addEventListener('click',ricelightBox)
    document.getElementById(`plus${orderRice[j].spId}`).addEventListener('click',meatshow)
    document.getElementById(`plus${orderRice[j].spId}`).addEventListener('click',imgscale1)
    document.getElementById(`plus${orderRice[j].spId}`).addEventListener('click',riceincart)
}

for(var j=0; j < orderMeat.length;j++){  //meat 的 click事件
    document.getElementById(`meatimg${orderMeat[j].spId}`).addEventListener('click',meatlightBox)
    document.getElementById(`meatplus${orderMeat[j].spId}`).addEventListener('click',singleshow)
    document.getElementById(`meatplus${orderMeat[j].spId}`).addEventListener('click',imgscale2)
    document.getElementById(`meatplus${orderMeat[j].spId}`).addEventListener('click',meatincart)
}

for(var j=0; j < orderSingle.length;j++){  //自選 的 click事件
    document.getElementById(`singleplus${orderSingle[j].spId}`).addEventListener('click',singleincart)
    document.getElementById(`img${orderSingle[j].spId}`).addEventListener('click',lightBox)
}

for(var j=0; j < orderSetdo.length;j++){    //套餐的+- 購物車   click事件
    setdocount[orderSetdo[j].setId]=0;
    document.getElementById(`setdocountplus${orderSetdo[j].setId}`).addEventListener('click',setdoplus)
    document.getElementById(`setdocountminus${orderSetdo[j].setId}`).addEventListener('click',setdominus)
    document.getElementById(`setdocart${orderSetdo[j].setId}`).addEventListener('click',setdoCart)
}     
document.getElementsByClassName('closelightbox3')[0].addEventListener('click',closelightbox3);

for(var j=0; j < orderSetdo.length;j++){   //套餐燈箱 click 事件
    document.getElementById(`setdoimg${orderSetdo[j].setId}`).addEventListener('click',setdolightBox)
}



var orderOther = new Vue({
    el:'#orderOther',
    data:{
        selectedone: 1,
        selectedtwo: 1,
        selectedthree: 1,
        othercount1:0,
        othercount2:0,
        othercount3:0,
        other,
    },methods:{
        otherplus:function(){
            orderOther.$data.othercount1++;
        },
        otherminus:function(){
            if(orderOther.$data.othercount1>0){
            orderOther.$data.othercount1--;
            }
        },
        otherplus2:function(){
            orderOther.$data.othercount2++;
        },
        otherminus2:function(){
            if(orderOther.$data.othercount2>0){
            orderOther.$data.othercount2--;
            }
        },
        otherplus3:function(){
            orderOther.$data.othercount3++;
        },
        otherminus3:function(){
            if(orderOther.$data.othercount3>0){
            orderOther.$data.othercount3--;
            }
        },
        otherincart:function(){
            console.log(this.dataset.id);
        }

    }, 
})
function otherIncart(){
    otherright = 0;
   let A = this.dataset.id;
   console.log(A);
   for(var i = 0; i<other.length ;i++ ){
       if(other[i].opId == Number(A)){
           otherright=1;
           otherImg =other[i].opImage;
           otherId = other[i].opId;
           otherName = other[i].opName;
           otherPrice = other[i].opPrice;
           if(other[i].opClass == 0){
           otherMany  = orderOther.$data.othercount1;
           }else if(other[i].opClass == 1){
            otherMany  = orderOther.$data.othercount2;
           }else if(other[i].opClass == 2){
            otherMany  = orderOther.$data.othercount3;   
           }
           console.log(otherMany);
           if(otherMany==0){
               alert('還沒選數量喔')
           }
       }
      
   }
            if(otherright==0){
                 alert('請選擇品項喔')
             }

        if(otherright!==0 && otherMany!==0){

            otherList={
                otherImg:`${otherImg}`,
                otherId:`${otherId}`,
                otherName:`${otherName}`,
                otherPrice:`${otherPrice}`,
                otherMany:`${otherMany}`,
            }
            var othersamename = 0;
            if(otherMenu.length>0){
                 for(var c =0  ;c < otherMenu.length; c++){
                        if(otherMenu[c].otherName == otherList.otherName){
                            othersamename=1;
                            otherMenu[c].otherMany = parseInt(otherMenu[c].otherMany)+parseInt(otherList.otherMany);
                        } 
                 }
                if(othersamename!=1){
                    otherMenu.push(otherList);
                   
                }
            }
            else
            {
                otherMenu.push(otherList);
            }

           otherOrder = JSON.stringify(otherMenu);
           localStorage.setItem('otherOrder',otherOrder);

           setordercart();
        }
 
}
document.getElementById('otherCart').addEventListener('click',otherIncart);
document.getElementById('otherCart2').addEventListener('click',otherIncart);
document.getElementById('otherCart3').addEventListener('click',otherIncart);

}, 500);


let icon =[{
    id:"1",
    img:'./images/order/rice.png',
    text:"米飯"
},
{
    id:"2",
    img:'./images/order/meat.svg',
    text:"主食"
},
{
    id:"3",
    img:'./images/order/dish.png',
    text:"配菜"
}]


var app = new Vue({
    el:'#buy_app',  
    data:{
        orderRice,
        orderMeat,
        orderSingle,

    },methods:{
       
    }, 
})
var app2 = new Vue({
    el:'#buy_app2',  
    data:{
        icon
    },methods:{
        
    },
})



//錨點 js

document.getElementsByClassName('1')[0].addEventListener('click',view)
function view(){
    document.getElementById('order_1').scrollIntoView();
    document.getElementsByClassName('1')[0].style.backgroundColor="#FFD23F";
    document.getElementsByClassName('2')[0].style.backgroundColor="#37AB64";
    document.getElementsByClassName('4')[0].style.backgroundColor="#37AB64";
}
document.getElementsByClassName('2')[0].addEventListener('click',view2)
function view2(){
    document.getElementById('order_2').scrollIntoView();
    document.getElementsByClassName('1')[0].style.backgroundColor="#37AB64";
    document.getElementsByClassName('2')[0].style.backgroundColor="#FFD23F";
    document.getElementsByClassName('4')[0].style.backgroundColor="#37AB64";
}
// document.getElementsByClassName('3')[0].addEventListener('click',view3)
// function view3(){
//     document.getElementById('order_3').scrollIntoView();
// }
document.getElementsByClassName('4')[0].addEventListener('click',view4)
function view4(){
    document.getElementById('orderOther').scrollIntoView();
    document.getElementsByClassName('1')[0].style.backgroundColor="#37AB64";
    document.getElementsByClassName('2')[0].style.backgroundColor="#37AB64";
    document.getElementsByClassName('4')[0].style.backgroundColor="#FFD23F";
    
}


document.getElementById('ordertitle1').addEventListener('click',riceshow)
document.getElementById('ordertitle1').addEventListener('click',ricescale)
document.getElementById('ordertitle2').addEventListener('click',meatshow)
document.getElementById('ordertitle2').addEventListener('click',imgscale1)
document.getElementById('ordertitle3').addEventListener('click',singleshow)
document.getElementById('ordertitle3').addEventListener('click',imgscale2)


document.getElementById('meat').style.display="none";
document.getElementById('single').style.display="none";




// 米飯lightbox js

function setdolightBox(){
    document.getElementsByClassName('box3')[0].style.display='block';
    document.getElementsByClassName('box3')[1].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<orderSetdo.length;i++){
        if(orderSetdo[i].setId == Number(A)){
            document.getElementById('setdolightTitle').innerText = orderSetdo[i].setName;
            document.getElementById('setdolightImg').src = orderSetdo[i].setImage;
            document.getElementById('setdolightText').innerText = orderSetdo[i].setInfo;
        }
    }
}

// document.getElementsByClassName('closelightbox3')[0].addEventListener('click',closelightbox3);
function closelightbox3(){ 
    document.getElementsByClassName('box3')[0].style.display='none';
    document.getElementsByClassName('box3')[1].style.display='none';
}

function ricelightBox(){
    document.getElementsByClassName('box1')[0].style.display='block';
    document.getElementsByClassName('box1')[1].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<orderRice.length;i++){
        if(orderRice[i].spId == Number(A)){  orderlighttitle
            document.getElementById('orderlighttitle').innerText = orderRice[i].spName;
            document.getElementById('lightImg').src = orderRice[i].spImage;
            document.getElementById('lightText').innerText = orderRice[i].spInfo;
        }
    }
}

// document.getElementsByClassName('closelightbox1')[0].addEventListener('click',closelightBox1)
function closelightBox1(){ 
    document.getElementsByClassName('box1')[0].style.display='none';
    document.getElementsByClassName('box1')[1].style.display='none';
}


function meatlightBox(){
    document.getElementsByClassName('box0')[0].style.display='block';
    document.getElementsByClassName('box0')[1].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<orderMeat.length;i++){
        if(orderMeat[i].spId == Number(A)){
            document.getElementById('meatlightTitle').innerText = orderMeat[i].spName;
            document.getElementById('meatlightImg').src = orderMeat[i].spImage;
            document.getElementById('meatlightText').innerText = orderMeat[i].spInfo;
        }
    }
}
// document.getElementsByClassName('closelightbox0')[0].addEventListener('click',closelightBox0)
function closelightBox0(){ 
    document.getElementsByClassName('box0')[0].style.display='none';
    document.getElementsByClassName('box0')[1].style.display='none';
}

function lightBox(){
    document.getElementsByClassName('box2')[0].style.display='block';
    document.getElementsByClassName('box2')[1].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<orderSingle.length;i++){
        if(orderSingle[i].spId == Number(A)){
            document.getElementById('lightTitle').innerText = orderSingle[i].spName;
            document.getElementById('lightImg2').src = orderSingle[i].spImage;
            document.getElementById('lightText2').innerText = orderSingle[i].spInfo;
        }
    }
}
// document.getElementsByClassName('closelightbox2')[0].addEventListener('click',closelightBox2)
function closelightBox2(){ 
    document.getElementsByClassName('box2')[0].style.display='none';
    document.getElementsByClassName('box2')[1].style.display='none';
}







function riceincart(){
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<orderRice.length;i++){
        if(orderRice[i].spId == Number(A)){
     
            var ricename = orderRice[i].spName;
            var ricetext = orderRice[i].spInfo;
            var riceimg  = orderRice[i].spImage;
            var riceprice = orderRice[i].spPrice;
            var riceId = orderRice[i].spId;
        }
    }
    localStorage.setItem('ricename', ricename);
    localStorage.setItem('ricetext', ricetext);
    localStorage.setItem('riceimg', riceimg);
    localStorage.setItem('riceprice', riceprice);
    localStorage.setItem('riceId', riceId);
    var listrice = localStorage.getItem('ricename');
    var listriceprice = localStorage.getItem('riceprice');
    document.getElementById('list_ricename').innerText = `${listrice}`;
    document.getElementById('list_riceNum').innerText =`x1`;
    document.getElementById('list_ricenamePrice').innerText=`NT$${listriceprice}`;
    document.getElementById('orderRicePic').src = `${riceimg}`;

}


function meatincart(){
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i < orderMeat.length; i++){
        if(orderMeat[i].spId == Number(A)){
            var meatname = orderMeat[i].spName;
            var meattext = orderMeat[i].spInfo;
            var meatimg  = orderMeat[i].spImage;
            var meatprice = orderMeat[i].spPrice;
            var meatId = orderMeat[i].spId;
        }
    }
    localStorage.setItem('meatname', meatname);
    localStorage.setItem('meattext', meattext);
    localStorage.setItem('meatimg', meatimg);
    localStorage.setItem('meatprice', meatprice);
    localStorage.setItem('meatId', meatId);
    var listmeat = localStorage.getItem('meatname');
    var listmeatprice = localStorage.getItem('meatprice');
    document.getElementById('list_meatname').innerText = `${listmeat}`;
    document.getElementById('list_meatNum').innerText=`x1`;
    document.getElementById('list_meatPrice').innerText=`NT$${listmeatprice}`
    document.getElementById('orderMeatPic').src = `${meatimg}`;
}

var singlecount = 0;
function singleincart() 
 {
    singlecount++;
    if(singlecount<4)
    {
            let A = this.dataset.id;
            console.log(A);
        for(let i = 0;i<orderSingle.length;i++)
        {
            if(orderSingle[i].spId == Number(A))
            {
                 var singlename = orderSingle[i].spName;
                 var singletext = orderSingle[i].spInfo;
                 var singleimg  = orderSingle[i].spImage;
                 var singleprice = orderSingle[i].spPrice;
                 var singleId = orderSingle[i].spId;
            }
        }
                localStorage.setItem( 'singlename'+`${singlecount}`  , singlename);
                localStorage.setItem('singletext'+`${singlecount}`, singletext);
                localStorage.setItem('singleimg'+`${singlecount}`, singleimg);
                localStorage.setItem('singleprice'+`${singlecount}`, singleprice);
                localStorage.setItem('singleId'+`${singlecount}`, singleId);
                var listsingle = localStorage.getItem('singlename'+`${singlecount}`);
                var listsingleprice = localStorage.getItem('singleprice'+`${singlecount}`);
                document.getElementById('list_singlename'+`${singlecount}`).innerText = `${listsingle}`;
                document.getElementById('list_singleNum'+`${singlecount}`).innerText=`x1`
                document.getElementById('list_singlePrice'+`${singlecount}`).innerText=`NT$${listsingleprice}`
                document.getElementById('orderSinglPic'+`${singlecount}`).src =`${singleimg}`;
    }else
    {
        alert('只能選三道配菜喔');
    }
 }


//nav 的大小
function imgscale1(){
    document.getElementById('ordertitle1').style.transform = "scale(1)";
    document.getElementById('ordertitletext1').style.color = "#000000";
    document.getElementById('ordertitle2').style.transform = "scale(1.5)";
    document.getElementById('ordertitletext2').style.color = "#EA6227";
    document.getElementById('ordertitle3').style.transform = "scale(1)";
    document.getElementById('ordertitletext3').style.color = "#000000";
     
 }
function imgscale2(){
    document.getElementById('ordertitle1').style.transform = "scale(1)";
    document.getElementById('ordertitletext1').style.color = "#000000";
    document.getElementById('ordertitle2').style.transform = "scale(1)";
    document.getElementById('ordertitletext2').style.color = "#000000";
    document.getElementById('ordertitle3').style.transform = "scale(1.5)";
    document.getElementById('ordertitletext3').style.color = "#EA6227";
     
 }
function ricescale(){
    document.getElementById('ordertitle1').style.transform = "scale(1.5)";
    document.getElementById('ordertitletext1').style.color = "#EA6227";
    document.getElementById('ordertitle2').style.transform = "scale(1)";
    document.getElementById('ordertitletext2').style.color = "#000000";
    document.getElementById('ordertitle3').style.transform = "scale(1)";
    document.getElementById('ordertitletext3').style.color = "#000000";
     
}

//自選換頁
 function riceshow(){
    if($(window).width() < 576){
        document.getElementById('meat').style.display="none";
        document.getElementById('single').style.display="none";
        document.getElementById('rice').style.display="flex";
        document.getElementById('rice').style.overflowY="hidden";
        document.getElementById('rice').style.overflowx=" auto";
        document.getElementById('rice').style.flexWrap="nowrap";
        document.getElementById('rice').style.justifyContent="space-between";
        document.getElementById('order_text').innerText="請選擇一道米飯";

    }else{
    document.getElementById('meat').style.display="none";
    document.getElementById('single').style.display="none";
    document.getElementById('rice').style.display="flex";
    document.getElementById('rice').style.overflowY="auto";
    document.getElementById('rice').style.overflowx=" hidden";
    document.getElementById('rice').style.flexWrap="wrap";
    document.getElementById('rice').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請選擇一道米飯";
    }
}
function meatshow(){
    if($(window).width() < 576){
        document.getElementById('rice').style.display="none";
        document.getElementById('single').style.display="none";
        document.getElementById('meat').style.display="flex";
        document.getElementById('meat').style.overflowY="hidden";
        document.getElementById('meat').style.overflowx=" auto";
        document.getElementById('meat').style.flexWrap="nowrap";
        document.getElementById('meat').style.justifyContent="space-between";
        document.getElementById('order_text').innerText="請選擇一道主食";
    }else{
    document.getElementById('rice').style.display="none";
    document.getElementById('single').style.display="none";
    document.getElementById('meat').style.display="flex";
    document.getElementById('meat').style.overflowY="auto";
    document.getElementById('meat').style.overflowx=" hidden";
    document.getElementById('meat').style.flexWrap="wrap";
    document.getElementById('meat').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請選擇一道主食";
    }
}
function singleshow(){
    if($(window).width() < 576){
        
    document.getElementById('meat').style.display="none";
    document.getElementById('rice').style.display="none";
    document.getElementById('single').style.display="flex";
    document.getElementById('single').style.overflowY="hidden";
    document.getElementById('single').style.overflowx=" auto";
    document.getElementById('single').style.flexWrap="nowrap";
    document.getElementById('single').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請任選三道配菜(可重複)";
    }else{
        document.getElementById('meat').style.display="none";
        document.getElementById('rice').style.display="none";
        document.getElementById('single').style.display="flex";
        document.getElementById('single').style.overflowY="auto";
        document.getElementById('single').style.overflowx=" hidden";
        document.getElementById('single').style.flexWrap="wrap";
        document.getElementById('single').style.justifyContent="space-between";
        document.getElementById('order_text').innerText="請任選三道配菜(可重複)";
       }



}




//購物車

document.getElementById('incart').addEventListener('click',praintAndshoppcar);




let setdocount=[];
// for(var j=0; j < orderSetdo.length;j++){    //套餐的+- 購物車   click事件
//     setdocount[orderSetdo[j].setId]=0;
//     document.getElementById(`setdocountplus${orderSetdo[j].setId}`).addEventListener('click',setdoplus)
//     document.getElementById(`setdocountminus${orderSetdo[j].setId}`).addEventListener('click',setdominus)
//     document.getElementById(`setdocart${orderSetdo[j].setId}`).addEventListener('click',setdoCart)
// }     


function setdoplus(){     //套餐數量++
    let num = this.dataset.num
    setdocount[num]++;
    console.log(setdocount[num]);
    document.getElementById(`setdocount${num}`).innerText = setdocount[num];
}
   
function setdominus(){    //套餐數量--
    let num = this.dataset.num
    if(setdocount[num]>0){
    setdocount[num]--;
    console.log(setdocount[num]);
    document.getElementById(`setdocount${num}`).innerText = setdocount[num];
    }

}

function praintAndshoppcar(){
    document.getElementById('homeTwoScreen').scrollIntoView();
    singleplant();
    setTimeout(() => {
        shoppcar();
    }, 500);
}


function shoppcar(){              //自選的加入購物車
  

    var rice = localStorage.getItem('ricename');
    var riceId =localStorage.getItem('riceId');
    var riceprice = localStorage.getItem('riceprice')
    var meat = localStorage.getItem('meatname');
    var meatId =localStorage.getItem('meatId');
    var meatprice = localStorage.getItem('meatprice');
    var single1 = localStorage.getItem('singlename1');
    var singleId1= localStorage.getItem('singleId1');
    var singleprice1 = localStorage.getItem('singleprice1');
    var single2 = localStorage.getItem('singlename2');
    var singleId2= localStorage.getItem('singleId2');
    var singleprice2 = localStorage.getItem('singleprice2');
    var single3 = localStorage.getItem('singlename3');
    var singleId3= localStorage.getItem('singleId3');
    var singleprice3 = localStorage.getItem('singleprice3');
    var soPrice = parseInt(riceprice)+parseInt(meatprice)+parseInt(singleprice1)+parseInt(singleprice2)+parseInt(singleprice3);
    var soImg = orderImg;


    console.log(orderImg);
 

    




var singleorder= { 
    sNum:`${singleNum}`,
    rice:`${rice}`,
    meat:`${meat}`,
    meatId:`${meatId}`,
    single1:`${single1}`,
    singleId1:`${singleId1}`,
    single2:`${single2}`,
    singleId2:`${singleId2}`,
    single3:`${single3}`,
    singleId3:`${singleId3}`,
    soPrice:`${soPrice}`,
    riceId:`${riceId}`,
    soImg:`${soImg}`
 }
if(rice!==null && meat!== null && single1!==null  && single2!==null  && single3!==null){
    singleNum++;
    localStorage.setItem('singleNum',singleNum);
 orderCart.push(singleorder);

//  for(let i=0; i<orderCart.length; i++){
//     console.log(orderCart[i]);
//  }





 singlecount = 0;

 document.getElementById('list_ricename').innerText = '';
 document.getElementById('list_riceNum').innerText = '';
 document.getElementById('list_ricenamePrice').innerText = '';

 document.getElementById('list_meatname').innerText = '';
 document.getElementById('list_meatNum').innerText = '';
 document.getElementById('list_meatPrice').innerText = '';
 document.getElementById('list_singlename1').innerText = '';
 document.getElementById('list_singleNum1').innerText = '';
 document.getElementById('list_singleNum2').innerText = '';
 document.getElementById('list_singleNum3').innerText = '';
 document.getElementById('list_singlePrice1').innerText = '';
 document.getElementById('list_singlePrice2').innerText = '';
 document.getElementById('list_singlePrice3').innerText = '';
 document.getElementById('list_singlename2').innerText = '';
 document.getElementById('list_singlename3').innerText = '';


    document.getElementById('orderRicePic').src = ``;
    document.getElementById('orderMeatPic').src = ``;
    document.getElementById('orderSinglPic1').src = ``;
    document.getElementById('orderSinglPic2').src = ``;
    document.getElementById('orderSinglPic3').src = ``;
     

//  document.getElementById('orderRicePic').src = ``;
//  document.getElementById('orderMeatPic').src = ``;
//  document.getElementById('orderSinglPic1').src = ``;
//  document.getElementById('orderSinglPic2').src = ``;
//  document.getElementById('orderSinglPic3').src = ``;

 var singleOrder = JSON.stringify(orderCart);
 localStorage.setItem('singleOrder', singleOrder);



//------------------
setcart();




 localStorage.removeItem('ricename');
 localStorage.removeItem('meatname');
 localStorage.removeItem('singlename1');
 localStorage.removeItem('singlename2'); 
 localStorage.removeItem('singlename3');





 
 riceshow();

//  window.location.reload();
 }else{
     alert('請把便當裝滿喔')
 }
}




function setdoCart(){      //套餐的加入購物車
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<orderSetdo.length;i++){
        if(orderSetdo[i].setId == Number(A)){
            setdoMany =  document.getElementById(`setdocount${A}`).innerText;
            setdoId = orderSetdo[i].setId;
            setdoName = orderSetdo[i].setName;
            setdoPrice = orderSetdo[i].setPrice;
            setdoImg = orderSetdo[i].setImage;
            if(setdoMany>0){

                setdoList=
                {
                    setdoNum:`${setdoNum}`,
                    setdoMany:`${setdoMany}`,
                    setdoId:`${setdoId}`,
                    setdoName:`${setdoName}`,
                    setdoPrice:`${setdoPrice}`,
                    setdoImg:`${setdoImg}`,
                }

                var samename = 0;
                if(setdoMenu.length>0){
                     for(var c =0  ;c < setdoMenu.length; c++){
                            if(setdoMenu[c].setdoName == setdoList.setdoName){
                                samename=1;
                            setdoMenu[c].setdoMany = parseInt(setdoMenu[c].setdoMany)+parseInt(setdoList.setdoMany);
                            } 
                     }
                    if(samename!=1){
                        setdoMenu.push(setdoList);
                
                    }
                }
                else
                {
                   
                    setdoMenu.push(setdoList);
                  
                }
               
                var setdoMenuList =JSON.stringify(setdoMenu);
                localStorage.setItem('setdoMenuList',setdoMenuList);

               
               setsetdocart();
            }else{
                alert("還沒選數量喔");
            }
        }
    }
}


document.getElementById('orderClean').addEventListener("click",orderlistclean)

function orderlistclean(){
    singlecount = 0;
    document.getElementById('list_ricename').innerText = '';
    document.getElementById('list_riceNum').innerText = '';
    document.getElementById('list_ricenamePrice').innerText = '';
   
    document.getElementById('list_meatname').innerText = '';
    document.getElementById('list_meatNum').innerText = '';
    document.getElementById('list_meatPrice').innerText = '';
    document.getElementById('list_singlename1').innerText = '';
    document.getElementById('list_singleNum1').innerText = '';
    document.getElementById('list_singleNum2').innerText = '';
    document.getElementById('list_singleNum3').innerText = '';
    document.getElementById('list_singlePrice1').innerText = '';
    document.getElementById('list_singlePrice2').innerText = '';
    document.getElementById('list_singlePrice3').innerText = '';
    document.getElementById('list_singlename2').innerText = '';
    document.getElementById('list_singlename3').innerText = '';
   
    document.getElementById('orderRicePic').src = ``;
    document.getElementById('orderMeatPic').src = ``;
    document.getElementById('orderSinglPic1').src = ``;
    document.getElementById('orderSinglPic2').src = ``;
    document.getElementById('orderSinglPic3').src = ``;


    riceshow();
   
}




function singleplant() {
    html2canvas($("#buy_bandoImg")[0]).then(function(canvas) {
      var orderImg = canvas.toDataURL("image/png");
      localStorage.setItem('orderImg',orderImg);
        // console.log(canvas.toDataURL("image/png"));
    });
  };
