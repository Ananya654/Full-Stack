// Write a program to check if a given number is an Armstrong number or not.


function isArmstrongNumber(n) {
    let num = n;
    let digits = [];
    let sum = 0;
  
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
  
    
    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(digits[i], digits.length);
    }
  
    
    return sum === n;
  }
  
  
  console.log(isArmstrongNumber(153));