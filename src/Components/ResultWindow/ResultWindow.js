import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { BlockMath } from "react-katex";

const loadingStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > p": {
      marginTop: "2rem"
    }
  }
};

let Loading = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
    <Typography variant="subtitle1" component="p">
      Esto puede tomar un rato...
    </Typography>
  </div>
);

Loading = withStyles(loadingStyles)(Loading);

const resultStyles = {
  root: {
    "& h3": {
      fontWeight: "bold"
    }
  }
};

let Result = ({ result, classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h6">Solución:</Typography>
      {result.mensaje
        ? "*Nuestros sistemas no pudieron confirmar la respuesta*"
        : null}
      <Typography variant="subtitle1" component="h3">
        Carga con constantes:
      </Typography>
      <BlockMath>{result.carga_constantes}</BlockMath>
      <Typography variant="subtitle1" component="h3">
        Corriente con constantes:
      </Typography>
      <BlockMath>{result.corriente_constantes}</BlockMath>
      {!result.carga.includes("None") ? (
        <div>
          <Typography variant="subtitle1" component="h3">
            Carga:
          </Typography>
          <BlockMath>{result.carga}</BlockMath>
        </div>
      ) : null}
      {!result.corriente.includes("None") ? (
        <div>
          <Typography variant="subtitle1" component="h3">
            Corriente:
          </Typography>
          <BlockMath>{result.corriente}</BlockMath>
        </div>
      ) : null}
    </div>
  );
};

Result = withStyles(resultStyles)(Result);

const styles = theme => ({
  paper: {
    padding: "2rem",
    marginTop: "4rem"
  }
});

function ResultWindow({ classes, className, loading, result }) {
  return (
    <Paper className={classnames(classes.paper, className)}>
      {loading ? <Loading /> : <Result result={result} />}
    </Paper>
  );
}

export default withStyles(styles)(ResultWindow);
