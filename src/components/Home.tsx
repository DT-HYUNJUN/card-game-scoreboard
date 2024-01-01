import { IName } from "../types";
import Table from "./GameTable";

interface Props {
  names: IName[];
}

const Home = (props: Props) => {
  return <Table />;
};

export default Home;
