window.addEventListener("load", () => {
  var labels = document.querySelectorAll(".form-control label");
  labels.forEach((label) => {
    label.innerHTML = label.innerHTML
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });

  //   文字焦点
  var spans = document.querySelectorAll(".form-control label span");
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      span.parentNode.parentNode.childNodes[1].focus();
    });
  });

  //账号密码验证
  var btn = document.querySelector(".btn");
  var use = document.querySelector(".use");
  var pas = document.querySelector(".pas");

  btn.addEventListener("click", function (e) {
    if (use.value == "yq" && pas.value == "yq") {
      e.preventDefault();
      location.assign("login.html");
    }
  });

  // 可视化密码
  var font = document.querySelector(".font");
  var ctact = document.querySelectorAll(".form-control")[1];
  var pasbtn = true;
  font.addEventListener("click", () => {
    ctact.classList.toggle("active");
    if (pasbtn) {
      pasbtn = false;
      pas.setAttribute("type", "text");
    } else {
      pasbtn = true;
      pas.setAttribute("type", "password");
    }
  });
});
