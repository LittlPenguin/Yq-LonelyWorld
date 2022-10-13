var boxs = document.querySelectorAll(".box");

//排他思想（箭头函数）
// 箭头函数不能有this，不能做到像普通函数一样调用函数
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    Removename();
    box.classList.add("boxp");
  });
});
function Removename() {
  boxs.forEach((box) => {
    box.classList.remove("boxp");
  });
}

//排他思想（普通函数）
// for (var i = 0; i < boxs.length; i++) {
//   boxs[i].addEventListener("click", function () {
//     for (var i = 0; i < boxs.length; i++) {
//       boxs[i].classList.remove("boxp");
//     }
//     this.classList.add("boxp");
//   });
// }
