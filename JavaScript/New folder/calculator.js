function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a *  b;
}

function divide(a, b) {
    return a / b;
}

function  calculator(a,b,operator){
    return operator(a,b);
}

console.log(calculator(2,3,multiply));