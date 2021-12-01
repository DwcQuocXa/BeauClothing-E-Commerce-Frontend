import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { API, CartProduct, User } from "../../types";

import useStyles from "./style";

const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const user = JSON.parse(localStorage.getItem("profile") || "null");
  const token = user?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const fetchUser = async () => {
    if (token !== "") {
      const res = await API.get(`/users`, config);
      setUsers(res.data);
      console.log(res.data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  const handleBanAndUnBan = async (userId: any) => {
    await API.put(`/admin/users/ban`, { userId }, config);
    fetchUser();
  };

  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "firstName", headerName: "First Name", width: 120 },
    { field: "lastName", headerName: "Last Name", width: 120 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "cart", headerName: "Product in Cart", width: 150 },
    { field: "ban", headerName: "Ban Status", width: 150 },
    {
      field: "",
      flex: 0.2,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="inherit"
          sx={{ color: "black" }}
          onClick={() => handleBanAndUnBan(params.row.id)}
        >
          {params.row.isBanned ? "Uban" : "Ban"}
        </Button>
      ),
    },
  ];
  const rows = users.map((user: User) => ({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    cart: user.cart
      .map((product) => product.quantity)
      .reduce((a, b) => a + b, 0),
    isBanned: user.isBanned,
    ban: user.isBanned ? "Banned" : "Normal",
  }));

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Users List
      </Typography>
      <div className={classes.listTable}>
        <DataGrid columns={columns} rows={rows} scrollbarSize={0} />
      </div>
    </div>
  );
};

export default UserList;
