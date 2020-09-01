/*CRUD для свойств объекта
С - create (создать)
R - read (читать)
U - update (обновить)
D - delete (удалить)
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле 'mood' со значением 'happy'
добавляет поле 'full time' со значением true
заменяет значение 'hobby' на 'skydiving'
заменяет значение 'premium' на false
в переменную message записывает содержимое объекта user:
для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
с помощью оператора for...of
в формате ключ:значение
c переносом строки ('\n')  


let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
  }
  console.log (`в исходном обьекте ` , [Object.keys(user)], `в значение`, user.hobby)  
 
user.mood = `happy`;
user.fullTime = true;
user.hobby ='skydiving';
user.premium = false;

console.log (`в нововм обьекте ` , [Object.keys(user)], `в значение`, user.hobby)  


//Write code under this line  
 
const keys = Object.keys(user);
// Write code under this line

for (const key of keys) {
    // console.log('Value: ', user[key], '\n');
    console.log(`${key} `, user[key]);

    message += `${key}: ${user[key]}\n`;
  }


console.log ( 'новый обект message' , '\n', message )

 */

// РЕШЕНИЕ ЗАДАЧИ  ДАЛЬШЕЕЕ ----- 


let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
user.mood = `happy`;
user['full time'] = true;
user.hobby ='skydiving';
user.premium = false;



//Write code under this line  

 
const keys = Object.keys(user);
// Write code under this line


for (const key of keys) {
   console.log('Value: ' , user[key], '\n');
   message += `${key}: ${user[key]}\n`;
    }

