import run from '../index';
import generateRandomNumber from '../utils';

export default () => {
  const text = 'Find the greatest common divisior of given numbers.';
  const dataToGame = () => {
    const num1 = generateRandomNumber(1);
    const num2 = generateRandomNumber(1);
    const question = `${num1} ${num2}`;
    return [question, num1, num2];
  };
  const check = (array) => {
    const [num1, num2] = array;
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
  return run(text, dataToGame, check);
};
