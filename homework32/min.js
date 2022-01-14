// //Мінімум

// // //1. Напиши всі можливі варіанти створення функцій.

// // function functionNameDeclaration (arguments) {
// //     //function body
// // } //function declaration

// // let functionNameExpression = function (arguments) {
// //     //function body
// // }; //function expression

// // (arguments) => {
// //     //function body
// // } //arrow function

// // element.map((arguments) => {
// //     //function body
// // }) //short function


// //2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function setArgumentsCount () {
    console.log(arguments.length);
}

setArgumentsCount();

// /*3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.*/

function setNum (num1, num2) {
    if (num1 < num2) {
        return "-1"; 
    } else if (num1 > num2) {
        return "1";
    } else if (num1 === num2) {
        return "0";
    } else {
        return "Введіть коректні значення";
    }
}

console.log(setNum(2, 5));

// //4. Напиши функцію, яка обчислює факторіал переданого їй числа.

const setFactorial = function(num) {
    let factorial = 1;
    
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(setFactorial(3));

// /*5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

function transformNum () {
    const anyNum = prompt('Ведіть три цифри, розділені комою').split(',', 3);
    let combine = anyNum[0] + anyNum[1] + anyNum[2];
    return combine;
}

console.log(transformNum());


// /*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
// // const length = +prompt('Введіть довжину прямокутника');
// // const width = +prompt('Введіть ширину прямокутника');

function setArea (a, b = a) {
    return (a * b);
}

console.log(setArea(2));