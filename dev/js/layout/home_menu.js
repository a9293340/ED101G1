//滑動時顯示跟隱藏導覽列

var zero = 0;
$(window).on('scroll', function (event) {
  event.stopPropagation();
  if ($(window).scrollTop() > 1000) {
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }
  if ($(".fixed")) {
    if ($(window).scrollTop() > zero) {
      $(".fixed").stop(true).animate({ opacity: 0 });
      $(".fixed").css("display", "none");

    } else {
      $(".fixed").css("display", "flex");
      $(".fixed").stop(true).animate({ opacity: 1 });


    }
    zero = $(window).scrollTop()
  }
}
);

var btn_switch = $('.btn_switch'),
  navgroup_rwd = $('.navgroup_rwd'),
  overlay = $('.overlay');
btn_switch.on('click', function () {
  navgroup_rwd.toggleClass('open');
  $('.bgl').toggleClass('translateY');
  $('.bottom').toggleClass('turnN');
  $('.top').toggleClass('turnX');
  $('.navgroup a').toggleClass('test');
});



//menu vue
// first menu
let menu_Feature = new Vue({
  el: '#first',
  data: {
    list: [
      {
        id: '1',
        benton: '雞腿便當',
        img: '../../dest/images/showbenton/like.png',
        price: 80,
      },
      {
        id: '2',
        benton: '排骨便當',
        img: '../../dest/images/showbenton/like.png',
        price: 180,
      },
      {
        id: '3',
        benton: '鮭魚便當',
        img: '../../dest/images/showbenton/like.png',
        price: 820,
      },

    ],

  },
});

//sec menu

let menu_sec = document.getElementById("first"),
  sec_img = document.getElementById("sec_img"),
  first_img = document.getElementById("first_img"),
  third_img = document.getElementById("third_img");


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
  }
]
//排序成 [1,0,2]
leaderBoardData.sort(function (a, b) {
  return b.postLike - a.postLike;
});

// 自動根據leaderBoardData.length抓到並產生相對應leader_i
function maker() {
  let leader = [];
  for (var i = 1; i < leaderBoardData.length + 1; i++) {
    leader[i] = document.getElementById(`leader_${i}`);
  }
}
maker();



let leader_str = []; //用陣列當變數解決要丟入多個不同區域的相同內容
function leader_order() {
  for (var i = 0; i < leaderBoardData.length; i++) {
    // if(i == 0){
    //   first_img.src= leaderBoardData[i].soImg;
    //   menu_name_sec.innerText = leaderBoardData[i].postTitle;
    // }
    leader_str[i] =
      `
      <div id="menu_ndgroup">
      <div id="menu_name_sec"> ${leaderBoardData[i].postTitle} </div>
      <div id="menu_date_sec">日期： ${leaderBoardData[i].postData} </div>
      </div>
      <div id="menu_memname_sec">創作者： ${leaderBoardData[i].memName} </div>
      <div id="menu_like_sec">獲得讚數：${leaderBoardData[i].postLike} </div>
      `;
    // leader_2_str = `<div id="menu_name_sec"> ${leaderBoardData[i].postTitle} </div>
    // <div id="menu_date_sec"> ${leaderBoardData[i].postData} </div>
    // <div id="menu_memname_sec"> ${leaderBoardData[i].memName} </div>
    // <div id="menu_like_sec"> ${leaderBoardData[i].postLike} </div>
    // `;
    // leader_3_str = `<div id="menu_name_sec"> ${leaderBoardData[i].postTitle} </div>
    // <div id="menu_date_sec"> ${leaderBoardData[i].postData} </div>
    // <div id="menu_memname_sec"> ${leaderBoardData[i].memName} </div>
    // <div id="menu_like_sec"> ${leaderBoardData[i].postLike} </div>
    // `;
    if (i == 0) {
      first_img.src = leaderBoardData[i].soImg;

    } else if (i == 1) {
      sec_img.src = leaderBoardData[i].soImg;

      // var test1 = `<div id="menu_date_sec"> ${leaderBoardData[i].postData} </div>`;
      // var test2 = `<div id="menu_memname_sec"> ${leaderBoardData[i].memName} </div>`;
      // var test3 = `<div id="menu_like_sec"> ${leaderBoardData[i].postLike} </div>`;
      // leader_2_str+=test;
      // leader_2_str+=test1;
      // leader_2_str+=test2;
      // leader_2_str+=test3;
      // console.log(leader_2_str)

    } else {
      third_img.src = leaderBoardData[i].soImg;
    }
    leader_1.innerHTML = leader_str[0];
    leader_2.innerHTML = leader_str[1];
    leader_3.innerHTML = leader_str[2];
  }

};
leader_order();


