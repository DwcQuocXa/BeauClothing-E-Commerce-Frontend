import React, { useEffect, useState } from "react";

import {
  Toolbar,
  Typography,
  Avatar,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./style";
import { fetchCartRequest, logOut } from "../../../redux/actions";
import { useAppSelector } from "../../../hooks/useAppDispatchAndSelector";
import ProductForm from "../../ProductForm";
import { API, FormikType } from "../../../types";

export default function LogIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmitCreate = async (values: FormikType) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    values.price = Number(values.price);
    values.img.push(values.img1, values.img2);
    const { img1, img2, ...rest } = values;
    await API.post(`/admin/products`, rest, config);
    handleClose();
  };

  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("profile") || "null")
  );
  const cart = useAppSelector((state) => state.cart.cart);
  const totalQuantity = cart
    .map((product) => product.quantity)
    .reduce((a, b) => a + b, 0);

  const logout = () => {
    dispatch(logOut());
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: any = decode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile") || "null"));
    dispatch(fetchCartRequest(token, user?.result?._id));
  }, [location]);

  console.log("login", user);
  const color =
    location.pathname === "/" ? { color: "white" } : { color: "black" };

  return (
    <Toolbar>
      {user ? (
        <div className={classes.profile}>
          <Typography className={classes.userName} sx={color} variant="h6">
            Hi, {user?.result?.firstName} {user?.result?.lastName}
          </Typography>
          {user?.result?.isAdmin && (
            <div>
              <IconButton sx={color} onClick={handleOpen}>
                <AddIcon />
              </IconButton>
            </div>
          )}
          <ProductForm
            open={open}
            handleClose={handleClose}
            onSubmit={onSubmitCreate}
          />

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <IconButton>
              <Badge sx={color} badgeContent={totalQuantity}>
                <LocalMallOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
          <Button
            variant="outlined"
            color="inherit"
            sx={color}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        location.pathname !== "/auth" && (
          <Link to="/auth" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="inherit"
              sx={color}
              startIcon={<AccountBoxOutlinedIcon />}
            >
              Sign In
            </Button>
          </Link>
        )
      )}
    </Toolbar>
  );
}
