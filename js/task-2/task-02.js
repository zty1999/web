
document.getElementById('back').onclick = function () {
    window.location.assign('task-2.html');
};//点击返回图标返回上一个页面

var z = document.getElementById('ghost');//为幽灵词组输入框设置变量
var y = document.getElementById('water-people');//为水民词组输入框设置变量

function deal() {//点击请发牌
    if (z.value !== "" && y.value !== "") {//value不为空
        window.location.assign('task-2-3.html')//如果两个词组输入框的值都不为空跳转至下一页面
    } else {
        alert('请输入词组');//否则弹出警告框
    }
}


var playerNum = document.getElementById('player');
var rangeBlock = document.getElementById("range");

function on_change() {
    if (playerNum.value>= 4 && playerNum.value <=18) {
        rangeBlock.value = playerNum.value;
        //如果框内的的值在4-18之间把player的值赋给滑动条
    }
    else {
        alert('人数为4—18,请重新选择');
        rangeBlock.value = 4;
        playerNum.value = 4;
        //人数超出范围则弹出警告框并重置滑动条和框的值为6
    }
}

function less() {
    rangeBlock.value--;//点击按钮，值自减
    if (rangeBlock.value < 4) {
        alert("人数太少无法开局");
    }
    else {
        playerNum.value = rangeBlock.value;
    }
}
function plus() {
    rangeBlock.value++;//点击按钮值自增

    if (rangeBlock.value > 18) {
        alert("人数太多了分批开局吧");
    }
    else {
        playerNum.value = rangeBlock.value;
    }
}
function move_change() {
    playerNum.value = rangeBlock.value;
    //把滑动条的值赋给框
    var arr = rangeBlock.value,
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
    peoPle = arr - kill;
    document.getElementById("killer").innerHTML = kill;
    document.getElementById("people").innerHTML = peoPle;

}