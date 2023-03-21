$(document).ready(function () {
    $(".bunga .bg").addClass("muncul")
    $(".bunga img").removeClass("top-100")
    $(".bunga img").addClass("top-50")
    $("#home h2").addClass("muncul")
    $("#text").css({
        'animation': 'muncul 3s ease',
        'opacity': '100%'
    })
    $(".img-scele-top").addClass("muncul")
    $(".img-scele-bottom").addClass("muncul")
})
$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    console.log(wScroll)
    // Section Mempelai----------------
    if(wScroll > 600){
        // salam
        $("#mempelai .salam").addClass("muncul")
        //tulisan
        $("#mempelai .tulisan").addClass("muncul")
        //foto mempelai
        $("#mempelai .foto-pria").addClass("muncul")
        $("#mempelai .foto-wanita").addClass("muncul")
        // Nama Mempelai Pria
        // $("#mempelai .nama-mempelai-pria").css({
        //     'animation' : 'munculSalam 1.5s ease-in-out',
        // })
        $("#mempelai .nama-mempelai-pria").addClass("muncul")
        // Nama Mempelai wanita
        // $("#mempelai .nama-mempelai-wanita").css({
        //     'animation' : 'munculSalam 1.5s ease-in-out',
        // })
        $("#mempelai .nama-mempelai-wanita").addClass("muncul")
        //Ortu Memepelai
        $("#mempelai .ortu-mempelai-pria").addClass("muncul")
        $("#mempelai .ortu-mempelai-wanita").addClass("muncul")
        //Love
        $("#mempelai .love").css({
            'animation' : 'munculSalam 1.5s ease-in-out',
        })
        $("#mempelai .love").addClass("muncul")


    }
})