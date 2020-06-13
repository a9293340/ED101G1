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
  },
  methods: {
    chooseBenton(item) {
      $(".bentonCard").css("border-color", "white");
      $(`#bentonLi${item.id}`).css("border-color", "blue");
    },
    showBentonStep1(isShow) {
      this.showBentonImgList = isShow;
    },
  },
});
//---------------------------------------按讚數
// $("#like_img").click(function () {
//   let like_num = $("#like_num").text();
//   let like_num1 = parseInt(like_num) + 1;
//   $("#like_num").text(like_num1);
// });
