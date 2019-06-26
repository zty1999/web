
document.getElementById('back').onclick = function () {
    window.location.assign('task-2.html');
};//点击返回图标返回上一个页面



var playerNum = document.getElementById('player');//为滑动条上方输入框设置变量
var rangeBlock = document.getElementById("range");//为滑动条设置变量

function on_change() {
    if (playerNum.value>= 4 && playerNum.value <=18) {
        rangeBlock.value = playerNum.value;
        //如果框内的的值在4-18之间把player的值赋给滑动条
    }
    else {
        alert('人数为4—18,请重新选择');
        rangeBlock.value = 4;
        playerNum.value = 4;
        //人数超出范围则弹出警告框并重置滑动条和框的值为4
    }
}


function move_change() {
    playerNum.value = rangeBlock.value;
    //把滑动条的值赋给框


    var arr = rangeBlock.value,//声明滑动条的值为数组
        kill,
        peoPle;

    if (arr < 4) {
        arr = 4;
    }
    if (arr <= 5) {
        kill = "1";

    }
    else if(arr <= 8) {
        kill = "2";

    }
    else if (arr <= 12) {
        kill = "3";

    }
    else if (arr <=15) {
        kill = "4";

    }
     else if (arr <=18) {
         kill = "5";

     }
     peoPle = arr - kill;//水民人数值为数组总长度减去kill的长度
     document.getElementById("killer").value = kill;
     document.getElementById("people").value = peoPle;




}


// function getNumArray() {
//     var arr = document.getElementById("player").value;//获取总人数值
//     var numArray = new Array(parseFloat(arr)).fill("平民");//创建长度为总人数值，全部为平民的数组
//     var killerArray = numArray.slice(0),count=parseFloat("killer");//开始得到有杀手的数组，count为杀人数
//     for (i=0;i < count;i++) {//将杀手换进数组，得到杀人数组
//         killerArray[i] = "杀手";
//     }
//     var input = killerArray.slice(0);
//     for (var i = killerArray.length - 1; i >= 0; i--) {
//
//         var randomIndex = Math.floor(Math.random() * (i + 1));
//
//         var itemAtIndex = input[randomIndex];
//
//         input[randomIndex] = input[i];
//
//         input[i] = itemAtIndex;
//
//     }
//
//     return input;
//
// }

function less() {
    playerNum.value--;//点击按钮，文本输入框值自减
    if (playerNum.value < 4) {
        alert("人数太少无法开局");
        playerNum.value = 4;//值重置为4.value
    }
    else {
        rangeBlock.value   = playerNum.value;//文本输入框赋值给滑动条
    }
}
function plus() {
    playerNum.value++;//点击按钮文本输入框值自增

    if (playerNum.value > 18) {
        alert("人数太多了分批开局吧");
        playerNum.value = 18;//值重置为18
    }
    else {
        rangeBlock.value  =  playerNum.value;
    }
}
    // for (var i = count.length; i--; ) {
    //     var j = Math.floor(Math.random() * (i + 1));
    //     var temp = _array[i];
    //     _array[i] = _array[j];
    //     _array[j] = temp;
    // }
    //
    // return _array;
// }





function getNumArray() {//打乱数组分配给杀手和平民
    var arr = document.getElementById("player").value;//获取总人数值
    var numArray = new Array(parseFloat(arr)).fill("平民");//创建长度为总人数值，全部为平民的数组
    var killerArray = numArray.slice(0),count = document.getElementById("killer").value;//开始得到有杀手的数组，count为杀人数
     for ( var i=0;  i < count;i++) {//将杀手换进数组，得到杀人数组
        killerArray[i] = "杀手";
    }
    var shuffle = killerArray.slice(0), l = killerArray.length, temp, index;
     //开始打乱数组
    for (l>=0;l--;) {//打乱l次后输出结果
        index = Math.floor((l+1) * Math.random());
        temp = shuffle[index];
        shuffle[index] = shuffle[l];
        shuffle[l] = temp;
    }
    console.log(shuffle);


    sessionStorage.setItem("shuffleArr",JSON.stringify(getNumArray()));
    sessionStorage.setItem("z",JSON.stringify(document.getElementById("ghost").value));
    sessionStorage.setItem("y",JSON.stringify(document.getElementById("water-people").value));
    return shuffle;
}


var z = document.getElementById('ghost').value;//为幽灵词组输入框设置变量
var y = document.getElementById('water-people').value;//为水民词组输入框设置变量



function deal() {//点击请发牌
    getNumArray();

    if (z.value !== "" && y.value !== "") {//value不为空


        window.location.assign('task-002.html')//如果两个词组输入框的值都不为空跳转至下一页面
    } else {
    alert('请输入词组');//否则弹出警告框
    }
}



// function setting() {//点击（点击设置）后杀手，平民人数输入框可修改
//     document.getElementById('settings').style.color = '#b3b3b3';
//  document.getElementById('killer').attributes.readonly = false;
//
// //无效，还需寻找方案
//
// }



// document.onkeydown=function(event){
//       var e = event || window.event || arguments.callee.caller.arguments[0];
//        if(e && e.keyCode===27){ // 按 Esc
//                //要做的事情
//              }
//        if(e && e.keyCode===113){ // 按 F2
//                 //要做的事情
//               }
//          if(e && e.keyCode===13){ // enter 键
//                  //要做的事情
//
//             }
//     };