import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    fontSize: "1.4rem",
    padding: "1.6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: 300,
    fontSize: "4rem",
    color: theme.palette.secondary.main
  }
});

function Calculadora({ classes }) {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Introduzca sus valores</h1>
    </div>
  );
}

export default withStyles(styles)(Calculadora);
