/*
Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». 
Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
*/

const time = {
    hour: 0,
    minute: 0,
    second: 0,
};


//Для виведення часу на екран.
const setTime = () => {
    const formattedHour = time.hour.toString().padStart(2, "0");
    const formattedMinutes = time.minute.toString().padStart(2, "0");
    const formattedSeconds = time.second.toString().padStart(2, "0");
  
    return `${formattedHour} : ${formattedMinutes} : ${formattedSeconds}`;
}


//Зміни часу на передане кількість секунд.

const setSeconds = (seconds) => {
    let secondsToSeconds = (seconds % 60);
    let secondsToMinute = Math.floor((seconds / 60) % 60);
    let secondsToHour = Math.floor(seconds / 3600);
    newSecond = time.second + secondsToSeconds;
    newMinute = time.minute + secondsToMinute;
    newHour = time.hour + secondsToHour;

    if (seconds > 60) {
        return Object.assign(time, {second: newSecond}, {minute: newMinute}, {hour: newHour});
    } else
        return Object.assign(time, {second: seconds});
}

console.log(setSeconds(89));

// Зміни часу на передане кількість хвилин.

const setMinutes = (minutes) => {
    let minutesToMinutes = (minutes % 60);
    let minutesToHours = Math.floor((minutes / 60) % 60);
    newMinute2 = time.minute + minutesToMinutes;
    newHour2 = time.hour + minutesToHours;

    if (minutes > 60) {
        return Object.assign(time, {minute: newMinute2}, {hour: newHour2});
    } else
        return Object.assign(time, {minute: minutes});
}

console.log(setMinutes(89));

//Зміни часу на передане кількість годин.

const setHours = (hours) => {
    let hourToHours = (hours % 24);
    let hourtoDays = (hours / 24) % 24;
    newHour3 = time.hour + hourToHours;
    newDay = hourtoDays;

    if (hours > 24) {
        return Object.assign(time, {hour: newHour3}, {day: 'It`s another day'});
    } else
        return Object.assign(time, {hour: hours});
}

console.log(setHours(32));

console.log(setTime());

