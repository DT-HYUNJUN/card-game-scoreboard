import { IData } from "../types";
import GameTable from "./GameTable";

interface Props {
  data: IData[];
  addName: (targetName: string) => void;
  deleteName: (targetName: string) => void;
}

const Home = (props: Props) => {
  return <GameTable data={props.data} addName={props.addName} deleteName={props.deleteName} />;
};

export default Home;
