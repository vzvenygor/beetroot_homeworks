// Норма

/*
Напиши функцію, яка рахує різницю між датами. 
Функція приймає 6 параметрів, які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс». 
При виконанні завдання використовуй функції з попередніх 2-х завдань: 
спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс».
*/

const differenceInTime = function(h1, m1, s1, h2, m2, s2) {
    let firstDate = (h1 * 3600) + (m1 * 60) + s1;
    let secondDate = (h2 * 3600) + (m2 * 60) + s2;
    let difference = firstDate - secondDate;

    let transformHours = Math.floor(difference / 60 / 60);
    let transformMinutes = Math.floor(difference / 60) - transformHours * 60;
    let transformSeconds = difference % 60;
  
    return `${transformHours.toString().padStart(2, "0")} : ${transformMinutes.toString().padStart(2, "0")} : ${transformSeconds.toString().padStart(2, "0")}`;
}

console.log(differenceInTime(1, 2, 3, 12, 2, 3));

