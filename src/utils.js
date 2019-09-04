const generateRandomNumber = (start = 0, end = 100) => {
  const simpleRandom = Math.floor(Math.random() * (end + 1));
  return simpleRandom < start ? start : simpleRandom;
};

export default generateRandomNumber;
