import styled from "styled-components";
import Home from "./components/Home";
import { useState } from "react";

const namesData = ["park", "kim", "lee"];

function App() {
  const [names, setNames] = useState<string[]>(namesData);

  const addName = (targetName: string) => {
    setNames([...namesData, targetName]);
  };

  const deleteName = (targetName: string) => {
    setNames(names.filter((name) => name !== targetName));
  };

  return (
    <AppContainer>
      <Home names={names} addName={addName} deleteName={deleteName} />
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
