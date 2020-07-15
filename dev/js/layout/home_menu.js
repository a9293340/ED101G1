//滑動時顯示跟隱藏導覽列

var zero = 0;
$(window).on('scroll', function (event) {
  // event.stopPropagation();
  if ($(window).scrollTop() > 1000) {
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }
  if ($(".fixed")) {
    if ($(window).scrollTop() > zero) {

      $(".fixed").css("transform", "translate3d(0px,-100px,0px)");
      $(".fixed").css("opacity", "0");
    } else {
      $(".fixed").css("transform", "translate3d(0,0,0)");
      $(".fixed").css("opacity", "1");


    }
    zero = $(window).scrollTop()
  }
});

// var zero = 0;
// $(window).on('scroll', function (event) {
//   // event.stopPropagation();
//   if ($(window).scrollTop() > 1000) {
//     $('nav').addClass('fixed');
//   } else {
//     $('nav').removeClass('fixed');
//   }
//   if ($(".fixed")) {
//     if ($(window).scrollTop() > zero) {
//       $(".fixed").stop(true).animate({
//         opacity: 0
//       });
//       $(".fixed").css("display", "none");

//     } else {
//       $(".fixed").css("display", "flex");
//       $(".fixed").stop(true).animate({
//         opacity: 1
//       });


//     }
//     zero = $(window).scrollTop()
//   }
// });


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
let feature_benton = []
let menu_Feature = new Vue({
  el: '#first',
  data: {
    feature_benton,
    list: []


    // list: [
    //   {
    //     id: '1',
    //     benton: '雞腿便當',
    //     img: '../dest/images/bandon_include/active1.jpg',
    //     price: 80,
    //   },
    //   {
    //     id: '2',
    //     benton: '排骨便當',
    //     img: '../dest/images/bandon_include/active2.jpg',
    //     price: 180,
    //   },
    //   {
    //     id: '3',
    //     benton: '鮭魚便當',
    //     img: '../dest/images/bandon_include/active3.jpg',
    //     price: 820,
    //   },

    // ],

  },
  mounted() {
    $.ajax({
      type: "GET",
      url: "./php/home_featureLB.php",
      dataType: "json",
      success: function (data) {
        menu_Feature.$data.list = data.slice(0, 3);

        // console.log(data);
      },
      error: function (jqXHR) {
        console.log(jqXHR, "error");
      },
    })
  }
});

//sec menu

let menu_sec = document.getElementById("first"),
  sec_img = document.getElementById("sec_img"),
  first_img = document.getElementById("first_img"),
  third_img = document.getElementById("third_img"),
  light_box = document.getElementById("light_box"),
  right_group = document.getElementById("right_group"),
  left_group = document.getElementById("left_group"),
  lb_lightBox = document.getElementById("lb_lightBox");
var leaderId_1 = "",
  leaderId_2 = "",
  leaderId_3 = "";


