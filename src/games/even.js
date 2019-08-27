import run from '..';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const generateGameData = () => {
    const num = generateRandomNumber();
    const correctAnswer = isEven(num);
    return [num, correctAnswer];
  };
  return run(gameDescription, generateGameData);
};
