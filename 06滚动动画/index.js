window.addEventListener("load", () => {
  var boxs = document.querySelectorAll(".box");
  // 页面滚动调用函数
  window.addEventListener("scroll", gdhs);
  gdhs();

  function gdhs() {
    var jldb = (window.innerHeight / 5) * 4; //设置页面视口一部分区域为显示区域
    boxs.forEach((box) => {
      var boxtop = box.getBoundingClientRect().top; //获得每个盒子距离页面视口顶端的距离
      //   当距离在显示区域内则让盒子显示
      if (boxtop < jldb) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
