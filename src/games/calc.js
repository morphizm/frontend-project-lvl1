import run from '..';
import generateRandomNumber from '../utils';

const operations = ['+', '-', '*'];

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const gameDescription = 'What is result of the expression?';

const generateGameData = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber(0, 30);
  const operation = operations[generateRandomNumber(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation);
  return [question, String(correctAnswer)];
};

export default () => run(gameDescription, generateGameData);
