// material ui
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
// types
// import customer from "../../../types/customer";

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

const CustomersDisplay = ({ rows }: any) => {
  return (
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Customer</StyledTableCell>
          <StyledTableCell align="right">Id</StyledTableCell>
          <StyledTableCell align="right">Address</StyledTableCell>
          <StyledTableCell align="right">Number</StyledTableCell>
          <StyledTableCell align="right">Zip Code</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: any) => (
          <StyledTableRow key={row.first_name}>
            <StyledTableCell component="th" scope="row">
              {row.first_name}
              &nbsp;
              {row.last_name}
            </StyledTableCell>
            <StyledTableCell align="right">{row._id}</StyledTableCell>
            <StyledTableCell align="right">
              {row.address.street_name}
            </StyledTableCell>
            <StyledTableCell align="right">
              {row.address.street_number}
            </StyledTableCell>
            <StyledTableCell align="right">
              {row.address.zip_code}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomersDisplay;
