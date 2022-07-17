// react
import React, { useState, useEffect } from "react";
// material ui
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CustomersDisplay from "./CustomersDisplay";
// types
import customer from "../../../types/customer";
// components
import CustomerTabs from "./CustomersTabs";
import CustomersFilter from "./CustomersFilter";

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

  console.log(customers);
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          p: 2,
          my: 4,
          fontSize: "30px",
          fontWeight: "900",
          color: "#747dff",
        }}
      >
        <span style={{ color: '#333' }}>API de Clientes</span> Mercado Pago
      </Typography>
      <CustomerTabs />
      <CustomersFilter />
      <TableContainer
        style={{ width: "90%", margin: "20px auto" }}
        component={Paper}
      >
        <CustomersDisplay rows={rows} />
      </TableContainer>
    </>
  );
};

export default CustomersTable;
