// Описание игры для сайта («Угадай число»)
/* Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.
Требования:
Сгенерируйте случайное число от 1 до 100.
Предложите пользователю угадать это число.
Дайте подсказки: больше или меньше загаданное число.
Завершите игру, когда пользователь угадает число.*/

function guessNumber() {
  // загадать целое число от 1 до 100
  let number = Math.round(Math.random() * 100);
  // console.log(`Загаданное число: ${number}`);

  while (true) {
    // преобразовать введённое пользователем значение в число
    let userAnswer = prompt("Угадайте число от 1 до 100\nВведите любое целое число от 1 до 100");
    let userNumber = Number(userAnswer);

    // если пользователь нажал "Отмена", то прервать игру
    if (userAnswer === null) {
      break;
      // если введённое пользователем значение не число или не целое число от 1 до 100
    }

    if (isNaN(userNumber) || (userNumber < 1) || (userNumber > 100) || (userNumber % 1 !== 0)) {
      // console.log(`\nЭто число, введённое пользователем: ${userNumber}, тип данных ${typeof (userNumber)}`);
      // console.log(`\nЗначение выражения isNaN(userNumber): ${isNaN(userNumber)}`);
      // console.log(`\nЗначение выражения (userNumber < 1): ${(userNumber < 1)}`);
      // console.log(`\nЗначение выражения (userNumber > 100): ${(userNumber > 100)}`);
      // console.log(`\nЗначение выражения (userNumber % 1 !== 0): ${(userNumber % 1 !== 0)}`);
      // console.log(`\nЗначение всего условия: ${(isNaN(userNumber) || (userNumber < 1) || (userNumber > 100) || (userNumber % 1 !== 0))}`);

      alert('Вы ввели не число или не целое от 1 до 100');
      // прервать текущую итерацию
      continue;
    }

    // если введённое пользователем значение - целое число от 1 до 100
    // console.log(`\nЭто userNumber после того, как пользователь ввёл целое число от 1 до 100: ${userNumber}, тип данных: ${typeof (userNumber)}`);
    if (userNumber === number) {
      alert(`Вы угадали! Загаданное число ${userNumber}`);
      break;
    } else if (number > userNumber) {
      alert(`Загаданное число больше ${userNumber}`);
      continue
    } else if (number < userNumber) {
      alert(`Загаданное число меньше ${userNumber}`);
      continue
    }
  }
}


// Описание игры для сайта («Простая арифметика»)
/* Создайте игру, где пользователю предлагаются простые арифметические задачи
Требования:
Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
Запрашивает у пользователя ответ.
Проверяет правильность ответа и выводит результат.
Последовательность действий
 Генерация задач:
Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
 Запрос ответа:
Запрашивайте у пользователя ответ на сгенерированную задачу.
Например, используя функцию prompt().
 Проверка и вывод результата:
Проверьте правильность ответа пользователя.
Выведите результат проверки: верный ответ или ошибка.*/

function simpleArithmetic() {
  let mathOperations = ['+', '-', '*', '/']

  function randomNumber() {
    let number = Math.round(Math.random() * 9) + 1;
    return number;
  }

  while (true) {
    let number1 = randomNumber();
    let number2 = randomNumber();
    let answer;
    let userAnswer;
    let userAnswerForChecks;

    let indexForMathOperation = Math.round(Math.random() * 3);

    let operation = mathOperations[indexForMathOperation];

    let task = String(number1) + " " + operation + " " + String(number2);


    switch (indexForMathOperation) {
      case 0:
        answer = number1 + number2;
        break;
      case 1:
        answer = number1 - number2;
        break;
      case 2:
        answer = number1 * number2;
        break;
      case 3:
        answer = Number((number1 / number2).toFixed(1));
        break;
    }

    if (indexForMathOperation === 3) {
      userAnswerForChecks = (prompt(`Решите задачу:\n${task} =\nОтвет впишите в поле ниже в виде числа с округлением до одного знака после запятой`)).trim();
    } else {
      userAnswerForChecks = (prompt(`Решите задачу:\n${task} =\nОтвет впишите в поле ниже в виде числа`)).trim();
    }

    if (userAnswerForChecks === null) {
      break;
    }

    if (userAnswerForChecks === "") {
      alert("Вы ничего не ответили");
      continue;
    }

    if (userAnswerForChecks.includes(',')) {
      userAnswerForChecks = Number(userAnswerForChecks.replace(',', '.'));
    }

    if (isNaN(Number(userAnswerForChecks))) {
      alert("Вы ввели не число");
      continue;
    }

    if (indexForMathOperation === 3) {
      if (String(answer).includes(".")) {
        userAnswer = String((Number(userAnswerForChecks)).toFixed(1));
      }

      userAnswer = String(userAnswerForChecks);

    } else {
      userAnswer = String(userAnswerForChecks);
    }

    answer = String(answer);

    if (userAnswer === answer || userAnswerForChecks !== "" && userAnswerForChecks === '0' && typeof (userAnswerForChecks) === 'string' && answer === '0') {
      alert(`Ваш ответ верный!\n${task} = ${answer}`)
    } else {
      alert(`Ошибка\nВы ответили ${userAnswer}\nПравильный ответ: ${task} = ${answer}`)
    }
  }
}


