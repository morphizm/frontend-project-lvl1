import readlineSync from 'readline-sync';

const run = (text, dataToGame, f) => {
  console.log('Welcome to the Brain Games!');
  console.log(text);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (trueAnswers, data) => {
    if (trueAnswers === 3) {
      // Because game duration = 3 rounds;
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, ...rest] = data;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = f(rest);
    if (correctAnswer === userAnswer) {
      iter(trueAnswers + 1, dataToGame());
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  };
  const startCorrectUserAnswer = 0;
  return iter(startCorrectUserAnswer, dataToGame());
};

export default run;
