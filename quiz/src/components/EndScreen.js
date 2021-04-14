import React from "react";
import "../App.css";
import $ from "jquery";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const hideMessage = () => {
    setTimeout(() => $("#msg").hide(), 5000);
  };

  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      {score === Questions.length ? (
        <h1 id="msg">Congrats! You Won.</h1>
      ) : (
        <h1 id="msg"> Oops! Try Again. </h1>
      )}
      {hideMessage()}
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
