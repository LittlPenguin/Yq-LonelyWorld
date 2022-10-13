window.addEventListener("load", () => {
  var boxs = document.querySelectorAll(".box");
  var box1 = boxs[0];
  var box2 = boxs[1];
  var box3 = boxs[2];
  var h4 = document.querySelector("h4");
  var sun = document.querySelector(".container");
  document.addEventListener("keyup", (e) => {
    h4.style.display = "none";
    sun.style.display = "block";
    box1.innerHTML = e.key;
    box2.innerHTML = e.keyCode;
    box3.innerHTML = e.code;
  });
});
