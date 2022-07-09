import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  button: {
    color: "#FFFFFF",
    backgroundColor: "#00B0BB",
    borderRadius: "15px",
    width: 170,
    height: 55,
    marginTop: 50,
  },
}));

export default function StartButton() {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => (window.location = "/onboarding")}
    >
      <b>Get Started</b>
    </Button>
  );
}
