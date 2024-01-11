import { IPlayer, IScore } from "../types";
import GameTable from "./GameTable";

interface Props {
  players: IPlayer[];
  scores: IScore[];
  addName: (targetName: string) => void;
  deleteName: (targetName: string) => void;
}

const Home = (props: Props) => {
  return <GameTable players={props.players} scores={props.scores} addName={props.addName} deleteName={props.deleteName} />;
};

export default Home;
