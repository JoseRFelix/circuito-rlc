import React from "react";
import logo from "../../image/logo.png";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  navbar: {
    padding: "1.8rem",
    backgroundColor: "#F6F6F6",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navbarItems: {
    marginRight: "1rem"
  },
  navbarLinks: {
    textDecoration: "none",
    fontSize: "1.6rem",
    color: "black",
    "&:not(:last-child)": {
      marginRight: "3.5rem"
    },
    "&:hover": {
      color: theme.palette.primary.main
    },
    transition: "0.2s"
  },
  active: {
    "&::after": {
      content: "''",
      position: "absolute",
      width: "2.8rem",
      bottom: 0,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      right: "50%",
      transform: "translateX(50%)",
      marginBottom: "-0.8rem"
    },
    color: theme.palette.primary.main,
    position: "relative"
  }
});

function Navbar({ classes }) {
  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="logo" />
      <div className={classes.navbarItems}>
        <NavLink
          className={classes.navbarLinks}
          activeClassName={classes.active}
          to="/MDRLC"
        >
          Más de RLC
        </NavLink>
        <NavLink
          className={classes.navbarLinks}
          activeClassName={classes.active}
          to="/equipo"
        >
          Equipo
        </NavLink>
        <NavLink
          className={classes.navbarLinks}
          activeClassName={classes.active}
          to="/"
          exact
        >
          Calculadora
        </NavLink>
      </div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
