// //定义一个名为 button-counter 的新组件
// Vue.component('button-counter', {
//     data: function () { 
//       return {
//         count: 0
//       } 
//     },
//     template: '<div class="count"><button v-on:click="count++;">+</button><span class="countvalue">{{count}}</span><button v-on:click="if(count>0){count--;}">-</button><img class="plusincart" src=https://fakeimg.pl/20/></div>'
 
//   }) 

let orderCart = []; 
let otherMenu =[];
let setdoMenu = [];
let singleNum = 0;
let setdoNum = 0 ;



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

let rice =[{
    id:'1',
    name:"白米",
    img:"./images/order/whiterice.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"
},
{
    id:'2',
    name:"紫米",
    img:"./images/order/purplerice.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"
},
{
    id:'3',
    name:"不要白飯",
    img:"./images/order/whiterice.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"

}]
//主食：炸雞腿、滷排骨、清蒸鱈魚、蔥爆牛柳

// var ee =JSON.stringify(rice);
// localStorage.setItem('aaa', ee);
// var ss= localStorage.getItem('aaa');
// console.log(ss);


let meat =[{
    id:'1',
    name:"炸雞腿", 
    img:"./images/order/chicken.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"
},
{
    id:'2',
    name:"滷排骨",
    img:"./images/order/pork.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"
},
{
    id:'3',
    name:"清蒸鱈魚",
    img:"./images/order/fish.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"

},
{
    id:'4',
    name:"蔥爆牛柳",
    img:"./images/order/beef.jpg",
    cal:"300cal",
    price:'500',
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"
}]

let single = [{
    id:'1',
    name:"三杯杏鮑菇",
    img:"./images/bandon_include/kingMushroom.png",
    cal:"300cal",
    price:'500',

    // lightbox: false,
    text:"杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。"
},
{
    id:'2',
    name:"竹筍炒肉絲",
    img:"./images/bandon_include/bambomeet.jpg",
    price:'700',
    cal:"300cal",
    text:"豬肉具有滋陰、潤燥的功能。竹筍有袪熱化痰、解渴益氣、爽胃等功效。肥胖症、脂肪肝、皮脂腺囊腫患者宜常吃此菜。對糖尿病、水腫、積食、便秘、積痰、咳嗽、瘡瘍等症有輔助療效。"
},
{
    id:'3',
    name:"咖哩",
    img:"./images/bandon_include/curry.png",
    price:'700',
    cal:"300cal",
    text:""
},
{
    id:'4',
    name:"花椰菜炒蝦仁",
    img:"./images/bandon_include/friedShrimp.png",
    price:'700',
    cal:"300cal",
    text:"青花菜是十字花科蔬菜，營養價值非常高，是超級食物之一。青花菜放入沸水快速汆燙撈起，營養不流失，搭配蝦仁拌炒就是一道色香味俱全的料理。"
},
{
    id:'5',
    name:"清蒸毛豆",
    img:"./images/bandon_include/beens.jpg",
    price:'700',
    cal:"300cal",
    text:"毛豆，在一般料理中算是蔬菜類，但營養價值卻是「豆魚肉蛋類」的豆類，蛋白質含量高於一般蔬菜，同時兼具豆類及蔬菜兩者營養特性，是不可多得的健康好物！"
    
},
{
    id:'6',
    name:"麻婆豆腐",
    img:"./images/bandon_include/spicytofood.png",
    price:'700',
    cal:"300cal",
    text:"豆腐營養價值高，除了含有優質蛋白質外，還含有豐富的鈣質、維生素E、卵磷脂及半胱胺酸等營養素。豆腐的大豆蛋白，因為沒有肉類所含的脂肪及膽固醇，所以是護心、瘦身之選。"
 
},
{
    id:'7',
    name:"番茄炒蛋",
    img:"./images/bandon_include/tomatoEgg.png",
    price:'700',
    cal:"300cal",
    text:"番茄炒蛋不僅好吃，連配色都很鮮豔，一看就讓人食指大動！紅通通的大番茄含有豐富的茄紅素、維生素C、膳食纖維等營養，是很棒的蔬菜，尤其是它特有的茄紅素，是一種天然色素，不但使番茄呈現討喜的鮮紅色，還具有很強的抗氧化功能，可以降低身體的氧化傷害，保持健康與美麗。 番茄含有豐富的茄紅素。"

},
{
    id:'8',
    name:"蠔油青江菜",
    img:"./images/bandon_include/spoonVeg.png", 
    price:'700',
    cal:"300cal",
    text:"青江菜營養價值高，可以保持血管彈性，提供人體所需礦物質、維生素；維生素B2尤為豐富，有抑制潰瘍的作用，經常食用對皮膚和眼睛的保養有很好的效果；富含纖維，可以有效改善便秘。"
    
}
];

