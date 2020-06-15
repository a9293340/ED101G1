//---------------------------------------lightbox1
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
    benton: [
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
    ],
    showBentonImgList: true,
    isClose: true,
    img: "", //初始值字串給空的
    bentonArray: [],
  },
  methods: {
    chooseBenton(item) {
      $(".bentonCard").css("border-color", "white");
      $(`#bentonLi${item.id}`).css("border-color", "rgb(231, 70, 21)");
      this.img = item.img; //變成全域變數
    },
    showBentonStep1(isShow) {
      this.showBentonImgList = isShow;
    },
    closelightbox() {
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
      };
      this.bentonArray.push(step2Package);
      $(".box1").css("display", "none");
      this.showBentonImgList = true;

      for (let i = 0; i < this.bentonArray.length; i++) {
        let arrBentonImg = this.bentonArray[i].bentonImg; //arr圖片
        let arrBentonTitle = this.bentonArray[i].title; //arr標題
        let arrBentonContent = this.bentonArray[i].content; //arr內文
        $("#showBentonImg").append(
          `<div><img src='${arrBentonImg}'/><p>${arrBentonTitle}</p><p>${arrBentonContent}</p></div>`
        );
        //新增分享便當的圖片
        $("#showBentonImg img").addClass("shareBentonImg");
        //新增分享便當的便貼
        $("#showBentonImg div").addClass("shareBenton");
      }
    },
  },
});
//---------------------------------------按讚數
// $("#like_img").click(function () {
//   let like_num = $("#like_num").text();
//   let like_num1 = parseInt(like_num) + 1;
//   $("#like_num").text(like_num1);
// });
