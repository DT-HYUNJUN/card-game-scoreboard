import { INameObj } from "../types";
import GameTable from "./GameTable";

interface Props {
  names: INameObj[];
  addName: (targetName: string) => void;
  deleteName: (targetName: string) => void;
}

const Home = (props: Props) => {
  return <GameTable names={props.names} addName={props.addName} deleteName={props.deleteName} />;
};

export default Home;