//JSON
function leaderBoard() {
  var leaderRequest = new XMLHttpRequest();
  leaderRequest.open('GET', '../dest/php/home_leaderBoard.php')
  leaderRequest.onload = function () {
    var leaderData = JSON.parse(leaderRequest.responseText);
    // console.log(leaderData[0]);
    console.log(leaderData);
    leaderId_1 = leaderData[0].bentonname;
    leaderId_2 = leaderData[1].bentonname;
    leaderId_3 = leaderData[2].bentonname;

    let leader_str = []; //用陣列當變數解決要丟入多個不同區域的相同內容
    function leader_order() {
      for (var i = 0; i < leaderData.length; i++) {
        leader_str[i] =
          `
      <div id="menu_ndgroup">
      <div id="menu_name_sec"> ${leaderData[i].title} </div>
      </div>
      <div id="menu_memname_sec">創作者： ${leaderData[i].memname} </div>
      <img id="menu_like_sec" src="./images/showbenton/like1.png">${leaderData[i].like} </img>
      <div id="menu_date_sec">日期： ${leaderData[i].postdate} </div>
      `;
        if (i == 0) {
          first_img.src = leaderData[i].img;
          leaderId_1 = leaderData[i].bentonname;

        } else if (i == 1) {
          sec_img.src = leaderData[i].img;
          leaderId_2 = leaderData[i].bentonname;
        } else {
          third_img.src = leaderData[i].img;
          leaderId_3 = leaderData[i].bentonname;
        }
        leader_1.innerHTML = leader_str[0];
        leader_2.innerHTML = leader_str[1];
        leader_3.innerHTML = leader_str[2];
      }

    };
    leader_order();

    //燈箱
    let lb_lightbox = [];
    let messageArray = [];
    // 撈出所有左邊燈箱的資料
    function lightbox() {
      for (var i = 0; i < leaderData.length; i++) {
        lb_lightbox[i] =
          `
    <div class="top_img">
    <img width="248px" height="146px" id="first_img" src=" ${leaderData[i].img}">
    </div>
    <a href="./dest/showbenton.html" class="buynow">前往購買</a>
    <div id="menu_ndgroup1">
    <div id="menu_maker">
    <div id="menu_memname_sec1">${leaderData[i].memname} </div>
    <img id="menu_image_sec1" src="${leaderData[i].mimg}">
    </div>
    <div id="menu_name_sec1"> ${leaderData[i].title} </div>
    <div id="menu_content_sec1"> ${leaderData[i].content} </div>
    <div id="menu_date_sec1">日期： ${leaderData[i].postdate} </div>
    </div>
    <img id ="closebtn" src = "./images/showbenton/close.png" >
    `;

      }



      //建立點擊事件，先等所有資料撈完後再點擊並顯示選取的資料

      setTimeout(function () {
        for (let i = 1; i < 4; i++) {
          document.getElementById(`leader_${i}`).addEventListener('click', function () {
            lb_lightBox.classList.toggle("lb-s--active");
            left_group.innerHTML = lb_lightbox[i - 1];

            setTimeout(function () {
              var lb_closebtn = document.getElementById("closebtn");
              lb_closebtn.addEventListener('click', function () {
                lb_lightBox.classList.toggle("lb-s--active");
                right_group.innerHTML = "";
                messageArray = [];
                mgcontent = [];
              });


            }, 1000);
            gsap.timeline().from("#menu_ndgroup1", {
              ease: "power3.inOut",
              duration: .7,
              rotate: 90,
              stagger: .5,
              autoAlpha: 0,
              delay: .3,
              transformOrigin: "left"
            })

            //click後觸發撈右邊AJAX的資料---------------
            function messageContent() {
              // let messPostId = [leaderId_1,leaderId_2,leaderId_3];
              // console.log(messPostId);
              var contentRequest = new XMLHttpRequest();
              contentRequest.onload = function () {
                var mgcontent = JSON.parse(contentRequest.responseText);

                //將對應的mgcontent訊息撈出來存入messageArray陣列裡
                function messagebox() {
                  for (var i = 0; i < mgcontent.length; i++) {
                    // messPostId = mgcontent.messPostId;
                    messageArray[i] =
                      `
         <div class="message_group">
         <div class="member_id">
         <img src ="${mgcontent[i].img} " width="30" height="30">
         <div id="mg_name"> ${mgcontent[i].mname} </div>
         </div>
         <div class="member_mgs">
         <div id="mg_content"> ${mgcontent[i].content} </div>
         <div id="mg_time"> ${mgcontent[i].mtime} </div>
         </div>
         </div>     

        `
                  }
                };
                messagebox();
              };
              contentRequest.open('POST', '../dest/php/home_lBmessage.php');
              contentRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              if (i == 1) {
                contentRequest.send("messPostId=" + leaderId_1);
              } else if (i == 2) {
                contentRequest.send("messPostId=" + leaderId_2);
              } else {
                contentRequest.send("messPostId=" + leaderId_3);
              }
              // console.log(messPostId);

            };
            messageContent();
            setTimeout(function () {
              for (var i = 0; i < messageArray.length; i++) {
                // console.log(messPostId);
                right_group.innerHTML += messageArray[i];
              }
              console.log(456);
              gsap.timeline().from(".message_group", {
                ease: "power2.inOut",
                duration: .8,
                x: -100,
                stagger: .2,
                autoAlpha: 0,
                transformOrigin: "center",
                delay: .2,
              })
            }, 500)
            //右邊AJAX的資料----------------------------------



            //做第二次ajax
            //ajax.onload => 抓右邊的資料 然後渲染

          });

        }
        console.log(123);

      }, 1000)

      //leader點開後撈出對應的留言貼文數量


    };
    lightbox();
  };

  leaderRequest.send();
}

