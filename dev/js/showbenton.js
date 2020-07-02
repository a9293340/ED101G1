let talkArray = [];
let bentonArray = [];
let benton = [];
let lastLikeTime = "";

let showbentonSingle = [
  {
    spId: 1001,
    spName: "紫米飯",
    spPrice: 15,
    spCalories: 80,
    spColdHot: 52,
    spHealth: 82,
    spClass: 0,
    spInfo: "我是紫米飯，我敲健康的說，快來吃我",
    spImage: "./images/bandon_include/PurpleRicePic.png",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1002,
    spName: "白米飯",
    spPrice: 10,
    spCalories: 150,
    spColdHot: 67,
    spHealth: 65,
    spClass: 0,
    spInfo: "我是白米飯，我又Q又嫩，快來吃我",
    spImage: "./images/bandon_include/RicePic.png",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1004,
    spName: "炸雞腿",
    spPrice: 45,
    spCalories: 370,
    spColdHot: 95,
    spHealth: 28,
    spClass: 1,
    spInfo: "我是炸雞腿，我超油超香，快來吃我",
    spImage: "./images/order/chicken.jpg",
    spMeat: 1,
    spStatus: 1,
  },
  {
    spId: 1005,
    spName: "滷排骨",
    spPrice: 45,
    spCalories: 300,
    spColdHot: 53,
    spHealth: 76,
    spClass: 1,
    spInfo: "我是滷排骨，我超油超香，快來吃我",
    spImage: "./images/order/pork.jpg",
    spMeat: 1,
    spStatus: 1,
  },
  {
    spId: 1006,
    spName: "清蒸鱈魚",
    spPrice: 45,
    spCalories: 130,
    spColdHot: 15,
    spHealth: 96,
    spClass: 1,
    spInfo: "我是清蒸鱈魚，我又滑又嫩，快來吃我",
    spImage: "./images/order/fish.jpg",
    spMeat: 1,
    spStatus: 1,
  },
  {
    spId: 1007,
    spName: "蔥爆牛柳",
    spPrice: 45,
    spCalories: 330,
    spColdHot: 73,
    spHealth: 14,
    spClass: 1,
    spInfo: "我是蔥爆牛柳，我又蔥又爆，快來吃我",
    spImage: "./images/order/beef.jpg",
    spMeat: 1,
    spStatus: 1,
  },
  {
    spId: 1008,
    spName: "竹筍炒肉絲",
    spPrice: 20,
    spCalories: 300,
    spColdHot: 25,
    spHealth: 24,
    spClass: 2,
    spInfo:
      "豬肉具有滋陰、潤燥的功能。竹筍有袪熱化痰、解渴益氣、爽胃等功效。肥胖症、脂肪肝、皮脂腺囊腫患者宜常吃此菜。對糖尿病、水腫、積食、便秘、積痰、咳嗽、瘡瘍等症有輔助療效。",
    spImage: "./images/bandon_include/bambomeet.jpg",
    spMeat: 1,
    spStatus: 1,
  },
  {
    spId: 1009,
    spName: "清蒸毛豆",
    spPrice: 20,
    spCalories: 100,
    spColdHot: 49,
    spHealth: 83,
    spClass: 2,
    spInfo:
      "毛豆，在一般料理中算是蔬菜類，但營養價值卻是「豆魚肉蛋類」的豆類，蛋白質含量高於一般蔬菜，同時兼具豆類及蔬菜兩者營養特性，是不可多得的健康好物！",
    spImage: "./images/bandon_include/beens.jpg",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1010,
    spName: "番茄炒蛋",
    spPrice: 20,
    spCalories: 120,
    spColdHot: 22,
    spHealth: 87,
    spClass: 2,
    spInfo:
      "番茄炒蛋不僅好吃，連配色都很鮮豔，一看就讓人食指大動！紅通通的大番茄含有豐富的茄紅素、維生素C、膳食纖維等營養，是很棒的蔬菜，尤其是它特有的茄紅素，是一種天然色素，不但使番茄呈現討喜的鮮紅色，還具有很強的抗氧化功能，可以降低身體的氧化傷害，保持健康與美麗。",
    spImage: "./images/bandon_include/tomatoEgg.png",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1011,
    spName: "花椰菜炒蝦仁",
    spPrice: 20,
    spCalories: 280,
    spColdHot: 27,
    spHealth: 76,
    spClass: 2,
    spInfo:
      "青花菜是十字花科蔬菜，營養價值非常高，是超級食物之一。青花菜放入沸水快速汆燙撈起，營養不流失，搭配蝦仁拌炒就是一道色香味俱全的料理。",
    spImage: "./images/bandon_include/friedShrimp.png",
    spMeat: 1,
    spStatus: 1,
  },
  {
    spId: 1012,
    spName: "麻婆豆腐",
    spPrice: 20,
    spCalories: 310,
    spColdHot: 96,
    spHealth: 11,
    spClass: 2,
    spInfo:
      "豆腐營養價值高，除了含有優質蛋白質外，還含有豐富的鈣質、維生素E、卵磷脂及半胱胺酸等營養素。豆腐的大豆蛋白，因為沒有肉類所含的脂肪及膽固醇，所以是護心、瘦身之選。",
    spImage: "./images/bandon_include/spicytofood.png",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1013,
    spName: "蠔油青江菜",
    spPrice: 20,
    spCalories: 240,
    spColdHot: 33,
    spHealth: 55,
    spClass: 2,
    spInfo:
      "青江菜營養價值高，可以保持血管彈性，提供人體所需礦物質、維生素；維生素B2尤為豐富，有抑制潰瘍的作用，經常食用對皮膚和眼睛的保養有很好的效果；富含纖維，可以有效改善便秘。",
    spImage: "./images/bandon_include/spoonVeg.png",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1014,
    spName: "三杯杏鮑菇",
    spPrice: 20,
    spCalories: 230,
    spColdHot: 68,
    spHealth: 78,
    spClass: 2,
    spInfo:
      "杏鮑菇營養豐富，富含蛋白質、碳水化合物、維生素及鈣、鎂、銅、鋅等礦物質，可以提高人體免疫功能，對人體具有抗癌、降血脂、潤腸胃以及美容等作用。",
    spImage: "./images/bandon_include/kingMushroom.png",
    spMeat: 0,
    spStatus: 1,
  },
  {
    spId: 1015,
    spName: "馬鈴薯咖哩",
    spPrice: 20,
    spCalories: 180,
    spColdHot: 73,
    spHealth: 74,
    spClass: 2,
    spInfo:
      "咖哩常見於印度、泰國和日本料理，常和飯一同享用，不僅口感濃郁，讓人吃起來有滿足感，而且營養豐富。咖哩中的薑黃堪稱「印度維他命」，其抗氧化能力高過維他命E、C。",
    spImage: "./images/bandon_include/curry.png",
    spMeat: 0,
    spStatus: 1,
  },
];

