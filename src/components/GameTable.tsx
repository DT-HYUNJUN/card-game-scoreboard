import { Fab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { INameObj } from "../types";

interface Props {
  names: INameObj[];
  addName: (targetName: string) => void;
  deleteName: (targetName: string) => void;
}

function createData(id: number, name: string) {
  return { id, name };
}

const GameTable = (props: Props) => {
  const handleClickAdd = () => {
    props.addName("addNames");
  };
  const handleClickDelete = () => {};

  const rows = props.names.map((it) => createData(it.id, "a"));
  return (
    <Container>
      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">판</TableCell>
              {props.names.map((it) => (
                <TableCell key={it.id} align="center">
                  <NameInput type="text" value={it.name} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {row.id + 1}
                </TableCell>
                {props.names.map((it) => (
                  <TableCell align="center" component="th" scope="row">
                    <input type="number" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Button */}
      <ButtonWrapper>
        <Fab onClick={handleClickAdd} sx={{ borderRadius: 2, width: 40, height: 40 }} size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab onClick={handleClickDelete} sx={{ borderRadius: 2, width: 40, height: 40 }} size="small" color="error" aria-label="add">
          <RemoveIcon />
        </Fab>
      </ButtonWrapper>
    </Container>
  );
};

export default GameTable;

const Container = styled.div`
  display: flex;
  gap: 1px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const NameInput = styled.input`
  text-align: center;
  border: 0;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