leaderBoard();



//third menu
let menu_third = new Vue({
  el: '#third',
  data: {
    list: []

  },
  mounted() {
    $.ajax({
      type: "GET",
      url: "./php/home_featureLB.php",
      dataType: "json",
      success: function (data) {
        menu_third.$data.list = data.slice(3);

        // console.log(data);
      },
      error: function (jqXHR) {
        console.log(jqXHR, "error");
      },
    })
  }
});

//第二幕主要效果控制

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el')); //[].slice.call(arguments)能将具有length属性的对象转成数组。
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

//定時後，製造開場動畫效果
setTimeout(function () {
  $cont.classList.remove('s--inactive');
}, 200);
$elsArr.forEach(function ($el) { //click事件
  $el.addEventListener('click', function () {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
    console.log($el);
    if (this.id === "sec") {

      var out_circle = ["#Layer_1 > g > g:nth-child(6)"],
        star = ["#Layer_1 > g > path:nth-child(7)"],
        banner = ["#Layer_1 > g > path:nth-child(1)", "#Layer_1 > g > path:nth-child(2)", "#Layer_1 > g > g:nth-child(3)", "#Layer_1 > g > path:nth-child(4)", "#Layer_1 > g > path:nth-child(5)"],
        colors = ["#164", "#350", "#350", "#088"];
      var medalAm = gsap.timeline();
      medalAm
        .from(out_circle, {
          ease: "power1.out",
          duration: 2,
          scaleX: 0,
          scaleY: 0,
          rotate: 1080,
          delay: 3,
          transformOrigin: "center",
          autoAlpha: 0,

        })
        .from(star, {
          ease: "power3.out",
          duration: 2,
          rotate: -1080,
          transformOrigin: "center",
          autoAlpha: 0,
        }, "<")
        .from(banner, {
          // ease: "power3.out",
          y: -100,
          autoAlpha: 0,
          duration: 1,
          delay: 2,
        }, "<")
        .from(star, {
          rotate: -360,
          repeat: -1,
          // yoyo: 1,
          duration: 1,
          repeatDelay: 10,
          transformOrigin: "center",
        })

    }

  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener('click', function (e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

//medal




// //變形蟲控制
// const c = document.getElementById("canvas");
// const ctx = c.getContext("2d"); //宣告用2d
// const canvasWidth = c.width = 350;
// const canvasCenterX = canvasWidth / 2;
// const canvasHeight = c.height = 350;
// const canvasCenterY = canvasHeight / 2;
// const radian = Math.PI / 180; //弧度
// const radius = 150; //半徑
// const points = [];

// let frames = 0;

// ctx.strokeStyle = "#f7fcaf"; //外框顏色

// class Point { //類別宣告,原型物件導向語法糖
//   constructor(a) {
//     this.rand = rnd() * 360;
//     this.a = a;
//     this.r = radius + radius / 5 * Math.sin(this.rand * radian);
//     this.x = canvasCenterX + this.r * Math.cos(a * radian);
//     this.y = canvasCenterY + this.r * Math.sin(a * radian);
//   }
// }

// // how much points 決定要幾個點越多越不規則
// for (let a = 0; a < 360; a += 30) {
//   points.push(new Point(a));
// }

// function paintPoints(o) { //繪製圓點
//   const lastPointIndex = o.length - 1;
//   const pu0 = unionPoint(o, lastPointIndex, 0);
//   ctx.fillStyle = rGrd(canvasCenterX, canvasCenterY, 1.2 * radius);
//   ctx.beginPath();
//   ctx.moveTo(pu0.x, pu0.y);
//   for (var i = 0; i < o.length - 1; i++) {
//     var pui = unionPoint(o, i, i + 1);
//     ctx.quadraticCurveTo(o[i].x, o[i].y, pui.x, pui.y);
//   }
//   ctx.quadraticCurveTo(o[lastPointIndex].x, o[lastPointIndex].y, pu0.x, pu0.y);
//   ctx.fill();
// }

// function unionPoint(obj, a, b) {
//   var up = {};
//   up.x = (obj[a].x + obj[b].x) / 2;
//   up.y = (obj[a].y + obj[b].y) / 2;
//   return up;
// }

// function renderFrame() {
//   frames++;

//   ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//   for (let i = 0; i <= points.length - 1; i++) {
//     const p = points[i];
//     p.a += 0.1; // rotate speed
//     p.r = radius + (radius / 5.5) * Math.sin((frames + p.rand) * radian);
//     p.x = canvasCenterX + p.r * Math.cos(p.a * radian);
//     p.y = canvasCenterY + p.r * Math.sin(p.a * radian);
//   }

//   paintPoints(points);

//   // loop the animation
//   window.requestAnimationFrame(renderFrame);
// }

// // start the loop
// window.requestAnimationFrame(renderFrame);

// function rGrd(x, y, r) {
//   var gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
//   gradient.addColorStop(0, "orange");
//   gradient.addColorStop(0.3, "orange");
//   gradient.addColorStop(1, "orange");
//   return gradient;
// }

// // alternative for Math.random();
// function rnd() {
//   Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff;
//   return Math.abs(Math.seed >> 16) / 32869;
// }



//第四屏的slider

var $slider = $(".slider"),
  $slideBGs = $(".slide__bg"),
  diff = 0,
  curSlide = 0,
  numOfSlides = $(".slide").length - 1,
  animating = false,
  animTime = 100,
  autoSlideTimeout,
  autoSlideDelay = 5000,
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

//控制管理hover後的(這裡沒有)黑邊框 去除inactive邊框
// function manageControls() {
//   $(".slider-control").removeClass("inactive");
//   if (!curSlide) $(".slider-control.left").addClass("inactive");
//   if (curSlide === numOfSlides)
//     $(".slider-control.right").addClass("inactive");
// }


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

var badges = [".badge.am1", ".badge.am2", ".badge.am3"];
var badge = function badge1() {
  var fa = gsap.to(badges, {
    y: 190,
    ease: "bounce.out",
    duration: 2,
    repeat: -1,
    yoyo: true,
    // repeatDelay: 0.4,
    stagger: 0.5,
  });
  $(".badge.am1").mouseenter(function () {
    gsap.to(".badge.am1", {
      x: 190,

    });

  })
  $(".badge.am1").mouseleave(function () {
    gsap.to(".badge.am1", {
      x: 0,
    })
  })
  badge = function badge1() {};
}



function changeSlides(instant) {
  if (!instant) {
    animating = true;
    // manageControls();
    $slider.addClass("animating");
    $slider.css("top");
    $(".slide").removeClass("active");
    $(".slide-" + curSlide).addClass("active");
    setTimeout(function () {
      $slider.removeClass("animating");
      animating = false;
    }, animTime);
    badge();
  }

  window.clearTimeout(autoSlideTimeout);
  $(".slider-pagi__elem").removeClass("active");
  $(".slider-pagi__elem-" + curSlide).addClass("active");
  $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
  $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
  diff = 0;
  // autoSlide();

}

//如果拖一畫面大於一定寬度直接切換
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