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


