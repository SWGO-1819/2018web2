num=1;
$(document).ready(function () {
    $("#login").click(function () {
        $("#loginPage").fadeIn('fast');
        $("#mask").fadeIn('fast');
    })
    $("#sign_up").click(function () {
        $("#sign_upPage").fadeIn('fast');
        $("#mask").fadeIn('fast');
    })
    $(".exit").click(function(){
        $("#loginPage").fadeOut('fast');
        $("#sign_upPage").fadeOut('fast');
        $("#mask").fadeOut('fast');
    })
    $("#notice").click(function () {
        $("#noticeContent").css("height","100");
        $("#noticeContent2").css("height","0");
    })
    $("#notice2").click(function () {
        $("#noticeContent").css("height","0");
        $("#noticeContent2").css("height","100");
    })
    setInterval(slide,2000);
})
function slide() {
    $("#mainSlide li").eq(num).animate({left: -1000}, 600)
    $("#mainSlide li").eq(num - 1).animate({left: 1000}, 600)
    $("#mainSlide li").eq(num).animate({left: 0}, 600)
}