showrice = showbentonSingle[0].spName;
showricePrice = showbentonSingle[0].spPrice;
showmeat = showbentonSingle[2].spName;
showmeatPrice = showbentonSingle[2].spPrice;
showsingle1 = showbentonSingle[8].spName;
showsingle1Price = showbentonSingle[8].spPrice;
showsingle2 = showbentonSingle[9].spName;
showsingle2Price = showbentonSingle[9].spPrice;
showsingle3 = showbentonSingle[10].spName;
showsingle3Price = showbentonSingle[10].spPrice;

showTotalPrice =
  parseInt(showricePrice) +
  parseInt(showmeatPrice) +
  parseInt(showsingle1Price) +
  parseInt(showsingle2Price) +
  parseInt(showsingle3Price);
//---------------------------------------lightbox
new Vue({
  el: "#addBenton", //el:document.getElementById('app');
  data: {},
  methods: {
    showBentonList() {
      $(".box1").css("display", "block");
      $(".showbentonCover").css("display", "block");
      $("body").css("overflow", "hidden");
    },
  },
});

//--------------假設從JSON撈出的資料
let addBentonVm = new Vue({
  el: "#lightbox", //el:document.getElementById('app');
  data: {
    benton,
    bentonArray,
    showBentonImgList: true,
    isClose: true,
    img: "", //初始值字串給空的
    message: "",
    messageContent: "",
    chooseImgID: "",
    addBentonId: "", //與後端串要變全域變數(產出postSoId)
  },
  methods: {
    showChooseBenton(item) {
      $(".bentonCard").css("border-color", "white");
      $(`#bentonLi${item.id}`).css("border-color", "rgb(231, 70, 21)");
      this.img = item.img; //變成全域變數
      this.chooseImgID = `bentonLi${item.id}`; //變成全域變數，以便上一步記得選擇的benton
      this.addBentonId = item.id;
    },
    //輸入標題字數限制
    checkTitle() {
      let maxLength = 25;
      let textLength = this.message.length;
      if (textLength > maxLength) {
        this.message = this.message.substr(0, 25);
        alert("已超過20個字數限制囉!");
      }
    },

    //輸入內容字數限制
    checkContent() {
      let maxLength = 50;
      let textLength = this.messageContent.length;
      if (textLength > maxLength) {
        this.messageContent = this.messageContent.substr(0, 50);
        alert("已超過50個字數限制囉!");
      }
    },

    showBentonStep1(isShow) {
      if (this.img == "" || this.chooseImgID == "") {
        alert("你還沒選擇喜愛的自選便當喔!!");
        return;
      } else {
        this.showBentonImgList = isShow;
      }
    },
    showCloselightbox() {
      $(".box1").css("display", "none");
      $(".showbentonCover").css("display", "none");
      $("body").css("overflow", "auto");

      this.showBentonImgList = true;
    },
    SendBenton() {
      let step2Title = $("#Step2TitlText").val();
      let step2Content = $("#Step2ContentText").val();
      if (step2Title == "") {
        alert("你還沒填寫標題喔!");
        return;
      }
      if (step2Content == "") {
        alert("你還沒填寫內容喔!");
        return;
      }

      //連結後端，將標題、內容可存在資料庫
      $.ajax({
        type: "POST",
        url: "./php/addBenton.php", //傳送目的地 (之後統整要修改網址)
        dataType: "script", //資料格式
        data: {
          titleText: this.message,
          contentText: this.messageContent,
          addBentonId: this.addBentonId,
        },
        success: function (data) {
          console.log(data);
        },
        error: function (jqXHR) {
          console.log(jqXHR, "error");
        },
      });

      this.message = "";
      this.messageContent = "";
      this.chooseImgID = "";
      $(".box1").css("display", "none");
      $(".showbentonCover").css("display", "none");
      $("body").css("overflow", "auto");
      this.showBentonImgList = true;
    },
  },
  updated() {
    if (this.showBentonImgList === true && this.chooseImgID !== "") {
      $(`#${this.chooseImgID}`).css("border-color", "rgb(231, 70, 21)");
    }
  },

  mounted() {
    //取自選便當圖片
    $.ajax({
      type: "GET",
      url: "./php/showbentonImgByMemid.php",
      dataType: "json",

      success: function (data) {
        addBentonVm.$data.benton = data;
      },
      error: function (jqXHR) {
        console.log(jqXHR, "error");
      },
    });
  },
});

