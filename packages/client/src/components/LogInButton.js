import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  button: {
    color: "#00B0BB",
    backgroundColor: "transparent",
    border: "4px solid #00B0BB",
    borderRadius: "15px",
    position: "absolute",
    top: -60,
    right: 100,
    width: 125,
    height: 50,
    marginTop: 100,
  },
}));

export default function LogInButton() {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => (window.location = "/DashboardPage")}
    >
      <b>Log In</b>
    </Button>
  );
}
