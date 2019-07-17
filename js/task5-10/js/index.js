'use strict';
function submit() {
    let note = $("input").value;
    let username = $('login-user').value;

    // let password = $('.login-psd').value;
    if (note === ''){
        alert("请输入账号");

    }
    else if(username !== "admin") {
        alert("用户不存在");
    }
    else {
        window.location.assign('home-page.html')
        // $.get('//home-page.html',{t:'sd'},function (data) {alert(data)});
    }








}

//原生写法
// let account = new XMLHttpRequest();
// account.open('GET', 'home-page.html', true);//若值为false则为同步请求
// account.send(null);
// account.onreadystatechange = function (){
//     if (account.readyState === 4){
//         if ((account.status >= 200 && account.status < 300) || account.status === 304){
//             console.log(account.responseText);
//         } else {
//             console.error('Request was unsuccessful:' + account.status);
//         }
//     }
// };
// account.onerror = function (e) {
//     console.error(account.statusText);
// };

// $.ajax({
//     url:"home-page.html",
//     type: 'GET',
//     data:('sd'),
//     dataType:'json',
//     success:function (data) {
//         $('').text(data);
//     }
// });





// open()：建立到服务器的新请求。
// send()：向服务器发送请求。
// abort()：退出当前请求。
// readyState：提供当前 HTML 的就绪状态。
// responseText：服务器返回的请求响应文本。