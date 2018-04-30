var num2=0;
var num1=1;
var img=$("#imgContent img");
var img_li=$("#imgContent li");
var max = img_li.length-1;

var d=new Date();
var month= d.getMonth()+1;
var year= d.getFullYear();
var day= d.getDate();
$(document).ready(function () {
    var current = 0, max = $("#mainSlide > ul > li").length - 1, width = $("#mainSlide > ul > li").width();

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
    $("#notice p").click(function () {
        $("#noticeContent").css("height","100");
        $("#noticeContent2").css("height","0");
        $("#notice p").css("color","#08298A");
        $("#notice2 p").css("color","black");
    })
    $("#notice2 p").click(function () {
        $("#noticeContent").css("height","0");
        $("#noticeContent2").css("height","100");
        $("#notice p").css("color","black");
        $("#notice2 p").css("color","#08298A");
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
    $("#month").html(year+"-"+month);
    $("#day").html(day);
    $("#day_right").click(function () {
        day++;
        var day_length=new Date(year, month, 0).getDate();
        if(day>day_length){
            month++;
            day=1;
            $("#month").html(year+"-"+month);
            if(month>12){
                year++;
                month=1;
                $("#month").html(year+"-"+month);
            }
        }
        $("#day").html(day);
    })
    $("#day_left").click(function () {
        day--;
        var day_length=new Date(year, month-1, 0).getDate();
        if(day<1){
            month--;
            day=day_length;
            $("#month").html(year+"-"+month);
            if(month<1){
                year--;
                month=12;
                $("#month").html(year+"-"+month);
            }
        }
        $("#day").html(day);
    })
    setInterval(function() { next(); },3000);
    setInterval(slide2,3000);
    setInterval(dote,3000);
})
function slide2() {
    $("#imgContent li").eq(num1).animate({right:-310},0);
    $("#imgContent li").eq(num1-1).animate({right:310},500);
    $("#imgContent li").eq(num1).animate({right:0},500);
    num1++;
    if(num1>=3){
        num1=0;
    }
}
function dote() {
    $(".dote").eq(num1).css({"background-color":"#08298A"})
    $(".dote").eq(num1-1).css({"background-color":"black"})
}
