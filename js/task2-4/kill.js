'use strict';
let arr =JSON.parse(sessionStorage.getItem("playArray"));//获得储存值

//得到天数，进程、时刻数值
var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);

$(document).ready(function () {
    var n;
    for (n = 0; n < arr.length; n++) {
        let html = (`
                <div class="look-box ${arr[n].live}">
                <div class="identBox">${arr[n].role}</div>
                <div class="numBox">${n + 1}号</div>
                <img  class="icon" src="img/qull-pen.png" alt="">
                </div>`);
        $("main").append(html);
        console.log(n);
    }
    $(".icon").hide();
    $(".look-box").click(function () {
        $(this).children(".icon").css("display","block");
        $(this).css("opacity",".5");
        var dead = $(this).click.live;
        $(this).siblings("survival").css("opacity","1");
        $(this).siblings("").children("img").css("opacity","1");



    });

    $(".f-btn").click(function () {
        window.location.assign("task-04.html");
    });
    $(".back").click(function () {
        window.location.assign("task-2.html");
    });

});