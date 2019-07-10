// 'use strict';
let arr =JSON.parse(sessionStorage.getItem("playArray"));//获得储存值
console.log(arr);
//得到天数，进程、时刻数值
var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
console.log(typeof(playDay));
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);

$(document).ready(function () {

    // 上方按钮
    $(function () {
        $(".back").click(function () {
            window.location.assign("task-2.html");
        });
        $(".close").click(function () {
            window.location.assign("task-2.html");
        });
    });

    //生成与数组对象相等的盒子
    function test() {
        for ( var n = 0; n < arr.length; n++) {
            $("main").append(`<div class="look-box ${arr[n].live}">
                <div class="identBox">${arr[n].role}</div>
                <div class="numBox">${n + 1}号</div>
                <img  class="icon" src="img/qull-pen.png" alt="">
                </div>`);
            console.log(n);
        }
    }
    test();


//不同的游戏进程，header内容不同。
    function getTips() {
        if (playProcess === 1) {//当杀手杀人时运行
            $(".h-title").children("span").append(`杀手杀人`);
            $(".h-tips-vote").append(`杀手请瞪大眼珠子，选择要杀的对象`);
            $(".h-tips-click").append(`点击下方玩家头像，对被杀死的玩家进行标记`);
        }
        else {//当全民投票时运行
            $(".h-title").children("span").append(`全民投票`);
            $(".h-tips-vote").append(`发言讨论结束，大家请投票`);
            $(".h-tips-click").append(`点击得票数最多的人的头像`);
        }
    }
    getTips();//加载完就运行此功能

//加载完，就对死亡玩家变色
    $(".dead").css("opacity", "0.5");//使选中的盒子变色。dead对应了${arr[n].live},即死了的玩家







    $(".icon").hide();

    //点击盒子发生变化
    $(".look-box").click(function () {
        $(this).css("opacity",".5");//点击盒子变色
        $(this).children(".icon").css("display","block");//使选中的盒子的“小刀”图片出现
        $(this).siblings("").children("img").css('display','none');//使其他的盒子的图片恢复正常
        $(this).siblings("").css("opacity","1");//survival对应了${arr[n].live},即活着的玩家
         checkbox = this;//this就是上面this选中的本身
        return  checkbox;  //返回

    });


//投票
    $(".f-btn").click(function () {
        var q = $(".look-box").index(checkbox);
        //.index是返回一个数值，这个数值是“.look-box”盒子.
        console.log(q);
        console.log(arr[q].role);
        if (arr[q].live === "survival") {//判断是否是活人
            if (playProcess === 1) {//当杀手杀人时运行
                if (arr[q].role === "杀手") {
                    //判断这个盒子所对应的数组中的对象的角色属性是否是杀手，如果杀手则提示不能杀自己。
                    alert("您无法杀死自己");
                } else {//如果不是杀手，即是平民，则使它的生存状态改变。

                    arr[q].live = "dead";//状态改变为dead
                    console.log(arr[q].live);
                    arr[q].day = playNow;//改变天数属性，以便于标记什么时刻杀死，即标记为杀手杀死
                    sessionStorage.setItem("playArray", JSON.stringify(arr));//存值至浏览器
                    console.log(arr);
                    // window.location.assign("task-04.html");
                    result();//判断结果
                }
            }
            else {//当全民投票时运行
                    arr[q].live = "dead";//生存状态改变。
                    arr[q].day = playNow;//改变天数属性，以便于标记什么时刻杀死，即标记为全民投票杀死
                    sessionStorage.setItem("playArray", JSON.stringify(arr));//储存新数组;//将改变的数组的保存到浏览器。
                    console.log(arr);
                    // 重置游戏进程，生成新的游戏天数，新的时刻
                    playProcess = 0;// 重置游戏进程
                    console.log("此时游戏进程为" + playProcess);
                    sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
                    playDay = playDay + 1;// 生成新的游戏天数
                    console.log("此时游戏天数为" + playDay);
                    sessionStorage.setItem("playDay", JSON.stringify(playDay));
                    playNow = playDay + playProcess;// 生成新的时刻
                    console.log("此时游戏时刻为" + playNow);
                    sessionStorage.setItem("playNow", JSON.stringify(playNow));
                    result();
                    // window.location.href = "Task2-game-process.html";//跳转到游戏进程控制页面。

            }

        }
        else {
            alert("已死之人不可选择");
        }
    });
//判断游戏结果的人
    function result() {
        var livingKillerNum=0;
        var livingCivilianNum=0;
        for (n = 0;n < arr.length;n++) {//判断活着的人
            if (arr[n].live === "survival" && arr[n].role === "杀手") {//活着为杀手，则杀手数目+1
                livingKillerNum++;
            }
            if (arr[n].live === "survival" && arr[n].role === "平民") {//活着为杀手，则杀手数目+1
                livingCivilianNum++;
            }
        }
        console.log(livingKillerNum);
        console.log(livingCivilianNum);
        sessionStorage.setItem("livingKillerNum", JSON.stringify(livingKillerNum));
        sessionStorage.setItem("livingCivilianNum", JSON.stringify(livingCivilianNum));
        switch (true) {
            case livingKillerNum===0 ://若杀手死完则，平民胜利
                alert("平民胜利");
                location.href = "result.html";//跳转到游戏结果日志页面。
                break;
            case livingKillerNum===1 && livingCivilianNum===1 && playProcess!==0 ://判断与杀手杀人后，如果平民=杀手=1，则为平局
                alert("平局");
                location.href = "result.html";//跳转到游戏结果日志页面。
                break;
            case livingKillerNum>1 && livingCivilianNum===1 ://判断投票后，但平民=1，若杀手＞1，则为杀手必胜利
                alert("杀手胜利");
                location.href = "result.html";//跳转到游戏结果日志页面。
                break;
            case livingKillerNum===livingCivilianNum && playProcess===0 ://判断与投票后，若杀手=平民，则杀手赢，为了排除第一个判断的影响，加上livingKillerNum===1。
                alert("杀手胜利");
                location.href = "result.html";//跳转到游戏结果日志页面。
                break;
            default:
                location.href = "task-04.html";//跳转到游戏进程控制页面。
        }
    }




});
