// Мінімум

const shoppingList = [
  { name: "bread", quantity: 1, isBought: true, price: 20, sum: 0 },

  { name: "butter", quantity: 1, isBought: false, price: 50, sum: 0 },

  { name: "milk", quantity: 2, isBought: false, price: 19, sum: 0 },

  { name: "potato", quantity: 10, isBought: false, price: 1, sum: 0 },

  { name: "apple", quantity: 8, isBought: true, price: 3, sum: 0 },
];

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

const sortListByBought = (a, b) => (a.isBought > b.isBought ? 1 : -1);

shoppingList.sort(sortListByBought);

console.log(shoppingList);

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const purchaseProducts = function (someName) {
  for (i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === someName) {
      return (shoppingList[i].isBought = true);
    }
  }
};

purchaseProducts("potato");
console.log(shoppingList);

//Створення списку (не) придбаних продуктів.

const sortNotPurcaseList = shoppingList.filter(
  (list) => list.isBought === false
);
console.log(sortNotPurcaseList);

//Норма

/*Видалення продукту зі списку 
(видалення повинно проводитися шляхом створення нового масиву,
 в якому продукт, що ми шукаємо, буде відсутнім)
*/

const deliteListItem = function (itemName) {
  for (let j = 0; j < shoppingList.length; j++) {
    if (shoppingList[j].name === itemName) {
      return shoppingList.splice(j, 1);
    }
  }
};

// deliteListItem('potato');
// console.log(shoppingList);

// let remove = deliteListItem('potato');
// console.log(remove);

//Додавання покупки в список.

shoppingList.push(
  { name: "whiskey", quantity: 2, isBought: true, price: 390, sum: 0 },
  { name: "apple", quantity: 8, isBought: true, price: 3, sum: 0 }
);

console.log(shoppingList);
