window.addEventListener('load', function () {
    var left = document.querySelector('.left-arrow')
    var right = document.querySelector('.right-arrow')
    var body = document.body
    var slides = document.querySelectorAll('.slide')

    var indx = 0
    setbdb()
    right.addEventListener('click', () => {
        indx++
        if (indx >= slides.length) {
            indx = 0
        }
        setbdb()
        setmib()
    })
    left.addEventListener('click', () => {
        indx--
        if (indx < 0) {
            indx = slides.length-1
        }
        setbdb()
        setmib()
    })

    function setbdb() {
        body.style.backgroundImage = slides[indx].style.backgroundImage
    }

    function setmib() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
            slides[indx].classList.add('active')
        })
    }
})