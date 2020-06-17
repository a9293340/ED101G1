new Vue({
  el: '#first',
  data: {
    list: [
      { id: '123', benton: '雞腿便當' },
      { id: '223', benton: '鮭魚便當' },
      { id: '023', benton: '排骨便當' },
    ],
  }
})
// 排行榜
new Vue({
  el: '#mid',
  data: {
    message: [

    ]
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


