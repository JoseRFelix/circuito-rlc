import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import OptionsExpansionPanel from "../OptionsExpansionPanel/OptionsExpansionPanel";
import RLCCircuit from "../../image/RLCCircuit.png";

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
    marginTop: "8rem"
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
                className={classes.input}        
                label="Carga (q0)"
                onChange={event =>
                  setFormData({ ...formData, resistencia: event.target.value })
                }
                name="resistencia"
                //value={formData.resistencia}
                validators={["required", "isFloat"]}
                errorMessages={[
                  "Este campo es obligatorio",
                  "Introduzca un número o decimal"
                ]}
              />
            </div>     
            <div className={classes.column}> 
              <TextValidator      
                className={classes.input}      
                label="tiempo 2 (t1)"
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
                className={classes.input}         
                label="Corriente (i0)"
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
        <img src={RLCCircuit} className={classes.image} alt="Ejemplo de circuito RLC"/>
        <p className={classes.summary}>En electrodinámica un circuito RLC 
        es un circuito lineal que contiene una resistencia eléctrica, 
        una bobina (inductancia) 
        y un condensador (capacitancia).<br/><br/>Un circuito RLC en serie se
         alimenta por una fuente de tensión sinusoidal de frecuencia variable 
         vE(t)=VEcos(2πft). La corriente i(t) es la misma en todo el circuito.
          La Ecuación Diferencial general correspondiente al circuito es:</p>
      </div>
     
    </main>
  );
}

export default withStyles(styles)(Calculadora);
