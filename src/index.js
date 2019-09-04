import readlineSync from 'readline-sync';

const numberOfResponseCount = 3;
const startNumberOfResponse = 0;

const run = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (counter) => {
    if (counter === numberOfResponseCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, answer] = generateGameData();
    const correctAnswer = answer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      iter(counter + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  };
  return iter(startNumberOfResponse);
};

export default run;
