//Норма

//1
let palindrome = +prompt('Enter a five-digit number');

if (palindrome > 99999 || palindrome < 10000) {
    alert('You should enter five-digit number. Try again');
} else if (palindrome === +palindrome.toString().split('').reverse().join('')) {
    alert(`Number ${palindrome} is palindrome`);
} else {
    alert(`Number ${palindrome} is not palindrome`);
}


//2
let purchaseSum = +prompt('Enter the sum of your purchase');
const DISCOUNT_1 = 0.03;
const DISCOUNT_2 = 0.05;
const DISCOUNT_3 = 0.07;

if (purchaseSum < 200) {
    alert(`Аmount due ${purchaseSum.toFixed(2)} UAH`);
} else if (purchaseSum >= 200 && purchaseSum < 300) {
    let purchaseSum1 = purchaseSum - (purchaseSum * DISCOUNT_1);
    alert(`Аmount due ${purchaseSum1.toFixed(2)} UAH`);
} else if (purchaseSum >= 300 && purchaseSum < 500) {
    let purchaseSum2 = purchaseSum - (purchaseSum * DISCOUNT_2);
    alert(`Аmount due ${purchaseSum2.toFixed(2)} UAH`);
} else {
    let purchaseSum3 = purchaseSum - (purchaseSum * DISCOUNT_3);
    alert(`Аmount due ${purchaseSum3.toFixed(2)} UAH`);
}


//3
let arr = prompt('Enter 10 integers, separated by coma').split(',', 10);

let positive = arr.map(e => Math.sign(+e) ).filter(num => +num === 1).length,
    negative = arr.map(e => Math.sign(+e) ).filter(num => +num === -1).length,
	zero = arr.map(e => Math.sign(+e) ).filter(num => +num === 0).length;
    even = arr.map(e => Math.sign(+e) ).filter(num => +num % 2 === 0).length;
    odd = arr.map(e => Math.sign(+e) ).filter(num => +num % 2 != 0).length;

if(positive) alert('Positive: ' + positive);
if(negative) alert('Negative: ' + negative);
if(zero) alert('Zero: ' + zero);
if(even) alert('Even: ' + even);
if(odd) alert('Odd: ' + odd);


//4
const DAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
let currentDay = 0;

while (confirm(`${DAYS[currentDay]}. Хочеш побачити наступний день?`)) {
    currentDay = (currentDay + 1) % DAYS.length;
}