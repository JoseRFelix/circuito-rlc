import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F07A27"
    },
    secondary: {
      main: "#07889B"
    }
  },
  typography: {
    htmlFontSize: 10
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <SnackbarProvider maxSnack={2}>
        <App />
      </SnackbarProvider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
