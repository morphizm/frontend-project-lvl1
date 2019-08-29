import run from '..';
import generateRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

export default () => {
  const generateGameData = () => {
    const questionOfRound = generateRandomNumber();
    const correctAnswer = isEven(questionOfRound) ? 'yes' : 'no';
    return [questionOfRound, correctAnswer];
  };
  return run(gameDescription, generateGameData);
};
