import styled from "styled-components";
import Home from "./components/Home";
import { useRef, useState } from "react";
import { INameObj } from "./types";

const namesData = [
  { id: 0, name: "park" },
  { id: 1, name: "kim" },
  { id: 2, name: "lee" },
];

function App() {
  const [names, setNames] = useState<INameObj[]>(namesData);

  const idRef = useRef(3);

  const addName = (targetName: string) => {
    setNames((prevNames) => [...prevNames, { id: idRef.current, name: targetName }]);
    idRef.current += 1;
    console.log(names);
  };

  const deleteName = (targetName: string) => {
    setNames(names.filter((it) => it.name !== targetName));
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