let setdo=[{
    id:'1',
    name:"清蒸鱈魚便當",
    img:"./images/bandon_include/setdo1.jpg",
    price:'100',
    count:"1",
    text:'寶島食堂嚴選冰島鱈魚，無細刺，肉質滑嫩鮮甜，如雪花般入口即化的綿密感魚肉更富含OMEGA-3即DHA、EPA適合成長中的孩子食用。'
},
{
    id:'2',
    name:"紅燒獅子頭便當",
    img:"./images/bandon_include/setdo2.jpg",
    price:'100',
    count:"1",
    text:''

},
{
    id:'3',
    name:"經典滷排骨便當",
    img:"./images/bandon_include/setdo3.jpg",
    price:'100',
    count:"1",
    text:'寶島食堂獨特的排骨醃料配方，醃料採用數十種配料，醃製入味，再採用大吟釀醬油的醬汁滷出新味道，軟嫩可口。'

},
{
    id:'4',
    name:"母親節便當",
    img:"./images/bandon_include/active1.jpg",
    price:'100',
    count:"1"
},
{
    id:'5',
    name:"父親節便當",
    img:"./images/bandon_include/active2.jpg",
    price:'100',
    count:"1"
},
{
    id:'6',
    name:"端午節便當",
    img:"./images/bandon_include/active3.jpg",
    price:'100',
    count:"1"
}]

let active=[{
    id:'1',
    name:"母親節便當",
    img:"./images/bandon_include/active1.jpg",
    price:'100',
    count:"1"
},
{
    id:'2',
    name:"父親節便當",
    img:"./images/bandon_include/active2.jpg",
    price:'100',
    count:"1"
},
{
    id:'3',
    name:"端午節便當",
    img:"./images/bandon_include/active3.jpg",
    price:'100',
    count:"1"
}]

let other=[
    {
       opId:'1001',
       opName:"薑母茶",
       opPrice:'60',
       opClass:'0',
       opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1002',
       opName:"蔬果汁",
       opPrice:'45',
       opClass:'0',
       opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1003',
       opName:"綠茶",
       opPrice:'25',
       opClass:'0',
       opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1004',
       opName:"鳳梨",
       opPrice:'30',
       opClass:'1',
        opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1005',
       opName:"西瓜",
       opPrice:'30',
       opClass:'1',
       opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1006',
       opName:"蘋果",
       opPrice:'30',
       opClass:'1',
       opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1007',
        opName:"益生菌",
       opPrice:'80',
       opClass:'2',
       opImage:"https://fakeimg.pl/100/"
    },
    {
       opId:'1008',
       opName:"人參雞精",
       opPrice:'80',
       opClass:'2',
       opImage:"https://fakeimg.pl/100/"
    }
 ]


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


