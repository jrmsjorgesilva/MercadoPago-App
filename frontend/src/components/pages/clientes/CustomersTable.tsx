import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const CustomersTable = () => {
  const [customers, setCustomers] = useState(() => []);

  // inicio da aplicação
  useEffect(() => {
    const fetchCustomersTable = async () => {
      const URL = `http://localhost:8000/users`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log("capiroto", data);
      setCustomers((oldData) => data);
    };
    fetchCustomersTable();
  }, []);

  type customer = {
    first_name: string;
    last_name: string;
    address: {
      id: number;
      street_name: string;
      street_number: number;
      zip_code: number;
    };
    zip_code: number;
    _id: number;
  };

  const rows = customers.map((customer): customer => {
    return customer;
  });

  console.log(customers, rows);
  return (
    <TableContainer component={Paper}>
      {/* <h1>
        {customers && customers.map((customer): any | null => customer.first_name)}
      </h1> */}
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
          {rows.map((row) => (
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
    </TableContainer>
  );
};

export default CustomersTable;
