import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { BlockMath } from "react-katex";
import Button from "@material-ui/core/Button";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_API_URL;

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

const fetchGraph = (graphId, setGraph) => {
  axios
    .post(
      `${baseUrl}/graph`,
      { graph: graphId },
      { responseType: "arraybuffer" }
    )
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      setGraph("data:;base64," + base64);
    });
};

const resultStyles = {
  root: {
    "& h3": {
      fontWeight: "bold"
    },
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: "1rem"
  },
  image: {
    alignSelf: "center",
    marginTop: "1rem",
    backgroundSize: "cover"
  }
};

let Result = ({ result, classes }) => {
  const [graph, setGraph] = useState("");

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
      {!result.grafico.includes("None") && !graph && (
        <Button
          onClick={() => fetchGraph(result.grafico, setGraph)}
          className={classes.button}
          variant="outlined"
          color="primary"
        >
          Mostrar gráfico
        </Button>
      )}
      {graph && (
        <Typography variant="subtitle1" component="h3">
          Gráfico:
        </Typography>
      )}
      {graph && <img className={classes.image} src={graph} alt="Gráfico" />}
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
