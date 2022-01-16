// Мінімум

/* 1.
Напиши функцію, яка приймає час (години, хвилини, секунди) 
і виводить його на екран у форматі «гг: хв: сс» .
Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.
*/

const setTime = function (hour, minutes, seconds) {
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHour} : ${formattedMinutes} : ${formattedSeconds}`;
};

console.log(setTime(1, 12, 8));

/* 2
  Напиши функцію, яка приймає години, хвилини і секунди і повертає цей час в секундах.
  */

const setSeconds = function (hour, minutes, seconds) {
  let hourToSeconds = hour * 3600;
  let minutesToSeconds = minutes * 60;

  return hourToSeconds + minutesToSeconds + seconds;
};

console.log(setSeconds(1, 1, 1));

/* 3
  Напиши функцію, яка приймає кількість секунд, переводить їх у години, хвилини і секунди і повертає у вигляді рядка «гг: хв: сс».
  */

const setTimeInSeconds = function (seconds) {
  let transformHours = Math.floor(seconds / 60 / 60);
  let transformMinutes = Math.floor(seconds / 60) - transformHours * 60;
  let transformSeconds = seconds % 60;

  return setTime(transformHours, transformMinutes, transformSeconds);
};

console.log(setTimeInSeconds(3661));

// Норма

/*
Напиши функцію, яка рахує різницю між датами. 
Функція приймає 6 параметрів, які описують 2 дати, і повертає результат у вигляді рядка «гг: хв: сс». 
При виконанні завдання використовуй функції з попередніх 2-х завдань: 
спочатку обидві дати переведи в секунди, дізнайся різницю в секундах, а потім різницю переведи назад в «гг: хв: сс».
*/

const differenceInTime = function (h1, m1, s1, h2, m2, s2) {
  let firstDate = setSeconds(h1, m1, s1);
  let secondDate = setSeconds(h2, m2, s2);
  let difference = firstDate - secondDate;

  return setTimeInSeconds(difference);
};

console.log(differenceInTime(1, 2, 3, 12, 2, 3));
