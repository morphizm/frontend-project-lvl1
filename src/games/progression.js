import run from '..';
import generateRandomNumber from '../utils';

const generateProggression = (start, step) => {
  const iter = (progression) => {
    const len = progression.length;
    if (len === 10) {
      return progression;
    }
    return iter([...progression, progression[len - 1] + step]);
  };
  return iter([start]);
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  const generateGameData = () => {
    const stepForProgression = generateRandomNumber(1, 30);
    const startForProgression = generateRandomNumber();
    const progression = generateProggression(startForProgression, stepForProgression);
    const hiddenElementIndex = generateRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '...';
    const questionOfRound = progression.join(' ');
    return [questionOfRound, correctAnswer];
  };

  return run(gameDescription, generateGameData);
};
