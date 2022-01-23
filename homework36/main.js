/*
Мінімум

Створи масив, що описує чек в магазині. 
Кожен елемент масиву складається з назви товару, кількості і ціни за одиницю товару. 
Написати наступні функції.
1 Роздруківка чека на екран.
2 Підрахунок загальної суми покупки.
3 Отримання найдорожчої покупки в чеку.
4 Підрахунок середньої вартості одного товару в чеку.
*/

const bill = [
  { name: "bread", quantity: 1, price: 20 },
  { name: "milk", quantity: 1, price: 15 },
  { name: "apple", quantity: 10, price: 28 },
  { name: "butter", quantity: 1, price: 50 },
  { name: "eggs", quantity: 10, price: 34 },
];

//1
function setBill(someArr) {
  const displayBill = (item) =>
    console.log(
      `Назва товару: ${item.name}, кількість: ${item.quantity}, ціна: ${item.price}`
    );
  someArr.forEach(displayBill);
}

setBill(bill);

//2
function getSum(someArr) {
  let result = 0;
  for (let i = 0; i < someArr.length; i++) {
    result += someArr[i].price;
  }

  return result;
}

console.log(getSum(bill));

//3
const maxPrice = bill.reduce(function (prev, curr) {
  return curr.price > prev.price ? curr : prev;
});

console.log(maxPrice);

//4
const averageCost = (someArr) => {
  return getSum(bill) / someArr.length;
};

console.log(averageCost(bill));

/*
Норма

Створити масив аудиторій академії. Об'єкт-аудиторія складається з
    1.назви 
    2.кількості місць для посадки (від 10 до 20)
    3.назви факультету, для якого вона призначена
    4.вільна аудиторія чи ні
    5.список з назвами груп, які можуть займатися в даній аудиторії. 
Написати кілька функцій для роботи з ним:
    1. Виводити список всіх аудиторій.
    2. Виводити список аудиторій для зазначеного факультету.
*/

const audienses = [
  {
    name: "101",
    sits: 15,
    faculty: "IT",
    isFree: true,
    groops: ["IT-01", "Math-01"],
  },
  {
    name: "102",
    sits: 10,
    faculty: "Math",
    isFree: true,
    groops: ["IT-01", "Math-01", "Philosophy-01"],
  },
  {
    name: "103",
    sits: 20,
    faculty: "Biology",
    isFree: true,
    groops: [
      "IT-01",
      "Math-01",
      "Philosophy-01",
      "Biology-01",
      "Historical-01",
    ],
  },
  {
    name: "104",
    sits: 12,
    faculty: "Philosophy",
    isFree: true,
    groops: ["Philosophy-01", "Biology-01", "Historical-01"],
  },
  {
    name: "105",
    sits: 16,
    faculty: "Historical",
    isFree: true,
    groops: ["Philosophy-01", "Biology-01", "Historical-01"],
  },
];

//1

const audiensesList = (arr) => {
  arr.forEach((item) =>
    console.log(
      `Аудиторія: ${item.name}, Місць: ${item.sits}, Факультет: ${item.faculty}, Чи вільна: ${item.isFree}, Групи, які можуть займатися: ${item.groops}`
    )
  );
};

audiensesList(audienses);

//2
const audiensesForFaculty = (arr) => {
  const result = arr.filter((audiense) => audiense.faculty === "Philosophy");
  return result;
};
console.log(audiensesForFaculty(audienses));
