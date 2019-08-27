import readlineSync from 'readline-sync';

const correctUserAnswersToWinCount = 3;

const run = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (trueAnswersCount, data) => {
    if (trueAnswersCount === correctUserAnswersToWinCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, answer] = data;
    const correctAnswer = String(answer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      iter(trueAnswersCount + 1, generateGameData());
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  };
  const startCorrectUserAnswer = 0;
  return iter(startCorrectUserAnswer, generateGameData());
};

export default run;
