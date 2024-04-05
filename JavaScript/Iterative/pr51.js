//Write a program to print the Fibonacci number series up to a given number.

function fibb(n){
    let a = 0;
    let b = 1;
    let temp;

    while(a <= n){
        console.log(a);
        temp = a;
        a = b;
        b = temp + b;
    }
}

fibb(17);