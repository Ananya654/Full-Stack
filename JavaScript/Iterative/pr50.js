//Write a program to read 5 numbers and print only the even numbers

let numbers=[44, 26, 48, 64, 27, 53];

let even = [];
let i = 0;
while(i < numbers.length) {
	if (numbers[i] % 2 == 0)
	even.push(numbers[i]);
	i++;
}


console.log(`Even numbers in an array are: ${even}`)
