'use strict';


let arr  = JSON.parse(sessionStorage.getItem("playArray"));
console.log(arr);

//得到天数，进程、时刻数值
var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);




$(document).ready(function () {
    $(".back").click(function () {
        if (window.confirm('确定返回重新开始游戏吗?')) {
            window.location.assign("task-2.html");
        } else {
            return false;
        }
    });
    $(".close").click(function () {
        if (window.confirm("确定退出游戏吗?")) {
            window.location.assign("task-2.html");
        } else {
            return false;
        }
    });
    $(".judge-book").click(function () {
        window.location = "task-2.html";
    });
    $(".begin").click(function () {
        window.location = "judge.html";
    });
   $("#kill").click(function () {
        window.location = "kill.html";
    });



















});
