import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

import useStyles from "./style";
import { useAppDispatch } from "../../hooks/useAppDispatchAndSelector";
import { SetCategory } from "../../redux/actions";

const drawerWidth = 240;

export default function SideDrawer() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleCategory = (category: string) => {
    dispatch(SetCategory(category));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", paddingTop: 4 }}>
        <List>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: 1.75 }}
          >
            New Arrivals
          </Typography>
          {["View All", "Clothes", "Underwear"].map((text) => (
            <ListItem button key={text}>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
        <br />
        <List>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: 1.75 }}
          >
            Trending Now
          </Typography>
          {["Gift Guide", "The Christmas Shop", "Winter must haves"].map(
            (text) => (
              <ListItem button key={text}>
                <Typography variant="h6" sx={{ fontSize: 16 }}>
                  {text}
                </Typography>
              </ListItem>
            )
          )}
        </List>
        <br />
        <List>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: 1.75 }}
          >
            Shop by Product
          </Typography>
          {["View All", "Jackets", "T-Shirts", "Pants", "Shoes"].map((text) => (
            <ListItem button key={text} onClick={() => handleCategory(text)}>
              <Typography
                variant="h6"
                sx={{ textDecoration: "underline", fontSize: 16 }}
              >
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
