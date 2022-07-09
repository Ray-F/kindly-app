import React from "react";
import { makeStyles } from "@mui/styles";
import user from "../resources/profile_icon.png";
import kindly from "../resources/kindlylogo.png";
import home from "../resources/home_icon.png";

const useStyles = makeStyles(() => ({
  bodyText: {
    color: "#00B0BB",
    textAlign: "center",
  },

  home: {
    position: "absolute",
    height: 34,
    marginTop: 20,
    left: 50,
  },

  user: {
    position: "absolute",
    height: 38,
    marginTop: 20,
    right: 50,
  },

  kindly: {
    height: 40,
    width: "auto",
    opacity: "55%",
    marginTop: 15,
    marginRight: 8,
  },

  containter: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100vw",
    height: "100wh",
    justifyContent: "center'",
  },

  containerPT: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100vw",
    height: "100wh",
    justifyContent: "center",
  },

  topbar: {
    position: "absolute",
    zIndex: 10,
    borderBottom: "3px solid #F8F2F2",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  return (
    <nav className={classes.topbar}>
      <div className={classes.containter}>
        <div>
          <a href={"/dashboard"}>
            <img alt="dashboard-menu" src={home} className={classes.home} />
          </a>
        </div>
        <div className={classes.containerPT}>
          <div>
            <img alt="kindly-logo" src={kindly} className={classes.kindly} />
          </div>
          <div className={classes.bodyText}>
            <h1 style={{ fontSize: "30px" }}>Kindly.</h1>
          </div>
        </div>
        <div>
          <a href={"/profile"}>
            <img alt="profile-menu" src={user} className={classes.user} />
          </a>
        </div>
      </div>
    </nav>
  );
}
