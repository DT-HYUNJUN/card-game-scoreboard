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
    props.addName("addclick");
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
              {props.names.map((it) => (
                <TableCell key={it.id} align="center">
                  {it.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
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
