'use strict';//执行严格模式


//抽取随机的16进制颜色代码
function randomColor () {
    var Color = "#";
    for (var i = 0; i < 6;i++ ) {//i <6 的情况下循环，可循环6次，即取16进制颜色值中#后面的6位数
        Color = Color + Math.floor(Math.random() * 9).toString(16);//toString属性将字符串转化为数字，16代表16进制
                //”#“ + 向下取整的    （0-1）*9 = 0--9的转化为16进制的随机数。
    }
    return Color;//返回Color

}


//抽取随机的三个盒子

var arr = [0,1,2,3,4,5,6,7,8];
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
        random = new_arr[randomdiv];
        new_arr[randomdiv] = new_arr[i];
        new_arr[i] = random;
    }
    return new_arr.slice(min);
}
function resetColor() {
    for (var i = 0; i < z.length; i++) {
        z[i].style.backgroundColor = "#FBB435";
    }

}


var time;
var z = document.getElementsByClassName("box");//给类名为box的对象建立变量
//点击开始闪按钮调用函数begin（）
function begin() {

     time = setInterval(function () {
         resetColor();
         var shuffle = div(arr,3);
        for (var i = 0; i < shuffle.length; i++) {
            z[shuffle[i]].style.backgroundColor = randomColor();
        }
    },1000);


    document.getElementById("start").disabled = true;
}

//点击结束闪按钮调用函数end（）
function end() {
    // z.style.backgroundColor = "#FBB435";
    resetColor();
    clearInterval(time);
    document.getElementById("start").disabled = false;
}