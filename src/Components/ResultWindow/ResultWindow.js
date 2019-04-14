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
    alignItems: "center"
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

const Result = ({ result }) => {
  return (
    <div>
      <Typography variant="h6">Solución:</Typography>
      <Typography variant="subtitle1">Carga con constantes:</Typography>
      <BlockMath>{result.carga_constantes}</BlockMath>
      <Typography variant="subtitle1">Corriente con constantes:</Typography>
      <BlockMath>{result.corriente_constantes}</BlockMath>
      <Typography variant="subtitle1">Carga:</Typography>
      <BlockMath>{result.carga}</BlockMath>
      <Typography variant="subtitle1">Corriente:</Typography>
      <BlockMath>{result.corriente}</BlockMath>
      <Typography variant="subtitle1">Forma alterna con Coseno:</Typography>
      <BlockMath>{result.solucion_alterna_cos}</BlockMath>
      <Typography variant="subtitle1">Forma alterna con Seno:</Typography>
      <BlockMath>{result.solucion_alterna_sen}</BlockMath>
    </div>
  );
};

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
