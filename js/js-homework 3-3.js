/*Задача 3-3
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees),
 которая принимает объект сотрудников и возвращает имя самого продуктивного 
 (который выполнил больше всех задач). 
 Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".
 Редактор JavaScript:const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'  

Проверить
Ожидается что функция вернет пустую строку для пустого объекта
Ожидается что функция вернет 'a' для объекта {a:1}
Ожидается что функция вернет 'lorence' для объекта 'developers'
Ожидается что функция вернет 'mango' для объекта 'supports'
Ожидается что функция вернет 'lux' для объекта 'sellers'
Ожидается что findBestEmployee является функцией
*/


const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    // const values =  Object.values(employees);
// const keys = Object.keys(employees);

const bestEmployeeValue = Math.max(...Object.values(employees));

for (const key of Object.keys(employees)) {
if (employees[key] === bestEmployeeValue) {

      const bestEmployee = key;
        
    //   return `${bestEmployee}`;
      return bestEmployee;
    };
    };
    return "";
};
  


  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
//   console.table(developers);

  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  

  
  const idiots = {
    
  }
  console.log(findBestEmployee(idiots)); 
  // ''  