var app = new Vue({
    el:'#buy_app',  
    data:{
        single,
        rice,
        meat,
        catchImg:'',

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

var app3 = new Vue({
    el:'#buy_app3',  
    data:{
        setdo
    },methods:{
        add: function(item) {
            item.count++;
        },
        minus:function (item) {
            if(item.count>1){
                item.count--;
            }
        }
    },
})

document.getElementById('otherCart').addEventListener('click',otherIncart);
document.getElementById('otherCart2').addEventListener('click',otherIncart);
document.getElementById('otherCart3').addEventListener('click',otherIncart);




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

//錨點 js

document.getElementsByClassName('1')[0].addEventListener('click',view)
function view(){
    document.getElementById('order_1').scrollIntoView();
}
document.getElementsByClassName('2')[0].addEventListener('click',view2)
function view2(){
    document.getElementById('order_2').scrollIntoView();
}
document.getElementsByClassName('3')[0].addEventListener('click',view3)
function view3(){
    document.getElementById('order_3').scrollIntoView();
}
document.getElementsByClassName('4')[0].addEventListener('click',view4)
function view4(){
    document.getElementById('order_4').scrollIntoView();
}


document.getElementById('ordertitle1').addEventListener('click',riceshow)
document.getElementById('ordertitle1').addEventListener('click',ricescale)
document.getElementById('ordertitle2').addEventListener('click',meatshow)
document.getElementById('ordertitle2').addEventListener('click',imgscale1)
document.getElementById('ordertitle3').addEventListener('click',singleshow)
document.getElementById('ordertitle3').addEventListener('click',imgscale2)


document.getElementById('meat').style.display="none";
document.getElementById('single').style.display="none";

for(var j=0; j < rice.length;j++){   //rice 的 click事件
    document.getElementById(`riceimg${j+1}`).addEventListener('click',ricelightBox)
    document.getElementById(`plus${j+1}`).addEventListener('click',meatshow)
    document.getElementById(`plus${j+1}`).addEventListener('click',imgscale1)
    document.getElementById(`plus${j+1}`).addEventListener('click',riceincart)
}


for(var j=0; j < meat.length;j++){  //meat 的 click事件
    document.getElementById(`meatimg${j+1}`).addEventListener('click',meatlightBox)
    document.getElementById(`meatplus${j+1}`).addEventListener('click',singleshow)
    document.getElementById(`meatplus${j+1}`).addEventListener('click',imgscale2)
    document.getElementById(`meatplus${j+1}`).addEventListener('click',meatincart)
}

for(var j=0; j < single.length;j++){  //自選 的 click事件
    document.getElementById(`singleplus${j+1}`).addEventListener('click',singleincart)
    document.getElementById(`img${j+1}`).addEventListener('click',lightBox)
}

for(var j=0; j < setdo.length;j++){   //套餐燈箱 click 事件
    document.getElementById(`setdoimg${j+1}`).addEventListener('click',setdolightBox)
}



// 米飯lightbox js

function setdolightBox(){
    document.getElementsByClassName('box3')[0].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<setdo.length;i++){
        if(setdo[i].id == Number(A)){
            document.getElementById('setdolightImg').src = setdo[i].img;
            document.getElementById('setdolightText').innerText = setdo[i].text;
        }
    }
}
document.getElementsByClassName('closelightbox3')[0].addEventListener('click',closelightbox3)
function closelightbox3(){ 
    document.getElementsByClassName('box3')[0].style.display='none';
}

function ricelightBox(){
    document.getElementsByClassName('box1')[0].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<rice.length;i++){
        if(rice[i].id == Number(A)){
            document.getElementById('lightImg').src = rice[i].img;
            document.getElementById('lightText').innerText = rice[i].text;
        }
    }
}
document.getElementsByClassName('closelightbox1')[0].addEventListener('click',closelightBox1)
function closelightBox1(){ 
    document.getElementsByClassName('box1')[0].style.display='none';
}


function meatlightBox(){
    document.getElementsByClassName('box0')[0].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<meat.length;i++){
        if(meat[i].id == Number(A)){
            document.getElementById('meatlightImg').src = meat[i].img;
            document.getElementById('meatlightText').innerText = meat[i].text;
        }
    }
}
document.getElementsByClassName('closelightbox0')[0].addEventListener('click',closelightBox0)
function closelightBox0(){ 
    document.getElementsByClassName('box0')[0].style.display='none';
}

function lightBox(){
    document.getElementsByClassName('box2')[0].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<single.length;i++){
        if(single[i].id == Number(A)){
            document.getElementById('lightImg2').src = single[i].img;
            document.getElementById('lightText2').innerText = single[i].text;
        }
    }
}
document.getElementsByClassName('closelightbox2')[0].addEventListener('click',closelightBox2)
function closelightBox2(){ 
    document.getElementsByClassName('box2')[0].style.display='none';
}







function riceincart(){
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<rice.length;i++){
        if(rice[i].id == Number(A)){
     
            var ricename = rice[i].name;
            var ricetext = rice[i].text;
            var riceimg  = rice[i].img;
            var riceprice = rice[i].price;
        }
    }
    localStorage.setItem('ricename', ricename);
    localStorage.setItem('ricetext', ricetext);
    localStorage.setItem('riceimg', riceimg);
    localStorage.setItem('riceprice', riceprice);
    var listrice = localStorage.getItem('ricename');
    var listriceprice = localStorage.getItem('riceprice');
    document.getElementById('list_ricename').innerText = `米食: ${listrice} x1  NT$${listriceprice}`;

}


