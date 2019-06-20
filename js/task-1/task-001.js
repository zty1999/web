'use strict';
var z = document.getElementsByClassName('box');
//定义盒子，获取九宫格中的小格子DOM

//随机选取颜色值

function color() {
    var color = "#";
    for (var i=0; i<6; i++) {
        color += Math.floor(Math.random()*6).toString(16);
        //color的值等于color"#"+对x：0-6（小于6）之间的数进行向下舍入后转换为16进制数的值
        return color;//输出颜色的16进制
    }
}





var time;
function begin() {
    time = setInterval(function () {
        for (var i = 0; i < z.length; i++) {
            z[i].style.backgroundColor = "rgb(251, 180, 53)";//每次获取随机颜色后恢复默认颜色
        }
        // function box() {
            var arr = [0,1,2,3,4,5,6,7,8];
            for ( var i=0; i<arr.length; i++) {
                var randomnum = Math.floor(Math.random()*9);
                var random = arr[i];
                arr[randomnum] = arr[i];
                arr[randomnum] = random;//随机选取盒子

            }
        for (;;) {//给随机盒子配上随机色
            random[0].style.backgroundColor = color();
            random[1].style.backgroundColor = color();
            random[2].style.backgroundColor = color();
        }
        // }
    },1000);
    document.getElementById('start').disabled = true;
}

function end() {
    for (var h = 0; h < z.length; h++) {
        z[h].style.backgroundColor = "rgb(251, 180, 53)";//每次获取颜色后重置为初始色
    }
    clearInterval(time);
    document.getElementById("start").disabled = false;
}
