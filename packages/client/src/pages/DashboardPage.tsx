import React from 'react';
import { makeStyles } from '@mui/styles';
import Topbar from '../components/Topbar';
import GestureCard from '../components/GestureCard';
import { CardActions } from '@mui/material';

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#F6FFFE !important",
    position: "relative",
    overflow: "hidden",
  },

  cards: {
    position: 'relative',
    marginLeft: 70,
  }

}));

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <div className={classes.bodyMain}>
    <React.Fragment>
      <Topbar></Topbar>
      <div className={classes.cards}>
      <h1 style={{ fontSize: "45px" }}>Daily Gestures</h1>
      <div className={classes.faces}>
      <h1 style={{ fontSize: "45px" }}>Leaderboard</h1>
    </div>
      </div>
      <GestureCard></GestureCard>
      <GestureCard></GestureCard>
      <GestureCard></GestureCard>
    </React.Fragment>
    </div>
  )
}
