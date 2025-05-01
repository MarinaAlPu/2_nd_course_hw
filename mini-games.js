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
    let userAnswer;
    let userAnswerForChecks;

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
        answer = Number((number1 / number2).toFixed(1));
        // console.log(number1 / number2);
        break;
    }
    // console.log("\nЭто answer после switch:");
    // console.log(answer);
    // console.log(typeof (answer));

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

    // console.log("\nЭто ответ пользователя до проверки");
    // console.log(userAnswerForChecks);
    // console.log(typeof (userAnswerForChecks));

    if (userAnswerForChecks.includes(',')) {
      userAnswerForChecks = Number(userAnswerForChecks.replace(',', '.'));
      // console.log("\nЭто ответ пользователя в проверке");
      // console.log(userAnswerForChecks);
      // console.log(typeof (userAnswerForChecks));
    }

    // console.log("\nЭто ответ пользователя после проверки");
    // console.log(userAnswerForChecks);
    // console.log(typeof (userAnswerForChecks));

    // console.log("\nРезультат Number(userAnswerForChecks):");
    // console.log(Number(userAnswerForChecks));
    // console.log("\nПроверка userAnswerForChecks на isNaN:");
    // console.log(isNaN(Number(userAnswerForChecks)));

    if (isNaN(Number(userAnswerForChecks))) {
      alert("Вы ввели не число");
      continue;
    }

    // console.log("\nЭто ответ answer перед заменой запятой на точку:");
    // console.log(answer);
    // console.log(typeof (answer));
    if (indexForMathOperation === 3) {
      if (String(answer).includes(".")) {
        userAnswer = String((Number(userAnswerForChecks)).toFixed(1));
        // console.log("\nЭто ответ пользователя после округления:");
        // console.log(userAnswer);
        // console.log(typeof (userAnswer));
      }
      // не number, т.к. с number при правильном ответе 0 нажатие кнопки "Ок" или "Enter" приводит к правильному ответу, поэтому сравниваем строки в проверках
      userAnswer = String(userAnswerForChecks);
    } else {
      userAnswer = String(userAnswerForChecks);
    }

    answer = String(answer);
    // console.log("\nЭто ответ userAnswer перед алертом:");
    // console.log(userAnswer);
    // console.log(typeof (userAnswer));
    // console.log("\nЭто ответ answer перед алертом:");
    // console.log(answer);
    // console.log(typeof (answer));

    // тип данных д.б. в кавычках!!! typeof (userAnswerForChecks) === 'string'
    if (userAnswer === answer || userAnswerForChecks !== "" && userAnswerForChecks === '0' && typeof (userAnswerForChecks) === 'string' && answer === '0') {
      alert(`Ваш ответ верный!\n${task} = ${answer}`)
    } else {
      alert(`Ошибка\nВы ответили ${userAnswer}\nПравильный ответ: ${task} = ${answer}`)
    }
  }
}
