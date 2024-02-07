//Write a program to print the given 3 numbers in ascending orders?
let x = 523
let y = 4221
let z = -316
if (x > y && x > z) {
    if (y > z) {
        console.log(x + "," + y + "," + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
} 