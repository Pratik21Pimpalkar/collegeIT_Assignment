import React, { useContext } from "react";
import { UserContext } from "../context";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataTable() {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const navigateUser = (name) => {
    navigate(`/${name}`);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">State</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((data, key) => (
              <StyledTableRow
                key={key}
                style={{cursor:'pointer'}}
                onClick={() => navigateUser(data.name.first)}
              >
                <StyledTableCell component="th" scope="row">
                  {data.name.first} {data.name.last}
                </StyledTableCell>
                <StyledTableCell align="right">{data.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  {data.location.city}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data.location.state}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data.location.country}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
