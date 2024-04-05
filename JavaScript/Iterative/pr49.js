//Write a program to print reverse of digits of numbers
function reverseDigits(n) {
    let reversedNum = 0;
    let divisor = Math.floor(Math.log10(n));
  
    for (let i = 0; i <= divisor; i++) {
      let digit = n % 10;
      n = Math.floor(n / 10);
      reversedNum += digit * Math.pow(10, i);
    }
  
    return reversedNum;
  }
  

  console.log(reverseDigits(12345));