num=0;
fornum=0;
$(document).ready(function () {
    var current = 0, max = $("#mainSlide > ul > li").length - 1, width = $("#mainSlide > ul > li").width();
    console.log(max);

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
    function next() {
        if(current!=max) {
            current++;
            slide(current);
        }else if(current==max){
            current = 0;
            slide(current);
        }
    }
    function slide(idx) {
        $("#mainSlide > ul ").animate({"margin-left" : -width * idx});
    }
    setInterval(function() { next(); },2000);
})