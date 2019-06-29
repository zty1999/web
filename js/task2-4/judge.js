'use strict';

var arr =JSON.parse(sessionStorage.getItem("shuffleArr"));//获得储存值
var g =JSON.parse(sessionStorage.getItem("z"));//获得幽灵词组储存值
var d =JSON.parse(sessionStorage.getItem("y"));//获得平民词组储存值
console.log(arr);//打印arr的值
console.log(g);
console.log(d);
var i ;



$(document).ready(function () {
    $(".back").click(function () {
        if(window.confirm('确定返回查看身份页面吗?')) {
            window.location.assign("task-002.html");
        }
        else {
            return false;
        }
    });

    $(".close").click(function () {
        if(window.confirm("确定退出游戏吗?")) {
        window.location.assign("task-2.html");
        }
        else {
            return false;
        }
    });

    $("#begin").click(function () {
        window.location="task-04.html";
    });



    for (i=0;i<arr.length;i++ ) {
       let html = (`<div class="look-box">
                <div class="identBox">${arr[i]}</div>
                <div class="numBox">${i+1}号</div>
            </div>`);
        $("main").append(html);
        console.log(i);
    }


});

var playArray = [];//建立新数组
for (i = 0; i < arr.length; i++) {
    playArray.push({role:arr[i],day: 1,live:"survival",number: i+1})//.push()为数组添加内容。{}代表对象，{}里的是对象的属性和属性值，用逗号隔开。向数组中添加此页面中的人数身份数据arr[i],
}
console.log(playArray);
sessionStorage.setItem("playArray",JSON.stringify(playArray));//存值至浏览器
var playDay = 1;//设置初始游戏天数为1
console.log(playDay);
sessionStorage.setItem("playDay",JSON.stringify(playDay));
var playProcess = 0;//设置初始游戏进度为0
console.log(playProcess);
sessionStorage.setItem("playProcess",JSON.stringify(playProcess));
var playNow = (playDay+playProcess);//设置游戏时刻
console.log(playNow);
sessionStorage.setItem("playNow",JSON.stringify(playNow));