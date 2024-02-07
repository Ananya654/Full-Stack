//Write a program to print the least number in given three numbers?
let a = 34
let b = 45
let c = 2
if(a<b && b<c ){
    console.log(a,"is less than",b ,"and",c)
}
else if(b<a && a<c )
{
    console.log(b,"is less than",a ,"and",c)
}
else{
    console.log(c,"is less than",a ,"and",b)
}