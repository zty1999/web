'use strict';//执行严格模式




function colors() { //随机选取的rgb颜色
    var r = Math.floor(Math.random() * 256);//Math.random 去小数大于等于0.0且小于1.0产生一个0到1的随机数
    var g = Math.floor(Math.random() * 256);//) Math.floor 返回小于等于x的最大整数；
    var b = Math.floor(Math.random() * 256);//整体意思就是取整数
    if("rgb(" + r + "," + g + "," + b + ")" === "rgb(251, 180, 53)") {
        return colors();}
    //如果随机选取的颜色为盒子初始颜色则返回
    else{
        return "rgb(" + r + ","+ g + "," + b + ")";
    }
}


//随机选取三个不同的盒子
// function div() {
//     var one = Math.floor(Math.random()*9);
//     return one;
// }
//
// function box() {
//     var two = Math.floor(Math.random()*9);
//     if (one === two) {
//         return box;
//     }
//     else {
//         return two;
//     }
// }
//
// function block() {
//     var three = Math.floor(Math.random()*9);
//     if (three === two) {
//         return block;
//     }
//     else if (three === one){
//         return block;
//     }
//     else {
//         return three;
//     }
// }
var time;
// var a;
// var b;
// var c;

// function box() {
//
//
// }
function begin() {
    var arr = [0,1,2,3,4,5,6,7,8];
    time = setInterval(function ()  {


        // for (;one === two || two === three || three === one;) {//当abc有任意两个相等，就开始运行，直到没有相等。选择三个不相同的随机数
        //     var one = Math.floor(Math.random() * 9);
        //     var two = Math.floor(Math.random() * 9);
        //     var three = Math.floor(Math.random() * 9);
        // }
        // for (;a === b || b === c || c === a;) {//判断三个盒子背景颜色是否重复，颜色重复给随机的三个盒子赋值上随机背景颜色
        for ( var i=0; i<arr.length; i++) {
            var randomnum = Math.floor(Math.random()*9);
            var random = arr[i];
            arr[randomnum] = arr[i];
            arr[random] = random;
            for (var h=0;h<z.length;) {
                var a = arr[randomnum].style.backgroundColor = colors();
            }
            return a;
        }

            // var b = z[two].style.backgroundColor = colors();
            // var c = z[three].style.backgroundColor = colors();
        // }

    },1000);
    document.getElementById("start").disabled = true;

}

function end() {
    for (var h = 0; h < z.length; h++) {
        z[h].style.backgroundColor = "rgb(251, 180, 53)";//每次获取颜色后重置为初始色
    }
    clearInterval(time);
    document.getElementById("start").disabled = false;
}











//
// var time;//定义定时器ID
//
// function begin() {
//
//     time = setInterval(function ()  {//setInterval("function",time) 设置一个超时对象 ，setInterval表示间隔一段时间反复执行某操作
//         for (var i = 0; i < z.length; i++) {
//             z[i].style.backgroundColor = "#ffa500";//每次获取随机颜色后恢复默认颜色
//         }
//
//         for (;one === two || two === three || three === one;) {//当abc有任意两个相等，就开始运行，直到没有相等。选择三个不相同的随机数
//             var one = Math.floor(Math.random() * 9);
//             var two = Math.floor(Math.random() * 9);
//             var three = Math.floor(Math.random() * 9);
//         }
//         for (;a === b || b === c || c === a;) {//判断三个盒子背景颜色是否重复，颜色重复给随机的三个盒子赋值上随机背景颜色
//             var a = z[one].style.backgroundColor = colors();
//             var b = z[two].style.backgroundColor = colors();
//             var c = z[three].style.backgroundColor = colors();
//         }
//     },1000);//1000为1秒
//
//     document.getElementById("start").disabled = true;//使重置（开始）按钮不可用
// }
//
// function end() {
//     for(var h = 0; h<z.length; h++) {
//         z[h].style.backgroundColor = "#ffa500";//恢复默认颜色
//     }
//
//     clearInterval(time); //清除计数器，取消定时
//
//     document.getElementById("start").disabled=false; //启用开始按钮
// }
//

function randomColor(){//for循环
    var color="#";
    for(var i=0;i<6;i++){
        color += (Math.random()*16 | 0).toString(16);//+=:例子x+=y等同于x=x+y，即累加。
    }
    return color;//输出颜色的十六进制
}


function randomarry() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var i=0; i<arr.length; i++) {
        var randomnum = Math.floor(Math.random() * 9);
        var random = arr[i];
        arr[randomnum] = arr[i];
        arr[randomnum] = random;//随机选取盒子

    }
}
function resetColor() {
    for (var i = 0; i < z.length; i++) {
        z[i].style.backgroundColor = "rgb(251, 180, 53)";//每次获取随机颜色后恢复默认颜色
    }
}
// function resetColor() {
//     for (var i= 0; i < box.length; i++) {
//         box[i].style.background = "orange";
//     }
// }
var time;
function begin() {
    time = setInterval(function () {
        resetColor();

        var randomarry1 = randomarry(1,3);
        for (var w = 0; 1<2; w++) {//给随机盒子配上随机色
            var color = randomColor();
            z[randomarry1].style.backgroundColor = color;
            // w = z[random[1]].style.backgroundColor = color();
            // w = z[random[2]].style.backgroundColor = color();
        }

    },1000);

}


