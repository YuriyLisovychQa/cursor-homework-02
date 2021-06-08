let firstNumber = prompt("Write integer number 'N'");
do {
    firstNumber = parseInt(firstNumber,10);
}   while(isNaN(firstNumber));
console.log(firstNumber, typeof firstNumber);

let secondNumber = prompt("Write integer number 'M'");
do {
    secondNumber = parseInt(secondNumber, 10);
}   while(isNaN(secondNumber));
console.log(secondNumber, typeof secondNumber);

let sum = 0;

const skip = confirm("Skip even numbers?")

if(skip === true){
    console.log("Skip even");
    for (let i = firstNumber; i <= secondNumber; i++){
    if (i % 2 === 0) {
        continue;
    }
        sum = sum + i;
    }
    console.log("skip even sum " + sum);
    alert("skip even sum " + sum);
} else {
    for (let i = firstNumber; i <=secondNumber; i++){
        sum = sum + i;
    }
    console.log("Sum of numbers " + sum);
    alert("Sum of numbers " + sum);
}