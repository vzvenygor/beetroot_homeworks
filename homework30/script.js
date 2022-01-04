/*Мінімум*/
let a = 0.1 + 0.2;
console.log(+a.toFixed(1));

let b = "1";
let c = 2;
console.log(Number(b) + c);

let volume = +prompt("Введіть об'єм флешки в гігабайтах");
let counter = Math.floor(volume / 0.82);
alert(
  `На флешку об'ємом ${volume} Гб можна завантажити ${counter} файлів об'ємом 820 Мб`
);

/*Норма*/
let sum = +prompt("Введіть суму грошей в гаманці");
let price = +prompt("Введіть ціну однієї шоколадки");
let purchase = Math.floor(sum / price);
let remainder = sum % price;
alert(
  `За ${sum} грн Ви зможете купити ${purchase} шоколадок вартістю ${price} грн кожна. У Вас залишиться ${remainder} грн`
);

let userNum = +prompt("Введіть тризначне число");
let firstNum = userNum % 10;
let secondNum = Math.floor((userNum % 100) / 10);
let thirdNum = Math.floor((userNum % 1000) / 100);
alert(`Перевернуте число: ${firstNum}${secondNum}${thirdNum}`);

/*Максимум*/
let deposit = +prompt("Введіть суму вкладу");
let period = +prompt("Введіть кількість місяців");
let monthRate = 0.42;
let percents = ((deposit * monthRate) / 100) * period;
alert(
  `Вкладаючи суму ${deposit} грн на ${period} міс, Ви отримаєте ${percents} грн процентів`
);


// 2 && 0 && 3 // 0 - повернеться перше хибне значення, на якому обчислення зупинилося
// 2 || 0 || 3 // 2 - повертається перше істинне значення
// 2 && 0 || 3 // 3 - повернеться перше істинне значення (після виконання 2 && 0 ми отримали false)