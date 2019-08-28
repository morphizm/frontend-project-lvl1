import run from '..';
import generateRandomNumber from '../utils';

const generateSign = (num) => {
  const operations = {
    plus: '+',
    minus: '-',
    multiplication: '*',
  };
  if (num < 10) {
    return operations.multiplication;
  }
  if (num > 20) {
    return operations.minus;
  }
  return operations.plus;
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
    const sign = generateSign(num2);
    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = calculate(num1, num2, sign);
    return [question, correctAnswer];
  };

  return run(gameDescription, generateGameData);
};
