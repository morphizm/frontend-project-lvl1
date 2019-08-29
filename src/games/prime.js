import run from '..';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (element) => {
    if (element === 1) {
      return true;
    }
    if (num % element === 0) {
      return false;
    }
    return iter(element - 1);
  };
  return iter(num - 1);
};

export default () => {
  const generateGameData = () => {
    const questionOfRound = generateRandomNumber(1, 100);
    const correctAnswer = isPrime(questionOfRound) ? 'yes' : 'no';
    return [questionOfRound, correctAnswer];
  };
  return run(gameDescription, generateGameData);
};