//third menu
let menu_third = new Vue({
  el: '#third',
  data: {
    list: [
      {
        id: '1',
        benton: '雞腿便當',
        img: '../../dest/images/showbenton/like.png',
        price: 80,
      },
      {
        id: '2',
        benton: '排骨便當',
        img: '../../dest/images/showbenton/like.png',
        price: 80,
      },
      {
        id: '3',
        benton: '鮭魚便當',
        img: '../../dest/images/showbenton/like.png',
        price: 80,
      },

    ],

  },
});

//第二幕主要效果控制

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
  gradient.addColorStop(0, "orange");
  gradient.addColorStop(0.3, "orange");
  gradient.addColorStop(1, "orange");
  return gradient;
}

// alternative for Math.random();
function rnd() {
  Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff;
  return Math.abs(Math.seed >> 16) / 32869;
}



//第四屏的slider

var $slider = $(".slider"),
  $slideBGs = $(".slide__bg"),
  diff = 0,
  curSlide = 0,
  numOfSlides = $(".slide").length - 1,
  animating = false,
  animTime = 1000,
  autoSlideTimeout,
  autoSlideDelay = 4000,
  $pagination = $(".slider-pagi");

// 自動根據文章數產生下方圓點
function createBullets() {
  for (var i = 0; i < numOfSlides + 1; i++) {
    var $li = $("<li class='slider-pagi__elem'></li>");
    $li.addClass("slider-pagi__elem-" + i).data("page", i);
    if (!i) $li.addClass("active");
    $pagination.append($li);
  }
}
createBullets();
// 自動根據文章數產生下方圓點


function manageControls() {
  $(".slider-control").removeClass("inactive");
  if (!curSlide) $(".slider-control.left").addClass("inactive");
  if (curSlide === numOfSlides)
    $(".slider-control.right").addClass("inactive");
}


// 這裡是自動輪播
// function autoSlide() {
//   autoSlideTimeout = setTimeout(function () {
//     curSlide++;
//     if (curSlide > numOfSlides) curSlide = 0;
//     changeSlides();
//   }, autoSlideDelay);
// }

// autoSlide();
// 這裡是自動輪播

function changeSlides(instant) {
  if (!instant) {
    animating = true;
    manageControls();
    $slider.addClass("animating");
    $slider.css("top");
    $(".slide").removeClass("active");
    $(".slide-" + curSlide).addClass("active");
    setTimeout(function () {
      $slider.removeClass("animating");
      animating = false;
    }, animTime);
  }
  window.clearTimeout(autoSlideTimeout);
  $(".slider-pagi__elem").removeClass("active");
  $(".slider-pagi__elem-" + curSlide).addClass("active");
  $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
  $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
  diff = 0;
  autoSlide();
}

function navigateLeft() {
  if (animating) return;
  if (curSlide > 0) curSlide--;
  changeSlides();
}

function navigateRight() {
  if (animating) return;
  if (curSlide < numOfSlides) curSlide++;
  changeSlides();
}
// 這塊是往左托移和往右拖移
$(document).on("mousedown touchstart", ".slider", function (e) {
  if (animating) return;
  window.clearTimeout(autoSlideTimeout);
  var startX = e.pageX || e.originalEvent.touches[0].pageX,
    winW = $(window).width();
  diff = 0;

  $(document).on("mousemove touchmove", function (e) {
    var x = e.pageX || e.originalEvent.touches[0].pageX;
    diff = ((startX - x) / winW) * 70;
    if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0))
      diff /= 2;
    $slider.css(
      "transform",
      "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)"
    );
    $slideBGs.css(
      "transform",
      "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)"
    );
  });
});

$(document).on("mouseup touchend", function (e) {
  $(document).off("mousemove touchmove");
  if (animating) return;
  if (!diff) {
    changeSlides(true);
    return;
  }
  if (diff > -8 && diff < 8) {
    changeSlides();
    return;
  }
  if (diff <= -8) {
    navigateLeft();
  }
  if (diff >= 8) {
    navigateRight();
  }
});
// 這塊是往左托移和往右拖移

// 這塊是下方小按鈕的點擊和左右邊的點擊觸發效果
$(document).on("click", ".slider-control", function () {
  if ($(this).hasClass("left")) {
    navigateLeft();
  } else {
    navigateRight();
  }
});

$(document).on("click", ".slider-pagi__elem", function () {
  curSlide = $(this).data("page");
  changeSlides();
});
// 這塊是下方小按鈕的點擊和左右邊的點擊觸發效果
