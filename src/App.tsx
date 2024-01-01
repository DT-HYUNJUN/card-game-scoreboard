import styled from "styled-components";
import Home from "./components/Home";
import { useState } from "react";
import { IName } from "./types";

const name = [
  {
    name: "park",
  },
  {
    name: "kim",
  },
  {
    name: "lee",
  },
];

function App() {
  const [names, setNames] = useState<IName[]>(name);
  return (
    <AppContainer>
      <Home names={names} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled("div")`
  text-align: center;
`;
