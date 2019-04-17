import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import circuito1 from "../../image/circuito1.png";
import circuito2 from "../../image/circuito2.png";
import circuito3 from "../../image/circuito3.png";
import circuito4 from "../../image/circuito4.jpg";
import Divider from "@material-ui/core/Divider";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const headerStyles = () => ({
  root: {
    width: "100%",
    backgroundColor: "rgba(204, 214, 231, 0.33)",
    boxShadow: "inset 0px 4px 10px rgba(0, 0, 0, 0.05)",
    position: "relative"
  },
  subtitle: {
    fontFamily: "Playfair Display",
    marginBottom: "2rem",
    fontSize: "4rem",
    width: "35rem"
  },
  info: {
    width: "50rem",
    border: "0.2rem solid #fff",
    padding: "4rem",
    position: "relative",
    "& > p": {
      opacity: "0.7"
    },
    "&::before": {
      content: "''",
      backgroundColor: "rgba(7, 136, 155, 0.09);",
      width: "40rem",
      position: "absolute",
      height: "33rem",
      top: "-3.2rem",
      right: "-9rem"
    }
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 6rem",
    "& > *:not(:last-child)": {
      marginRight: "10rem"
    },
    "& > img": {
      width: "35rem"
    }
  }
});

let Header = ({ classes }) => (
  <section className={classes.root}>
    <div className={classes.row}>
      <img src={circuito2} alt="circuito 2" />
      <div className={classes.info}>
        <Typography className={classes.subtitle} variant="h5">
          Más sobre circuitos en serie RLC
        </Typography>
        <Typography variant="subtitle1" component="p">
          En electrodinámica un circuito RLC es un circuito lineal que contiene
          una resistencia eléctrica, una bobina (inductancia) y un condensador
          (capacitancia).
        </Typography>
      </div>
    </div>
  </section>
);

Header = withStyles(headerStyles)(Header);

const navigationStyles = theme => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 9999,
    padding: "4rem 10rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default
  },
  links: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
    display: "flex",
    "& > *:not(:last-child)": {
      marginRight: "1rem"
    }
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover > p": {
      color: theme.palette.primary.main,
      transition: "0.2s"
    }
  },
  divider: {
    width: "42rem",
    backgroundColor: theme.palette.primary.main
  },
  textDivider: {
    borderLeft: "0.2rem solid rgba(0,0,0,0.2)",
    height: "1rem"
  }
});

let Navigation = ({ classes }) => (
  <section className={classes.root}>
    <div className={classes.links}>
      <a className={classes.link} href="#definicion">
        <Typography variant="subtitle1" component="p">
          Definición
        </Typography>
      </a>
      <div className={classes.textDivider}>&nbsp;</div>
      <a className={classes.link} href="#funcionamiento">
        <Typography variant="subtitle1" component="p">
          Funcionamiento
        </Typography>
      </a>
      <div className={classes.textDivider}>&nbsp;</div>
      <a className={classes.link} href="#demostracion">
        <Typography variant="subtitle1" component="p">
          Demostración
        </Typography>
      </a>
      <div className={classes.textDivider}>&nbsp;</div>
      <a className={classes.link} href="#aplicacion">
        <Typography variant="subtitle1" component="p">
          Aplicaciones
        </Typography>
      </a>
      <div className={classes.textDivider}>&nbsp;</div>
      <a className={classes.link} href="#referencias">
        <Typography variant="subtitle1" component="p">
          Referencias
        </Typography>
      </a>
    </div>

    <Divider variant="middle" className={classes.divider} />
  </section>
);

Navigation = withStyles(navigationStyles)(Navigation);

const styles = theme => ({
  root: {
    padding: "2rem 30rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    fontFamily: "Playfair Display",
    color: theme.palette.secondary.main,
    padding: "1rem",
    fontSize: "4rem"
  },
  subtitle: {
    fontFamily: "Playfair Display",
    color: theme.palette.secondary.main,
    textAlign: "center",
    marginBottom: "5rem",
    fontSize: "3rem",
    letterSpacing: "0.10rem"
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 6rem",
    marginBottom: "8rem",
    "& > *:not(:last-child)": {
      marginRight: "10rem"
    },
    "& > p": {
      width: "50%",
      lineHeight: "2.5rem",
      letterSpacing: "0.15rem"
    },
    "& > img": {
      width: "40rem",
      height: "100%"
    }
  },
  row1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 6rem",
    "& > *:not(:last-child)": {
      marginRight: "12rem"
    },
    "& > *": {
      width: "25rem"
    }
  },
  divider: {
    width: "42rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "8rem"
  },
  list: {
    listStyleType: "circle",
    "& > li:not(:last-child)": {
      marginBottom: "2rem"
    },
    "& > li": {
      fontSize: "1.4rem",
      letterSpacing: "0.10rem"
    }
  }
});

