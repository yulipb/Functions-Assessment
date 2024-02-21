function firstLetterName(name) {
   alert("The name " + name + " starts with the letter " + name[0]);
}

function divisibleByTwo(num) {
    true === 0;
    false === 1;
if (num % 2 <= 0) {
 return true
}
else {
    return false
}
   }

let arr = [3, 1, 5, 7, 2];

function largestNum(arr) {
    let largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
    }
    } return largest
}


firstLetterName("Yulimar");

console.log(divisibleByTwo(8));
console.log(divisibleByTwo(9));

console.log(largestNum([3, 1, 5, 7, 2]));