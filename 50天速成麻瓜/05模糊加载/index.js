window.addEventListener("load", () => {
  var bg = document.querySelector(".gb");
  var text = document.querySelector(".text");
  var flag = 0;
  var scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  var timer = setInterval(() => {
    if (flag >= 99) {
      clearInterval(timer);
    }
    flag++;
    text.innerHTML = `${flag}%`;
    text.style.opacity = scale(flag, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(flag, 0, 100, 20, 0)}px)`;
  }, 30);
});
