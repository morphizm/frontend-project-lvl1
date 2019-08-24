import run from '../index';
import { generateRandomNumber } from '../utils';

export default () => {
  const text = 'Answer "yes" if number even otherwise answer "no".';
  const data = () => {
    const num = generateRandomNumber();
    const question = num;
    return [question, num];
  };
  const f = (num) => (num % 2 === 0 ? 'yes' : 'no');
  return run(text, data, f);
};