//-----------產出便當便貼

// document.getElementById("showBentonImg").innerHTML = "";
// for (let i = 0; i < this.bentonArray.length; i++) {
//   let arrBentonImg = this.bentonArray[i].bentonImg; //arr圖片
//   let arrBentonTitle = this.bentonArray[i].title; //arr標題
//   let arrBentonContent = this.bentonArray[i].content; //arr內文
//   document.getElementById("showBentonImg").innerHTML += `
//   <div class='shareBenton'>
//   <img src='${arrBentonImg}' class='shareBentonImg'/>
//   <p class='shareBentonText'>${arrBentonTitle}</p>
//   <p class='shareBentonContent'>${arrBentonContent}</p>
//   <img src='./images/showbenton/conversation.png' class='conversation'/>
//   <img src='./images/showbenton/like.png' class='like' data-index='${i}'/>
//   <span class='liketimes'>0<span>
// </div>`;

// $(".shareBenton").remove();
// $("#showBentonImg").append(
// `<div class='shareBenton'>
//   <img src='${arrBentonImg}' class='shareBentonImg'/>
//   <p class='shareBentonText'>${arrBentonTitle}</p>
//   <p class='shareBentonContent'>${arrBentonContent}</p>
//   <img src='./images/showbenton/conversation.png' class='conversation'/>
//   <img src='./images/showbenton/like.png' class='like' @click='showbentonLikeTimes'/>
//   <span class='liketimes'>0<span>

