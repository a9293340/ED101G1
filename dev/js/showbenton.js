let talkArray = [];
let bentonArray = [];
let benton = [
  {
    id: "1",
    name: "炸雞腿",
    img: "./images/order/chicken.jpg",
  },
  {
    id: "2",
    name: "滷排骨",
    img: "./images/order/pork.jpg",
  },
  {
    id: "3",
    name: "清蒸鱈魚",
    img: "./images/order/fish.jpg",
  },
  {
    id: "4",
    name: "清蒸鱈魚",
    img: "./images/order/fish.jpg",
  },
  {
    id: "5",
    name: "清蒸鱈魚",
    img: "./images/order/fish.jpg",
  },
];

//---------------------------------------lightbox
new Vue({
  el: "#addBenton", //el:document.getElementById('app');
  data: {},
  methods: {
    showBentonList() {
      $(".box1").css("display", "block");
    },
  },
});

//--------------假設從JSON撈出的資料
new Vue({
  el: "#lightbox", //el:document.getElementById('app');
  data: {
    benton,
    bentonArray,
    showBentonImgList: true,
    isClose: true,
    img: "", //初始值字串給空的
    message: "",
    messageContent: "",
  },
  methods: {
    showChooseBenton(item) {
      $(".bentonCard").css("border-color", "white");
      $(`#bentonLi${item.id}`).css("border-color", "rgb(231, 70, 21)");
      this.img = item.img; //變成全域變數
    },
    //輸入標題字數限制
    checkTitle() {
      let maxLength = 10;
      let textLength = this.message.length;
      if (textLength > maxLength) {
        this.message = this.message.substr(0, 10);
        alert("已超過輸入字數限制囉!");
      }
    },

    //輸入內容字數限制
    checkContent() {
      let maxLength = 50;
      let textLength = this.messageContent.length;
      if (textLength > maxLength) {
        this.messageContent = this.messageContent.substr(0, 50);
        alert("已超過輸入字數限制囉!");
      }
    },

    showBentonStep1(isShow) {
      this.showBentonImgList = isShow;
    },
    showCloselightbox() {
      $(".box1").css("display", "none");
    },
    SendBenton() {
      let step2Title = $("#Step2TitlText").val();
      let step2Content = $("#Step2ContentText").val();

      //要先變成物件
      let step2Package = {
        title: step2Title,
        content: step2Content,
        bentonImg: this.img,
        liketimes: 0,
      };

      //物件塞進陣列
      this.bentonArray.push(step2Package);
      $(".box1").css("display", "none");
      this.showBentonImgList = true;
    },

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
  },
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
});

$(function () {
  new Vue({
    el: "#bentonWall",
    data: {
      memData: {},
      bentonArray,
      talkArray,
      currentBenton: {},
      now: "",
    },
    methods: {
      //按讚數
      addLikeTimes(notes, index) {
        notes.liketimes = notes.liketimes + 1;
      },
      //選取的便當
      openLightBox(note, index) {
        this.currentBenton = { ...note, cls: "mainBenton" + index };
        $("#mainBuyBenton").css("display", "block");
      },
      //討論區
      talk() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let talkContent = $("#content").val();

        //要先變成物件
        let talkPackage = {
          talkmessage: talkContent,
          dateTime: `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`,
        };

        //物件塞進陣列
        this.talkArray.push(talkPackage);
      },
    },
    mounted() {
      // ajax memData
      //FROM DB
      $.getJSON("../dev/js/modules/memData.json").then((data) => {
        this.memData = data;
      });
    },
  });
});
