import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import { Shuffle } from "./components/Shuffle";
import { Questions } from "./helpers/Questions";
// ['menu', 'playing', 'finished']
const App = () => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [randomArray, setRandomArray] = useState(Shuffle(Questions));
  return (
    <div className="App">
      <h1>Online Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          randomArray,
          setRandomArray,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
};

export default App;
