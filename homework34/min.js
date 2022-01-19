// Мінімум

/*
Створи об'єкт, що описує автомобіль 
(виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), 
і наступні функції для роботи з цим об'єктом:
1.Висновок на екран з інформацією про автомобіль.
2.Додавання водія, який має право керувати автомобілем.
3.Заправка автомобіля.
4. Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, 
а також потрібно перевіряти чи має право водій керувати даним автомобілем 
(ім'я водія функція приймає другим аргументом). 
Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, 
якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/

const car = {
    producer: 'Ford',
    model: 'Focus',
    year: 2018,
    'average speed': 80,
    'fuel tank volume': 50,
    'average fuel consumption per 100 km': 6.5,
    driver1: 'Petro Poroshenko',
    driver2: 'Volodymyr Zelenskyi',
};

// 1. Висновок на екран з інформацією про автомобіль. 

const setObj = () => {
    for (key in car) {
        console.log (`${key}: ${car[key]}`);
    }
}


// 2. Додавання водія, який має право керувати автомобілем. 

const newDriver = function(newDriverName) {
    return Object.assign(car, {driver3: newDriverName});
}

newDriver('Viktor Yuschenko');


// 3.Заправка автомобіля.

const setFuel = (fuel) => {
    let fuelLevel = car['fuel tank volume'] - fuel;
    if (fuel < 10) {
        return car.message = `Потрібна заправка! До повної заправки потрібно залити ${fuelLevel} літрів пального`;
    } else {
        return car.message = `У баці ${fuelLevel} літрів пального`;
    }
}

setFuel(9);

// 4. Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.

const isDriver = (driverName) => {
    return driverName === car.driver1
        || driverName === car.driver2
        || driverName === car.driver3;
}

// isDriver('Petro Poroshenko');
isDriver('Leonid Kravchuk');


const setTimeOnRoad = (distance, isDriver) => {
    let timeOnRoad = +(distance / car['average speed']).toFixed(2);

    if (isDriver === true) {
        if (timeOnRoad >= 4) {
            extraTime = timeOnRoad + 1;
            return car.message2 = `Дорога забере ${timeOnRoad} год. З врахуванням відпочинку - ${extraTime} год`;
        } else {
            return car.message2 = `Дорога забере ${timeOnRoad} год.`;
        }
    } else 
        return car.varning = 'Ви немаєте права керувати цим автомобілем!';
}

setTimeOnRoad(250);


const isFuelEnough = (distance, fuel) => {
    let fuelForTrip = +((distance / 100) * car['average fuel consumption per 100 km']).toFixed(2);
    let difference = +(fuelForTrip - fuel).toFixed(2);
    
    if (fuelForTrip > fuel) {
        return car.message3 = `Потрібна заправка! Для цієї поїздки вам не вистачає ${difference} літрів пального`;
    } else {
        return car.message3 = 'Щасливої дороги!';
    }
}

isFuelEnough(100, 5);

setObj();
