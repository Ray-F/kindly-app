import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Vector from "../resources/Landing/Vector.png";
import StartButton from "../components/StartButton";

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FFF3F3 !important",
    position: "relative",
    overflow: "hidden",
  },

  button: {
    backgroundColor: "red",
    width: "25%",
    fontSize: "90px",
  },

  vector: {
    float: "right",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
  },
}));

export default function IndexPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.bodyMain}>
        <img src={Vector} className={classes.vector} />
        <div className={classes.content}>
          <h1 style={{ fontSize: "96px" }}>Kindly. </h1>
          <p style={{ marginTop: "-70px", fontSize: "32px" }}>
            Fostering lively and socialable workplaces
          </p>
          <StartButton />
        </div>
      </div>
    </React.Fragment>
  );
}
