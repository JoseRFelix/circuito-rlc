import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import OptionsExpansionPanel from "../OptionsExpansionPanel/OptionsExpansionPanel";

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
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  button: {
    color: "#fff",
    marginTop: "1rem"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "5rem",
    "& > *:not(:last-child)": {
      marginRight: "6rem"
    }
  }
});

function submit() {}

function Calculadora({ classes }) {
  const [formData, setFormData] = useState({
    resistencia: "",
    inductancia: "",
    capacitancia: "",
    voltaje: ""
  });

  return (
    <main className={classes.root}>
      <h1 className={classes.title}>Introduzca sus valores</h1>
      <ValidatorForm
        onSubmit={submit}
        className={classes.form}
        onError={errors => console.log(errors)}
      >
        <div className={classes.row}>
          <TextValidator
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
            label="Voltaje (E(t))"
            onChange={event =>
              setFormData({ ...formData, voltaje: event.target.value })
            }
            name="voltaje"
            value={formData.voltaje}
            validators={["required", "isFloat"]}
            errorMessages={[
              "Este campo es obligatorio",
              "Introduzca un número o decimal"
            ]}
          />
        </div>
        <OptionsExpansionPanel />
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
    </main>
  );
}

export default withStyles(styles)(Calculadora);
