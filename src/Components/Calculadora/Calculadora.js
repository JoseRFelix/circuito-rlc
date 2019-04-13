import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import OptionsExpansionPanel from "../OptionsExpansionPanel/OptionsExpansionPanel";
import RLCCircuit from "../../image/RLCCircuit.png";
import RLCFormula from "../../image/RLCFormula.png";
import Paper from "@material-ui/core/Paper";
import "katex/dist/katex.min.css";
import "./Calculadora.css";
import { BlockMath } from "react-katex";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_API_URL;

const styles = theme => ({
  root: {
    fontSize: "1.4rem",
    padding: "1.6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
  },
  formulaPreview: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    padding: "2rem 4rem"
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: 300,
    fontSize: "4rem",
    color: theme.palette.secondary.main
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    color: "#fff",
    marginTop: "4rem"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "5rem",
    "& > *:not(:last-child)": {
      marginRight: "6rem"
    }
  },
  row1: {
    display: "flex",
    flexWrap: "wrap",
    "& > *:not(:last-child)": {
      marginRight: "6rem"
    },
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem"
  },
  column: {
    flexBasis: "50%"
  },
  input: {
    "&:not(:last-child)": {
      marginRight: "6rem"
    },
    marginBottom: "2rem"
  },
  image: {
    width: "25rem"
  },
  summary: {
    flex: "0 0 30%",
    fontSize: "1.4rem",
    lineHeight: "2.5rem",
    letterSpacing: "0.15rem",
    marginTop: "8rem",
    position: "relative",
    "& > img": {
      position: "absolute",
      transform: "translateX(-50%)",
      left: "50%"
    }
  }
});

function submit(formData) {
  console.log(formData);
  let data = {};
  if (formData.t0 && formData.t1 && formData.q0 && formData.i0) {
    data = {
      L: formData.inductancia,
      R: formData.resistencia,
      C: formData.capacitancia,
      t0: formData.t0,
      t1: formData.t1,
      q0: formData.q0,
      i0: formData.i0
    };
  } else {
    data = {
      L: formData.inductancia,
      R: formData.resistencia,
      C: formData.capacitancia
    };
  }
  axios
    .post(`${baseUrl}/calculateODE`, data)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

function Calculadora({ classes }) {
  const [formData, setFormData] = useState({
    resistencia: "",
    inductancia: "",
    capacitancia: "",
    voltaje: "",
    t0: "",
    t1: "",
    q0: "",
    i0: ""
  });

  return (
    <main className={classes.root}>
      <h1 className={classes.title}>Introduzca sus valores</h1>
      {(formData.resistencia ||
        formData.inductancia ||
        formData.capacitancia ||
        formData.voltaje) && (
        <Paper className={classes.formulaPreview}>
          <Typography variant="h6" component="h4">
            Prevista de la fórmula:
          </Typography>
          <BlockMath
            math={`${
              formData.inductancia ? formData.inductancia : "L"
            }\\frac{d^2q}{dt^2}+${
              formData.resistencia ? formData.resistencia : "R"
            }\\frac{dq}{dt}+\\frac{1}{${
              formData.capacitancia ? formData.capacitancia : "C"
            }}q = ${formData.voltaje ? formData.voltaje : "E(t)"}`}
          />
          <Typography variant="subtitle1" component="h4">
            Condiciones iniciales:
          </Typography>
          <BlockMath
            math={`q(${formData.t0 ? formData.t0 : "t"}) = ${
              formData.q0 ? formData.q0 : "q0"
            }, i(${formData.t1 ? formData.t1 : "t"}) = ${
              formData.i0 ? formData.i0 : "i0"
            }`}
          />
        </Paper>
      )}
      <ValidatorForm
        onSubmit={() => submit(formData, setFormData)}
        className={classes.form}
        onError={errors => console.log(errors)}
      >
        <div className={classes.row}>
          <TextValidator
            label="Resistencia (R)"
            onChange={event =>
              setFormData({ ...formData, resistencia: event.target.value })
            }
            name="resistencia"
            value={formData.resistencia}
            validators={["required", "isFloat"]}
            errorMessages={[
              "Este campo es obligatorio",
              "Introduzca un número o decimal"
            ]}
          />
          <TextValidator
            label="Inductancia (L)"
            onChange={event =>
              setFormData({ ...formData, inductancia: event.target.value })
            }
            name="inductancia"
            value={formData.inductancia}
            validators={["required", "isFloat"]}
            errorMessages={[
              "Este campo es obligatorio",
              "Introduzca un número o decimal"
            ]}
          />
        </div>
        <div className={classes.row}>
          <TextValidator
            label="Capacitancia (C)"
            onChange={event =>
              setFormData({ ...formData, capacitancia: event.target.value })
            }
            name="capacitancia"
            value={formData.capacitancia}
            validators={["required", "isFloat"]}
            errorMessages={[
              "Este campo es obligatorio",
              "Introduzca un número o decimal"
            ]}
          />
          <TextValidator
            label="Voltaje (E(t))"
            onChange={event =>
              setFormData({ ...formData, voltaje: event.target.value })
            }
            name="voltaje"
            value={formData.voltaje}
            validators={["required"]}
            errorMessages={[
              "Este campo es obligatorio",
              "Introduzca un número o decimal"
            ]}
          />
        </div>
        <OptionsExpansionPanel>
          <div>
            <div className={classes.column}>
              <TextValidator
                className={classes.input}
                label="tiempo 1 (t0)"
                onChange={event =>
                  setFormData({ ...formData, t0: event.target.value })
                }
                name="tiempo1"
                value={formData.t0}
                validators={["isFloat"]}
                errorMessages={["Introduzca un número o decimal"]}
              />
              <TextValidator
                className={classes.input}
                label="Carga (q0)"
                onChange={event =>
                  setFormData({ ...formData, q0: event.target.value })
                }
                name="carga"
                value={formData.q0}
                validators={["isFloat"]}
                errorMessages={["Introduzca un número o decimal"]}
              />
            </div>
            <div className={classes.column}>
              <TextValidator
                className={classes.input}
                label="tiempo 2 (t1)"
                onChange={event =>
                  setFormData({ ...formData, t1: event.target.value })
                }
                name="tiempo2"
                value={formData.t1}
                validators={["isFloat"]}
                errorMessages={["Introduzca un número o decimal"]}
              />
              <TextValidator
                className={classes.input}
                label="Corriente (i0)"
                onChange={event =>
                  setFormData({ ...formData, i0: event.target.value })
                }
                name="corriente"
                value={formData.i0}
                validators={["isFloat"]}
                errorMessages={["Introduzca un número o decimal"]}
              />
            </div>
          </div>
        </OptionsExpansionPanel>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Calcular
        </Button>
      </ValidatorForm>
      <div className={classes.row1}>
        <img
          src={RLCCircuit}
          className={classes.image}
          alt="Ejemplo de circuito RLC"
        />
        <p className={classes.summary}>
          En electrodinámica un circuito RLC es un circuito lineal que contiene
          una resistencia eléctrica, una bobina (inductancia) y un condensador
          (capacitancia).
          <br />
          <br />
          Un circuito RLC en serie se alimenta por una fuente de tensión
          sinusoidal de frecuencia variable vE(t)=VEcos(2πft). La corriente i(t)
          es la misma en todo el circuito. La Ecuación Diferencial general
          correspondiente al circuito es:
          <br />
          <img
            src={RLCFormula}
            className={classes.image}
            alt="Formula de circuito RLC"
          />
        </p>
      </div>
    </main>
  );
}

export default withStyles(styles)(Calculadora);
