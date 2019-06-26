// 'use strict';
// sessionStorage.setItem("z",JSON.stringify(z.value));
// sessionStorage.setItem("y",JSON.stringify(y.value));
var arr =JSON.parse(sessionStorage.getItem("shuffleArr"));//获得储存值
var g =JSON.parse(sessionStorage.getItem("z"));//获得储存值
var d =JSON.parse(sessionStorage.getItem("y"));//获得储存值
 // var arr=JSON.parse(sessionStorage.getItem("player"));//获得储存值
console.log(arr);//打印arr的值
console.log(g);
console.log(d);


document.getElementById('back').onclick = function () {
    if (window.confirm('确定返回玩家分配页面吗?')) {
        window.location.assign('task-02.html');
    }
    else {
        return false;
    }
};//点击返回图标跳转回上一页面

//
// $(document).ready(function(){//文档就绪事件处理器，页面加载完成后触发
//     $("button").click(function () {
//         $("button").text("隐藏并传递身份给二号");
//         // $("#lookidentity").hide();//.hide表示隐藏，hide后括号内（speed,callback）可使用slow，fast，毫秒数（例：1000）设置隐藏速度下方show属性也一样
//         // $("#hideidentity").show();//.show表示显示
//         $(".img-lookbox").toggle();//toggle表示切换，使原先显示的元素隐藏，隐藏的元素显示
//         $(".img-hiddenbox").toggle();
//
//     });
//     $("#transmit").click (function () {
//         var num = 0;
//         num = num + 1;
//
//     })
//
// });

var i = 0;
$(document).ready(function () {
    // var m = 0;//判断点击次数的变量
   $("button").click(function Number() {
      // m = m + 1;
       i= i+1;
      console.log(i);
        var l=0;l=l+1;
           if (i%2 === 0) {//i为偶数，
               $("#num").text(i);
               $("#lookidentity").show();
               $(".img-hidebox").hide();
               $("#hideidentity").hide();
               $(".identity").hide();
               $(".content").text("");
               $("button").text("查看"+ i + "号身份");
           }
               //
           else  {//i为奇数
               $("#lookidentity").hide();
               $(".img-hidebox").show();
               $("#hideidentity").show();
               $(".identity").show();
               $("#num").text(l);
               if (arr[i] === "杀手") {
                   // document.getElementsByClassName("identity").innerHTML = "你是" + arr[i] + ",  词组" + g ;
                   $(".identity").text("你是" + arr[i] + ", 词组" + g);
                   $(".content").text("保护自己身份，并猜出他人的词");
               }
               if (arr[i] === "平民") {

                   // document.getElementsByClassName("identity").innerHTML = "你是" + arr[i] + ",  词组" + d ;
                   $(".identity").text("你是" + arr[i] + ", 词组" + d);
                   $(".content").text("保护自己身份，并猜出他人的词");
               }
               // var k = i+1;
               $("button").text("隐藏身份并传递给" + i + "号");

               // return i;
           }

   });
       // i = i + 1;
       // console.log(i);
       //         return i;




});

