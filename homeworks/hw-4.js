// Задание 1
// Выведите в консоль 2 раза слово «Привет».

console.log("\nЗадание 1");
let i = 1;
while (i <= 2) {
  console.log("Привет");
  i++;
}


// Задание 2
// Выведите в консоль цифры от 1 до 5.

console.log("\nЗадание 2");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Задание 3
// Выведите в консоль числа от 7 до 22.

console.log("\nЗадание 3");

for (let i = 7; i <= 22; i++) {
  console.log(i);
}


// Задание 4
/* Есть объект (назовем его obj), который содержит следующие пары ключ-значение:
"Коля" : '200'
"Вася" : '300'
"Петя" : '400'
Эти пары представляют собой имена сотрудников и их зарплаты в долларах. Ваша задача написать код, который будет проходиться по всем записям этого объекта и выводить информацию о каждом сотруднике в формате: "имя сотрудника" — зарплата "сумма" долларов.
Для итерации по объекту используйте цикл for-in. */

console.log("\nЗадание 4");

let obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
}

for (let i in obj) {
  console.log(`${i} - ${obj[i]}`);
}

// Задание 5
/* Дано число n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 50.
Определите, какое число получится в результате.
Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную num. */

console.log("\nЗадание 5");

let n = 1000;
let num = 0;
do {
  // console.log("\nПеред делением:");
  // console.log(n);
  // console.log(num);
  n /= 2;
  num++;
  // console.log("\nПосле деления:");
  // console.log(n);
  // console.log(num);
} while (n >= 50);
console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);


// Задание 6
/* В вашей компании пятница является отчетным днем.
Нужно написать программу, которая:
считает дни месяца по датам,
определяет, какой день пятница,
выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.
Условия задачи:
Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).
Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида: "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
Исходите из того, что в нашем месяце 31 день. Должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам. */

console.log("\nЗадание 6");

let friday = 4;
let daysInMonth = 31;

for (let day = friday; day <= daysInMonth; day += 7) {
  console.log(`\nСегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
};


// Дополнительные задания
// Задание 1
// Дано число k = 100. Ваша задача — вычитать из него 7 до тех пор, пока результат вычитания не станет меньше 0. Определите, какое число получится в результате. Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную iterations.

console.log("\nДополнительное задание 1");

let k = 100;
let iterations = 0;

while (k >= 0) {
  k -= 7;
  iterations++;
  // console.log(`\nЭто k: ${k}`);
  // console.log(`\nЭто количесвто итераций: ${iterations}`);
}
console.log(`\nРезультат: ${k}\nКоличество итераций: ${iterations}`);


// Задание 2
// Создайте массив months с названиями всех месяцев года. Напишите программу, которая выводит название каждого месяца и его порядковый номер в году.

console.log("\nДополнительное задание 2");

let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for (let number in month) {
  // console.log(`\n${month[number]} - месяц № ${(Number(number) + 1)}`);
  console.log(`\n${month[number]} - месяц № ${(parseInt(number) + 1)}`);
}


//  Задание 3
// Создайте объект, описывающий книгу, с такими свойствами как "название", "автор", "год издания", "жанр". Напишите код, который выводит все свойства этого объекта в консоль.

console.log("\nДополнительное задание 3");

let book = {
  name: "Книга",
  author: "Автор",
  year: 1234,
  genre: "Жанр"
}

console.log(`\nСвойства объекта book:`);
for (let property in book) {
  console.log(`${property}: ${book[property]}`);
}


// Задание 4
// Создайте массив из 10 случайных чисел. Напишите код, который находит минимальное число в массиве и выводит его в консоль.

console.log("\nДополнительное задание 4");

let numbers = [];

for (let quantity = 10; quantity > 0; quantity--) {
  let randomNumber = Math.round((Math.random() * 100) + 1);
  // console.log(number);
  numbers.push(randomNumber);
}
console.log(numbers);

let min = numbers[0];
// console.log(min);

for (let number of numbers) {
  // console.log(`\nЭто j: ${number}`);
  if (number < min) {
    min = number
  }
}
console.log(`\nМассив: ${numbers}`);
console.log(`Минимальное число в массиве: ${min}`);
