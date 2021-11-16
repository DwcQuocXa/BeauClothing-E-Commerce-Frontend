import React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { Product } from "../../../../../types";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type ProductProp = {
  product: Product;
};

const ExpandBtn = ({ product }: ProductProp) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="nav">
          {product?.sizes.map((size) => {
            return (
              <ListItem button key={size}>
                <ListItemText primary={size} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </div>
  );
};

export default ExpandBtn;
