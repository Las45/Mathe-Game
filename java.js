var round = prompt("Wie viele Runden möchtest du spielen?");
var currentRound = 1;
var operator;

function set_plus(){
    operator = "+"
}
function set_minus(){
    operator = "-"
}
function set_random(){
    var operator_rand = Math.floor(Math.random() * 2)
    if(operator_rand == 1){
        operator = "+"
    }
    else if(operator_rand == 2){
        operator = "-"
    }
}