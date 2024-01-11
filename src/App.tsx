import styled from "styled-components";
import Home from "./components/Home";
import { useRef, useState } from "react";
import { IPlayer, IScore } from "./types";

const playerData = [
  { id: 0, name: "park" },
  { id: 1, name: "kim" },
  { id: 2, name: "lee" },
];

const numOfGames = 10;

const initialScores: IScore[] = playerData.map((player) => ({
  playerId: player.id,
  playerName: player.name,
  scores: Array(numOfGames).fill(0),
}));

function App() {
  const [players, setPlayers] = useState<IPlayer[]>(playerData);
  const [scores, setScores] = useState(initialScores);

  const idRef = useRef(3);

  const addName = (targetName: string) => {
    setPlayers((prevNames) => [...prevNames, { id: idRef.current, name: targetName, game: [] }]);
    idRef.current += 1;
  };

  const deleteName = (targetName: string) => {
    setPlayers(players.filter((it) => it.name !== targetName));
  };

  return (
    <AppContainer>
      <Home players={players} scores={scores} addName={addName} deleteName={deleteName} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled("div")`
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 650px) {
    width: 650px;
  }

  /* 650px 이하일 때 */
  @media screen and (max-width: 650px) {
    width: 90vw;
  }
`;
