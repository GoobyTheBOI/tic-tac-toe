
import Game from "./components/Game/Game.component";

function TicTacToe() {

  const isXNext = true;

  return (
    <Game player={isXNext} />
  );
}

export default TicTacToe;
