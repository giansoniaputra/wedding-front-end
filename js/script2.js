
$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    console.log(wScroll)
    if(wScroll > 400){
        $("#salam").css({
            'animation': 'scale 1s ease-in-out',
            'opacity': '100%'
        })
        $("#pembukaan").css({
            'animation': 'topToBottom 1s ease-in-out',
            'opacity': '100%'
        })
        $("#img-pria").css({
            'animation': 'leftToRight 1s ease-in-out',
            'opacity': '100%'
        })
        $("#img-wanita").css({
            'animation': 'rightToLeft 1s ease-in-out',
            'opacity': '100%'
        })
        $("#img-love").css({
            'animation': 'scale 1s ease-in-out',
            'opacity': '100%'
        })
        $("#nama-pria").css({
            'animation': 'scale 1s ease-in-out',
            'opacity': '100%'
        })
        $("#nama-wanita").css({
            'animation': 'scale 1s ease-in-out',
            'opacity': '100%'
        })
        $("#ortu-pria").css({
            'animation': 'leftToRight 1s ease-in-out',
            'opacity': '100%'
        })
        $("#ortu-wanita").css({
            'animation': 'rightToLeft 1s ease-in-out',
            'opacity': '100%'
        })
    }
})

