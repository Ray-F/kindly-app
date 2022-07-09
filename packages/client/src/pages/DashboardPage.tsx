import React from 'react';
import { makeStyles } from '@mui/styles';
import Topbar from '../components/Topbar';

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#F6FFFE !important",
    position: "relative",
    overflow: "hidden",
  },

}));

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <div className={classes.bodyMain}>
    <React.Fragment>
      <Topbar></Topbar>
      <div>
      <h1 style={{ fontSize: "45px" }}>Daily Gestures</h1>
      </div>
    </React.Fragment>
    </div>
  )
}
