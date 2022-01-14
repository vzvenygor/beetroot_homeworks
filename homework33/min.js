// Мінімум

/* 1.
Напиши функцію, яка приймає час (години, хвилини, секунди) 
і виводить його на екран у форматі «гг: хв: сс» .
Якщо при виконанні функції хвилини і / або секунди не були надані, то виводити їх як 00.
*/

const setTime = function (hour = "0", minutes = "0", seconds = "0") {
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (`${hour} : ${minutes} : ${seconds}`);
};

console.log(setTime());

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

  return `${transformHours.toString().padStart(2, "0")} : ${transformMinutes.toString().padStart(2, "0")} : ${transformSeconds.toString().padStart(2, "0")}`;
};

console.log(setTimeInSeconds(3661));
