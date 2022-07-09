import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import vector from "../resources/landing/vector.png";
import StartButton from "../components/StartButton";

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#F6FFFE !important",
    position: "relative",
    overflow: "hidden",
    marginLeft: 60,
  },

  vector: {
    float: "right",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
}));

export default function IndexPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.bodyMain}>
        <img src={vector} className={classes.vector} />
        <div className={classes.content}>
          <h1 style={{ fontSize: "90px" }}>Kindly. </h1>
          <p style={{ marginTop: "-60px", fontSize: "20px", color: "#437B83" }}>
            Fostering lively and socialable workplace environments
          </p>
          <StartButton />
        </div>
      </div>
    </React.Fragment>
  );
}
