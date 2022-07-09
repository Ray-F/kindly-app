import React from "react";
import { makeStyles } from "@mui/styles";
import vector from "../resources/landing/vector.png";
import sitting from "../resources/landing/sitting.png";
import standing from "../resources/landing/standing.png";
import StartButton from "../components/StartButton";
import LogInButton from "../components/LogInButton";
import logo from "../resources/kindlylogo.png";

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#F6FFFE !important",
    position: "relative",
    overflow: "hidden",
  },

  vector: {
    float: "right",
  },

  sitting: {
    position: "absolute",
    marginLeft: 1050,
    marginTop: 250,
  },

  standing: {
    position: "absolute",
    marginLeft: 750,
    marginTop: 150,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",

    paddingLeft: 50,
  },

  logo: {
    height: 120,
    width: 120,
    marginRight: 30,
  },

  container: {
    display: "flex",
    flexFlow: "row nowrap",
  },
}));

export default function IndexPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.bodyMain}>
        <LogInButton />
        <img src={vector} className={classes.vector} />
        <img src={standing} className={classes.standing} />
        <img src={sitting} className={classes.sitting} />
        <div className={classes.content}>
          <div className={classes.container}>
            <div>
              <img src={logo} className={classes.logo} />
            </div>
            <div>
              <h1 style={{ fontSize: "100px", margin: "0" }}>Kindly. </h1>
            </div>
          </div>
          <p style={{ marginBottom: "0", fontSize: "23px", color: "#437B83" }}>
            Fostering lively and socialable workplace environments
          </p>
          <p style={{ fontSize: "15px", color: "#437B83", width: 640 }}>
            Kindly is the best platform to encourage office motivation through
            breaking the mould of the 9-to-5 routine and spicing up life.
          </p>
          <StartButton />
        </div>
      </div>
    </React.Fragment>
  );
}
