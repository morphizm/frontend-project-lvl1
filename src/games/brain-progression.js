import run from '../index';
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

export default () => {
  const text = 'What number is missing in the progression?';
  const dataToGame = () => {
    const progression = generateProggression();
    const shadeElement = generateRandomNumber(0, 9);
    const shadeProgression = progression.slice();
    shadeProgression[shadeElement] = '...';
    const question = shadeProgression.join(' ');
    return [question, progression, shadeElement];
  };
  const check = (array) => {
    const [progression, shadeElement] = array;
    const element = progression[shadeElement];
    return element;
  };
  return run(text, dataToGame, check);
};
