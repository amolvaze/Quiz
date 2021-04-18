import React from "react";
import "../App.css";
import { useContext, useState, useEffect } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import { Shuffle } from "./Shuffle";

const EndScreen = () => {
  const [displaymsg, setdisplayMsg] = useState(true);
  useEffect(() => {
    let msg = setTimeout(() => setdisplayMsg(false), 5000);
    return () => {
      clearTimeout(msg);
    };
  }, []);

  const {
    score,
    setScore,
    setGameState,
    userName,
    setRandomArray,
  } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setRandomArray(Shuffle(Questions));
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      {displaymsg === true && score === Questions.length ? (
        <h1 id="msg">Congrats! You Won.</h1>
      ) : null}
      {displaymsg === true && score !== Questions.length ? (
        <h1 id="msg"> Oops! Try Again. </h1>
      ) : null}
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
