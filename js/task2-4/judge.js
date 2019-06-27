'use strict';

var arr =JSON.parse(sessionStorage.getItem("shuffleArr"));//获得储存值
var g =JSON.parse(sessionStorage.getItem("z"));//获得幽灵词组储存值
var d =JSON.parse(sessionStorage.getItem("y"));//获得平民词组储存值
console.log(arr);//打印arr的值
console.log(g);
console.log(d);
var i ;

function back() {
    if(window.confirm('确定返回查看身份页面吗?')) {
        window.location.assign("task-002.html");
    }
    else {
        return false;
    }
}

function close() {
    if(window.confirm("确定退出游戏吗?")) {
        window.location.assign("task-2.html");
    }
    else {
        return false;
    }
}
$(document).ready(function () {



    for (i=0;i<arr.length;i++ ) {
       let html = (`<div class="look-box">
                <div class="identBox">${arr[i]}</div>
                <div class="numBox">${i+1}号</div>
            </div>`);
        $("main").append(html);
        console.log(i);


    }


});