// Описание игры для сайта («Переверни текст»)
/* Описание: создайте игру, где пользователю нужно ввести текст, который будет перевернут.
Требования:
Сайт запрашивает у пользователя текст.
Сайт переворачивает введенный текст.
Сайт выводит перевернутый текст.*/

function reverseText() {
  while (true) {
    let reversedArr = [];
    let reversedUserInput = "";

    // получить текст от пользователя
    let userInput = prompt("Введите любой текст. Максимальная длина текста 20 символов")

    // проверить введённый текст
    if (userInput === null) {
      break;
    }

    if (userInput.length > 20) {
      alert("Вы ввели слишком длинный текст");
      continue;
    }

    if (String(userInput) === "") {
      alert("Вы ничего не ввели")
      continue;
    }

    // перевернуть текст 
    let arr = userInput.split(" ");
    // console.log("\nМассив строк ввода пользователя, разделённый по пробелу:");
    // console.log(arr);
    // console.log("\nДлина массива строк ввода пользователя, разделённый по пробелу:");
    // console.log(arr.length);

    for (let i = 0; i < arr.length; i++) {
      // let strSplited = arr[i].split("");
      // console.log("\ni-тая строка, разбитая на символы в массив:");
      // console.log(strSplited);
      // let strReversed = strSplited.reverse();
      // console.log("\nПеревёрнутый массив");
      // console.log(strReversed);
      // let strJoined = strReversed.join("");
      // console.log("\nСтрока, соединённая из перевёрнутого массива:");
      // console.log(strJoined);

      // reversedArr.push(strJoined);
      // console.log("\nМассив из перевёрнутых строк:");
      // console.log(reversedArr);

      let reversedString = arr[i].split("").reverse().join("");
      reversedArr.push(reversedString);
      // console.log("\nМассив из перевёрнутых строк:");
      // console.log(reversedArr);
    }
    reversedArr.reverse()
    // console.log("\nИтоговый перевёрнутый массив из перевёрнутых строк:");
    // console.log(reversedArr);

    reversedUserInput = reversedArr.join(" ");

    //вывести перевёрнутый текст
    alert(`Вы ввели: ${userInput}\nПеревёрнутый текст: ${reversedUserInput}`)
  }
}


// Описание игры для сайта («Викторина»)
/* Описание: создайте простую викторину с несколькими вопросами и вариантами ответов.
Требования:
Сайт предлагает несколько вопросов и вариантов ответов.
Запрашивает у пользователя ответы на каждый вопрос.
Подсчитывает и выводит количество правильных ответов.
Последовательность создания игры Викторина:

Используйте предоставленный массив вопросов:
Массив quiz содержит три вопроса с вариантами ответов и правильными ответами.
// Массив вопросов и правильных ответов
       const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
Запросите у пользователя ответы. Используйте функцию prompt() для получения ответа пользователя на каждый вопрос.
Проверьте ответы и подсчитайте правильные:
Сравните ответ пользователя с правильным ответом и увеличьте счетчик правильных ответов, если ответ верный.
Выведите результат:
В конце игры выведите количество правильных ответов с помощью alert().*/

const quiz = () => {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2 // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let correctAnswerCount = 0;

  for (let i = 0; i < quiz.length; i++) {
    let questionObject = quiz[i];
    let answers = questionObject.options;
    let correctAnswerNumber = questionObject.correctAnswer;

    // получить правильный ответ
    let correctAnswer = answers[correctAnswerNumber - 1].toLowerCase();

    correctAnswer = correctAnswer.split(" ")[1];

    let userAnswer = prompt(`Ответьте на вопрос:\n${questionObject.question}`)

    // если ответ - число, то перевести его в слово
    if (userAnswer === '7') {
      userAnswer = "семь";
    }

    if (userAnswer === '5') {
      userAnswer = "пять";
    }

    let userAnswerToLow = userAnswer.toLowerCase();

    // проверить, правильный ли ответ
    if (userAnswerToLow === correctAnswer) {
      correctAnswerCount++;
    }
  }

  switch (correctAnswerCount) {
    case 0:
      alert(`Вы не ответили правильно ни на один вопрос`);
      break;
    case 1:
      alert(`Вы ответили правильно на один вопрос`);
      break;
    case 2:
      alert(`Вы ответили правильно на два вопроса`);
      break;
    case 3:
      alert(`Вы ответили правильно на все вопросы!`);
      break;
  }
}


