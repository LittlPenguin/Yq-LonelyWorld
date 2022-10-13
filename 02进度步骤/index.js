window.addEventListener("load", () => {
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var progress = document.querySelector(".progress");
  var circle = document.querySelectorAll(".circle");
  var index = 0;
  var btn = document.querySelectorAll("button");

  btn.forEach((bottn) => {
    bottn.addEventListener("mouseenter", () => {
      bottn.style.transform = "rotate3d(0, 1, 0, 360deg)";
    });
    bottn.addEventListener("mouseleave", () => {
      bottn.style.transform = "rotate3d(0, 1, 0, 0deg)";
    });
  });

  left.addEventListener("click", () => {
    if (index <= 0) {
      index = 0;
    } else {
      index--;
    }
    circle[index + 1].style.borderColor = "#ccc";
    progress.style.width = index * 33.33 + "%";
  });
  right.addEventListener("click", () => {
    if (index >= 3) {
      index = 3;
    } else {
      index++;
    }
    progress.style.width = index * 33.33 + "%";
    circle[index].style.borderColor = "paleturquoise";
  });
});
