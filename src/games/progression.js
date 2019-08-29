import run from '..';
import generateRandomNumber from '../utils';

const generateProggression = (start, step, lengthProgr) => {
  const iter = (progression) => {
    const len = progression.length;
    if (len === lengthProgr) {
      return progression;
    }
    return iter([...progression, progression[len - 1] + step]);
  };
  return iter([start]);
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  const generateGameData = () => {
    const stepForProgr = generateRandomNumber(1, 30);
    const startForProgr = generateRandomNumber();
    const lengthOfProgr = 10;
    const progression = generateProggression(startForProgr, stepForProgr, lengthOfProgr);
    const hiddenElementIndex = generateRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '...';
    const questionOfRound = progression.join(' ');
    return [questionOfRound, correctAnswer];
  };

  return run(gameDescription, generateGameData);
};