function meatincart(){
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i < meat.length; i++){
        if(meat[i].id == Number(A)){
            var meatname = meat[i].name;
            var meattext = meat[i].text;
            var meatimg  = meat[i].img;
            var meatprice = meat[i].price;
        }
    }
    localStorage.setItem('meatname', meatname);
    localStorage.setItem('meattext', meattext);
    localStorage.setItem('meatimg', meatimg);
    localStorage.setItem('meatprice', meatprice);
    var listmeat = localStorage.getItem('meatname');
    var listmeatprice = localStorage.getItem('meatprice');
    document.getElementById('list_meatname').innerText = `主食: ${listmeat} x1  NT$${listmeatprice}`;
}

var singlecount = 0;
function singleincart() 
 {
    singlecount++;
    if(singlecount<4)
    {
            let A = this.dataset.id;
            console.log(A);
        for(let i = 0;i<single.length;i++)
        {
            if(single[i].id == Number(A))
            {
                 var singlename = single[i].name;
                 var singletext = single[i].text;
                 var singleimg  = single[i].img;
                 var singleprice = single[i].price;
            }
        }
                localStorage.setItem( 'singlename'+`${singlecount}`  , singlename);
                localStorage.setItem('singletext'+`${singlecount}`, singletext);
                localStorage.setItem('singleimg'+`${singlecount}`, singleimg);
                localStorage.setItem('singleprice'+`${singlecount}`, singleprice);
                var listsingle = localStorage.getItem('singlename'+`${singlecount}`);
                var listsingleprice = localStorage.getItem('singleprice'+`${singlecount}`);
                document.getElementById('list_singlename'+`${singlecount}`).innerText = `配菜: ${listsingle} x1  NT$${listsingleprice}`;
               
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
    document.getElementById('meat').style.display="none";
    document.getElementById('single').style.display="none";
    document.getElementById('rice').style.display="flex";
    // document.getElementById('rice').style.width="1200px";
    // document.getElementById('rice').style.height="400px";
    document.getElementById('rice').style.overflowY="auto";
    document.getElementById('rice').style.overflowx=" hidden";
    document.getElementById('rice').style.flexWrap="wrap";
    document.getElementById('rice').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請選擇一道米飯";
}
function meatshow(){
    document.getElementById('rice').style.display="none";
    document.getElementById('single').style.display="none";
    document.getElementById('meat').style.display="flex";
    // document.getElementById('meat').style.width="1200px";
    // document.getElementById('meat').style.height="400px";
    document.getElementById('meat').style.overflowY="auto";
    document.getElementById('meat').style.overflowx=" hidden";
    document.getElementById('meat').style.flexWrap="wrap";
    document.getElementById('meat').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請選擇一道主食";
}
function singleshow(){
    document.getElementById('meat').style.display="none";
    document.getElementById('rice').style.display="none";
    document.getElementById('single').style.display="flex";
    // document.getElementById('single').style.width="1200px";
    // document.getElementById('single').style.height="400px";
    document.getElementById('single').style.overflowY="auto";
    document.getElementById('single').style.overflowx=" hidden";
    document.getElementById('single').style.flexWrap="wrap";
    document.getElementById('single').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請任選三道配菜(可重複)";
   
}




//購物車

document.getElementById('incart').addEventListener('click',shoppcar)


var singleorderlist = new Vue({   //購物車 vue
    el:'#list',  
    data:{
        finalsinglelist:[],
        finalsetdolist:[],
        finalorderlist:[]
    },
})


// window.onload = function(){       //刪除的click事件
//     for(var h=0; h<singleNum; h++){
//             if(document.getElementById(`b${h}`)){
//     document.getElementById(`b${h}`).addEventListener('click',deletesinglecart);
//             }
//     }

//     for(var i=0; i<setdo.length; i++){
//         if(document.getElementById(`setdodelete${i}`)){
//             document.getElementById(`setdodelete${i}`).addEventListener('click',deletesinglecart);
//         }
//     }
// }

function deletesinglecart(){       //刪除購物車
    let A = this.dataset.num;
    console.log(A);
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    for(let i=0; i<finalsinglelist.length; i++){

        if(finalsinglelist[i].sNum ==  Number(A)){
            finalsinglelist.splice(i,1);
            orderCart.splice(i,1);
        }
    }
  
    console.log(finalsinglelist);
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    localStorage.setItem('singleOrder', JSON.stringify(finalsinglelist));  

}

function deletesetdocart(){
    let A = this.dataset.num;
    console.log(A);
    var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
    for(let i=0; i<finalsetdolist.length; i++){

        if(finalsetdolist[i].setdoid ==  Number(A)){
            finalsetdolist.splice(i,1);
            setdoMenu.splice(i,1);
        }
    }
    singleorderlist.$data.finalsetdolist = finalsetdolist;
    localStorage.setItem('setdoMenuList', JSON.stringify(finalsetdolist)); 
}


function deleteordercart(){
    let A = this.dataset.num;
    console.log(A);
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    for(let i=0; i<finalorderlist.length; i++){

        if(finalorderlist[i].otherId ==  Number(A)){
            finalorderlist.splice(i,1);
            otherMenu.splice(i,1);
        }
    }
    singleorderlist.$data.finalorderlist = finalorderlist;
    localStorage.setItem('otherOrder', JSON.stringify(finalorderlist)); 
}

setdocount=[];
for(var j=0; j < setdo.length;j++){    //套餐的+- 購物車   click事件
    setdocount[j+1]=0;
    document.getElementById(`setdocountplus${j+1}`).addEventListener('click',setdoplus)
    document.getElementById(`setdocountminus${j+1}`).addEventListener('click',setdominus)
    document.getElementById(`setdocart${j+1}`).addEventListener('click',setdoCart)
}     


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




function shoppcar(){              //自選的加入購物車

    var rice = localStorage.getItem('ricename');
    var riceprice = localStorage.getItem('riceprice')
    var meat = localStorage.getItem('meatname');
    var meatprice = localStorage.getItem('meatprice');
    var single1 = localStorage.getItem('singlename1');
    var singleprice1 = localStorage.getItem('singleprice1');
    var single2 = localStorage.getItem('singlename2');
    var singleprice2 = localStorage.getItem('singleprice2');
    var single3 = localStorage.getItem('singlename3');
    var singleprice3 = localStorage.getItem('singleprice3');
    var soPrice = parseInt(riceprice)+parseInt(meatprice)+parseInt(singleprice1)+parseInt(singleprice2)+parseInt(singleprice3);
// document.getElementById('ricename').innerText=`${rice}`;
// document.getElementById('meatname').innerText=`${meat}`;
// document.getElementById('singlename1').innerText=`${single1}`;
// document.getElementById('singlename2').innerText=`${single2}`;
// document.getElementById('singlename3').innerText=`${single3}`;
var singleorder= {
    sNum:`${singleNum}`,
    rice:`${rice}`,
    riceprice:`${riceprice}`,
    meat:`${meat}`,
    meatprice:`${meatprice}`,
    single1:`${single1}`,
    single1price:`${singleprice1}`,
    single2:`${single2}`,
    single2price:`${singleprice2}`,
    single3:`${single3}`,
    single3price:`${singleprice3}`,
    soPrice:`${soPrice}`
 }
if(rice!==null && meat!== null && single1!==null  && single2!==null  && single3!==null){
    singleNum++;
    localStorage.setItem('singleNum',singleNum);
 orderCart.push(singleorder);

//  for(let i=0; i<orderCart.length; i++){
//     console.log(orderCart[i]);
//  }
   
 singlecount = 0;

 document.getElementById('list_ricename').innerText = '米食:';
 document.getElementById('list_meatname').innerText = '主食:';
 document.getElementById('list_singlename1').innerText = '配菜:';
 document.getElementById('list_singlename2').innerText = '配菜:';
 document.getElementById('list_singlename3').innerText = '配菜:';

 


 var singleOrder = JSON.stringify(orderCart);
 localStorage.setItem('singleOrder', singleOrder);

//  var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
//  singleorderlist.$data.finalsinglelist = finalsinglelist;
//  console.log(singleorderlist.$data.finalsinglelist);

// //------------------
// console.log("==========",singleNum);
// setTimeout(function(){
//   for(var h=0; h<singleNum; h++){
//     if(document.getElementById(`b${h}`)){
// document.getElementById(`b${h}`).addEventListener('click',deletesinglecart);
//     }else{
//         console.log("not yet");
//     }
//     }  
// },1000);

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
    for(let i = 0;i<setdo.length;i++){
        if(setdo[i].id == Number(A)){
            setdoMany =  document.getElementById(`setdocount${A}`).innerText;
            setdoid = setdo[i].id;
            setdoname = setdo[i].name;
            setdoprice = setdo[i].price;
            setdoimg = setdo[i].img;
            if(setdoMany>0){
            // localStorage.setItem('setdoMany',setdoMany);
            // localStorage.setItem('setdoid',setdoid);
            // localStorage.setItem('setdoname',setdoname);
            // localStorage.setItem('setdoprice',setdoprice);
            // localStorage.setItem('setdoimg',setdoimg);
                setdoList=
                {
                    setdoNum:`${setdoNum}`,
                    setdoMany:`${setdoMany}`,
                    setdoid:`${setdoid}`,
                    setdoname:`${setdoname}`,
                    setdoprice:`${setdoprice}`,
                    setdoimg:`${setdoimg}`,
                }

                // if(JSON.parse(localStorage.getItem('setdoMenuList'))){
                //     console.log(JSON.parse(localStorage.getItem('setdoMenuList')));
                // }
                // for(var i = 0 ;i<setdoMenu.length;i++){
                // if(JSON.parse(localStorage.getItem('setdoMenuList')[i].setdoid)==setdoList.setdoid){
                //     JSON.parse(localStorage.getItem('setdoMenuList')[i].setdoMany)+1;
                // }
                // }
                var samename = 0;
                if(setdoMenu.length>0){
                     for(var c =0  ;c < setdoMenu.length; c++){
                            if(setdoMenu[c].setdoname == setdoList.setdoname){
                                samename=1;
                            setdoMenu[c].setdoMany = parseInt(setdoMenu[c].setdoMany)+parseInt(setdoList.setdoMany);
                            } 
                     }
                    if(samename!=1){
                        setdoMenu.push(setdoList);
                        // window.location.reload();
                    }
                }
                else
                {
                    // setdoNum++;
                    // localStorage.setItem('setdoNum',setdoNum);
                    setdoMenu.push(setdoList);
                    // window.location.reload();
                }
                // setdoMenu.push(setdoList);
                // console.log(setdoMenu[]);
                var setdoMenuList =JSON.stringify(setdoMenu);
                localStorage.setItem('setdoMenuList',setdoMenuList);

                // var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
                // singleorderlist.$data.finalsetdolist = finalsetdolist;
                // console.log(singleorderlist.$data.finalsetdolist);
                // window.location.reload();
                setsetdocart()
            }else{
                alert("還沒選數量喔");
            }
        }
    }
}



function setcart(){          //一開始自選購物車重新渲染
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    orderCart=finalsinglelist; //整個的重點
    singleNum=localStorage.getItem('singleNum');
    console.log(singleorderlist.$data.finalsinglelist);

    setTimeout(function(){
        for(var h=0; h<singleNum; h++){
          if(document.getElementById(`b${h}`)){
      document.getElementById(`b${h}`).addEventListener('click',deletesinglecart);
          }else{
              console.log("not yet");
          }
          }  
      },1000);
   
}

if(localStorage.getItem('singleOrder')){ //重點2
    setcart();
    }
//...................................
function setsetdocart(){       //一開始套餐購物車重新渲染
    var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
    singleorderlist.$data.finalsetdolist = finalsetdolist;
    setdoMenu=finalsetdolist;
    console.log(singleorderlist.$data.finalsetdolist);

    setTimeout(function(){
    for(var i=0; i<7; i++){
                if(document.getElementById(`setdodelete${i}`)){
                    document.getElementById(`setdodelete${i}`).addEventListener('click',deletesetdocart);
                }
            }
    },1000);        
}
if(localStorage.getItem('setdoMenuList')){
    setsetdocart();
}

function setordercart(){
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    singleorderlist.$data.finalorderlist = finalorderlist;
    otherMenu=finalorderlist;

    setTimeout(function(){
        for(var i=1; i<9; i++){
                    if(document.getElementById(`orderdelete100${i}`)){
                        document.getElementById(`orderdelete100${i}`).addEventListener('click',deleteordercart);
                    }
                }
        },1000);   

}
if(localStorage.getItem('otherOrder')){
    setordercart();
}