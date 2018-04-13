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
    /*setInterval(slide());*/
})
function slide() {
    $("#mainSlide img").eq(num).animate(function () {
        left: "+=1000"
    })
    $("#mainSlide img").eq(num-1).animate(function () {
        left: "-=1000"
    })
    $("#mainSlide img").eq(num).animate(function () {
        left: "0"
    })
}
