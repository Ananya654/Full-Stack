// Write a program to print 1 to 10 odd numbers using a do while loop

let num = 1;
do{
    if(num%2!=0){
        console.log(num +" is odd number.");
    }
    
    num++;
}
while(num <= 10);