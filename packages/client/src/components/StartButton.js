import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((themes) => ({
  button: {
    position: "absolute",
    color: "#FFFFFF",
    backgroundColor: "#00B0BB",
    bottom: 60,
    width: 140,
  },
}));

export default function StartButton() {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => (window.location = "/DashboardPage")}
    >
      <b>Get Started</b>
    </Button>
  );
}
