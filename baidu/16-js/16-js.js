'use strict';
document.getElementById("add-btn").onclick = function() {
    document.getElementById("result").innerHTML = Number(document.getElementById("first-number").value) + Number(document.getElementById('second-number').value);
};
document.getElementById("minus-btn").onclick = function() {
    document.getElementById("result").innerHTML = document.getElementById("first-number").value - document.getElementById('second-number').value;
};
document.getElementById("times-btn").onclick = function() {
    document.getElementById("result").innerHTML = document.getElementById("first-number").value * document.getElementById('second-number').value;
};
document.getElementById("divide-btn").onclick = function() {
    document.getElementById("result").innerHTML = document.getElementById("first-number").value / document.getElementById('second-number').value;
    let g = document.getElementById("second-number").value;
    if(g === 0) {
        return false;
    }
    console.log(g);
};
var Num;
if (#dec-number.value >0) {
    $("#result2").text = (Num%2)  ;
    

}
