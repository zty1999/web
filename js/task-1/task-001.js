'use strict';
var z = document.getElementsByClassName('box');
//定义盒子，获取九宫格中的小格子DOM

//随机选取颜色值
function  randomColor() {
    var color = "#";
    for (var i=0; i<6; i++) {
        color += (Math.random() * 16 | 0).toString(16);

        // while (color ="#" + "FBB435") {
        //     return randomColor();
        // }
    }
    return color;

}
var arr = [0,1,2,3,4,5,6,7,8];
//随机盒子
function div(arr,count) {
    var  new_arr = arr.slice(0),
         i = arr.length,
         min = i - count,
         random,
         randomdiv;
    // temp,
    // index;
    // while (i-- > min) {//当i-1的值小于min的值，自我感觉这个条件没有，可以舍弃，除非B=1或0这个条件才不生效。
    //     index = Math.floor((i + 1) * Math.random());//获取整数//Math.floor(x)向下取整计算，它返回的是小于或等于函数参数//Math.random()返回介于 0 （包含） ~ 1（不包含） 之间的一个随机数。
    //     temp = new_arr[index];//获取数组中的数//C的值是S数组的第D个数（从0开始计数）
    //     new_arr[index] = new_arr[i];//S数组的第D个数的值替换成S的第i个数值。此时S数组发生第一次变化，这是有两个相同的值//S[i]数组中最后一个数
    //     new_arr[i] = temp;//将S数组的第i个数的值替换为C。
    // }
    //输入S数组的第min个开始到结束之间的数值。
    // console.log(new_arr);
    while(i-- > min) {
         randomdiv = Math.floor(Math.random() * 9);
        // var random = arr[i];
         random = new_arr[randomdiv];
        new_arr[randomdiv] = new_arr[i];
        // arr[randomdiv] = random;
        new_arr[i] = random;
    }
    return new_arr.slice(min);
    // return random;

}

//重置颜色
function resetColor() {
    for (var i=0;i<z.length;i++ ) {
        z[i].style.backgroundColor = "#FBB435";
    }

}


var time;
function begin() {
    time = setInterval(function () {
        resetColor();
        // random();
        var shoute = div(arr,3);
        for (var i =0 ;i<shoute.length; i++) {
            // var colors = randomColor();
            z[shoute[i]].style.backgroundColor = randomColor();
            // z[arr[1]].style.backgroundColor = randomColor();
            // z[arr[2]].style.backgroundColor = randomColor();
        }
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