// Описание игры для сайта ("Камень, ножницы, бумага")
/* Описание: создайте игру "Камень, ножницы, бумага", где пользователь играет против компьютера.
Требования:
Сайт запрашивает у пользователя его выбор (камень, ножницы, бумага).
Генерирует случайный выбор компьютера.
Определяет победителя и выводит результат.
Последовательность создания игры "Камень, ножницы, бумага":

Используйте функцию prompt() для получения выбора пользователя: "камень", "ножницы" или "бумага".
Сгенерируйте случайный выбор компьютера.
Создайте массив с возможными вариантами: ["камень", "ножницы", "бумага"].
Используйте функцию для генерации случайного индекса и выберите вариант для компьютера.
Определите победителя.
Сравните выбор пользователя и выбор компьютера.
Используйте правила игры для определения победителя:
Камень побеждает ножницы.
Ножницы побеждают бумагу.
Бумага побеждает камень.
Если выборы совпадают, это ничья.
Выведите результат:
Выведите выборы пользователя и компьютера.
Сообщите результат игры: победа, поражение или ничья. */

const rockScissorsPaper = () => {
  const array = ["камень", "ножницы", "бумага"];

  while (true) {
    // сгенерировать случайный выбор компьютера
    let index = Math.round(Math.random() * (array.length - 1));
    let answer = array[index];


    // получить и обработать ответ пользователя
    let userAnswer = prompt("Сделайте выбор: камень, ножницы или бумага\nВыбранный ответ впишите в поле ниже");

    if (userAnswer === null) {
      break;
    }

    if (!userAnswer) {
      alert("Вы не ввели выбранный ответ\nНажмите кнопку 'ОК' и попробуйте ещё раз");
      continue;
    }

    userAnswer = userAnswer.trim().toLowerCase()

    if (userAnswer.length === 0) {
      alert("Вы не ввели выбранный ответ\nНажмите кнопку 'ОК' и попробуйте ещё раз");
      continue;
    }

    // удалить пробелы между буквами
    const arrWithoutSpace = [];
    for (let i = 0; i < userAnswer.split("").length; i++) {
      if (userAnswer.split("")[i] !== " ") {
        arrWithoutSpace.push(userAnswer.split("")[i]);
      }
    }
    userAnswer = arrWithoutSpace.join("");


    // проверка ответа пользователя
    if (!array.includes(userAnswer)) {
      alert("Вы выбрали ответ не из предложенного списка\nНажмите кнопку 'ОК' и попробуйте ещё раз");
    }

    if (array.includes(userAnswer)) {
      if (userAnswer === answer) {
        alert(`Вы выбрали: ${userAnswer}\nКомпьютер выбрал: ${answer}\nНичья!`);
      } else if (userAnswer === "камень" && answer === "ножницы" || userAnswer === "ножницы" && answer === "бумага" || userAnswer === "бумага" && answer === "камень") {
        alert(`Вы выбрали: ${userAnswer}\nКомпьютер выбрал: ${answer}\nВы победили!`);
      } else if (userAnswer === "ножницы" && answer === "камень" || userAnswer === "бумага" && answer === "ножницы" || userAnswer === "камень" && answer === "бумага") {
        alert(`Вы выбрали: ${userAnswer}\nКомпьютер выбрал: ${answer}\nВы проиграли :(`);
      }
    }
  }
}


// Описание игры для сайта ("Генератор случайных цветов")
// Описание: При каждом клике на кнопку фон страницы меняется на случайный цвет.
// Требования: Создайте кнопку, которая при нажатии меняет цвет фона (или другого элемента) на случайный.

const getRandomColor = () => {
  // const btnEl = document.getElementById("getRandomColorGame");
  const backgroundAboutGamesEl = document.getElementById("about-games");
  const backgroundMiniGamesEl = document.getElementById("mini-games");


  const getRandomNumberForColor = () => Math.round(Math.random() * 256);

  let red = getRandomNumberForColor();
  let green = getRandomNumberForColor();
  let blue = getRandomNumberForColor();

  let color = `rgb(${red}, ${green}, ${blue})`;


  backgroundAboutGamesEl.style.backgroundColor = color;
  backgroundMiniGamesEl.style.backgroundColor = color;
}