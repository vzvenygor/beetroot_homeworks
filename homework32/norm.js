//Норма

//1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”

function setPerfectNumber (num) {
    let sum = 0;

    for (let i = 1; i <= num - 1; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        return true;
    } else {
        return false;
    }
}

console.log(setPerfectNumber(7));


/*2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
і виводить тільки ті числа з діапазону, які є досконалими.*/

function isNumPerfect (x, y) {

    for (let i = x; i < y; i++) {
        let sum = 0;

        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                sum += j; 
            }
        }
        if (i === sum) {
            console.log(i)
        }
    }
}

isNumPerfect(1, 100);