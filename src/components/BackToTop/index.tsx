import React from "react";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

type Props = {
  window?: () => Window;
  children?: React.ReactElement;
};

function ScrollTop(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLDivElement).ownerDocument.querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function BackToTop(props: Props) {
  return (
    <React.Fragment>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          style={{ color: "white" }}
        >
          <KeyboardArrowUpIcon sx={{ color: "black" }} />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
