import Grid from "./components/grid/Grid.component";

function TicTacToe() {

  const isXNext = true;

  return (
    <Grid player={isXNext} />
  );
}

export default TicTacToe;
