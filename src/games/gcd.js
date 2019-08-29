import run from '..';
import generateRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisior of given numbers.';

const calculateGcd = (num1, num2) => {
  const gcd = (lesser, bigger) => {
    for (let i = lesser; i !== 1; i -= 1) {
      if (lesser % i === 0 && bigger % i === 0) {
        return i;
      }
    }
    return 1;
  };
  return num1 > num2 ? gcd(num2, num1) : gcd(num1, num2);
};

export default () => {
  const generateGameData = () => {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const questionOfRound = `${num1} ${num2}`;
    const correctAnswer = calculateGcd(num1, num2);
    return [questionOfRound, correctAnswer];
  };
  return run(gameDescription, generateGameData);
};
