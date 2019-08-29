import run from '..';
import generateRandomNumber from '../utils';

const generateSign = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operations.length);
  return operations[randomIndex];
};

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

export default () => {
  const generateGameData = () => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber(0, 30);
    const sign = generateSign();
    const questionOfRound = `${num1} ${sign} ${num2}`;
    const correctAnswer = calculate(num1, num2, sign);
    return [questionOfRound, correctAnswer];
  };

  return run(gameDescription, generateGameData);
};
