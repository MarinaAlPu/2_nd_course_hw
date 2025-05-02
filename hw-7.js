// Задание 1
// Преобразовать строку 'js' в верхний регистр.

console.log("Задание 1");

let string1 = 'js';
let stringToUpperCase = string1.toLocaleUpperCase();
console.log(`Строка 'js' в верхнем регистре: ${stringToUpperCase}`);


//  Задание 2
/* Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив,
содержащий только те элементы первого массива, которые начинаются со второй строки.
Регистр символов не влияет на результат.*/

console.log("\nЗадание 2");

function generateRandomString(length) {
  let result = '';
  // let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let characters = 'ABCDabcd';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.round(Math.random() * charactersLength));
  }
  return result;
}

let arr2 = [generateRandomString(5), generateRandomString(7), generateRandomString(10), generateRandomString(4), generateRandomString(2), generateRandomString(5), generateRandomString(7), generateRandomString(10), generateRandomString(4), generateRandomString(2)];
let string2 = generateRandomString(1);

console.log("Массив: ", arr2);
console.log(`Строка: ${string2}`);

let arr2Low = [];
let string2Low = "";
let newArr2Low = [];
let newArr2 = [];

const getElements = (array, string) => {
  // привести все строки массива к одному регистру
  for (let el of array) {
    el = el.toLowerCase();
    arr2Low.push(el);
  }
  // console.log("\nЭто массив из строк в нижнем регистре");
  // console.log(arr2Low);

  // привести строку к одному регистру
  string2Low = string.toLowerCase();
  // console.log("\nЭто строка нижнем регистре");
  // console.log(string2Low);

  // проверить в цикле начинается ли строка массива со строки, если начинается, то записать в новый массив
  for (let i = 0; i < arr2Low.length; i++) {
    // console.log("\nЭто строка нижнем регистре");
    // console.log(string2Low);

    // console.log("\nЭто элемент массива");
    // console.log(arr2Low[i]);

    if (arr2Low[i].startsWith(string2Low)) {
      newArr2Low.push(arr2Low[i]);
    }
  }
  // console.log("\nЭто новый массив из строк, которые начинаются с заданной подстроки:");
  // console.log(newArr2Low);

  // console.log("\nНачальный массив:");
  // console.log(arr2);
  // console.log("\nОтсортированный массив:");
  // console.log(newArr2Low);

  for (let i = 0; i < arr2.length; i++) {
    // console.log("\nЭлемент начального массива:");
    // console.log(arr2[i]);
    for (let j = 0; j < newArr2Low.length; j++){
      // console.log("\nЭлемент отсортированного массива:");
      // console.log(newArr2Low[j]);
      if (arr2[i].toLowerCase() === newArr2Low[j].toLowerCase()) {
        newArr2.push(arr2[i]);
        // console.log("\nИтоговый массив:");
        // console.log(newArr2);
      }
    }
  }

  // вернуть новый массив
  return newArr2;
}

// console.log("\nСписок строк из массива, которые начинаются со строки:");
console.log("Итоговый массив: ", getElements(arr2, string2));

// Задание 3
/* Округлить число 32.58884:
До меньшего целого.
До большего целого.
До ближайшего целого.*/

console.log("\nЗадание 3");

let number3 = 32.58884;

let numberRoundDown = Math.floor(number3);
console.log(`\nОкруглили до меньшего целого ${number3}:`);
console.log(numberRoundDown);

let numberRoundUp = Math.ceil(number3);
console.log(`\nОкруглили до большего целого ${number3}:`);
console.log(numberRoundUp);

let numberRound = Math.round(number3);
console.log(`\nОкруглили до ближайшего целого ${number3}:`);
console.log(numberRound);


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log("\nЗадание 4");

let numbers4 = [52, 53, 49, 77, 21, 32];
console.log("\nМассив:");
console.log(numbers4);

let minNumber = Math.min(...numbers4);
console.log("\nМинимальное число:");
console.log(minNumber);

let maxNumber = Math.max(...numbers4);
console.log("\nМаксимальное число:");
console.log(maxNumber);


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

console.log("\nЗадание 5");

const printRandomNumber = () => {
  let randomNumber = Math.random() * 9 + 1;
  console.log("\nСлучайное число от 1 до 10:");
  console.log(randomNumber);
}

printRandomNumber();


// Задание 6
/* Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
Длина массива должна быть в два раза меньше переданного числа.*/

console.log("\nЗадание 6");

const randomNumbers = (number) => {
  let arr6 = [];

  for (let i = 0; i < Math.floor(number / 2); i++) {
    let num = Math.round(Math.random() * (number + 1));
    arr6.push(num)
  }
  return arr6;
}

console.log(randomNumbers(15));


// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

console.log("\nЗадание 7");
let number7;

const randomNumber = (number1, number2) => {
  let min = Math.min(number1, number2);
  let range = Math.abs(number1 - number2);

  number7 = Math.round(Math.random() * (range)) + min;
  return number7;
}

console.log(randomNumber(-3, 2));


// Задание 8
// Вывести в консоль текущую дату.

console.log("\nЗадание 8");

let currentDate8 = (new Date()).toLocaleDateString();

console.log("Текущая дата: ", currentDate8);


// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

console.log("\nЗадание 9");

// знак + перед датой - перевод даты в миллисекунды
let currentDate9 = +(new Date());
// console.log("\nТекущая дата");
// console.log(currentDate9);

let days73 = 73 * 24 * 60 * 60 * 1000;
// console.log("\n73 дня");
// console.log(days73);

let dateIn73days = +currentDate9 + days73;
// console.log("\nДата через 73 дня в миллисекундах");
// console.log(dateIn73days);

console.log("Через 73 дня наступит дата: ", (new Date(dateIn73days)).toLocaleDateString());


// Задание 10
/* Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды] */

console.log("\nЗадание 10");
let date, time;

const getDateAndTime = (fullDate) => {
  // console.log("\nДата, переданная в функцию:");
  // console.log(fullDate);

  const options = { day: 'numeric', month: 'long', year: 'numeric'};

  let formattedDate = fullDate.toLocaleDateString('ru-RU', options);
  // console.log("\nОтформатированная дата:");
  // console.log(formattedDate);

  let weekday = fullDate.toLocaleDateString('ru-RU', { weekday: 'long' })
  // console.log("\nДень недели переданной в функцию даты:");
  // console.log(weekday);
  
  
  time = fullDate.toLocaleTimeString('ru-RU');
  // console.log("\nВремя из переданной в функцию даты:");
  // console.log(time);


  return `Дата: ${formattedDate} - это ${weekday}.\nВремя: ${time}`;
}

console.log(getDateAndTime(new Date()));