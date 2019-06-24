'use strict';
document.getElementById('back').onclick = function () {
    window.location.assign('task-02.html');
};
function transMit() {
    document.getElementById('transmit').innerHTML = '隐藏身份并传递给二号';
    document.getElementById('imgone').style.display = none;
    document.getElementById('imgtwo').style.display = block;
}
