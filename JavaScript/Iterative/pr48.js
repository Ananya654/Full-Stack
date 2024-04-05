//. Write a program Factors of 24 using while loop
// (Factors of 24 are 1, ,3, 4, 6, 12, 24)

let i = 1;
let n = 24;
while(i<=n){
    if(n % i == 0){
    console.log(i);
}

 i++;
}