// </div>`
// );

// $("#showBentonImg div")
//   .eq(i)
//   .addClass("group" + i);
//新增分享便當的標題
// $(`#showBentonImg div.group${i} p`).eq(0).addClass("shareBentonText");
// $(`#showBentonImg div.group${i} p`)
//   .eq(1)
//   .addClass("shareBentonContent");
//讚圖
// $(`#showBentonImg div.group${i} img`).eq(2).addClass("like");
//對話圖
// $(`#showBentonImg div.group${i} img`).eq(1).addClass("conversation");
// }
// //按讚圖
// for (let j = 0; j < document.getElementsByClassName("like").length; j++) {
//   document
//     .getElementsByClassName("like")
//     [j].addEventListener("click", showbentonLikeTimes);
// }
//內容物如下
//新增分享便當的圖片
// $("#showBentonImg img").addClass("shareBentonImg");
//新增分享便當的便貼區塊
// $("#showBentonImg div").addClass("shareBenton");
//新增按讚數
// $("#showBentonImg span").addClass("liketimes");

//   },
// });
//---------------------------------------按讚數
// $("#like_img").click(function () {
//   let like_num = $("#like_num").text();
//   let like_num1 = parseInt(like_num) + 1;
//   $("#like_num").text(like_num1);

// });

// function showbentonLikeTimes(e) {
// let like_num = $(".liketimes").text();
// let like_num1 = parseInt(like_num) + 1;
// $(".liketimes").text(like_num1);
// console.log("a");
//   console.log(parseInt(e.target.dataset.index));
//   document.getElementsByClassName("liketimes")[
//     parseInt(e.target.dataset.index)
//   ].innerText =
//     parseInt(
//       document.getElementsByClassName("liketimes")[
//         parseInt(e.target.dataset.index)
//       ].innerText
//     ) + 1;

