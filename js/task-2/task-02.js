
    document.getElementById('back').onclick = function () {
        window.location.assign('task-2.html');
    };


// function ghost() {
//     var x = document.input[ghost].value;
//
// }





// function ghost() {
//     var x = document.forms[ghost()].value;
//     if (x === null || x === "") {
//         alert("词组不能为空");
//         return false;
//     }
//
// }
//     function water()
//     {
//         // with (field)
//         // {
//             if (value==null||value=="")
//             {alert(alerttxt);return false}
//             else {return true}
//         // }
//     }
var z = document.getElementById('ghost').value;
var y = document.getElementById('water-people').value;

function deal() {

    if (z === "" || z === null) {
        alert('请输入幽灵词组');
        return false;
    }
    else {
        // return true;
        window.location.href = 'task-2-3.html';
    }
    if (y === "" || y === null) {
        alert('请输入水民词组');
        return false;
    }
    else {
        return true;
    }

}
