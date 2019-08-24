import readlineSync from 'readline-sync';

export const brainGames = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const generateRandomNumber = (interval = 100) => {
  const simpleRandom = Math.floor(Math.random() * interval);
  return simpleRandom;
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (trueAnswers) => {
    if (trueAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const num = generateRandomNumber();
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = num % 2 === 0;
    if (userAnswer === 'yes' && isEven) {
      console.log('Correct!');
      iter(trueAnswers + 1);
      return;
    }
    if (userAnswer === 'no' && !isEven) {
      console.log('Correct!');
      iter(trueAnswers + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}.'`);
    console.log(`Let's try again, ${userName}`);
  };
  const startCorrectUserAnswer = 0;
  return iter(startCorrectUserAnswer);
};
