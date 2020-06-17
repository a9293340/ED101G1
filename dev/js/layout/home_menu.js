//menu vue
// first menu
let menu_first = new Vue({
  el: '#first',
  data: {
    list: [
      {
        id: '1',
        benton: '雞腿便當',
        img: '../../dest/images/showbenton/like.png',
      },
      {
        id: '2',
        benton: '排骨便當',
        img: '../../dest/images/showbenton/like.png',
      },
      {
        id: '3',
        benton: '鮭魚便當',
        img: '../../dest/images/showbenton/like.png',
      },

    ],

  },
});

//sec menu

let menu_sec = document.getElementById("first"),
  sec_img = document.getElementById("sec_img"),
  first_img = document.getElementById("first_img"),
  third_img = document.getElementById("third_img"),
  menu_name = document.getElementById("menu_name"),
  menu_memname = document.getElementById("menu_memname"),
  menu_date = document.getElementById("menu_date"),

  menu_name_sec = document.getElementById("menu_name_sec"),

  menu_like = document.getElementById("menu_like");

//fake data
let leaderBoardData = [
  {
    postTitle: "鮭魚便當",
    postContent: "很好吃很好吃很好吃",
    postData: "2020/08/07",
    postLike: 50,
    memName: "John",
    soImg: "../../dest/images/bandon_include/curry.png",
    soRice: "白飯",
    mainFood: "鮭魚",
    sideDishes1: "配菜1",
    sideDishes1: "配菜2",
    sideDishes1: "配菜3",
  },
  {
    postTitle: "排骨便當",
    postContent: "很好吃很好吃很好吃",
    postData: "2020/08/07",
    postLike: 140,
    memName: "John",
    soImg: "../../dest/images/bandon_include/friedShrimp.png",
    soRice: "白飯",
    mainFood: "排骨",
    sideDishes1: "配菜1",
    sideDishes1: "配菜2",
    sideDishes1: "配菜3",
  },
  {
    postTitle: "烤雞便當",
    postContent: "很好吃很好吃很好吃",
    postData: "2020/08/07",
    postLike: 30,
    memName: "John",
    soImg: "../../dest/images/bandon_include/spoonVeg.png",
    soRice: "白飯",
    mainFood: "烤雞",
    sideDishes1: "配菜1",
    sideDishes1: "配菜2",
    sideDishes1: "配菜3",
  },

]

leaderBoardData.sort(function (a, b) {
  return b.postLike - a.postLike;
});

console.log(leaderBoardData);
let leader_1 = document.getElementById("leader_1");
let leader_1_str = '';
let leader_2 = document.getElementById("leader_2");
let leader_2_str = '';
let leader_3 = document.getElementById("leader_3");

function leader_order() {
  for (var i = 0; i < leaderBoardData.length; i++) {
    // if(i == 0){
    //   first_img.src= leaderBoardData[i].soImg;
    //   menu_name_sec.innerText = leaderBoardData[i].postTitle;
    // }
    if (i == 0) {
      first_img.src = leaderBoardData[i].soImg;
      var test = `<div id="menu_name_sec"> ${leaderBoardData[i].postTitle} </div>`;
      var test1 = `<div id="menu_date_sec"> ${leaderBoardData[i].postData} </div>`;
      var test2 = `<div id="menu_memname_sec"> ${leaderBoardData[i].memName} </div>`;
      var test3 = `<div id="menu_like_sec"> ${leaderBoardData[i].postLike} </div>`;
      leader_1_str += test;
      leader_1_str += test1;
      leader_1_str += test2;
      leader_1_str += test3;
    } else if (i == 1) {
      sec_img.src = leaderBoardData[i].soImg;
      var leader_2_str = `<div id="menu_name_sec"> ${leaderBoardData[i].postTitle} </div>
      <div id="menu_date_sec"> ${leaderBoardData[i].postData} </div>
      <div id="menu_memname_sec"> ${leaderBoardData[i].memName} </div>
      <div id="menu_like_sec"> ${leaderBoardData[i].postLike} </div>
      `;
      // var test1 = `<div id="menu_date_sec"> ${leaderBoardData[i].postData} </div>`;
      // var test2 = `<div id="menu_memname_sec"> ${leaderBoardData[i].memName} </div>`;
      // var test3 = `<div id="menu_like_sec"> ${leaderBoardData[i].postLike} </div>`;
      // leader_2_str+=test;
      // leader_2_str+=test1;
      // leader_2_str+=test2;
      // leader_2_str+=test3;
      // console.log(leader_2_str)

    }

  }
  leader_1.innerHTML = leader_1_str;
  leader_2.innerHTML = leader_2_str;
  // leader_2.innerHTML = str;
};
leader_order();



