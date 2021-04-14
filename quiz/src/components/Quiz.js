import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useEffect } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(GameStateContext);

  // const randomizeQues = (Questions) => {
  //   let newQuestions = [...Questions];
  //   let shuffleArray = [];
  //   while (newQuestions.length > 0) {
  //     var randomIndex = Math.floor(Math.random() * newQuestions.length);
  //     shuffleArray.push(newQuestions[randomIndex]);
  //     newQuestions.splice(randomIndex, 1);
  //   }
  //   console.log("Shuffle array", shuffleArray);
  //   // return shuffleArray;
  // };

  // useEffect(() => {
  //   randomizeQues(Questions);
  // }, []);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const prevQuestion = () => {
    if (currentQuestion !== 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    // if (optionChosen.trim() === "") {
    //   alert("Please select one of the options! ");
    //   return;
    // }
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    // if (optionChosen.trim() === "") {
    //   alert("Please select one of the options! ");
    //   return;
    // }
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
      {currentQuestion !== 0 && currentQuestion !== Questions.length ? (
        <button onClick={prevQuestion} id="prevQuestion">
          Previous Question
        </button>
      ) : null}
    </div>
  );
};

export default Quiz;
