import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import circuito1 from "../../image/circuito1.png";
import circuito3 from "../../image/circuito3.png";

const styles = (theme) => ({ 
  root: {
    padding: "4rem 10rem", 
    display: "flex",
    alignItems : "center",
    flexDirection: "column"
  },
  title: {
    fontFamily: "Playfair Display",
    color: theme.palette.secondary.main,
    padding: "1rem"
  }, 
  row: {
    display: "flex",
    justifyContent: "center",
    padding: "3rem 6rem",
    "& > *:not(:last-child)": {
      marginRight: "10rem"
    },
    "& > p" : {
      width: "50%"
    },
    "& > img" : {
      width: "30rem"
    }  
  }
});

function MDRLC({classes}) {
  return <div className={classes.root}>
    <Typography className={classes.title} variant="h4">Más de RLC</Typography>
    <Typography className={classes.title} variant="h5">Definición</Typography>
    <div className={classes.row}><Typography variant="subtitle1" component="p">Un circuito RLC es un buen ejemplo de circuito resonante. Este también se clasifica como circuito electrónico. Se distingue porque consiste de un resistor (R), un inductor (L),y un capacitor (C), este conjunto forma una oscilación armónica para la corriente, cuando añadimos los resistores el circuito aumenta las oscilaciones.
Los circuitos RLC pueden estar conectados tanto en serie como en paralelo, sin embargo, nosotros trabajaremos con ellos en serie. 

</Typography>
  <img src={circuito1} alt="circuito 1" />
</div>
 <Typography className={classes.title} variant="h5">Funcionamiento</Typography>
 <div className={classes.row}><Typography variant="subtitle1" component="p">En este tipo de circuitos el capacitor se carga inicialmente, el voltaje de este capacitor hace que fluya una corriente en el inductor para descargar el capacitor. una vez que se carga el capacitor, el inductor resiste cualquier cambio en el flujo de corriente, lo que hace que el capacitor se cargue nuevamente con polaridad opuesta. 
El voltaje en el capacitor eventualmente causa que el flujo de corriente se detenga y luego fluya en la dirección opuesta. el resultado es una oscilación, o bien, una resonancia.


</Typography>
  <img src={circuito3} alt="circuito 3" />
</div>
  </div>;
}

export default withStyles(styles)(MDRLC);
