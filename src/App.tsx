import styled from "styled-components";
import Home from "./components/Home";
import { useRef, useState } from "react";
import { IData } from "./types";

const gameData = [
  { id: 0, name: "park", game: [] },
  { id: 1, name: "kim", game: [] },
  { id: 2, name: "lee", game: [] },
];

function App() {
  const [data, setData] = useState<IData[]>(gameData);

  const idRef = useRef(3);

  const addName = (targetName: string) => {
    setData((prevNames) => [...prevNames, { id: idRef.current, name: targetName, game: [] }]);
    idRef.current += 1;
  };

  const deleteName = (targetName: string) => {
    setData(data.filter((it) => it.name !== targetName));
  };

  return (
    <AppContainer>
      <Home data={data} addName={addName} deleteName={deleteName} />
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