let bentonWallVm = new Vue({
  el: "#bentonWall",
  data: {
    memData: {},
    bentonArray,
    talkArray,
    currentBenton: {},
    now: "",
    talkBlockMessage: "",
    addBentonmessPostId: "", //與後端串要變全域變數(產出messPostId)
    reportMessId: "", //與後端串要變全域變數(產出messId)
  },
  methods: {
    //按讚數
    addLikeTimes(notes, index) {
      notes.liketimes = notes.liketimes + 1;
    },
    //選取的便當
    openLightBox(note, index) {
      let talkContent = $("#content").val();
      let num = Number(index);
      $("#mainBuyBenton").css("display", "block");
      $(".showbentonCover").css("display", "block");
      $("body").css("overflow", "hidden");

      //加入購物車事件
      document
        .getElementById("buyMore")
        .addEventListener("click", showbentonShoppingCart);
      //留言要對應的發文編號
      this.addBentonmessPostId = this.bentonArray[num].postId;

      //showbentonContent---便當卡片發文內容
      $.ajax({
        type: "POST", //傳送方式
        url: "./php/showbentonContent.php", //傳送目的地 (之後統整要修改網址)
        dataType: "json", //資料格式
        data: {
          postId: this.bentonArray[num].postId,
        },
        success: function (data) {
          bentonWallVm.$data.currentBenton = {
            ...data[0],
            cls: "mainBenton" + index,
          };
        },
        error: function (jqXHR) {
          console.log(jqXHR, "error");
        },
      });

      //一開始就要顯示的留言區塊
      $.ajax({
        type: "POST",
        url: "./php/showbentonReadTalkBlock.php", //傳送目的地 (之後統整要修改網址)
        dataType: "json", //資料格式
        data: {
          talkmessage: talkContent,
          messPostId: this.addBentonmessPostId,
        },
        success: function (data) {
          bentonWallVm.$data.talkArray = data;
        },
        error: function (jqXHR) {
          console.log(jqXHR, "error");
        },
      });
    },

    //留言、發文時間
    talk() {
      let talkContent = $("#content").val();
      if (talkContent == "") {
        alert("請輸入留言內容!");
        return;
      }
      //連結後端，將留言者儲存後端並顯示
      $.ajax({
        type: "POST",
        url: "./php/showbentonTalkBlock.php", //傳送目的地 (之後統整要修改網址)
        dataType: "json", //資料格式
        data: {
          talkmessage: talkContent,
          messPostId: this.addBentonmessPostId,
        },
        success: function (data) {
          bentonWallVm.$data.talkArray = data;
        },
        error: function (jqXHR) {
          console.log(jqXHR, "error");
        },
      });
      //留言完清空
      this.talkBlockMessage = "";
    },

    showContentCloselightbox() {
      $(".showBentonContentbox").css("display", "none");
      $(".showbentonCover").css("display", "none");
      $("body").css("overflow", "auto");
      this.talkArray = [];
    },

    showCloselightbox() {
      $(".box1").css("display", "none");
      $(".showbentonCover").css("display", "none");
      $("body").css("overflow", "auto");
    },
    //按讚數
    change(e) {
      let num = Number(e.target.dataset.num);
      if (e.target.dataset.check == "0") {
        if (lastLikeTime !== "" && new Date() <= nextDay(lastLikeTime)) {
          alert("已經按讚過囉,需24小時後才可以再點讚!");
          return;
        }

        //加讚數
        $.ajax({
          type: "POST", //傳送方式
          url: "./php/showbentonLiketimes.php", //傳送目的地 (之後統整要修改網址)
          dataType: "json", //資料 格式
          data: {
            plus: "+",
            postId: this.bentonArray[num].postId,
          },
          success: function (data) {
            bentonWallVm.$data.bentonArray[num].liketimes = data[0].postLike;
            lastLikeTime = data[0].memLastVoteTime;
            e.target.src = "./images/showbenton/like1.png";
            e.target.dataset.check = "1";
            alert("感謝您投下神聖的一票!(每人一天可投一票)");
          },
          error: function (jqXHR) {
            console.log(jqXHR, "error");
          },
        });
      }
    },
    //檢舉
    reportBox(talks) {
      $(".reportBox").css("display", "block");
      $("body").css("overflow", "hidden");

      this.reportMessId = talks.messId;
    },

    reportBoxClose() {
      $(".reportBox").css("display", "none");
    },

    confirmRport() {
      $.ajax({
        type: "POST",
        url: "./php/showbentonReport.php", //傳送目的地 (之後統整要修改網址)
        dataType: "json", //資料格式
        data: {
          reportReason: $('input[name="reportMes"]:checked').val(),
          messId: this.reportMessId,
        },
        success: function (data) {
          console.log(data);
          alert("謝謝你提出檢舉，我們日後將會進行審查檢舉的內容。");
          $(".reportBox").css("display", "none");
        },
        error: function (jqXHR) {
          console.log(jqXHR, "error");
        },
      });
    },
  },
  mounted() {
    //一開始就要讀取的資料
    //bentonWall---分享便當圖、標題、讚數
    $.ajax({
      type: "GET", //傳送方式
      url: "./php/showbenton.php", //傳送目的地 (之後統整要修改網址)
      dataType: "json", //資料格式
      // data: {
      //   傳送資料，如有變數的時候才用
      //   content: $("#content").val(),
      // },
      success: function (data) {
        bentonWallVm.$data.bentonArray = data[0];
        if (data[1] != "") {
          lastLikeTime = data[1][0].memLastVoteTime;
        }
      },
      error: function (jqXHR) {
        console.log(jqXHR, "error");
      },
    });
  },
});

//加入購物車
function showbentonShoppingCart() {
  showbentonOrderList = {
    sNum: `${singleNum}`,
    rice: `${showrice}`,
    meat: `${showmeat}`,
    single1: `${showsingle1}`,
    single2: `${showsingle2}`,
    single3: `${showsingle3}`,
    soPrice: `${showTotalPrice}`,
  };
  singleNum++;
  localStorage.setItem("singleNum", singleNum);
  orderCart.push(showbentonOrderList);
  var showOrder = JSON.stringify(orderCart);
  localStorage.setItem("singleOrder", showOrder);
  setcart();
}

//發文、留言共用時間
function getNowFormat() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`;
}
//判斷下讚天數
function nextDay(lastDate) {
  var last = new Date(lastDate);
  return new Date(last.setDate(last.getDate() + 1));
}
