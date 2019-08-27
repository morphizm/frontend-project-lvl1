import run from '..';
import generateRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisior of given numbers.';

const calculateGcd = (num1, num2) => {
  const gcd = (lesser, bigger) => {
    const findGcd = (num) => {
      if (lesser % num === 0 && bigger % num === 0) {
        return num;
      }
      return findGcd(num - 1);
    };
    return findGcd(lesser);
  };
  return num1 > num2 ? gcd(num2, num1) : gcd(num1, num2);
};

export default () => {
  const generateGameData = () => {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = calculateGcd(num1, num2);
    return [question, correctAnswer];
  };
  return run(gameDescription, generateGameData);
};
