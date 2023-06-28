$(() => {
    window.addEventListener('load', () => {
        var dqgd = 0
        var jdqgd = 0
        $(window).scroll(() => {
            dqgd = $(document).scrollTop();
        })
        // search
        $('.interact-search').click(() => {
            jdqgd = dqgd
            $('body,html').stop().scrollTop(1874)
            $('body').css('overflow', 'hidden')
            $('.search').fadeIn(200)
        })
        $('.icon-power').click((e) => {
            $('.header').stop().slideDown(500).addClass('headerxxhd')
            $('body,html').stop().scrollTop(jdqgd)
            $('.search').fadeOut(0)
            $('body').css('overflow', 'unset')
        })
        $('.searchk').focus(() => {
            $(document).keyup((e) => {
                if (e.keyCode == 13) {
                    $('.icon-point-left').click()
                }
            })
        })
        $('.icon-point-left').click(function () {
            var searchss = $(this).siblings('input').val();
            if ($(this).siblings('input').val().length !== 0) {
                location.assign('https://www.baidu.com/s?wd=' + searchss)
            }
        })

        // 太阳月亮（黑暗模式）
        $('.interact-time').click(function () {
            $('.icon-sun1').stop().fadeToggle(0)
            $('.icon-moon').stop().fadeToggle(0)
            $('.qjzdc').toggleClass('qd')
        })

        // banner切图
        bannerxg()
        function bannerxg() {
            var bnindex = 0
            setInterval(function () {
                $('.banner').find('li').eq(bnindex).stop().fadeOut(1000)
                if (bnindex >= $('.banner').find('li').length - 1) {
                    bnindex = 0
                } else {
                    bnindex++
                }
                $('.banner').find('li').eq(bnindex).stop().fadeIn(1000)
            }, 5000)
        }

        // banner文字
        $('body').css('overflow', 'hidden')
        arr = $('.banner-bt').text().split('');
        $('.banner-bt').text('')
        var bannerwz = 0
        var setbannerwztime = setInterval(() => {
            if (bannerwz >= arr.length - 1) {
                clearInterval(setbannerwztime)
                $('.bannertzxyy').stop().fadeIn(500)
                $('body').css('overflow', 'unset')
                btgdhs()
            }
            $('.banner-bt').text($('.banner-bt').text() + arr[bannerwz])
            bannerwz++
        }, 100)

        // header
        // 页面滚动弹出框
        if ($(document).scrollTop() >= 936) {
            $('.header').stop().slideDown(500).addClass('headerxxhd')
            $('.articleleft').css('transform', 'translateY(0px)').css('opacity', 1)
            $('body,html').stop().animate({ scrollTop: 0 }, 0)
        } else {
            $('.header').stop().slideDown(500).removeClass('headerxxhd')
        }
        function btgdhs() {
            document.addEventListener('mousewheel', (e) => {
                if (e.wheelDelta > 0) {
                    if ($(document).scrollTop() <= 1084) {
                        $('body,html').stop().animate({ scrollTop: 0 }, 200)
                        $('.header').stop().slideDown(500).removeClass('headerxxhd')
                    } else { $('.header').stop().slideDown(500).addClass('headerxxhd') }
                } else {
                    $('.header').stop().slideUp(500, () => { $('.header').removeClass('headerxxhd') })
                    if ($(document).scrollTop() <= 200) {
                        $('body,html').stop().animate({ scrollTop: 937 }, 200)
                        $('.articleleft').css('transform', 'translateY(0px)').css('opacity', 1)
                    }
                }
            })
        }

        // 首页通往按钮
        $('.bannertzxyy').click(() => {
            $('body,html').animate({ scrollTop: 937 }, 200)
        })
        // article
    })
})
