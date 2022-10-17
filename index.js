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
  var btn = document.querySelectorAll(".btn");
  var use = document.querySelectorAll(".use");
  var pas = document.querySelectorAll(".pas");

  btn[0].addEventListener("click", function (e) {
    if (use[0].value == "yq" && pas[0].value == "yq") {
      e.preventDefault();
      location.assign("login.html");
    }
  });

  // 可视化密码
  var fonts = document.querySelectorAll(".font");
  var ctact = document.querySelectorAll(".form-control .pas");

  fonts.forEach(function (font) {
    font.addEventListener('click', function () {
      font.parentElement.classList.toggle('active')
      if (font.parentElement.classList == 'form-control active') {
        font.parentElement.children[0].setAttribute('type', 'text')
      } else {
        font.parentElement.children[0].setAttribute('type', 'password')
      }
    })
  })

  // 注册密码
  var zcmm = document.querySelectorAll('.container-register .form-control')
  btn[1].addEventListener('click', () => {
    if (zcmm[1].children[0].value != zcmm[2].children[0].value) {
      alert('密码不一样')
    }
  })
});

