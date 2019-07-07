'use strict';

$(".kingdom").click(function () {
    var cipher = prompt('','');
    if (cipher === '脑内枪决') {
        alert('能够获得王国的通行权是你的荣幸');
        window.location.assign('kingdom.html');
    }
    else {
        alert('愚蠢的凡人也妄想踏入我的领地，这里不欢迎你')
    }
});