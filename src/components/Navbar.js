import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";

export default function Navbar(props) {
  return (
    <AppBar position="static" color="primary"  className="navbar">
      <div className="container1">
        <Typography id="logo" variant="h5" gutterBottom>
          {props.title}
        </Typography>

        <Button id="abt" href="#about">
          {"About Me"}
        </Button>
      </div>
    </AppBar>
  );
}
