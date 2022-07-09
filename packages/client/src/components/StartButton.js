import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  button: {
    color: "#FFFFFF",
    backgroundColor: "#00B0BB",
    bottom: 80,
    width: 150,
    marginTop: 100,
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
