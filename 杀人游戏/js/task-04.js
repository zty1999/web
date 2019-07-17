'use strict';


let arr  = JSON.parse(localStorage.getItem("playArray"));
console.log(arr);

//得到天数，进程、时刻数值
var playDay = JSON.parse(localStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(localStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(localStorage.getItem("playNow"));
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
    $(".end").click(function () {
        window.location = "task-2.html";
    });
    $(".judge-book").click(function () {
        window.location = "judge.html";
    });
   $("#kill").click(function () {
        window.location = "kill.html";
        playProcess = 1;
        console.log(playProcess);
    });

   $("#lastWords").click(function () {
       if (playProcess === 1) {
           alert("请死者发言");
           playProcess = 2;
           console.log(playProcess);
       }
       else {
           alert('请按顺序发言');
       }

   });
   $("#statement").click(function () {
       if(playProcess === 2) {
           alert("请玩家发言");
           playProcess = 3;
           console.log(playProcess);
       }
       else {
           alert("请按顺序发言");
       }

   });
   $("#vote").click(function () {
       if(playProcess === 3) {
           window.location.assign("vote.html");
           playProcess = 4;
           console.log(playProcess);
       }
       else {
           alert("请按顺序发言");
       }

   });


});
