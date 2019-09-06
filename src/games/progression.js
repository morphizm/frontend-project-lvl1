import run from '..';
import generateRandomNumber from '../utils';

const generateProgression = (start, step, lengthOfProgression) => {
  const iter = (progression, counter) => {
    if (counter === lengthOfProgression) {
      return progression;
    }
    return iter([...progression, (start + counter * step)], counter + 1);
  };
  return iter([], 0);
};

const gameDescription = 'What number is missing in the progression?';

const length = 10;

const generateGameData = () => {
  const step = generateRandomNumber(1, 30);
  const start = generateRandomNumber();
  const progression = generateProgression(start, step, length);
  const hiddenElementIndex = generateRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '...';
  const questionOfRound = progression.join(' ');
  return [questionOfRound, String(correctAnswer)];
};

export default () => run(gameDescription, generateGameData);
