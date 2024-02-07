//Write a program to print the given 3 numbers in descending orders?
let x = 9
let y = 88
let z = 786
if (x < y && x < z) {
    if (y < z) {
        console.log(z + "," + y + "," + x);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (y < x && y < z) {
    if (x < z) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (z < x && z < y) {
    if (x < y) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(x + ", " + y + ", " + z);
    }
} 