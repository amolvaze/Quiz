import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

const Menu = () => {
  const { setGameState, setUserName } = useContext(GameStateContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Menu;
