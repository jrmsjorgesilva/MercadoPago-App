// material ui
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
// types
import { StyledTableCell, StyledTableRow } from "../../utils/StyledTables";
import CustomAlert from "../404/CustomAlert";


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
        {rows.length > 0 ? rows.map((row: any) => (
          <StyledTableRow key={row.first_name}>
            <StyledTableCell component="th" scope="row">
              {row.first_name}
              &nbsp;
              {row.last_name}
            </StyledTableCell>
            <StyledTableCell align="right">{row._id}</StyledTableCell>
            <StyledTableCell align="right">
              {row.address?.street_name}
            </StyledTableCell>
            <StyledTableCell align="right">
              {row.address?.street_number}
            </StyledTableCell>
            <StyledTableCell align="right">
              {row.address?.zip_code}
            </StyledTableCell>
          </StyledTableRow>
        )) : <CustomAlert message={'Não há clientes'} severity={'warning'} />}
      </TableBody>
    </Table>
  );
};

export default CustomersDisplay;
