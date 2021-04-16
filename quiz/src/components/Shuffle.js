export const Shuffle = (Questions) => {
  let newQuestions = [...Questions];
  let shuffleArray = [];
  while (newQuestions.length > 0) {
    var randomIndex = Math.floor(Math.random() * newQuestions.length);
    shuffleArray.push(newQuestions[randomIndex]);
    newQuestions.splice(randomIndex, 1);
  }
  return shuffleArray;
};
