var num2=0;
var num1=1;
var img=$("#imgContent img");
var img_li=$("#imgContent li");
var max = img_li.length-1;
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
    $("#notice a").click(function () {
        $("#noticeContent").css("height","100");
        $("#noticeContent2").css("height","0");
        $("#notice a").css("color","#08298A");
        $("#notice2 a").css("color","black");
    })
    $("#notice2 a").click(function () {
        $("#noticeContent").css("height","0");
        $("#noticeContent2").css("height","100");
        $("#notice a").css("color","black");
        $("#notice2 a").css("color","#08298A");
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
    setInterval(function() { next(); },3000);
    setInterval(slide2,3000);
    setInterval(dote,3000);
})
function slide2() {
    $("#imgContent li").eq(num1).animate({left:-310},0);
    $("#imgContent li").eq(num1-1).animate({left:310},500);
    $("#imgContent li").eq(num1).animate({left:0},500);
    num1++;
    if(num1>=3){
        num1=0;
    }
}
function dote() {
    $(".dote").eq(num1).css({"background-color":"#08298A"})
    $(".dote").eq(num1-1).css({"background-color":"black"})
}