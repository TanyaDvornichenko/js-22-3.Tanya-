/*Задача 3-5
Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.
Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

function getAllPropValues (array, prop) {
  'use strict';
  // Write code under this line 
  
}

// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
]; 

//console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

//console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

//console.log(getAllPropValues(products, 'category'));
//  []

Ожидается что при вызове 'getAllPropValues([])' вернется пустой массив
Ожидается что функция вернет массив ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват'] для объекта products и свойства 'name'
Ожидается что функция вернет массив [4, 2, 1, 1, 3, 7, 2] для объекта products и свойства 'quantity'
Ожидается что функция вернет массив [] для объекта products и свойства 'category'
Ожидается использование метода 'push'
Код должен содержать функцию 'getAllPropValues'
Ожидается использование оператора 'in'
*/

function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line 
    const fresh = [];
   
    for (const element of array) {
        if (prop in element) {
            fresh.push(element [prop]);
        }
       
      }
      return fresh;
  }
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
  console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category'));
  //  []