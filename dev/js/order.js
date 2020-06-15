// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<div class=count><button v-on:click="count++">+</button>{{count}}<button v-on:click="if(count>0){count--;}">-</button><img src=https://fakeimg.pl/20/></div>'
 
  })

<<<<<<< HEAD
 
=======
let orderCart = [];

>>>>>>> 9806daf295797be65df18da77c1fbe57b1f5a697




let icon =[{
    id:"1",
    img:'https://fakeimg.pl/50/',
    text:"米飯"
},
{
    id:"2",
    img:'https://fakeimg.pl/50/',
    text:"主食"
},
{
    id:"3",
    img:'https://fakeimg.pl/50/',
    text:"配菜"
}]

<<<<<<< HEAD
=======
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






>>>>>>> 9806daf295797be65df18da77c1fbe57b1f5a697


let single = [{
    id:'1',
    name:"三杯杏鮑菇",
    img:"./images/bandon_include/threecup.jpg",
    price:'500',
    // lightbox: false,
    text:"介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹"
},
{
    id:'2',
    name:"竹筍炒肉絲",
    img:"./images/bandon_include/bambomeet.jpg",
    price:'700',
    lightbox: false
},
{
    id:'3',
    name:"咖哩",
    img:"./images/bandon_include/curry.jpg",
    price:'700',
    lightbox: false
},
{
    id:'4',
    name:"花椰菜炒蝦仁",
    img:"./images/bandon_include/flower.jpg",
    price:'700',
    lightbox: false
},
{
    id:'5',
    name:"清蒸毛豆",
    img:"./images/bandon_include/beens.jpg",
    price:'700',
    lightbox: false
},
{
    id:'6',
    name:"麻婆豆腐",
    img:"./images/bandon_include/spicytofood.png",
    price:'700',
    lightbox: false
},
{
    id:'7',
    name:"番茄炒蛋",
    img:"./images/bandon_include/tomatoegg.jpg",
    price:'700',
    lightbox: false
},
{
    id:'8',
    name:"蠔油青江菜",
    img:"./images/bandon_include/oilgreen.jpg",
    price:'700',
    lightbox: false
}
];




let setdo=[{
    id:'1',
    name:"清蒸鱈魚便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1"
},
{
    id:'2',
    name:"紅燒獅子頭便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1"
},
{
    id:'3',
    name:"經典滷排骨便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1"
}]



let active=[{
    id:'1',
    name:"母親節便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1"
},
{
    id:'2',
    name:"父親節便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1"
},
{
    id:'3',
    name:"端午節便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1"
}]


let other_juice = {
    imgsrc:'https://fakeimg.pl/200/',
    id:"1",
    name:'養身蔬果汁',
    price:"80",
    lists : [
        {id:"1",name:'養身蔬果汁'},
        {id:"2",name:'果汁'},
    ]
}
let other_fruit = {
    imgsrc:'https://fakeimg.pl/200/',
    id:"1",
    name:'養身蔬果汁',
    price:"80",
    lists : [
        {id:"1",name:'養身蔬果汁'},
        {id:"2",name:'果汁'},
    ]
}
let other_body = {
    imgsrc:'https://fakeimg.pl/200/',
    id:"1",
    name:'養身蔬果汁',
    price:"80",
    lists : [
        {id:"1",name:'養身蔬果汁'},
        {id:"2",name:'果汁'},
    ]
}

let other = new Vue({
    el:'#other',
    data: other_juice,
    methods:{
        changeimg: function(id){
            if(id == 1){
                this.name ='養身蔬果汁';
                this.imgsrc = "https://fakeimg.pl/200/";
                this.price = '80';
            }else if(id == 2){
                this.name ='果汁';
                this.imgsrc = "https://fakeimg.pl/200/";
                this.price = '60';
            }
        }
    },
})
let other2 = new Vue({
    el:'#other2',
    data: other_fruit,
    methods:{
        changeimg: function(id){
            if(id == 1){
                this.name ='養身蔬果汁';
                this.imgsrc = "https://fakeimg.pl/200/";
                this.price = '80';
            }else if(id == 2){
                this.name ='果汁';
                this.imgsrc = "https://fakeimg.pl/200/";
                this.price = '60';
            }
        }
    },
})
let other3 = new Vue({
    el:'#other3',
    data: other_body,
    methods:{
        changeimg: function(id){
            if(id == 1){
                this.name ='養身蔬果汁';
                this.imgsrc = "https://fakeimg.pl/200/";
                this.price = '80';
            }else if(id == 2){
                this.name ='果汁';
                this.imgsrc = "https://fakeimg.pl/200/";
                this.price = '60';
            }
        }
    },
})





var app = new Vue({
    el:'#buy_app',  
    data:{
        single,
        catchImg:'',

    },methods:{
       
    }, 
})

