// react
import React, { useState, useEffect } from "react";
// material ui
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import CustomersDisplay from "./CustomersDisplay";
// types
import customer from "../../../types/customer";

const CustomersTable = () => {
  // customers state
  const [customers, setCustomers] = useState(() => []);

  // fetch customers
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

  // create rows of customers
  const rows = customers.map((customer): customer => {
    return customer;
  });

  console.log(customers, rows);
  return (
    <TableContainer style={{ width: '90%', margin: '20px auto' }} component={Paper}>
        <CustomersDisplay rows={rows} />
    </TableContainer>
  );
};

export default CustomersTable;
