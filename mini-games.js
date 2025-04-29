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
  console.log(`Загаданное число: ${number}`);

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
    let userAnswer = "";

    let indexForMathOperation = Math.round(Math.random() * 3);
    // console.log(indexForMathOperation);

    let operation = mathOperations[indexForMathOperation];
    // console.log(operation);

    let task = String(number1) + " " + operation + " " + String(number2);
    // let task = String(3) + "-" + String(3);


    switch (indexForMathOperation) {
      case 0:
        answer = number1 + number2;
        // console.log(number1 + number2);
        break;
      case 1:
        answer = number1 - number2;
        // console.log(number1 - number2);
        break;
      case 2:
        answer = number1 * number2;
        // console.log(number1 * number2);
        break;
      case 3:
        answer = (number1 / number2).toFixed(2);
        // console.log(number1 / number2);
        break;
    }
    answer = 0;
    // console.log("\nЭто answer:");
    // console.log(answer);

    let userAnswerForChecks = (prompt(`Решите задачу:\n${task} =\nОтвет впишите в поле ниже`)).trim();
    // let userAnswer = Number(prompt(`Решите задачу:\n${task} =\nОтвет впишите в поле ниже`));
    // console.log(userAnswer);

    if (userAnswerForChecks === null) {
      break;
    }

    // console.log("\nЭто ответ пользователя до проверки");
    // console.log(userAnswerForChecks);
    // console.log(typeof(userAnswerForChecks));

    if (userAnswerForChecks.includes(',')) {
      userAnswerForChecks = userAnswerForChecks.replace(',', '.');
      // console.log("\nЭто ответ пользователя в проверке");
      // console.log(userAnswerForChecks);
    }

    // console.log("\nЭто ответ пользователя после проверки");
    // console.log(userAnswerForChecks);

    if (indexForMathOperation === 3) {
      userAnswer = Number(userAnswerForChecks).toFixed(2);
      // console.log("\nЭто ответ пользователя после округления");
      // console.log(userAnswer);
    } else {
      userAnswer = Number(userAnswerForChecks);
    }

    if (userAnswer === answer || userAnswerForChecks !== "" && userAnswerForChecks === '0' && typeof(userAnswerForChecks) === string && answer === 0) {
    // if (userAnswer === answer) {
      alert("Ваш ответ верный!")
    } else {
      alert("Ошибка.")
    }
  }
}
