
var x;

var aux;
var hatz={todo1, todo2, todo3,todo4, todo5, todo6, todo7, todo8, todo9, todo10,todo11, todo12, todo13, todo14, todo15,};
var todo1=" ";
var todo2=" ";
var todo3=" ";
var todo4=" ";
var todo5=" ";
var todo6=" ";
var todo7=" ";
var todo8=" ";
var todo9=" ";
var todo10=" ";
var todo11=" ";
var todo12=" ";
var todo13=" ";
var todo14=" ";
var todo15=" ";

document.addEventListener('DOMContentLoaded', (event) => {
    // PUNE CODUL TAU AICI






    
    
    



    document.getElementById("todo1").innerHTML = todo1;
    document.getElementById("todo2").innerHTML = todo2;
    document.getElementById("todo3").innerHTML = todo3;
    document.getElementById("todo4").innerHTML = todo4;
    document.getElementById("todo5").innerHTML = todo5;
    document.getElementById("todo6").innerHTML = todo6;
    document.getElementById("todo7").innerHTML = todo7;
    document.getElementById("todo8").innerHTML = todo8;
    document.getElementById("todo9").innerHTML = todo9;
    document.getElementById("todo10").innerHTML = todo10;
    document.getElementById("todo11").innerHTML = todo11;
    document.getElementById("todo12").innerHTML = todo12;
    document.getElementById("todo13").innerHTML = todo13;
    document.getElementById("todo14").innerHTML = todo14;
    document.getElementById("todo15").innerHTML = todo15;
    });
function add(){
    var i=0;
    document.getElementById("todo1").innerHTML = todo1;
    for(x in hatz){
        i++;
        aux=hatz[15-i+1];
        hatz[15-i+1]=hatz[15-i+2];
        hatz[15-i+2]=aux;
        if(i>14) break;

    }

    
}