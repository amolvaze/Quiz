import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(GameStateContext);

  const randomizeQues = (Questions) => {
    let newQuestions = [...Questions];
    let shuffleArray = [];
    while (newQuestions.length > 0) {
      var randomIndex = Math.floor(Math.random() * newQuestions.length);
      shuffleArray.push(newQuestions[randomIndex]);
      newQuestions.splice(randomIndex, 1);
    }
    return shuffleArray;
  };

  const shuffleArray = randomizeQues(Questions);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const prevQuestion = () => {
    if (currentQuestion !== 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (shuffleArray[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (shuffleArray[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{shuffleArray[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {shuffleArray[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {shuffleArray[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {shuffleArray[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {shuffleArray[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === shuffleArray.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
      {currentQuestion !== 1 && currentQuestion !== shuffleArray.length ? (
        <button onClick={prevQuestion} id="prevQuestion">
          Previous Question
        </button>
      ) : null}
    </div>
  );
};

export default Quiz;
