// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      } 
    },
    template: '<div class=count><button v-on:click="count++">+</button>{{count}}<button v-on:click="if(count>0){count--;}">-</button><img src=https://fakeimg.pl/20/></div>'
 
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
    img:"./images/bandon_include/threecup.jpg",
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
    img:"./images/bandon_include/tomatoegg.jpg",
    price:'700',
    cal:"300cal",
    text:"番茄炒蛋不僅好吃，連配色都很鮮豔，一看就讓人食指大動！紅通通的大番茄含有豐富的茄紅素、維生素C、膳食纖維等營養，是很棒的蔬菜，尤其是它特有的茄紅素，是一種天然色素，不但使番茄呈現討喜的鮮紅色，還具有很強的抗氧化功能，可以降低身體的氧化傷害，保持健康與美麗。 番茄含有豐富的茄紅素。"

},
{
    id:'8',
    name:"蠔油青江菜",
    img:"./images/bandon_include/oilgreen.jpg", 
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


// 米飯lightbox js
for(var j=0; j < rice.length;j++){
    document.getElementById(`riceimg${j+1}`).addEventListener('click',ricelightBox)
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




for(var j=0; j < meat.length;j++){
    document.getElementById(`meatimg${j+1}`).addEventListener('click',meatlightBox)
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