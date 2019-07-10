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
    $(".end").click(function () {
        window.location = "task-2.html";
    });
    $(".judge-book").click(function () {
        window.location = "judge.html";
    });


    for (var i = 0; i < playDay; i++) {
        console.log(playDay);
        // var   newDay="day-"+i;
        $("main").append(`
    <div class="main-one-day">
        <div class="date">第${i + 1}天</div>
        <div class="process">
            <div class="vote">
                <div class="line">
                    <div class="icon-box"><p></p><img class="moonIcon" src="img/moon.png"/><p></p></div>
                    <div class="line-text" ><div class="subtitle" id="kill"><div class="icon" ></div>杀手杀人</div></div>
                </div>
                <div class="line">
                    <div class="icon-box"><p></p><img class="sunIcon" src="img/sun.png"/><p></p></div>
                    <div class="line-text" ><div class="subtitle" id="lastWords"><div class="icon" ></div>亡灵发表遗言</div></div>
                </div>

                <div class="line">
                    <div class="icon-box"><p></p></div>
                  <div class="line-text" ><div class="subtitle" id="statement"><div class="icon" ></div>玩家依次发言</div></div>
                </div>
                <div class="line">
                    <div class="icon-box"><p></p></div>
                  <div class="line-text" ><div class="subtitle" id="vote" ><div class="icon" ></div>全民投票</div></div>
                </div>
            </div>
        </div>
    </div>
`);
    //     if (arr[i].live === "dead") {
    //         if (playProcess === 1) {
    //             $(".vote").children("#kill").append(`<div>${arr[i]}号被杀手杀死，真实身份是${arr[i].role}</div>`)
    //         } else {
    //             $(".vote").children("#vote").append(`<div>${arr[i]}号被玩家投死，真实身份是${arr[i].role}</div>`)
    //
    //         }
    //     }
    // }
    // for (i = 0; i < arr.length; i++) {


    // }





//插入亡灵
    for (i = 0; i < arr.length; i++) {
        if (arr[i].live === "dead") {//找出死亡的玩家
            console.log(i);
            console.log(arr[i].day);
            console.log(plyProcess);//1.5%1
            // console.log(arr[i].day % 1);
            if (playProcess === 1) {//判断为杀手杀死的arr[i].day % 1
                var pastDay = playDay;//parseInt(arr[i].day);//判断是哪天杀死的
                console.log(pastDay);
                var pastDayBoxClass = "day-" + pastDay;//放入到对应的天数页面下
                $("." + pastDayBoxClass).children(".line").children('#kill').append(`<div class=".kill-dead">
    <div class="time-icon">
    <p></p>
    <p></p>
    </div>
    <p class="dead-tip" ><span class="dead-num">${arr[i].num}</span>号被杀手杀人，真是身份是<span class="deader-role">${arr[i].role}</span></p>
   </div>`)
            } else {
                console.log(arr[i].day);
                console.log(playProcess);
                // console.log((arr[i].day % 1).toFixed(1));//(arr[i].day % 1).toFixed(1)
                if (playProcess === "4") {//判断为全民投票杀死的//知识点四js浮点型计算
                    pastDay =playDay;// parseInt(arr[i].day);//判断是哪天杀死的
                    console.log(pastDay);
                    pastDayBoxClass = "day-" + pastDay;//放入到对应的天数页面下
                    $("." + pastDayBoxClass).children(".line").children('#vote').append(`<div class=".vote-dead">
    <div class="time-icon">
    <p></p>
    <p></p>
    </div>
    <p class="deader-tip" ><span class="deader-num">${arr[i].num}</span>号被投票杀死，真实身份是<span class="deader-role">${arr[i].role}</span></p>
   </div>`);
                }
            }
        }
   }

//顺序点击

//防止点击刷新后失效。(自动生效)
    if ( playNow > playDay){
        console.log("此时游戏时刻为"+playNow);
        $("#kill").css("opacity", "0.5");
        $("#kill").siblings("span").css("opacity", "0.5");
    }
    if ( playNow > playDay+ 1){
        $("#lastWords").css("opacity", "0.5");
        $("#lastWords").siblings("span").css("opacity", "0.5");
    }
    if ( playNow > playDay+ 2){
        $("#statement").css("opacity", "0.5");
        $("#statement").siblings("span").css("opacity", "0.5");
    }

//点击跳转杀人
    $('#kill').click(function () {
        if (playProcess === 0) {
            window.location.href = "kill.html";
            playProcess= 1;
            console.log("此时游戏进程为"+playProcess);
            sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
            playNow=playDay+playProcess;
            console.log("此时游戏时刻为"+playNow);
            sessionStorage.setItem("playNow", JSON.stringify(playNow));
        }
        else {
            alert("请按顺序点击");
        }
    });
//点击提示死者发言，并变色，再点击出现提示
    $("#lastWords").click(function () {
        if (playProcess === 1){
            alert("请死者亮明身份并且发表遗言");
            $(this).css("opacity", "0.5");
            $(this).siblings("span").css("opacity", "0.5");
            playProcess= 2;
            console.log("此时游戏进程为"+playProcess);
            sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
            playNow=playDay+playProcess;
            console.log("此时游戏时刻为"+playNow);
            sessionStorage.setItem("playNow", JSON.stringify(playNow));
        }
        else {
            alert("请按顺序点击");
        }
    });
//点击提示玩家发言，并变色，再点击出现提示
    $("#statement").click(function () {
        if (playProcess === 2 ){
            alert("玩家依次发言讨论");
            $(this).css("opacity", "0.5");
            $(this).siblings("span").css("opacity", "0.5");
            playProcess= 3;
            console.log("此时游戏进程为"+playProcess);
            sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
            playNow=playDay+playProcess;
            console.log("此时游戏时刻为"+playNow);
            sessionStorage.setItem("playNow", JSON.stringify(playNow));
        }
        else {
            alert("请按顺序点击");
        }
    });
//点击跳转投票
    $("#vote").click(function () {
        if (playProcess === 3){
            window.location.href = "kill.html";
            playProcess=4;
            console.log("此时游戏进程为"+playProcess);
            sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
            playNow=playDay+playProcess;
            console.log("此时游戏时刻为"+playNow);
            sessionStorage.setItem("playNow", JSON.stringify(playNow));
        }
        else {
            alert("请按顺序点击");
        }
    });

//点击标题，内容隐藏
    $(".date").click(function (){
            if ($(this).siblings().css("display") === "block") {
                $(this).siblings().css("display", "none");}
            else {
                $(this).siblings().css("display", "block");}
        }
    );
//过去的自动判断，不可点击
    for (i=1;i<playDay;i++) {
        console.log(playDay);
        let pastDay="day-"+i;
        console.log(pastDay);
        $("." + pastDay).children(".vote").css({"opacity": "0.5", "display": "none"}).off('click');//变色
       $("." + pastDay).children(".vote").children("line").off('click');//禁点
        }//.children()
    }




    //
    // $(".date").find("img").css("height","1rem");


    setTimeout(function(){$(".date").find("img").css("height","0.9rem");},100);



});
