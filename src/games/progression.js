import run from '..';
import generateRandomNumber from '../utils';

const generateProggression = (start, step, lengthOfProgression) => {
  const iter = (progression, counter) => {
    if (counter === lengthOfProgression) {
      return [start, ...progression];
    }
    return iter([...progression, (start + counter * step)], counter + 1);
  };
  return iter([], 1);
};

const gameDescription = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const generateGameData = () => {
  const step = generateRandomNumber(1, 30);
  const start = generateRandomNumber();
  const progression = generateProggression(start, step, lengthOfProgression);
  const hiddenElementIndex = generateRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '...';
  const questionOfRound = progression.join(' ');
  return [questionOfRound, String(correctAnswer)];
};

export default () => run(gameDescription, generateGameData);
