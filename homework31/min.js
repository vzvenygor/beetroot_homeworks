//Мінімум

//1
let age = +prompt('What is your age?');

if (age <= 11) {
    alert('You are children');
} else if (age >= 12 && age <= 17) {
    alert('You are teenager');
} else if (age >=18 && age <= 59) {
    alert('You are adult');
} else if (age >= 60 && age <= 120) {
    alert('You are pensioner');
} else {
    alert('Enter the correct age')
}


//2
let num = +prompt('Enter a number from 0 to 9');

let message = (num === 0) ? ')' :
    (num === 1) ? '!' :
    (num === 2) ? '@' :
    (num === 3) ? '#' :
    (num === 4) ? '$' :
    (num === 5) ? '%' :
    (num === 6) ? '^' :
    (num === 7) ? '&' :
    (num === 8) ? '*' :
    (num === 9) ? '(' :
    'Incorrect value. Try again';

alert(message);


//3
let firstNum = +prompt('Enter the first number in the range');
let secondNum = +prompt('Enter the second number in the range');
let sum = 0;

while (firstNum <= secondNum) {
    sum += firstNum;
    firstNum++;
}

alert(`The sum of all numbers is equal to ${sum}`);


//4
let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
let gcd = 0;

while (num1 != num2) {
    if (num1 > num2) {
        num1 = num1 - num2;
    } else {
        num2 = num2 - num1;
    }
}

gcd = num1;

alert(`Gcd is equal to ${gcd}`);


//5
let a = +prompt('Enter number');

for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
        console.log(i);
    }
}
