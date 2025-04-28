/* Задание 1
Дан массив: [1, 5, 4, 10, 0, 3].
Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
После вывода значения 10 в консоль цикл должен прекратить свою работу.*/

console.log("\nЗадание 1");

const numbers1 = [1, 5, 4, 10, 0, 3];

for (let number of numbers1) {
  if (number === 10) {
    console.log(number);
    break;
  } else {
    console.log(number);
  }
}


/* Задание 2
Дан массив: [1, 5, 4, 10, 0, 3].
Найдите индекс значения 4 в этом массиве.*/

console.log("\nЗадание 2");

const numbers2 = [1, 5, 4, 10, 0, 3];

console.log('Индекс числа 4:', numbers2.indexOf(4));


/* Задание 3
Дан массив чисел: [1, 3, 5, 10, 20].
С помощью метода join выведите элементы массива через пробел (пустую строку ' ').*/

console.log("\nЗадание 3");

const numbers3 = [1, 3, 5, 10, 20];

console.log(numbers3.join(' '));


/* Задание 4
С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].*/

console.log("\nЗадание 4");




/* Задание 5
Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.*/

console.log("\nЗадание 5");

const numbers5 = [1, 1, 1];

let count5 = 0;

while (count5 < 3) {
  numbers5.push(2);
  count5++;
}

console.log('Это массив с новыми данными: ', numbers5);

/* Задание 6
Дан массив: [9, 8, 7, 'a', 6, 5].
С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.*/

console.log("\nЗадание 6");

const numbers6 = [9, 8, 7, 'a', 6, 5];

numbers6.sort();
// console.log(numbers6);

let index = numbers6.indexOf('a');
// console.log(index);

// numbers6.pop('a');
// console.log(numbers6);

numbers6.splice(index, 1);
console.log(numbers6);


/* Задание 7
Дан массив: [9, 8, 7, 6, 5].
Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».*/

console.log("\nЗадание 7");

const numbers7 = [9, 8, 7, 6, 5];

// let userNumber = Number(prompt("Угадайте число. Введите однозначное целое положительное число"));

// if (numbers7.includes(userNumber)) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }


/* Задание 8
Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
Для этого задания вам пригодится метод reverse(). Он располагает элементы массива в порядке, обратном исходному.*/

console.log("\nЗадание 8");

let string = 'abcdef';
let arr = string.split('');
// console.log(arr);

let reverseArr = arr.reverse();
// console.log('Это перевёрнутый массив: ', reverseArr);

let reverseString = reverseArr.join('');
console.log('Это перевёрнутая строка: ', reverseString);


/* Задание 9
Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].*/

console.log("\nЗадание 9");

const arr9 = [[1, 2, 3], [4, 5, 6]];

let newArr9 = arr9[0].concat(arr9[1]);
console.log(newArr9)


/* Задание 10
Создайте массив с произвольными числами (диапазон от 1 до 10).
Переберите его с помощью цикла for.
В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
Следующий элемент массива можно получить с помощью индекса: i + 1.
Обратите внимание, что у последнего элемента нет следующего.*/

console.log("\nЗадание 10");

const arr10 = [];
let arr10Length = 7;

function randomNumber() {
  let number = Math.round(Math.random() * 9) + 1;
  return number;
}

let count10 = 0;
while (count10 < arr10Length) {
  arr10.push(randomNumber());
  count10++;
}
console.log(arr10);

for (let i = 0; i < arr10.length - 1; i++) {
  console.log("Это сумма текущего и следующего элементов массива", arr10[i] + arr10[i + 1]);
}


/* Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.*/

console.log("\nЗадание 11");

const arr11 = [];
let arr11Length = 7;

function randomNumber() {
  let number = Math.round(Math.random() * 9) + 1;
  return number;
}

let count11 = 0;
while (count11 < arr11Length) {
  arr11.push(randomNumber());
  count11++;
}
console.log(arr11);

const newArr11 = arr11.map(number => (
  number ** 2
));

console.log(newArr11);


/* Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.*/

console.log("\nЗадание 12");

let arr12 = ['task1', 'lesson6', 'myHomeWork'];
let newArr12 = [];

for (let i = 0; i < arr12.length; i++) {
  // let x = arr12[i].length;
  // console.log("Это длина ", i, '-го элемента массива', x);
  newArr12.push(arr12[i].length);
}

console.log("Это новый массив из длин слов: ", newArr12);


/* Задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.*/

console.log("\nЗадание 13");

const arr13 = [];
let newArr13 = [];

let x = -5;
let y = 5;

let min = Math.min(x, y);
// console.log(min);
let range = Math.abs(x - y);
// console.log(range);

function randomNumber13() {
  let number = Math.round(Math.random() * range);
  // console.log(number);
  number += min
  // console.log(number);
  return number;
}

let count13 = 0;
while (count13 < range) {
  arr13.push(randomNumber13());
  count13++;
}
console.log(arr13);

function getNewArr(arr) {
  newArr13 = arr13.filter(number => number < 0);
  return newArr13
}

console.log(getNewArr(arr13));


/* Задание 14
Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.*/

console.log("\nЗадание 14");

const arr14 = [];
let arr14Length = 10;
const newArr14 = [];

function randomNumber() {
  let number = Math.round(Math.random() * 9) + 1;
  return number;
}

let count14 = 0;
while (count14 < arr14Length) {
  arr14.push(randomNumber());
  count14++;
}
// console.log(arr14);

for (let number of arr14) {
  if (number % 2 === 0) {
    newArr14.push(number)
  } else {
    continue;
  }
}

console.log(arr14);
console.log(newArr14);


/* Задание 15
Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.*/

console.log("\nЗадание 15");

const arr15 = [];
let arr15Length = 6;
const newArr15 = [];

function randomNumber() {
  let number = Math.round(Math.random() * 9) + 1;
  return number;
}

let count15 = 0;
while (count15 < arr15Length) {
  arr15.push(randomNumber());
  count15++;
}
console.log(arr15);

let arithmeticMean = (arr15.reduce((total, number) => total + number, 0)) / arr15Length;

console.log(arithmeticMean);