// compare_num();
// let like_max = Math.max(...like_array);
// let like_min = Math.min(...like_array);
// var like_first = like_max;
// var like_sec = 0;
// var like_third = like_min;
// var final_like_array = [];
// final_like_array.push(like_sec);
// final_like_array.push(like_first);
// final_like_array.push(like_third);
// console.log(final_like_array);

// function leader_order(){
//   for(var i =0; i<final_like_array.length;i++){
//     if(final_like_array[i] == like_max){
//       menu_name_sec.append(leaderBoardData[1].postTitle);
//     }else if(final_like_array[i] == like_min){
//       menu_name_third.append(leaderBoardData[0].postTitle);
//     }else{
//       menu_name.append(leaderBoardData[2].postTitle);
//     }
//   }
// }
// leader_order();

// function leader_order(){
//   for(var i =0; i<leaderBoardData.length;i++){
//     if(like_max == leaderBoardData[i].like){
//       first_img.src= leaderBoardData[i].soImg;
//       menu_name.append(leaderBoardData[].postTitle);
//       menu_date.append(leaderBoardData[].postData);
//       menu_memname.append(`發文人: ${leaderBoardData[].memName}`);
//       menu_like.append(`讚數: ${leaderBoardData[].postLike}`);
//     }
//   }
// }
// leader_order();

// sec_img.src = '../../dest/images/showbenton/like.png';
// sec_img.src = '../../dest/images/showbenton/like.png';
// sec_img.src = '../../dest/images/showbenton/like.png';






//third menu
let menu_third = new Vue({
  el: '#third',
  data: {
    list: [
      {
        id: '1',
        benton: '雞腿便當',
        img: '../../dest/images/showbenton/like.png',
      },
      {
        id: '2',
        benton: '排骨便當',
        img: '../../dest/images/showbenton/like.png',
      },
      {
        id: '3',
        benton: '鮭魚便當',
        img: '../../dest/images/showbenton/like.png',
      },

    ],

  },
});

//主要效果控制

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el')); //[].slice.call(arguments)能将具有length属性的对象转成数组。
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function () {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {   //click事件
  $el.addEventListener('click', function () {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener('click', function (e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});


//變形蟲控制
const c = document.getElementById("canvas");
const ctx = c.getContext("2d"); //宣告用2d
const canvasWidth = c.width = 350;
const canvasCenterX = canvasWidth / 2;
const canvasHeight = c.height = 350;
const canvasCenterY = canvasHeight / 2;
const radian = Math.PI / 180; //弧度
const radius = 150; //半徑
const points = [];

let frames = 0;

ctx.strokeStyle = "#f7fcaf"; //外框顏色

class Point { //類別宣告,原型物件導向語法糖
  constructor(a) {
    this.rand = rnd() * 360;
    this.a = a;
    this.r = radius + radius / 5 * Math.sin(this.rand * radian);
    this.x = canvasCenterX + this.r * Math.cos(a * radian);
    this.y = canvasCenterY + this.r * Math.sin(a * radian);
  }
}

// how much points 決定要幾個點越多越不規則
for (let a = 0; a < 360; a += 30) {
  points.push(new Point(a));
}

function paintPoints(o) { //繪製圓點
  const lastPointIndex = o.length - 1;
  const pu0 = unionPoint(o, lastPointIndex, 0);
  ctx.fillStyle = rGrd(canvasCenterX, canvasCenterY, 1.2 * radius);
  ctx.beginPath();
  ctx.moveTo(pu0.x, pu0.y);
  for (var i = 0; i < o.length - 1; i++) {
    var pui = unionPoint(o, i, i + 1);
    ctx.quadraticCurveTo(o[i].x, o[i].y, pui.x, pui.y);
  }
  ctx.quadraticCurveTo(o[lastPointIndex].x, o[lastPointIndex].y, pu0.x, pu0.y);
  ctx.fill();
}

function unionPoint(obj, a, b) {
  var up = {};
  up.x = (obj[a].x + obj[b].x) / 2;
  up.y = (obj[a].y + obj[b].y) / 2;
  return up;
}

function renderFrame() {
  frames++;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  for (let i = 0; i <= points.length - 1; i++) {
    const p = points[i];
    p.a += 0.1; // rotate speed
    p.r = radius + (radius / 5.5) * Math.sin((frames + p.rand) * radian);
    p.x = canvasCenterX + p.r * Math.cos(p.a * radian);
    p.y = canvasCenterY + p.r * Math.sin(p.a * radian);
  }

  paintPoints(points);

  // loop the animation
  window.requestAnimationFrame(renderFrame);
}

// start the loop
window.requestAnimationFrame(renderFrame);

function rGrd(x, y, r) {
  var gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
  gradient.addColorStop(0, "#f7fcaf");
  gradient.addColorStop(0.3, "#f9ff9e");
  gradient.addColorStop(1, "#eff86f");
  return gradient;
}

// alternative for Math.random();
function rnd() {
  Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff;
  return Math.abs(Math.seed >> 16) / 32869;
}


