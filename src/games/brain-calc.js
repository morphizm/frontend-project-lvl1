import run from '../index';
import { generateRandomNumber } from '../utils';

const generateSign = (num) => {
  if (num < 10) {
    return '*';
  }
  if (num > 50) {
    return '-';
  }
  return '+';
};

export default () => {
  const text = 'What is result of the expression?';
  const dataToGame = () => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const sign = generateSign(num1);
    const question = `${num1} ${sign} ${num2}`;
    return [question, num1, num2, sign];
  };
  const check = (array) => {
    const [num1, num2, sign] = array;
    if (sign === '+') {
      return String(num1 + num2);
    }
    if (sign === '-') {
      return String(num1 - num2);
    }
    return String(num1 * num2);
  };
  return run(text, dataToGame, check);
};
