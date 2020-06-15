//定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      } 
    },
    template: '<div class="count"><button v-on:click="count++;">+</button><span class="countvalue">{{count}}</span><button v-on:click="if(count>0){count--;}">-</button><img class="plusincart" src=https://fakeimg.pl/20/></div>'
 
  }) 





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
    img:"./images/bandon_include/curry.jpg",
    price:'700',
    cal:"300cal",
    text:""
},
{
    id:'4',
    name:"花椰菜炒蝦仁",
    img:"./images/bandon_include/flower.jpg",
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
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1",
    text:'寶島食堂嚴選冰島鱈魚，無細刺，肉質滑嫩鮮甜，如雪花般入口即化的綿密感魚肉更富含OMEGA-3即DHA、EPA適合成長中的孩子食用。'
},
{
    id:'2',
    name:"紅燒獅子頭便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1",
    text:''

},
{
    id:'3',
    name:"經典滷排骨便當",
    img:"https://fakeimg.pl/200/",
    price:'100',
    count:"1",
    text:'寶島食堂獨特的排骨醃料配方，醃料採用數十種配料，醃製入味，再採用大吟釀醬油的醬汁滷出新味道，軟嫩可口。'

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


let other_juice ={
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
    document.getElementById('rice').style.width="1200px";
    document.getElementById('rice').style.height="400px";
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
    document.getElementById('meat').style.width="1200px";
    document.getElementById('meat').style.height="400px";
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
    document.getElementById('single').style.width="1200px";
    document.getElementById('single').style.height="400px";
    document.getElementById('single').style.overflowY="auto";
    document.getElementById('single').style.overflowx=" hidden";
    document.getElementById('single').style.flexWrap="wrap";
    document.getElementById('single').style.justifyContent="space-between";
    document.getElementById('order_text').innerText="請任選三道配菜(可重複)";
   
}
//購物車
document.getElementById('incart').addEventListener('click',shoppcar)

function shoppcar(){
    var rice = localStorage.getItem('ricename');
    var meat = localStorage.getItem('meatname');
    var single1 = localStorage.getItem('singlename1');
    var single2 = localStorage.getItem('singlename2');
    var single3 = localStorage.getItem('singlename3');
document.getElementById('ricename').innerText=`${rice}`;
document.getElementById('meatname').innerText=`${meat}`;
document.getElementById('singlename1').innerText=`${single1}`;
document.getElementById('singlename2').innerText=`${single2}`;
document.getElementById('singlename3').innerText=`${single3}`;
   

}