function MDRLC({ classes }) {
  return (
    <main>
      <Header />
      <Navigation />
      <section className={classes.root}>
        <div className={classes.row}>
          <div>
            <Typography
              id="definicion"
              className={classes.subtitle}
              variant="h5"
            >
              Definición
            </Typography>
            <Typography variant="subtitle1" component="p">
              Un circuito RLC es un buen ejemplo de circuito resonante. Este
              también se clasifica como circuito electrónico. Se distingue
              porque consiste de un resistor (R), un inductor (L),y un capacitor
              (C), este conjunto forma una oscilación armónica para la
              corriente, cuando añadimos los resistores el circuito aumenta las
              oscilaciones. Los circuitos RLC pueden estar conectados tanto en
              serie como en paralelo, sin embargo, nosotros trabajaremos con
              ellos en serie.
            </Typography>
          </div>
          <img src={circuito1} alt="circuito 1" />
        </div>
        <Divider variant="middle" className={classes.divider} />
        <div className={classes.row}>
          <img src={circuito3} alt="circuito 3" />
          <div>
            <Typography
              id="funcionamiento"
              className={classes.subtitle}
              variant="h5"
            >
              Funcionamiento
            </Typography>
            <Typography variant="subtitle1" component="p">
              En este tipo de circuitos el capacitor se carga inicialmente, el
              voltaje de este capacitor hace que fluya una corriente en el
              inductor para descargar el capacitor. una vez que se carga el
              capacitor, el inductor resiste cualquier cambio en el flujo de
              corriente, lo que hace que el capacitor se cargue nuevamente con
              polaridad opuesta.
              <br /> <br />
              El voltaje en el capacitor eventualmente causa que el flujo de
              corriente se detenga y luego fluya en la dirección opuesta. el
              resultado es una oscilación, o bien, una resonancia.
            </Typography>
          </div>
        </div>
        <Divider variant="middle" className={classes.divider} />
        <div className={classes.row}>
          <div>
            <Typography
              id="demostracion"
              className={classes.subtitle}
              variant="h5"
            >
              Demostración
            </Typography>
            <div className={classes.row1}>
              <Typography variant="subtitle1" component="p">
                Para la Resistencia (R)
              </Typography>
              <BlockMath math={`V=I*R`} />
            </div>
            <div className={classes.row1}>
              <Typography variant="subtitle1" component="p">
                Para la Capacitancia (C)
              </Typography>
              <BlockMath math={`V = \\frac{Q}{C}`} />
            </div>
            <div className={classes.row1}>
              <Typography variant="subtitle1" component="p">
                Para el inductor o bobina (L)
              </Typography>
              <BlockMath math={`V = L * \\frac{dI}{dt}`} />
            </div>
            <div className={classes.row1}>
              <Typography variant="subtitle1" component="p">
                Teniendo que por ley de Kirchoff
              </Typography>
              <BlockMath
                math={`\\sum_{k=1}^{n}V_{k}=V_{1}+V_{2}+V_{3} + ... + V_{n} = 0`}
              />
            </div>
            <div className={classes.row1}>
              <Typography variant="subtitle1" component="p">
                Por lo que
              </Typography>
              <BlockMath math={`V-L\\frac{dI}{dt}- R*I-\\frac{Q}{C}=0`} />
            </div>
            <div className={classes.row1}>
              <Typography variant="subtitle1" component="p">
                Tomando en cuenta que <InlineMath math={`I = \\frac{dQ}{dt}`} />
              </Typography>
              <BlockMath
                math={`L \\frac{d^2Q}{dt^2}+R\\frac{dQ}{dt}+\\frac{Q}{C}= V`}
              />
            </div>
          </div>
        </div>
        <Divider variant="middle" className={classes.divider} />
        <div className={classes.row}>
          <div>
            <Typography
              id="aplicacion"
              className={classes.subtitle}
              variant="h5"
            >
              Aplicaciones
            </Typography>
            <Typography variant="subtitle1" component="p">
              El circuito en serie LCR también se conoce como circuito
              sintonizado o aceptador. Tienen muchas aplicaciones,
              particularmente para circuitos oscilantes. El circuito en serie
              LCR tiene aplicaciones en radio e ingeniería de comunicación. Se
              pueden usar para seleccionar un cierto rango estrecho de
              frecuencias del espectro total de las ondas de radio ambientales.
              Por ejemplo, la radio AM / FM con sintonizadores analógicos usa un
              circuito RLC para sintonizar una frecuencia de radio.
            </Typography>
          </div>
          <img src={circuito4} alt="circuito 4" />
        </div>
        <Divider variant="middle" className={classes.divider} />
        <div className={classes.row}>
          <div>
            <Typography
              id="referencias"
              className={classes.subtitle}
              variant="h5"
            >
              Referencias
            </Typography>
            <ul className={classes.list}>
              <li>
                Agarwal, Anant; Lang, Jeffrey H. (2005). Foundations of Analog
                and Digital Electronic Circuits. Morgan Kaufmann.
              </li>
              <li>
                Falstad, (2016). RLC Circuit. Recuperado de:
                <a
                  href="http://www.falstad.com/circuit/e-lrc.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.falstad.com/circuit/e-lrc.html
                </a>
              </li>
              <li>
                Amarita, (2016).Series LCR circuits. recuperado de:
                <a
                  href="https://vlab.amrita.edu/?sub=1&brch=75&sim=330&cnt=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  https://vlab.amrita.edu/?sub=1&brch=75&sim=330&cnt=1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withStyles(styles)(MDRLC);
