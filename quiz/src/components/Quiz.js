import "../App.css";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [answers, setAnswers] = useState(new Map());

  const { setScore, setGameState, randomArray } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const prevQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (randomArray[currentQuestion].answer === optionChosen) {
      answers[currentQuestion] = 1;
    } else {
      answers[currentQuestion] = 0;
    }
    setAnswers(answers);
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("");
  };

  const finishQuiz = () => {
    if (randomArray[currentQuestion].answer === optionChosen) {
      answers[currentQuestion] = 1;
    } else {
      answers[currentQuestion] = 0;
    }
    setAnswers(answers);
    setScore(Object.values(answers).reduce((al, el) => al + el));
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{randomArray[currentQuestion].prompt}</h1>
      <div className="randomArray">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {randomArray[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {randomArray[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {randomArray[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {randomArray[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === randomArray.length - 1 ? (
        <button
          onClick={finishQuiz}
          id="nextQuestion"
          disabled={optionChosen === ""}
        >
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={nextQuestion}
          id="nextQuestion"
          disabled={optionChosen === ""}
        >
          Next Question
        </button>
      )}
      {currentQuestion !== 0 && currentQuestion !== randomArray.length ? (
        <button onClick={prevQuestion} id="prevQuestion">
          Previous Question
        </button>
      ) : null}
    </div>
  );
};

export default Quiz;
