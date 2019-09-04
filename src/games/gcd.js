import run from '..';
import generateRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisior of given numbers.';

const findGcd = (num1, num2) => {
  const lesserNum = num1 > num2 ? num2 : num1;
  for (let i = lesserNum; i !== 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateGameData = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2);
  return [question, String(correctAnswer)];
};

export default () => run(gameDescription, generateGameData);
