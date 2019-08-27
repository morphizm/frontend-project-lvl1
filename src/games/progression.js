import run from '..';
import generateRandomNumber from '../utils';

const generateProggression = () => {
  const step = generateRandomNumber(1, 30);
  const startNum = generateRandomNumber();
  const iter = (array) => {
    const len = array.length;
    if (len === 10) {
      return array;
    }
    return iter([...array, array[len - 1] + step]);
  };
  return iter([startNum]);
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  const generateGameData = () => {
    const progression = generateProggression();
    const hideElement = generateRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hideElement];
    progression[hideElement] = '...';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  return run(gameDescription, generateGameData);
};
