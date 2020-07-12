$(function () {
  /* 按下GoTop按鈕時的事件 */
  $("#myBtn").click(function gotop() {
    $("html,body").animate({ scrollTop: 0 }, "fast"); /* 返回到最頂上 */
    return false;
  });

  /* 偵測卷軸滑動時，往下滑超過100px就讓GoTop按鈕出現 */
  $(window).scroll(function gotop() {
    if ($(this).scrollTop() > 100) {
      $("#myBtn").fadeIn();
    } else {
      $("#myBtn").fadeOut();
    }
  });
});