for(var j=0; j < single.length;j++){
    document.getElementById(`img${j+1}`).addEventListener('click',lightBox)
}
function lightBox(){
    document.getElementsByClassName('buy_single_lightbox')[0].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<single.length;i++){
        if(single[i].id == Number(A)){
            document.getElementById('lightImg').src = single[i].img;
            document.getElementById('lightText').innerText = single[i].text;
        }
    }
}





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


var app4 = new Vue({
    el:'#buy_app4',  
    data:{
        active
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

<<<<<<< HEAD
=======
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

for(var j=0; j < rice.length;j++){
    document.getElementById(`riceimg${j+1}`).addEventListener('click',ricelightBox)
    document.getElementById(`plus${j+1}`).addEventListener('click',meatshow)
    document.getElementById(`plus${j+1}`).addEventListener('click',imgscale1)
    document.getElementById(`plus${j+1}`).addEventListener('click',riceincart)
}


for(var j=0; j < meat.length;j++){
    document.getElementById(`meatimg${j+1}`).addEventListener('click',meatlightBox)
    document.getElementById(`meatplus${j+1}`).addEventListener('click',singleshow)
    document.getElementById(`meatplus${j+1}`).addEventListener('click',imgscale2)
    document.getElementById(`meatplus${j+1}`).addEventListener('click',meatincart)
}

for(var j=0; j < single.length;j++){
    document.getElementById(`singleplus${j+1}`).addEventListener('click',singleincart)
}


for(var j=0; j < setdo.length;j++){
    document.getElementById(`setdoimg${j+1}`).addEventListener('click',setdolightBox)
}



// 米飯lightbox js

function setdolightBox(){
    document.getElementsByClassName('box3')[0].style.display='block';
    let A = this.dataset.id;
    console.log(A);
    for(let i = 0;i<setdo.length;i++){
        if(rice[i].id == Number(A)){
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
    document.getElementById('list_ricename').innerText = `${listrice} x1  NT$${listriceprice}`;

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
    document.getElementById('list_meatname').innerText = `${listmeat} x1  NT$${listmeatprice}`;
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
                document.getElementById('list_singlename'+`${singlecount}`).innerText = `${listsingle} x1  NT$${listsingleprice}`;
               
    }else
    {
        alert('只能選三道配菜喔');
    }
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







//// 配菜lightbox js

for(var j=0; j < single.length;j++){
    document.getElementById(`img${j+1}`).addEventListener('click',lightBox)
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


//count 值

for(var i = 0; i<9; i++){
document.getElementsByClassName('plusincart')[i].addEventListener('click',cart)
}
function  cart(){

    var countvalue = document.getElementsByClassName('countvalue')[i].innerText;
    console.log(countvalue);
}

    


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
function ricescale(){
    document.getElementById('ordertitle1').style.transform = "scale(1.5)";
    document.getElementById('ordertitletext1').style.color = "#EA6227";
    document.getElementById('ordertitle2').style.transform = "scale(1)";
    document.getElementById('ordertitletext2').style.color = "#000000";
    document.getElementById('ordertitle3').style.transform = "scale(1)";
    document.getElementById('ordertitletext3').style.color = "#000000";
     
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


var singleorderlist = new Vue({
    el:'#list',  
    data:{
        finalsinglelist:[]
    },
})




function shoppcar(){
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
// document.getElementById('ricename').innerText=`${rice}`;
// document.getElementById('meatname').innerText=`${meat}`;
// document.getElementById('singlename1').innerText=`${single1}`;
// document.getElementById('singlename2').innerText=`${single2}`;
// document.getElementById('singlename3').innerText=`${single3}`;
var singleorder= {
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
 }
 orderCart.push(singleorder);
 for(let i=0; i<orderCart.length; i++){
    console.log(orderCart[i]);
 }
   
 singlecount = 0;

 document.getElementById('list_ricename').innerText = '';
 document.getElementById('list_meatname').innerText = '';
 document.getElementById('list_singlename1').innerText = '';
 document.getElementById('list_singlename2').innerText = '';
 document.getElementById('list_singlename3').innerText = '';

 var singleOrder = JSON.stringify(orderCart);
 localStorage.setItem('singleOrder', singleOrder);

 var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
 singleorderlist.$data.finalsinglelist = finalsinglelist;
 console.log(singleorderlist.$data.finalsinglelist);


}
>>>>>>> 9806daf295797be65df18da77c1fbe57b1f5a697

// var app4 = new Vue({
//     el:'#buy_app4',  
//     data:{
//         active
//     },methods:{
//         add: function(item) {
//             item.count++;
//         },
//         minus:function (item) {
//             if(item.count>1){
//                 item.count--;
//             }
//         }
//     },
// })

// let finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));

// var singleorderlist = new Vue({
//     el:'#list',  
//     data:{
//         finalsinglelist:[]
//     },
// })
// console.log(singleorderlist.$data.finalsinglelist);
// singleorderlist.$data.finalsinglelist = finalsinglelist;
// console.log(singleorderlist.$data.finalsinglelist);

