window.addEventListener('load', () => {
  // 文字依此弹出
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

  $('form').submit((e) => {
    e.preventDefault()
    if (use[0].value == "yq" && pas[0].value == "yq") {
      location.assign("index.html");
    }
    else {
      use[0].value = ''
      pas[0].value = ''
    }
  })

  // 可视化密码
  var fonts = document.querySelectorAll(".font");
  var ctact = document.querySelectorAll(".form-control .pas");

  fonts.forEach(function (font) {
    font.addEventListener('click', function () {
      font.parentElement.classList.toggle('active')
      if (font.parentElement.classList == 'form-control active') {
        font.parentElement.children[0].setAttribute('type', 'password')
      } else {
        font.parentElement.children[0].setAttribute('type', 'text')
      }
    })
  })

  // 注册密码
  var zcmm = document.querySelectorAll('.container-register .form-control')
  btn[1].addEventListener('click', () => {
    if (zcmm[1].children[0].value != zcmm[2].children[0].value) {
      for (var i = 1; i <= 2; i++) {
        zcmm[i].children[0].value = '密码不一致'
        zcmm[i].classList.add('active')
        zcmm[i].children[0].setAttribute('type', 'text')
      }

    }
  })
  // 密码一致清除
  for (var i = 1; i <= 2; i++) {
    zcmm[i].children[0].addEventListener('click', function () {
      if (this.value == '密码不一致') {
        for (var i = 1; i <= 2; i++) {
          zcmm[i].children[0].value = ''
          zcmm[i].children[0].setAttribute('type', 'password')
          zcmm[i].classList.toggle('active')
        }
      }
    })
  }

  $(() => {
    $('.zc').eq(0).children('a').click(function () {
      $('.container').css('transform', 'translateY(-2500px)')
      $('.container-register').show().css('transform', `translateY(0px)`)
    })
    $('.zc').eq(1).children('a').click(() => {
      $('.container').css('transform', 'translateY(0px)')
      $('.container-register').show().css('transform', `translateY(-2500px)`)
    })
  });
})