import run from '../index';
import { generateRandomNumber } from '../utils';

export default () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const dataToGame = () => {
    const num = generateRandomNumber(1);
    const question = num;
    return [question, num];
  };
  const check = (num) => {
    const iter = (element) => {
      if (element === 1) {
        return 'yes';
      }
      if (num % element === 0) {
        return 'no';
      }
      return iter(element - 1);
    };
    return iter(num - 1);
  };
  return run(text, dataToGame, check);
};
