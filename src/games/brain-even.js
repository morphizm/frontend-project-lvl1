import run from '../index';
import generateRandomNumber from '../utils';

export default () => {
  const text = 'Answer "yes" if number even otherwise answer "no".';
  const dataToGame = () => {
    const num = generateRandomNumber();
    const question = num;
    return [question, num];
  };
  const check = (num) => (num % 2 === 0 ? 'yes' : 'no');
  return run(text, dataToGame, check);
};
