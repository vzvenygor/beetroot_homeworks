//Норма//

let name = prompt('Як тебе звати?');
alert(`Привіт, ${name}!`);

let year = +prompt(`${name}, введи свій рік народження`);
const CURRENT_YEAR = '2021';
let age = CURRENT_YEAR - year;
alert(`Ага, значить тобі ${age} років`);

let length = +prompt(`${name}, введи довжину сторони квадрату`);
let perimeter = 4 * length;
alert(`Периметр такого квадрата рівний ${perimeter}`);

//Максимум//

let radius = +prompt('Введи радіус кола');
const PI = 3.14;
let circleArea = PI * radius**2;
alert(`Площа такого кола становитиме ${circleArea}`);

let lengthCity = +prompt('Веди відстань між двома містами у кілометрах');
let time = +prompt('За скільки годин ти хочеш дістатися до іншого міста?');
let speed = lengthCity / time;
alert(`Щоб встигнути вчасно, тобі потрібно рухатися зі швидкісттю ${speed} км/год`);

let dollars = +prompt('Скільки доларів бажаєш обміняти на євро?');
const EXCHANGE_RATE = 0.88;
let counter = dollars * EXCHANGE_RATE;
alert(`За ${dollars} доларів ти зможеш отримати ${counter} євро`);



