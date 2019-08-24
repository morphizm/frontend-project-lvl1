export const generateRandomNumber = (start = 0, end = 100) => {
  const simpleRandom = Math.floor(Math.random() * end);
  if (simpleRandom < start) {
    return generateRandomNumber(start, end);
  }
  return simpleRandom;
};

export const func = () => {
  console.log('eslint');
};
